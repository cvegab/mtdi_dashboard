import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import "../../assets/css/Charts.css";
import "react-datepicker/dist/react-datepicker.css";
import InformationCardsMobile from "components/InformationCardsMobile/InformationCardsMobile";
const moment = require("moment");
import iconFilterButton from "../../assets/img/icons/Reports/iconFilters.png";
import iconShareReport from "../../assets/img/iconEnviarReporte.png";
import iconNextReport from "../../assets/img/iconArrowNext.png";
import SendReport from "components/modalComponents/send-report";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
  Input,
  Spinner,
  Badge,
} from "reactstrap";

import SplashScreen from "components/UI/splash-screen";
import SalesCard from "components/salesCard/Sales-card";
import StackedGraphSalesCard from "components/stackedGraphSalesCard/Stacked-graph-sales-card";
import StackedGraphOrderCard from "components/stackedGraphOrderCard/stacked-graph-order-card";
import MixedAndPieChart from "components/MixedAndPieChart/mixed-and-pie-chart";
import PieChart from "components/PieChart/pie-chart";
import StackedOrderGraph from "components/StackedOrderGraph/Stacked-order-graph";
import StackedSalesGraph from "components/stackedSalesGraph/stacked-sales-graph";
import ReportCards from "components/reportCard/report-cards";
import DownloadReports from "components/downloadReport/download-reports";
import ViewCardReports from "components/viewCardReport/view-card-reports";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
registerLocale("es", es);

const data11 = [1, 8, 5, 9, 20, 10, 15];
const data2 = [209, 3, 10, 5, 5, 9, 10, 10];

function MtdiReports() {
  const printReport = React.useRef();
  let MIXED_DATA = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Data1",
        yAxisID: "A",
        data: data11,
        backgroundColor: "rgba(87, 121, 234, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
        order: 1,
      },

      {
        label: "Total",
        yAxisID: "A",
        data: data2,
        backgroundColor: "rgba(234, 87, 102, 0.6)",
        borderColor: "rgba(234, 87, 102, 0.6)",
        fill: false,
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5,
        type: "line",
        order: 0,
      },
    ],
  };
  const [newData, setnewData] = useState([]);
  const [newStackedData, setnewStackedData] = useState([]);
  const [showModal, setshowModal] = useState(false);
  //PIE CHART STATES
  const [linioPie, setlinioPie] = useState(0);
  const [vtexPie, setvtexPie] = useState(0);
  const [shopifyPie, setshopifyPie] = useState(0);
  const [ripleyPie, setripleyPie] = useState(0);
  const [magentoPie, setmagentoPie] = useState(0);
  const [chambasPie, setchambasPie] = useState(0);
  const [wooPie, setwooPie] = useState(0);
  const [mercadoPie, setmercadoPie] = useState(0);
  const [exitoPie, setexitoPie] = useState(0);
  const [parisPie, setparisPie] = useState(0);
  const [listaPie, setlistaPie] = useState(0);
  const [mixedChartData, setmixedChartData] = useState(MIXED_DATA);
  const [mixedChartsalesData, setmixedChartsalesData] = useState([]);
  const [ChannelSelectedForDelete, setChannelSelectedForDelete] =
    useState(undefined);
  const [stackedDateLabel, setstackedDateLabel] = useState([]);
  const [stackedDatevalues, setstackedDatevalues] = useState([]);
  const [totalIncome, settotalIncome] = useState(0);
  const [totalNps, settotalNps] = useState(0);
  const [totalClaims, settotalClaims] = useState(0);
  const [dispatchCost, setdispatchCost] = useState(0);
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [gm, setgm] = useState(0);
  const [conversion, setConversion] = useState(0);
  const [totalDte, settotalDte] = useState(0);
  const [inProcess, setinProcess] = useState(0);
  const [inPreparation, setinPreparation] = useState(0);
  const [readyToShip, setreadyToShip] = useState(0);
  const [onTheWay, setonTheWay] = useState(0);
  const [totalOrders, settotalOrders] = useState(0);
  const [reviews, setreviews] = useState(0);
  const [country, setcountry] = useState("");
  const [countryId, setcountryId] = useState(0);
  const [store, setstore] = useState("");
  const [channels, setchannels] = useState([]);
  const [channelId, setchannelId] = useState(0);
  const [storeId, setstoreId] = useState(0);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const [filteredChannelArray, setfilteredChannelArray] = useState([]);
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const [selectedDateFrom, setselectedDateFrom] = useState("2021-08-04");
  const [selectedDateTo, setselectedDateTo] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [isLoading, setisLoading] = useState(false);
  const [totalCancelledOrders, settotalCancelledOrders] = useState(0);
  const [showFilter, setshowFilter] = useState(false);
  const [salesGraphData, setsalesGraphData] = useState([]);
  const [ordersGraphData, setordersGraphData] = useState([]);
  //SALES CHANNEL TOTAL SALES STATES

  const [cR, setcR] = useState([]);
  const [initialChannelSalesGraph, setinitialChannelSalesGraph] = useState([]);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isMobileSizes, setIsMobileSized] = useState(false);
  const [filtersClass, setfiltersClass] = useState("FiltersInDesktop");

  //ORDERS QUANTITY STATES
  const [ripleyOrders, setripleyOrders] = useState(0);
  const [vtexOrders, setvtexOrders] = useState(0);
  const [linioOrders, setlinioOrders] = useState(0);
  const [mercadoLibreOrders, setmercadoLibreOrders] = useState(0);
  const [exitoOrders, setexitoOrders] = useState(0);
  const [shopifyOrders, setshopifyOrders] = useState(0);
  const [parisOrders, setparisOrders] = useState(0);
  const [magentoOrders, setmagentoOrders] = useState(0);
  const [wooCommerceOrders, setwooCommerceOrders] = useState(0);
  const [chambasOrders, setchambasOrders] = useState(0);
  const [listaTiendaOrders, setlistaTiendaOrders] = useState(0);
  //MONTHLY SALES STATES
  //SALES GRAPH STATES
  const [newlinioMonthly, setnewlinioMonthly] = useState([]);
  const [newlinioSalesMonthly, setnewlinioSalesMonthly] = useState([]);
  const [newVtexMonthly, setnewVtexMonthly] = useState([]);
  const [newVtexSalesMonthly, setnewVtexSalesMonthly] = useState([]);
  const [newRipleyMonthly, setnewRipleyMonthly] = useState([]);
  const [newRipleySalesMonthly, setnewRipleySalesMonthly] = useState([]);
  const [newChambasMonthly, setnewChambasMonthly] = useState([]);
  const [newChambasSalesMonthly, setnewChambasSalesMonthly] = useState([]);
  const [newMagentoMonthly, setnewMagentoMonthly] = useState([]);
  const [newMagentoSalesMonthly, setnewMagentoSalesMonthly] = useState([]);
  const [newWooCommerceMonthly, setnewWooCommerceMonthly] = useState([]);
  const [newWooCommerceSalesMonthly, setnewWooCommerceSalesMonthly] = useState(
    []
  );
  const [newShopifyMonthly, setnewShopifyMonthly] = useState([]);
  const [newShopifySalesMonthly, setnewShopifySalesMonthly] = useState([]);
  const [newMercadoOrdersMonthly, setnewMercadoOrdersMonthly] = useState([]);
  const [newMercadoSalesMonthly, setnewMercadoSalesMonthly] = useState([]);
  const [newParisOrders, setnewParisOrders] = useState([]);
  const [newParisSales, setnewParisSales] = useState([]);
  const [newExtitoOrders, setnewExtitoOrders] = useState([]);
  const [newListaOrders, setnewListaOrders] = useState([]);
  const [newExitoSalesMonthly, setnewExitoSalesMonthly] = useState([]);
  const [newListaSales, setnewListaSales] = useState([]);
  const [stackedSalesGraph, setstackedSalesGraph] = useState({});
  const [isStackedGraphLoading, setisStackedGraphLoading] = useState(false);
  const [isStackedOrdersGraph, setisStackedOrdersGraph] = useState(false);
  const [isPieChartLoading, setisPieChartLoading] = useState(false);
  const [dateError, setdateError] = useState(null);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 767px)");
    setIsMobileSized(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  });

  useEffect(() => {
    fetchGeneralData();
    fetchFilterData();
    getDateLabels();
    fetchResumenGraphDetails();
    fetchStackedGraphForSales();
    fetchStackedGraphForOrders();
  }, []);
  useEffect(() => {
    fetchResumenGraphDetails();
    fetchStackedGraphForSales();
    fetchStackedGraphForOrders();
  }, [channelId]);

  useEffect(() => {
    displaysalesChannelHandler();
  }, [store]);

  useEffect(() => {
    fetchGeneralData();
  }, [channels, channelId, cR, store]);
  useEffect(() => {
    setSalesGraphValues();
  }, [salesGraphData]);
  useEffect(() => {
   setOrdersGraphValues();
  }, [ordersGraphData]);
  //FOR CLEANING UP STATES
  useEffect(() => {
    return () => {
      setnewStackedData(null);
      setcR(null);
    };
  }, []);
 
  //THIS FUNCTION IS USED TO SET THE INITIAL VALUE(FIRST RENDER) OF THE STACKED SALES GRAPH.WHEN THE Cr IS ACCESSED FROM THE ASYNC FUNCTION IT RETURNS NULL..THIS FUNCTION IS TO FIX THAT PROBLEM
  const setSalesGraphValues = () => {
    console.log(salesGraphData);
    console.log(cR);
    let newChannelList = cR.map((item) => {
      return item.channel;
    });
    console.log(newChannelList);
    console.log(initialChannelSalesGraph);
    if (newChannelList.length === 0) {
      console.log(cR);
      newChannelList = [
        "Vtex",
        "Linio",
        "MercadoLibre",
        "Exito",
        "Ripley",
        "Shopify",
        "Paris",
        "Magento",
        "Woocommerce",
        "Chambas",
        "ListaTienda",
      ];
    }

    // NEW LOGIC
    let linio = [];
    if (newChannelList.includes("Linio")) {
      linio = salesGraphData.filter((item) => {
        return item.Linio;
      });

      console.log(linio);
      if (linio.length !== 0) {
        setnewlinioSalesMonthly(linio[0].Linio);
      }
      // console.log(linio[0].Linio);
      //setnewlinioSalesMonthly(linio[0].Linio);
    }
    if (!newChannelList.includes("Linio")) {
      setnewlinioSalesMonthly(0);
    }

    let Vtex = [];
    if (newChannelList.includes("Vtex")) {
      Vtex = salesGraphData.filter((item) => {
        return item.Vtex;
      });
      if (Vtex.length !== 0) {
        setnewVtexSalesMonthly(Vtex[0].Vtex);
      }
    }
    if (!newChannelList.includes("Vtex")) {
      setnewVtexSalesMonthly(0);
    }
    let ripley = [];
    if (newChannelList.includes("Ripley")) {
      ripley = salesGraphData.filter((item) => {
        return item.Ripley;
      });
      if (ripley.length !== 0) {
        setnewRipleySalesMonthly(ripley[0].Ripley);
      }
    }
    if (!newChannelList.includes("Ripley")) {
      setnewRipleySalesMonthly(0);
    }
    let chambas = [];
    if (newChannelList.includes("Chambas")) {
      chambas = salesGraphData.filter((item) => {
        return item.Chambas;
      });
      if (chambas.length !== 0) {
        setnewChambasSalesMonthly(chambas[0].Chambas);
      }
    }
    if (!newChannelList.includes("Chambas")) {
      setnewChambasSalesMonthly(0);
    }
    let magento = [];
    if (newChannelList.includes("Magento")) {
      magento = salesGraphData.filter((item) => {
        return item.Magento;
      });
      if (magento.length !== 0) {
        setnewMagentoSalesMonthly(magento[0].Magento);
      }
    }
    if (!newChannelList.includes("Magento")) {
      setnewMagentoSalesMonthly(0);
    }
    let woo = [];
    if (newChannelList.includes("Woocommerce")) {
      woo = salesGraphData.filter((item) => {
        return item.Woocommerce;
      });
      if (woo.length !== 0) {
        setnewWooCommerceSalesMonthly(woo[0].Woocommerce);
      }
    }
    if (!newChannelList.includes("Woocommerce")) {
      setnewWooCommerceSalesMonthly(0);
    }
    let shopify = [];
    if (newChannelList.includes("Shopify")) {
      shopify = salesGraphData.filter((item) => {
        return item.Shopify;
      });
      if (shopify.length !== 0) {
        setnewShopifySalesMonthly(shopify[0].Shopify);
      }
    }
    if (!newChannelList.includes("Shopify")) {
      setnewShopifySalesMonthly(0);
    }
    let mer = [];
    if (newChannelList.includes("MercadoLibre")) {
      mer = salesGraphData.filter((item) => {
        return item.MercadoLibre;
      });
      if (mer.length !== 0) {
        setnewMercadoSalesMonthly(mer[0].MercadoLibre);
      }
    }
    if (!newChannelList.includes("MercadoLibre")) {
      setnewMercadoSalesMonthly(0);
    }
    let pari = [];
    if (newChannelList.includes("Paris")) {
      pari = salesGraphData.filter((item) => {
        return item.Paris;
      });
      if (pari.length !== 0) {
        setnewParisSales(pari[0].Paris);
      }
    }
    if (!newChannelList.includes("Paris")) {
      setnewParisSales(0);
    }
    let exi = [];
    if (newChannelList.includes("Exito")) {
      exi = salesGraphData.filter((item) => {
        return item.Exito;
      });
      if (exi.length !== 0) {
        setnewExitoSalesMonthly(exi[0].Exito);
      }
    }
    if (!newChannelList.includes("Exito")) {
      setnewExitoSalesMonthly(0);
    }
    let lista = [];
    if (newChannelList.includes("ListaTienda")) {
      lista = salesGraphData.filter((item) => {
        return item.ListaTienda;
      });
      if (lista.length !== 0) {
        setnewListaSales(lista[0].ListaTienda);
      }
    }
    if (!newChannelList.includes("ListaTienda")) {
      setnewListaSales(0);
    }
    setisStackedGraphLoading(false);
  };
  //FETCH STACKED GRAPH FOR ORDERS GRAPH
  const fetchStackedGraphForOrders = () => {
    setisStackedOrdersGraph(true);
    // let newChannelList = cR.map((item) => {
    //   return item.channel;
    // });
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        setordersGraphData(obj.resume.stackedOrderQtyGraphByMonth);
        // if (newChannelList.length === 0) {
        //   newChannelList = [
        //     "Vtex",
        //     "Linio",
        //     "MercadoLibre",
        //     "Exito",
        //     "Ripley",
        //     "Shopify",
        //     "Paris",
        //     "Magento",
        //     "Woocommerce",
        //     "Chambas",
        //     "ListaTienda",
        //   ];
        // }
        // let linio = [];
        // if (newChannelList.includes("Linio")) {
        //   linio = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Linio;
        //   });
        //   console.log(linio[0].Linio);
        //   setnewlinioMonthly(linio[0].Linio);
        // }
        // if (!newChannelList.includes("Linio")) {
        //   setnewlinioMonthly(0);
        // }
        // let Vtex = [];
        // if (newChannelList.includes("Vtex")) {
        //   Vtex = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Vtex;
        //   });
        //   console.log(Vtex[0].Vtex);
        //   setnewVtexMonthly(Vtex[0].Vtex);
        // }
        // if (!newChannelList.includes("Vtex")) {
        //   setnewVtexMonthly(0);
        // }
        // let ripley = [];
        // if (newChannelList.includes("Ripley")) {
        //   ripley = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Ripley;
        //   });
        //   console.log(ripley[0].Ripley);
        //   setnewRipleyMonthly(ripley[0].Ripley);
        // }
        // if (!newChannelList.includes("Ripley")) {
        //   setnewRipleyMonthly(0);
        // }
        // let chambas = [];
        // if (newChannelList.includes("Chambas")) {
        //   chambas = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Chambas;
        //   });
        //   console.log(chambas[0].Chambas);
        //   setnewChambasMonthly(chambas[0].Chambas);
        // }
        // if (!newChannelList.includes("Chambas")) {
        //   setnewChambasMonthly(0);
        // }
        // let magento = [];
        // if (newChannelList.includes("Magento")) {
        //   magento = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Magento;
        //   });
        //   console.log(magento[0].Magento);
        //   setnewMagentoMonthly(magento[0].Magento);
        // }
        // if (!newChannelList.includes("Magento")) {
        //   setnewMagentoMonthly(0);
        // }
        // let woo = [];
        // if (newChannelList.includes("Woocommerce")) {
        //   woo = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Woocommerce;
        //   });
        //   console.log(woo[0].Woocommerce);
        //   setnewWooCommerceMonthly(woo[0].Woocommerce);
        // }
        // if (!newChannelList.includes("Woocommerce")) {
        //   setnewWooCommerceMonthly(0);
        // }
        // let shopify = [];
        // if (newChannelList.includes("Shopify")) {
        //   shopify = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Shopify;
        //   });
        //   console.log(shopify[0].Shopify);
        //   setnewShopifyMonthly(shopify[0].Shopify);
        // }
        // if (!newChannelList.includes("Shopify")) {
        //   setnewShopifyMonthly(0);
        // }
        // let mer = [];
        // if (newChannelList.includes("MercadoLibre")) {
        //   mer = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.MercadoLibre;
        //   });

        //   setnewMercadoOrdersMonthly(mer[0].MercadoLibre);
        // }
        // if (!newChannelList.includes("MercadoLibre")) {
        //   setnewMercadoOrdersMonthly(0);
        // }
        // let pari = [];
        // if (newChannelList.includes("Paris")) {
        //   pari = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Paris;
        //   });

        //   setnewParisOrders(pari[0].Paris);
        // }
        // if (!newChannelList.includes("Paris")) {
        //   setnewParisOrders(0);
        // }
        // let exi = [];
        // if (newChannelList.includes("Exito")) {
        //   exi = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.Exito;
        //   });

        //   setnewExtitoOrders(exi[0].Exito);
        // }
        // if (!newChannelList.includes("Exito")) {
        //   setnewExtitoOrders(0);
        // }
        // let lista = [];
        // if (newChannelList.includes("ListaTienda")) {
        //   lista = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
        //     return item.ListaTienda;
        //   });

        //   setnewListaOrders(lista[0].ListaTienda);
        // }
        // if (!newChannelList.includes("ListaTienda")) {
        //   setnewListaOrders(0);
        // }
        setisStackedOrdersGraph(false);
      })
      .catch((error) => console.log("error", error));
  };

  const setOrdersGraphValues = ()=>{
    setisStackedGraphLoading(true);
console.log(ordersGraphData);
let newChannelList = cR.map((item) => {
  return item.channel;
});
  if (newChannelList.length === 0) {
    newChannelList = [
      "Vtex",
      "Linio",
      "MercadoLibre",
      "Exito",
      "Ripley",
      "Shopify",
      "Paris",
      "Magento",
      "Woocommerce",
      "Chambas",
      "ListaTienda",
    ];
  }
  let linio = [];
  if (newChannelList.includes("Linio")) {
    linio = ordersGraphData.filter((item) => {
      return item.Linio;
    });
  if(linio.length!==0){
    setnewlinioMonthly(linio[0].Linio);
  }
    
  }
  if (!newChannelList.includes("Linio")) {
    setnewlinioMonthly(0);
  }
  let Vtex = [];
  if (newChannelList.includes("Vtex")) {
    Vtex = ordersGraphData.filter((item) => {
      return item.Vtex;
    });
   if(Vtex.length!==0){
    setnewVtexMonthly(Vtex[0].Vtex);
   }
   
  }
  if (!newChannelList.includes("Vtex")) {
    setnewVtexMonthly(0);
  }
  let ripley = [];
  if (newChannelList.includes("Ripley")) {
    ripley = ordersGraphData.filter((item) => {
      return item.Ripley;
    });
    if(ripley.length!==0){
      setnewRipleyMonthly(ripley[0].Ripley);
    }
    
    
  }
  if (!newChannelList.includes("Ripley")) {
    setnewRipleyMonthly(0);
  }
  let chambas = [];
  if (newChannelList.includes("Chambas")) {
    chambas = ordersGraphData.filter((item) => {
      return item.Chambas;
    });
    if(chambas.length!==0){
    
      setnewChambasMonthly(chambas[0].Chambas);
    }
   
  }
  if (!newChannelList.includes("Chambas")) {
    setnewChambasMonthly(0);
  }
  let magento = [];
  if (newChannelList.includes("Magento")) {
    magento = ordersGraphData.filter((item) => {
      return item.Magento;
    });
   if(magento.length!=0){
    setnewMagentoMonthly(magento[0].Magento);
   }
   
  }
  if (!newChannelList.includes("Magento")) {
    setnewMagentoMonthly(0);
  }
  let woo = [];
  if (newChannelList.includes("Woocommerce")) {
    woo = ordersGraphData.filter((item) => {
      return item.Woocommerce;
    });
    if(woo.length!==0){
     
      setnewWooCommerceMonthly(woo[0].Woocommerce);
    }
   
  }
  if (!newChannelList.includes("Woocommerce")) {
    setnewWooCommerceMonthly(0);
  }
  let shopify = [];
  if (newChannelList.includes("Shopify")) {
    shopify = ordersGraphData.filter((item) => {
      return item.Shopify;
    });
    if(shopify.length!==0){
      
      setnewShopifyMonthly(shopify[0].Shopify);
    }
    
  }
  if (!newChannelList.includes("Shopify")) {
    setnewShopifyMonthly(0);
  }
  let mer = [];
  if (newChannelList.includes("MercadoLibre")) {
    mer = ordersGraphData.filter((item) => {
      return item.MercadoLibre;
    });
if(mer.length!==0){
  setnewMercadoOrdersMonthly(mer[0].MercadoLibre);
}
    
  }
  if (!newChannelList.includes("MercadoLibre")) {
    setnewMercadoOrdersMonthly(0);
  }
  let pari = [];
  if (newChannelList.includes("Paris")) {
    pari = ordersGraphData.filter((item) => {
      return item.Paris;
    });
if(pari.length!==0){
  setnewParisOrders(pari[0].Paris);
}
   
  }
  if (!newChannelList.includes("Paris")) {
    setnewParisOrders(0);
  }
  let exi = [];
  if (newChannelList.includes("Exito")) {
    exi = ordersGraphData.filter((item) => {
      return item.Exito;
    });
if(exi.length!==0){
  setnewExtitoOrders(exi[0].Exito);
}
    
  }
  if (!newChannelList.includes("Exito")) {
    setnewExtitoOrders(0);
  }
  let lista = [];
  if (newChannelList.includes("ListaTienda")) {
    lista = ordersGraphData.filter((item) => {
      return item.ListaTienda;
    });
if(lista.length!==0){
  setnewListaOrders(lista[0].ListaTienda);
}
    
  }
  if (!newChannelList.includes("ListaTienda")) {
    setnewListaOrders(0);
  }
  setisStackedOrdersGraph(false);
  setisStackedGraphLoading(false);
  }
  //FETCH STACKED GRAPH FOR SALES GRAPH
  const fetchStackedGraphForSales = () => {
    setisStackedGraphLoading(true);

    let newChannelList = cR.map((item) => {
      return item.channel;
    });
    // console.log(newChannelList);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;
    // console.log(url);

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        setsalesGraphData(obj.resume.stackedSalesGraphByMonth);
        // console.log(newChannelList);
        // console.log(initialChannelSalesGraph);
        // if (newChannelList.length === 0) {
        //   console.log(cR);
        //   newChannelList = [
        //     "Vtex",
        //     "Linio",
        //     "MercadoLibre",
        //     "Exito",
        //     "Ripley",
        //     "Shopify",
        //     "Paris",
        //     "Magento",
        //     "Woocommerce",
        //     "Chambas",
        //     "ListaTienda",
        //   ];
        // }

        // // NEW LOGIC
        // let linio = [];
        // if (newChannelList.includes("Linio")) {
        //   linio = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Linio;
        //   });
        //   console.log(linio[0].Linio);
        //   setnewlinioSalesMonthly(linio[0].Linio);
        // }
        // if (!newChannelList.includes("Linio")) {
        //   setnewlinioSalesMonthly(0);
        // }

        // let Vtex = [];
        // if (newChannelList.includes("Vtex")) {
        //   Vtex = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Vtex;
        //   });

        //   setnewVtexSalesMonthly(Vtex[0].Vtex);
        // }
        // if (!newChannelList.includes("Vtex")) {
        //   setnewVtexSalesMonthly(0);
        // }
        // let ripley = [];
        // if (newChannelList.includes("Ripley")) {
        //   ripley = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Ripley;
        //   });

        //   setnewRipleySalesMonthly(ripley[0].Ripley);
        // }
        // if (!newChannelList.includes("Ripley")) {
        //   setnewRipleySalesMonthly(0);
        // }
        // let chambas = [];
        // if (newChannelList.includes("Chambas")) {
        //   chambas = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Chambas;
        //   });
        //   console.log(chambas[0].Chambas);
        //   setnewChambasSalesMonthly(chambas[0].Chambas);
        // }
        // if (!newChannelList.includes("Chambas")) {
        //   setnewChambasSalesMonthly(0);
        // }
        // let magento = [];
        // if (newChannelList.includes("Magento")) {
        //   magento = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Magento;
        //   });
        //   console.log(magento[0].Magento);
        //   setnewMagentoSalesMonthly(magento[0].Magento);
        // }
        // if (!newChannelList.includes("Magento")) {
        //   setnewMagentoSalesMonthly(0);
        // }
        // let woo = [];
        // if (newChannelList.includes("Woocommerce")) {
        //   woo = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Woocommerce;
        //   });

        //   setnewWooCommerceSalesMonthly(woo[0].Woocommerce);
        // }
        // if (!newChannelList.includes("Woocommerce")) {
        //   setnewWooCommerceSalesMonthly(0);
        // }
        // let shopify = [];
        // if (newChannelList.includes("Shopify")) {
        //   shopify = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Shopify;
        //   });

        //   setnewShopifySalesMonthly(shopify[0].Shopify);
        // }
        // if (!newChannelList.includes("Shopify")) {
        //   setnewShopifySalesMonthly(0);
        // }
        // let mer = [];
        // if (newChannelList.includes("MercadoLibre")) {
        //   mer = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.MercadoLibre;
        //   });

        //   setnewMercadoSalesMonthly(mer[0].MercadoLibre);
        // }
        // if (!newChannelList.includes("MercadoLibre")) {
        //   setnewMercadoSalesMonthly(0);
        // }
        // let pari = [];
        // if (newChannelList.includes("Paris")) {
        //   pari = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Paris;
        //   });

        //   setnewParisSales(pari[0].Paris);
        // }
        // if (!newChannelList.includes("Paris")) {
        //   setnewParisSales(0);
        // }
        // let exi = [];
        // if (newChannelList.includes("Exito")) {
        //   exi = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.Exito;
        //   });

        //   setnewExitoSalesMonthly(exi[0].Exito);
        // }
        // if (!newChannelList.includes("Exito")) {
        //   setnewExitoSalesMonthly(0);
        // }
        // let lista = [];
        // if (newChannelList.includes("ListaTienda")) {
        //   lista = obj.resume.stackedSalesGraphByMonth.filter((item) => {
        //     return item.ListaTienda;
        //   });

        //   setnewListaSales(lista[0].ListaTienda);
        // }
        // if (!newChannelList.includes("ListaTienda")) {
        //   setnewListaSales(0);
        // }
        setisStackedGraphLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  const getDateLabels = () => {
    var startDate = moment(selectedDateFrom);
    var endDate = moment(selectedDateTo);
    var result = [];
    if (endDate.isBefore(startDate)) {
      //throw "End date must be greater than start date.";
      setdateError(
        "La fecha de t??rmino debe ser mayor que la fecha de inicio "
      );
    } else {
      setdateError(null);
    }
    while (startDate.isBefore(endDate)) {
      result.push(startDate.format("YYYY-MM-01"));
      startDate.add(1, "month");
    }
    setstackedDatevalues(result);
    const MONTHS = [
      "En",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Agos",
      "Sept",
      "Oct",
      "Nov",
      "Dic",
    ];
    const x = result.map((item) => {
      let d = new Date(item);
      d.setDate(1);
      d.setMonth(d.getMonth() + 1);
      const dateString = `${d.getDate()}-${
        MONTHS[d.getMonth()]
      }-${d.getFullYear()}`;
      return dateString;
    });
    setstackedDateLabel(x);
  };
  useEffect(() => {
    getDateLabels();
  }, [selectedDateFrom, selectedDateTo]);
  useEffect(() => {
    if (isMobileSizes) {
      setfiltersClass("FiltersInMobile");
      setshowFilter(false);
    }
    if (!isMobileSizes) {
      setfiltersClass("FiltersInDesktop");
      setshowFilter(true);
    }
  }, [isMobileSizes]);
  useEffect(() => {
    setResumenGraph();
    setSalesCardData();
  }, [newData]);

  const setSalesCardData = () => {
    const vtexSales = newData.filter((item) => {
      return item.channel === "Vtex";
    });
    const vtexSalesValue = vtexSales.map((item) => {
      return item.orderValue;
    });
    setvtexOrders(vtexSalesValue[0]);
    const linioSales = newData.filter((item) => {
      return item.channel === "Linio";
    });
    const linioSalesValue = linioSales.map((item) => {
      return item.orderValue;
    });
    setlinioOrders(linioSalesValue[0]);
    const magentoSales = newData.filter((item) => {
      return item.channel === "Magento";
    });
    const magentoSalesValue = magentoSales.map((item) => {
      return item.orderValue;
    });
    setmagentoOrders(magentoSalesValue[0]);
    const merSales = newData.filter((item) => {
      return item.channel === "MercadoLibre";
    });
    const merSalesValue = merSales.map((item) => {
      return item.orderValue;
    });
    setmercadoLibreOrders(merSalesValue[0]);
    const exiSales = newData.filter((item) => {
      return item.channel === "Exito";
    });
    const exiSalesValue = exiSales.map((item) => {
      return item.orderValue;
    });
    setexitoOrders(exiSalesValue[0]);
    const ripSales = newData.filter((item) => {
      return item.channel === "Ripley";
    });
    const ripSalesValue = ripSales.map((item) => {
      return item.orderValue;
    });
    setripleyOrders(ripSalesValue[0]);
    const shopSales = newData.filter((item) => {
      return item.channel === "Shopify";
    });
    const shopSalesValue = shopSales.map((item) => {
      return item.orderValue;
    });
    setshopifyOrders(shopSalesValue[0]);
    const pariSales = newData.filter((item) => {
      return item.channel === "Paris";
    });
    const pariSalesValue = pariSales.map((item) => {
      return item.orderValue;
    });
    setparisOrders(pariSalesValue[0]);
    const wooSales = newData.filter((item) => {
      return item.channel === "Paris";
    });
    const wooSalesValue = wooSales.map((item) => {
      return item.orderValue;
    });
    setwooCommerceOrders(wooSalesValue[0]);
    const chambasSales = newData.filter((item) => {
      return item.channel === "Chambas";
    });
    const chambasSalesValue = chambasSales.map((item) => {
      return item.orderValue;
    });
    setchambasOrders(chambasSalesValue[0]);
  };
  const setResumenGraph = () => {
   // console.log(newData);
   // console.log(cR);
    const labels = newData.map((item) => {
      return item.channel;
    });
    const salesValue = newData.map((item) => {
      return item.salesValue;
    });
    const orderValue = newData.map((item) => {
      return item.orderValue;
    });
    //SET PIE CHART HERE
    const linioSales = newData.filter((item) => {
      return item.channel === "Linio";
    });
    const linioSalesValue = linioSales.map((item) => {
      return item.salesValue;
    });
    setlinioPie(linioSalesValue[0]);
    const vtexSales = newData.filter((item) => {
      return item.channel === "Vtex";
    });
    const vtexSalesValue = vtexSales.map((item) => {
      return item.salesValue;
    });
    setvtexPie(vtexSalesValue[0]);
    const ripleySales = newData.filter((item) => {
      return item.channel === "Ripley";
    });
    const ripleySalesValue = ripleySales.map((item) => {
      return item.salesValue;
    });
    setripleyPie(ripleySalesValue[0]);
    const shopifySales = newData.filter((item) => {
      return item.channel === "Shopify";
    });
    const shopifySalesValue = shopifySales.map((item) => {
      return item.salesValue;
    });
    setshopifyPie(shopifySalesValue[0]);
    const magentoSales = newData.filter((item) => {
      return item.channel === "Magento";
    });
    const magentoSalesValue = magentoSales.map((item) => {
      return item.salesValue;
    });
    setmagentoPie(magentoSalesValue[0]);
    const wooSales = newData.filter((item) => {
      return item.channel === "Woocommerce";
    });
    const wooSalesValue = wooSales.map((item) => {
      return item.salesValue;
    });
    setwooPie(wooSalesValue[0]);
    const chambasSales = newData.filter((item) => {
      return item.channel === "Chambas";
    });
    const chambasSalesValue = chambasSales.map((item) => {
      return item.salesValue;
    });
    setchambasPie(chambasSalesValue[0]);
    const merSales = newData.filter((item) => {
      return item.channel === "MercadoLibre";
    });
    const merSalesValue = merSales.map((item) => {
      return item.salesValue;
    });
    setmercadoPie(merSalesValue[0]);
    const exiSales = newData.filter((item) => {
      return item.channel === "Exito";
    });
    const exiSalesValue = exiSales.map((item) => {
      return item.salesValue;
    });
    setexitoPie(exiSalesValue[0]);
    const parisSales = newData.filter((item) => {
      return item.channel === "Paris";
    });
    const parisSalesValue = parisSales.map((item) => {
      return item.salesValue;
    });
    setparisPie(parisSalesValue[0]);
    const listaSales = newData.filter((item) => {
      return item.channel === "ListaTienda";
    });
    const listaSalesValue = listaSales.map((item) => {
      return item.salesValue;
    });
    setlistaPie(listaSalesValue[0]);

    let MIXED = {
      labels: labels,
      datasets: [
        {
          label: "Ventas",
          data: salesValue,
          backgroundColor: "#344FD5",
          borderRadius: 5,
          order: 1,
        },
        {
          label: "??rdenes",
          yAxisID: "Ordenes",

          data: orderValue,
          backgroundColor: "#06CBC1",
          borderColor: "#06CBC1",
          fill: false,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 5,
          type: "line",
          order: 0,
          color: "#9f9f9f",
        },
      ],

      options: {
        responsive: true,
        // maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          grid: {
            drawBorder: false,
            display: false,
            zeroLineColor: "transparent",
          },
          y: {
            display: true,
            position: "right",
            ticks: {
              color: "#9f9f9f",
              beginAtZero: true,
              maxTicksLimit: 5,
              callback: function (data) {
                let number = data;
                let totalValueFormatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return totalValueFormatted;
              },
              // padding: 100,
            },
            grid: {
              zeroLineColor: "transparent",
              display: false,
              drawBorder: false,
              color: "#EBEBEBf",
              // borderDash: [8, 6],
              lineWidth: 0,
            },
          },

          x: {
            display: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              font: {
                size: 10,
              },
              padding: 20,
              color: "#9f9f9f",
              //  color:"blue",
            },
          },
        },
      },
    };
    setmixedChartData(MIXED);
  };
  const fetchResumenGraphDetails = () => {
    setisPieChartLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(obj);
        setnewData(obj.resume.lineAndBarChart);
        setisPieChartLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchGeneralData = () => {
    const channelsId = cR.map((item) => {
      return item.value;
    });
    let x = channelsId.join(",");
    // console.log(x);
    setchannelId(x);
    // console.log("hi i am fetching");
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    //2021-12-01
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;
   
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        // console.log(ChannelSelectedForDelete);
        var totalIncomeArray = obj.detail.map((item) => {
          return item.total;
        });
        var totalDispatchCostArray = obj.detail.map((item) => {
          return item.shipping_total;
        });
        var gmArray = obj.detail.map((item) => {
          return item.gm;
        });
        let conversionArray = obj.detail.map((item) => {
          return item.conversion;
        });
        let ordersCancelledArray = obj.detail.map((item) => {
          return item.orders_canceled;
        });
        let dteSentArray = obj.detail.map((item) => {
          return item.send_dte_qty;
        });
        let inProcessArray = obj.detail.map((item) => {
          return item.in_process;
        });
        let inPreparationArray = obj.detail.map((item) => {
          return item.in_preparation;
        });
        let readyToShipArray = obj.detail.map((item) => {
          return item.ready_to_ship;
        });
        let onThewayarray = obj.detail.map((item) => {
          return item.in_way;
        });
        let orderQuantityArray = obj.detail.map((item) => {
          return item.orders_qty;
        });
        let reviewArray = obj.detail.map((item) => {
          return item.reviews;
        });
        let npsArray = obj.detail.map((item) => {
          return item.nps;
        });
        let claimsArray = obj.detail.map((item) => {
          return item.claims;
        });
        let sumOfTotalIncome = totalIncomeArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfTotalDispatch = totalDispatchCostArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfDteSent = dteSentArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let Totalgm = gmArray.reduce((partialSum, a) => partialSum + a, 0);
        let TotalConversion = conversionArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfCancelledOrders = ordersCancelledArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfInProcess = inProcessArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfInPreparation = inPreparationArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfreadyToShip = readyToShipArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfonTheway = onThewayarray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfOrderQuantity = orderQuantityArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfreview = reviewArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfTotalnps = npsArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfTotalClaims = claimsArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        settotalClaims(sumOfTotalClaims);
        settotalNps(sumOfTotalnps);
        settotalIncome(sumOfTotalIncome);
        setdispatchCost(sumOfTotalDispatch);
        setgm(Totalgm);
        setConversion(TotalConversion);
        settotalCancelledOrders(sumOfCancelledOrders);
        settotalDte(sumOfDteSent);
        setinProcess(sumOfInProcess);
        setinPreparation(sumOfInPreparation);
        setreadyToShip(sumOfreadyToShip);
        setonTheWay(sumOfonTheway);
        settotalOrders(sumOfOrderQuantity);
        setreviews(sumOfreview);
        setisLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchFilterData = async () => {
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        let allChannelsArray = [];
        if (localStorage.getItem("ut") === "1") {
          allChannelsArray = obj[4].stores.map((item) => {
            return item.channels;
          });
        }

        if (localStorage.getItem("ut") === "2" || localStorage.getItem("ut") === "3") {
          let kamCountryArray = localStorage.getItem("ct");
          var c = kamCountryArray.split(",").map(function (item) {
            return parseInt(item, 10);
          });
          console.log(c);
          let finalKamCountry = [];
          for (let i = 0; i <= c.length - 1; i++) {
            let x = obj.filter((item) => {
              return item.value === c[i];
            });
            finalKamCountry.push(x);
          }
          console.log(finalKamCountry);
          var flattenedCountry = [].concat.apply([], finalKamCountry);
          setfilteredCountryData(flattenedCountry);
          console.log(flattenedCountry[0].stores);
          const kamstore = localStorage.getItem("st");
          console.log(kamstore);
          var b = kamstore.split(",").map(function (item) {
            return parseInt(item, 10);
          });
          console.log(b);
          let finalKamStore = [];
          for (let i = 0; i <= b.length - 1; i++) {
            let x = flattenedCountry[0].stores.filter((item) => {
              return item.value === b[i];
            });
            finalKamStore.push(x);
          }
          console.log(finalKamStore);
          var flattenedKamStores = [].concat.apply([], finalKamStore);
          console.log(flattenedKamStores);
          allChannelsArray = flattenedKamStores.map((item) => {
            return item.channels;
          });
      
        }
        // let allChannelsArray = obj[4].stores.map((item) => {
        //   return item.channels;
        // });
        var flattened = [].concat.apply([], allChannelsArray);
        console.log(flattened);
        var resArr = [];
        flattened.filter(function (item) {
          var i = resArr.findIndex(
            (x) => x.channel == item.channel && x.value == item.value
          );
          if (i <= -1) {
            resArr.push(item);
          }
          return null;
        });
console.log(resArr);
        setcR(resArr);
        //setinitialChannelSalesGraph(resArr);

        //setcR(resArr);
        let allSalesChannels = flattened.map((item) => {
          return item.channel;
        });

        let salesChannelList = allSalesChannels.filter(function (
          item,
          index,
          inputArray
        ) {
          return inputArray.indexOf(item) == index;
        });
        console.log(salesChannelList);
        //setcR(salesChannelList);
        setchannels(salesChannelList);
        // if (localStorage.getItem("ut") === "2"||localStorage.getItem("ut") === "3") {
        //   let kamCountryArray = localStorage.getItem("ct");
        //   console.log(kamCountryArray);
        //   const kamCountry = obj.filter((item) => {
        //     return item.value === Number(kamCountryArray);
        //   });
        //   console.log(kamCountry);
        //   setfilteredCountryData(kamCountry);
        // }
        if (localStorage.getItem("ut") === "1") {
          setfilteredCountryData(obj);
        }
        //setfilteredCountryData(obj);
        setisLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  const changeDateHandler = (event) => {
    const selectedDate = event.toISOString().slice(0, 10);

    setselectedDateFrom(selectedDate);
  };
  const changeDateToHandler = (event) => {
    const selectedDate = event.toISOString().slice(0, 10);

    setselectedDateTo(selectedDate);
  };
  const handleCountryChange = (event) => {
    setcountry(event.target.value);
    //Get countryId from filteredCountryData
    const val = filteredCountryData.filter(function (item) {
      if (item.country === event.target.value) {
        return item;
      }
    });
    setcountryId(val[0].value);
    if (localStorage.getItem("ut") === "2"||localStorage.getItem("ut") === "3") {
      const kamstore = localStorage.getItem("st");
      console.log(kamstore);
      var b = kamstore.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      console.log(b);
      let finalKamStore = [];
      for (let i = 0; i <= b.length - 1; i++) {
        let x = val[0].stores.filter((item) => {
          return item.value === b[i];
        });
        finalKamStore.push(x);
      }
      var flattened = [].concat.apply([], finalKamStore);
      console.log(flattened);
      setfilteredStoreData(flattened);
    }
    if (localStorage.getItem("ut") === "1") {
      setfilteredStoreData(val[0].stores);
    }
    //setfilteredStoreData(val[0].stores);
  };
  const handleStoreChange = (event) => {
    setstore(event.target.value);
    //Get storeId from filteredStoreData
    const val = filteredStoreData.filter(function (item) {
      if (item.store === event.target.value) {
        return item;
      }
    });
    setstoreId(val[0].value);
    const selectedStoreData = filteredStoreData.filter((selectedStore) => {
      return selectedStore.store === event.target.value;
    });

    const selectedChannelsArray = selectedStoreData[0].channels;
  

    const selectedChannels = selectedChannelsArray.map((item) => {
      return item;
    });
 
    setfilteredChannelArray(selectedChannels);
    displaysalesChannelHandler();
  };
  const applyFiltersButtonhandler = () => {
    fetchGeneralData();
  };
  const displaysalesChannelHandler = () => {
    const channelsId = filteredChannelArray.map((item) => {
      return item.value;
    });

    let x = channelsId.join(",");
    // console.log(filteredChannelArray);
    if (filteredChannelArray.length !== 0) {
      console.log("hi");
       setcR(filteredChannelArray);
      setchannelId(x);
    }
  };
  const handleDelete = (item) => {
    // console.log(mixedChartsalesData);
    setChannelSelectedForDelete(item);
    let x = cR.filter((i) => i !== item);

    setcR(x);
  };
  const showFiltersHandler = () => {
    setshowFilter(!showFilter);
  };
  const reloadReportsHandler = () => {
    location.reload();
  };
  const showModalHandler = (row) => {
    setshowModal(true);
    // setModal(false);
  };
  const hideModalHandler = (row) => {
    setshowModal(false);
    //setModal(false);
  };
  return (
    <>
      {showModal && (
        <SendReport
          onhideModal={hideModalHandler}
          totalIncome={totalIncome}
          dispatchCost={dispatchCost}
          gm={gm}
          conversion={conversion}
          totalOrders={totalOrders}
          totalCancelledOrders={totalCancelledOrders}
          totalDte={totalDte}
          inProcess={inProcess}
          inPreparation={inPreparation}
          readyToShip={readyToShip}
          onTheWay={onTheWay}
          reviews={reviews}
          totalNps={totalNps}
          totalClaims={totalClaims}
          //mixed chart data
          mixedChartData={mixedChartData}
          //PIE CHART DATA
          channel={cR}
          linioPie={linioPie}
          vtexPie={vtexPie}
          shopifyPie={shopifyPie}
          ripleyPie={ripleyPie}
          magentoPie={magentoPie}
          wooPie={wooPie}
          chambasPie={chambasPie}
          mercadoPie={mercadoPie}
          exitoPie={exitoPie}
          parisPie={parisPie}
          listaPie={listaPie}
          //Sales graph

          stackedDateLabel={stackedDateLabel}
          newlinioSalesMonthly={newlinioSalesMonthly}
          newVtexSalesMonthly={newVtexSalesMonthly}
          newRipleySalesMonthly={newRipleySalesMonthly}
          newChambasSalesMonthly={newChambasSalesMonthly}
          newMagentoSalesMonthly={newMagentoSalesMonthly}
          newWooCommerceSalesMonthly={newWooCommerceSalesMonthly}
          newShopifySalesMonthly={newShopifySalesMonthly}
          newMercadoSalesMonthly={newMercadoSalesMonthly}
          newParisSales={newParisSales}
          newExitoSalesMonthly={newExitoSalesMonthly}
          newListaSales={newListaSales}
          //STACKED ORDER GRAPH DATA
          newlinioMonthly={newlinioMonthly}
          newVtexMonthly={newVtexMonthly}
          newRipleyMonthly={newRipleyMonthly}
          newChambasMonthly={newChambasMonthly}
          newMagentoMonthly={newMagentoMonthly}
          newWooCommerceMonthly={newWooCommerceMonthly}
          newShopifyMonthly={newShopifyMonthly}
          newMercadoOrdersMonthly={newMercadoOrdersMonthly}
          newParisOrders={newParisOrders}
          newExtitoOrders={newExtitoOrders}
          newListaOrders={newListaOrders}
          //ORDER CARD DATA
          vtex={vtexOrders}
          linio={linioOrders}
          magento={magentoOrders}
          mercadoLibre={mercadoLibreOrders}
          exito={exitoOrders}
          ripley={ripleyOrders}
          shopify={shopifyOrders}
          paris={parisOrders}
          wooCommerce={wooCommerceOrders}
          chambas={chambasOrders}
          listaTienda={listaTiendaOrders}
        ></SendReport>
      )}
      {isLoading && <SplashScreen message="Reportes"></SplashScreen>}

      {!isLoading && (
        <div className="content">
          <ViewCardReports></ViewCardReports>

          {/* FILTERS IN DESKTOP VERSION */}
          {isMobileSizes && (
            <button
              style={{
                backgroundColor: "transparent",
                color: "black",
                width: "100%",
                padding: "20px",
                border: "none",
                fontSize: "12px",
              }}
              onClick={showFiltersHandler}
            >
              <img src={iconFilterButton} width="15" />
              &nbsp;{showFilter ? "Ocultar Filtros" : "Mostrar Filtros"}
            </button>
          )}
          {showFilter && (
            <div id={filtersClass}>
              <Col md="12">
                <label>
                  <h5
                    id="fechaDesde"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "6px",
                      marginTop: "0px",
                    }}
                  >
                    Fecha Inicio{" "}
                    {dateError !== null && (
                      <span>
                        {" "}
                        <p style={{ color: "red" }}>{dateError}</p>
                      </span>
                    )}
                  </h5>

                  <DatePicker
                    id="datepickerCalendar"
                    type="number"
                    value={selectedDateFrom}
                    onChange={changeDateHandler}
                    style={{ width: 200, marginLeft: "1em" }}
                    placeholderText="dd/mm/yy"
                    locale="es"
                  />
                </label>

                <label>
                  <h5
                    id="fechaHasta"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "6px",
                      marginTop: "0px",
                    }}
                  >
                    Fecha Fin
                  </h5>

                  <DatePicker
                    id="datepickerCalendar"
                    type="number"
                    value={selectedDateTo}
                    onChange={changeDateToHandler}
                    style={{ width: 200, marginLeft: "1em" }}
                    placeholderText="dd/mm/yy"
                    locale="es"
                  />
                </label>
                <label htmlFor="select-country">
                  <h5
                    style={{
                      color: "black",
                      width: "30px",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "0px",
                      marginTop: "1em",
                    }}
                  >
                    Pa??s
                  </h5>
                  <Select
                    labelId="select-country"
                    id="select-country"
                    style={{
                      width: "193px",
                      height: "46px",
                      marginLeft: "1em",
                      backgroundColor: "white",
                      borderRadius: "17px",
                      marginBottom: "1em",
                      fontSize: "10px",
                      marginTop: "1em",
                    }}
                    value={country}
                    onChange={handleCountryChange}
                    label="Country"
                    placeholder="&nbsp; Seleccione un pa??s"
                  >
                    {Array.from(
                      new Set(filteredCountryData.map((obj) => obj))
                    ).map((period) => {
                      return (
                        <MenuItem value={period.country}>
                          {period.country}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </label>

                <label htmlFor="select-tienda">
                  <h5
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "0px",
                      marginTop: "1em",
                    }}
                  >
                    Tienda
                  </h5>
                  <Select
                    labelId="select-tienda"
                    id="select-tienda"
                    style={{
                      width: "193px",
                      height: "46px",
                      marginLeft: "1em",
                      backgroundColor: "white",
                      borderRadius: "17px",
                      marginBottom: "1em",
                      fontSize: "10px",
                      marginTop: "1em",
                    }}
                    value={store}
                    onChange={handleStoreChange}
                    label="select-canal"
                    placeholder="&nbsp; Seleccione una tienda"
                  >
                    {Array.from(
                      new Set(filteredStoreData.map((obj) => obj.store))
                    ).map((period) => {
                      return <MenuItem value={period}>{period}</MenuItem>;
                    })}
                  </Select>
                </label>

                <Button
                  color="primary"
                  style={{
                    borderRadius: "22px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    letterSpacing: "1px",
                    width: "120px",
                    height: "38px",
                    fontWeight: "600",
                  }}
                  className="thirdStepTour"
                  onClick={applyFiltersButtonhandler}
                >
                  Aplicar
                </Button>

                <Button
                  className="btn-round btn-icon fourthStepTour"
                  color="primary"
                  onClick={reloadReportsHandler}
                >
                  <i
                    className="nc-icon nc-refresh-69"
                    style={{ color: "#ffffff" }}
                  />
                </Button>
              </Col>

              <Col md="12">
                <h5
                  id="fechaDesde"
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "800",
                    marginLeft: "1em",
                    marginBottom: "6px",
                    marginTop: "0px",
                  }}
                >
                  Canales De Venta
                </h5>

                {cR.map((item) => (
                  <div className="tag-item" key={item.value}>
                    {item.channel}
                    <button
                      type="button"
                      className="button"
                      onClick={() => handleDelete(item)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                {store !== "" && (
                  <button
                    style={{
                      display: "initial",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "5px",
                      width: "40px",
                      height: "30px",
                      left: "1006px",
                      top: "405px",
                      background: "#DFE0E8",
                      borderRadius: "17px",
                      border: "none",
                    }}
                    onClick={displaysalesChannelHandler}
                  >
                    +
                  </button>
                )}
                {store === "" && (
                  <button
                    style={{
                      display: "initial",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "5px",
                      width: "40px",
                      height: "30px",
                      left: "1006px",
                      top: "405px",
                      background: "#DFE0E8",
                      borderRadius: "17px",
                      border: "none",
                    }}
                    onClick={fetchFilterData}
                  >
                    +
                  </button>
                )}
              </Col>
            </div>
          )}
          <br></br>

          <div id="generateReport" ref={printReport}>
            <ReportCards
              totalIncome={totalIncome}
              dispatchCost={dispatchCost}
              gm={gm}
              conversion={conversion}
              totalOrders={totalOrders}
              totalCancelledOrders={totalCancelledOrders}
              totalDte={totalDte}
              inProcess={inProcess}
              inPreparation={inPreparation}
              readyToShip={readyToShip}
              onTheWay={onTheWay}
              reviews={reviews}
              totalNps={totalNps}
              totalClaims={totalClaims}
            ></ReportCards>

            {/* REPORTS INFORMATION MOBILE VERSION */}
            <div id="ReportInformationMobile">
              <InformationCardsMobile
                totalIncome={totalIncome}
                dispatchCost={dispatchCost}
                gm={gm}
                conversion={conversion}
                totalOrders={totalOrders}
                totalCancelledOrders={totalCancelledOrders}
                totalDte={totalDte}
                inProcess={inProcess}
                inPreparation={inPreparation}
                readyToShip={readyToShip}
                onTheWay={onTheWay}
                reviews={reviews}
                totalNps={totalNps}
                totalClaims={totalClaims}
              />
            </div>

            <br></br>
            <br></br>

            {/* GRAPHS */}

            <div>
              <Row>
                <MixedAndPieChart
                  mixedChartData={mixedChartData}
                ></MixedAndPieChart>
                <Col id="ColPieChart" lg="5" md="12" sm="12">
                  <Card id="pieChartCard">
                    <PieChart
                      isPieChartLoading={isPieChartLoading}
                      linioPie={linioPie}
                      vtexPie={vtexPie}
                      shopifyPie={shopifyPie}
                      ripleyPie={ripleyPie}
                      magentoPie={magentoPie}
                      wooPie={wooPie}
                      chambasPie={chambasPie}
                      mercadoPie={mercadoPie}
                      exitoPie={exitoPie}
                      parisPie={parisPie}
                      listaPie={listaPie}
                    ></PieChart>
                    <CardFooter>
                      <SalesCard
                        channel={cR}
                        vtex={vtexPie}
                        linio={linioPie}
                        magento={magentoPie}
                        mercadoLibre={mercadoPie}
                        exito={exitoPie}
                        ripley={ripleyPie}
                        shopify={shopifyPie}
                        paris={parisPie}
                        wooCommerce={wooPie}
                        chambas={chambasPie}
                        listaTienda={listaPie}
                      ></SalesCard>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Card className="card-chart">
                    <StackedOrderGraph
                      stackedDateLabel={stackedDateLabel}
                      newlinioMonthly={newlinioMonthly}
                      newVtexMonthly={newVtexMonthly}
                      newRipleyMonthly={newRipleyMonthly}
                      newChambasMonthly={newChambasMonthly}
                      newMagentoMonthly={newMagentoMonthly}
                      newWooCommerceMonthly={newWooCommerceMonthly}
                      newShopifyMonthly={newShopifyMonthly}
                      newMercadoOrdersMonthly={newMercadoOrdersMonthly}
                      newParisOrders={newParisOrders}
                      newExtitoOrders={newExtitoOrders}
                      newListaOrders={newListaOrders}
                      isStackedOrdersGraph={isStackedOrdersGraph}
                    ></StackedOrderGraph>
                    <CardFooter>
                      <StackedGraphOrderCard
                        channel={cR}
                        vtex={vtexOrders}
                        linio={linioOrders}
                        magento={magentoOrders}
                        mercadoLibre={mercadoLibreOrders}
                        exito={exitoOrders}
                        ripley={ripleyOrders}
                        shopify={shopifyOrders}
                        paris={parisOrders}
                        wooCommerce={wooCommerceOrders}
                        chambas={chambasOrders}
                        listaTienda={listaTiendaOrders}
                      ></StackedGraphOrderCard>
                    </CardFooter>
                  </Card>
                </Col>

                <Col md="6">
                  <Card className="card-chart">
                    <StackedSalesGraph
                      cR={cR}
                      channelId={channelId}
                      stackedDateLabel={stackedDateLabel}
                      storeId={storeId}
                      selectedDateTo={selectedDateTo}
                      selectedDateFrom={selectedDateFrom}
                      countryId={countryId}
                      newlinioSalesMonthly={newlinioSalesMonthly}
                      newVtexSalesMonthly={newVtexSalesMonthly}
                      newRipleySalesMonthly={newRipleySalesMonthly}
                      newChambasSalesMonthly={newChambasSalesMonthly}
                      newMagentoSalesMonthly={newMagentoSalesMonthly}
                      newWooCommerceSalesMonthly={newWooCommerceSalesMonthly}
                      newShopifySalesMonthly={newShopifySalesMonthly}
                      newMercadoSalesMonthly={newMercadoSalesMonthly}
                      newParisSales={newParisSales}
                      newExitoSalesMonthly={newExitoSalesMonthly}
                      newListaSales={newListaSales}
                      isStackedGraphLoading={isStackedGraphLoading}
                    ></StackedSalesGraph>
                    <CardFooter>
                      <StackedGraphSalesCard
                        channel={cR}
                        vtex={vtexPie}
                        linio={linioPie}
                        magento={magentoPie}
                        mercadoLibre={mercadoPie}
                        exito={exitoPie}
                        ripley={ripleyPie}
                        shopify={shopifyPie}
                        paris={parisPie}
                        wooCommerce={wooPie}
                        chambas={chambasPie}
                        listaTienda={listaPie}
                      ></StackedGraphSalesCard>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          {/* <DownloadReports  printReport={printReport}></DownloadReports> */}
          <div class="text-center" style={{ marginTop: "3em" }}>
            <button
              id="bttnSubmit"
              //className="bttnCompartirReporte"
              style={{
                backgroundColor: "#1D308E",
                textAlign: "center",
                width: "296px",
                height: "64px",
                padding: "22px 81px",
                borderRadius: "33px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                fontWeight: "bold",
                border: "0",
                fontSize: "11px",
              }}
              //  onClick={toggle}
              onClick={showModalHandler}
            >
              <span className="btn-label">
                <img src={iconShareReport} width="19px" />
              </span>
              &nbsp;Compartir Reporte &nbsp;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MtdiReports;
