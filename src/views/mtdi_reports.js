import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "../assets/css/Charts.css";
import "react-datepicker/dist/react-datepicker.css";
import InformationCardsMobile from "components/ChartComponents/InformationCardsMobile";
const moment = require("moment");
import iconFilterButton from "../assets/img/icons/Reports/iconFilters.png";
import iconShareReport from "../assets/img/iconEnviarReporte.png";
import iconNextReport from "../assets/img/iconArrowNext.png";
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
import SalesCard from "components/GraphComponent/Sales-card";
import StackedGraphSalesCard from "components/GraphComponent/Stacked-graph-sales-card";
import StackedGraphOrderCard from "components/GraphComponent/stacked-graph-order-card";
import MixedAndPieChart from "components/GraphComponent/mixed-and-pie-chart";
import PieChart from "components/GraphComponent/pie-chart";
import StackedOrderGraph from "components/GraphComponent/Stacked-order-graph";
import StackedSalesGraph from "components/GraphComponent/stacked-sales-graph";
import ReportCards from "components/GraphComponent/report-cards";
import DownloadReports from "components/GraphComponent/download-reports";
import ViewCardReports from "components/GraphComponent/view-card-reports";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import '@progress/kendo-theme-material/dist/all.css';
// import { Button } from '@progress/kendo-react-buttons';
// import '@progress/kendo-theme-default/dist/all.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
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
 
  //SALES CHANNEL TOTAL SALES STATES
 
  const [cR, setcR] = useState([]);

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
  }, []);
  useEffect(() => {
    fetchResumenGraphDetails();
  }, [channelId]);

  useEffect(() => {
    displaysalesChannelHandler();
  }, [store]);

  useEffect(() => {
    fetchGeneralData();
  }, [channels, channelId, cR, store]);

  
  //FOR CLEANING UP STATES
  useEffect(() => {
    return () => {
      setnewStackedData(null);
      setcR(null);
    };
  }, []);

  const getDateLabels = () => {
    var startDate = moment(selectedDateFrom);
    var endDate = moment(selectedDateTo);
    var result = [];
    if (endDate.isBefore(startDate)) {
      throw "End date must be greater than start date.";
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
    console.log(newData);
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
          label: "Órdenes",
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
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        setnewData(obj.resume.lineAndBarChart);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchGeneralData = () => {  
    const channelsId = cR.map((item) => {
      return item.value;
    });
    let x = channelsId.join(",");
    console.log(x);
    setchannelId(x);
    console.log("hi i am fetching");
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
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
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/resume?channels=${channelId}&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;
    console.log(url);
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(ChannelSelectedForDelete);
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
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
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
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        let allChannelsArray = obj[4].stores.map((item) => {
          return item.channels;
        });
        var flattened = [].concat.apply([], allChannelsArray);

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

        setcR(resArr);
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

        setchannels(salesChannelList);
        setfilteredCountryData(obj);
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
    setfilteredStoreData(val[0].stores);
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
    console.log(selectedChannelsArray);

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
    console.log(filteredChannelArray);
    if (filteredChannelArray.length !== 0) {
      console.log("hi");
      setcR(filteredChannelArray);
      setchannelId(x);
    }
    
  };
  const handleDelete = (item) => {
    console.log(mixedChartsalesData);
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
  return (
    <>
      {isLoading && <SplashScreen message='Reportes'></SplashScreen>}

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
              onClick={showFiltersHandler}>
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
                    Fecha Inicio
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
                    País
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
                    placeholder="&nbsp; Seleccione un país"
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
               {store!==''&& <button
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
                </button>}
                {store===''&& <button
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
                </button>}
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
                totalClaims={totalClaims} >

                </ReportCards>

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
                      <PieChart linioPie = {linioPie} vtexPie={vtexPie} shopifyPie={shopifyPie} ripleyPie={ripleyPie} magentoPie={magentoPie} wooPie={wooPie}  chambasPie={chambasPie} mercadoPie={mercadoPie} exitoPie={exitoPie} parisPie={parisPie} listaPie={listaPie}></PieChart>
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
                        cR={cR}
                        channelId={channelId}
                        stackedDateLabel={stackedDateLabel}
                        storeId={storeId}
                        selectedDateTo={selectedDateTo}
                        selectedDateFrom={selectedDateFrom}
                        countryId={countryId}
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
                  fontWeight:"bold",
                  border:"0",
                  fontSize: "11px"
                }}
                //  onClick={toggle}
                 //onClick={showModalHandler}
              > 
                <span className="btn-label">
                  <img src={iconShareReport} width="19px"/>
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
