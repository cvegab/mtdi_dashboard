import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "./charts.css";
import "react-datepicker/dist/react-datepicker.css";
import iconShareReport from "../assets/img/iconEnviarReporte.png";
import iconNextReport from "../assets/img/iconArrowNext.png";
import FilterMobileButton from "components/ChartComponents/FilterMobileButton";
import InformationCardsMobile from "components/ChartComponents/InformationCardsMobile";
import iconG1 from "../assets/img/icons/Reports/iconG1.png";
import iconG2 from "../assets/img/icons/Reports/iconG2.png";
import iconG3 from "../assets/img/icons/Reports/iconG3.png";
import iconCP1 from "../assets/img/icons/Reports/iconCP1.png";
import iconCP2 from "../assets/img/icons/Reports/iconCP2.png";
import iconCP3 from "../assets/img/icons/Reports/iconCP3.png";
import iconCP4 from "../assets/img/icons/Reports/iconCP4.png";
import iconPP1 from "../assets/img/icons/Reports/iconPP1.png";
import iconPP2 from "../assets/img/icons/Reports/iconPP2.png";
import iconPP3 from "../assets/img/icons/Reports/iconPP3.png";
import iconPP4 from "../assets/img/icons/Reports/iconPP4.png";
import iconEC1 from "../assets/img/icons/Reports/iconEC1.png";
import iconEC2 from "../assets/img/icons/Reports/iconEC2.png";
import iconEC3 from "../assets/img/icons/Reports/iconEC3.png";


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
} from "reactstrap";

// core components
import {
 
  chartExample9,
  chartExample10,
  chartExample100,
  chartExample11,
  chartExample12,
  data1,
} from "variables/charts.js";
import SplashScreen from "components/UI/splash-screen";
registerLocale("es", es);
const barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Ripley",
      backgroundColor: "#F10096",
      stack: "2",
      data: [30, 50, 20, 40, 50, 30, 20, 110, 32, 12, 33, 89],
    },
    {
      label: "Shopify",
      backgroundColor: "#00B6CB",
      stack: "2",
      data: [10, 0, 5, 15, 0, 4, 8, 8, 32, 11, 33, 66],
    },
    {
      label: "Mercado Libre",
      backgroundColor: "#344FD5",
      stack: "2",
      data: [30, 50, 20, 40, 50, 30, 20, 110, 44, 55, 33, 13],
    },
    {
      label: "CornerShop",
      backgroundColor: "#5E35B1",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Linio",
      backgroundColor: "#97D456",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Rappi",
      backgroundColor: "#FFD88C",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "WooCommerce",
      backgroundColor: "#FF6059",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
  ],
};

const barChartOptions = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};
function Charts() {
  let PIE_CHART_DATA = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: [
          "#344FD5",
          "#06CBC1",
          "#FFD88C",
          "#FF6059",
          "#FFFFFF",
        ],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [542, 480, 430, 211],
      },
    ],
  };
  const [pieChartData, setpieChartData] = useState(PIE_CHART_DATA);

  const [totalIncome, settotalIncome] = useState(0);
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

  const [fromDate, setfromDate] = useState(new Date());
  //SALES CHANNEL TOTAL SALES STATES
  const [ripley, setripley] = useState(0);
  const [vtex, setvtex] = useState(0);
  const [linio, setlinio] = useState(0);
  const [mercadoLibre, setmercadoLibre] = useState(0);
  const [exito, setexito] = useState(0);
  const [shopify, setshopify] = useState(0);
  const [paris, setparis] = useState(0);
  const [magento, setmagento] = useState(0);
  const [wooCommerce, setwooCommerce] = useState(0);
  const [chambas, setchambas] = useState(0);
  const [listaTienda, setlistaTienda] = useState(0);
  const [cR, setcR] = useState([{channels:'',channelId:0}]);
  useEffect(() => {
    fetchGeneralData();
    fetchFilterData();
    setpieChart();
  }, []);
  useEffect(() => {
    displaysalesChannelHandler();
  }, [store]);

  useEffect(() => {
    fetchGeneralData();
  }, [
    channels,
    channelId,
    cR,
    ripley,
    vtex,
    linio,
    mercadoLibre,
    exito,
    shopify,
    paris,
    magento,
    wooCommerce,
    chambas,
    listaTienda,
  ]);
  useEffect(() => {}, [channels]);

  const fetchGeneralData = () => {
    console.log(cR);
    const channelsId = cR.map((item) => {
      return item.value;
    });

    let x = channelsId.join(",");
    console.log(x);
    setchannelId(x);
    console.log("hi i am fetching");
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

        let ripleySales = obj.filter((item) => {
          return item.channel == 4;
        });
        let ripleySalesArray = ripleySales.map((item) => {
          return item.total;
        });
        let totalRipleySales = ripleySalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let vtexSales = obj.filter((item) => {
          return item.channel == 7;
        });
        let vtexSalesArray = vtexSales.map((item) => {
          return item.total;
        });
        let totalVtexSales = vtexSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let linioSales = obj.filter((item) => {
          return item.channel == 5;
        });
        let linioSalesArray = linioSales.map((item) => {
          return item.total;
        });
        let totallinioSales = linioSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let mercadoSales = obj.filter((item) => {
          return item.channel == 2;
        });
        let mercadoSalesArray = mercadoSales.map((item) => {
          return item.total;
        });
        let totalmercadoSales = mercadoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let exitoSales = obj.filter((item) => {
          return item.channel == "12";
        });
        let exitoSalesArray = exitoSales.map((item) => {
          return item.total;
        });
        let totalexitoSales = exitoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let shopifySales = obj.filter((item) => {
          return item.channel == 6;
        });
        let shopifySalesArray = shopifySales.map((item) => {
          return item.total;
        });
        let totalshopifySales = shopifySalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let parisSales = obj.filter((item) => {
          return item.channel == 1;
        });
        let parisSalesArray = parisSales.map((item) => {
          return item.total;
        });
        let totalparisSales = parisSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let magentoSales = obj.filter((item) => {
          return item.channel == 9;
        });
        let magentoSalesArray = magentoSales.map((item) => {
          return item.total;
        });
        let totalmagentoSales = magentoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let wooCommerceSales = obj.filter((item) => {
          return item.channel == 3;
        });
        let wooCommerceArray = wooCommerceSales.map((item) => {
          return item.total;
        });
        let totalwooCommerceSales = wooCommerceArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let chambasSales = obj.filter((item) => {
          return item.channel == 11;
        });
        let chambasArray = chambasSales.map((item) => {
          return item.total;
        });
        let totalchambasSales = chambasArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let ListaSales = obj.filter((item) => {
          return item.channel == 8;
        });
        let ListaArray = ListaSales.map((item) => {
          return item.total;
        });
        let totalListaSales = ListaArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        console.log(totalListaSales);
        setripley(totalRipleySales);
        setvtex(totalVtexSales);
        setlinio(totallinioSales);
        setmercadoLibre(totalmercadoSales);
        setexito(totalexitoSales);
        setshopify(totalshopifySales);
        setparis(totalparisSales);
        setmagento(totalmagentoSales);
        setwooCommerce(totalwooCommerceSales);
        setchambas(totalchambasSales);
        console.log(exitoSales);

        console.log(ripley);
        let PIE = {
          labels: [
            "Vtex",
            "Linio",
            "MercadoLibre",
            "Exito",
            "Ripley",
            "Shopify",
            "Paris",
            "Magento",
            "WooCommerce",
            "chambas",
            "ListaTienda",
          ],
          datasets: [
            {
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [
                "#FF6059",
                "#06CBC1",
                "#F10096",
                "purple",
                "#FFD88C",
                "#00B6CB",
                "#00B6CC",
                "#97D456",
                "#344FD5",
                "yellow",
                "red",
              ],
              borderWidth: 0,
              barPercentage: 1.6,
              data: [
                vtex,
                linio,
                mercadoLibre,
                exito,
                ripley,
                shopify,
                paris,
                magento,
                wooCommerce,
                chambas,
                listaTienda,
              ],
            },
          ],
        };
        setpieChartData(PIE);
        var totalIncomeArray = obj.map((item) => {
          return item.total;
        });
        var totalDispatchCostArray = obj.map((item) => {
          return item.shipping_total;
        });
        var gmArray = obj.map((item) => {
          return item.gm;
        });
        let conversionArray = obj.map((item) => {
          return item.conversion;
        });
        let ordersCancelledArray = obj.map((item) => {
          return item.orders_canceled;
        });
        let dteSentArray = obj.map((item) => {
          return item.send_dte_qty;
        });
        let inProcessArray = obj.map((item) => {
          return item.in_process;
        });
        let inPreparationArray = obj.map((item) => {
          return item.in_preparation;
        });
        let readyToShipArray = obj.map((item) => {
          return item.ready_to_ship;
        });
        let onThewayarray = obj.map((item) => {
          return item.in_way;
        });
        let orderQuantityArray = obj.map((item) => {
          return item.orders_qty;
        });
        let reviewArray = obj.map((item) => {
          return item.reviews;
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

        //  console.log(totalDispatchCostArray);
        // console.log(sumOfTotalDispatch);
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
        // console.log(obj[0].total);
        // //NEW API CODE
        // settotalIncome(obj[0].total);
        // setdispatchCost(obj[0].shipping_total);
        // setgm(obj[0].gm);
        // setConversion(obj[0].conversion);
        //OLD API CODE
        // console.log(fromDate.toISOString().slice(0, 10));
        // const d = fromDate.toISOString().slice(0, 10);
        // var z = obj[0].filter((item) => {
        //   return item.date_created === "2022-01-03";
        // });
        // console.log(z);
        // if (z === undefined) {
        //   settotalIncome(0);
        //   setdispatchCost(0);
        // }
        // settotalIncome(z[0].total);
        // setdispatchCost(z[0].shipping_total);
      })
      .catch((error) => console.log("error", error));
  };
  const fetchFilterData = async () => {
    console.log("2");
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
        console.log(result);
        var obj = JSON.parse(result);
        console.log(obj[4].stores);
        let allChannelsArray = obj[4].stores.map((item) => {
          return item.channels;
        });
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
        let allSalesChannels = flattened.map((item) => {
          return item.channel;
        });
        console.log(allSalesChannels);
        let salesChannelList = allSalesChannels.filter(function (
          item,
          index,
          inputArray
        ) {
          return inputArray.indexOf(item) == index;
        });

        setchannels(salesChannelList);

        let PIE = {
          labels: salesChannelList,
          datasets: [
            {
              label: "Emails",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#344FD5", "#06CBC1", "#FFD88C", "#FF6059"],
              borderWidth: 0,
              barPercentage: 1.6,
              data: [ripley, 480, 430, 211],
            },
          ],
        };

        setpieChartData(PIE);
        let countryArray = [];

        setfilteredCountryData(obj);
        // setfilteredStoreData(y[0].stores);
      })
      .catch((error) => console.log("error", error));
  };
  const setpieChart = () => {
    setpieChartData({
      labels: channels,
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#344FD5", "#06CBC1", "#FFD88C", "#FF6059"],
          borderWidth: 0,
          barPercentage: 1.6,
          data: [ripley, 480, 430, 211],
        },
      ],
    });
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

    const selectedChannels = selectedChannelsArray.map((item) => {
      return item;
    });
    console.log(selectedChannels);
    setfilteredChannelArray(selectedChannels);
    displaysalesChannelHandler();
    // console.log(filteredChannelArray);
    // const selectedChannelsArray = selectedStoreData[0].channels;
    // const selectedChannels = selectedChannelsArray.map((item) => {
    //   return item;
    // });
  };
  const applyFiltersButtonhandler = () => {
    fetchGeneralData();
  };
  const displaysalesChannelHandler = () => {
    console.log(filteredChannelArray);
    const channels = filteredChannelArray.map((item) => {
      // return item.channel;
      return item;
    });
    const channelsId = filteredChannelArray.map((item) => {
      return item.value;
    });

    let x = channelsId.join(",");
    setchannelId(x);
   setcR(channels);
    // setchannels(channels);
    //I HAVE COMMENTED THIS BECAUSE I AM TESTING WITH CR;
  };
  const handleDelete = (item) => {
    console.log(item);
    // const channelsId = filteredChannelArray.map((item) => {
    //   return item.value;
    // });
    // let y = [...channelsId];
    // let z = [];
    // if (item === "MercadoLibre") {
    //   z = y.filter((i) => i !== 2);
    // }
    // if (item === "Vtex") {
    //   z = y.filter((i) => i !== 7);
    // }
    // //  console.log(y.join(","));
    // console.log(z);
    // console.log(channelsId);
    let x = cR.filter((i) => i !== item);
    setcR(x);
    console.log(x.value);
    // setchannels(x.channel);
    // setchannelId(x.value);
    // console.log(channelId);
    // console.log(channels);
  };
  return (
    <>
      {isLoading && <SplashScreen></SplashScreen>}
      {!isLoading && (
        <div className="content">
          <h5
            className="titleTable"
            style={{
              color: "#C4C4C4",
              width: "450px",
              fontSize: "10px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Dashboard: Vista Administrador
          </h5>
          <p
            classname="textNameTable"
            style={{
              color: "black",
              width: "450px",
              fontSize: "20px",
              fontWeight: "800",
              marginLeft: "1em",
            }}
          >
            Tu tienda
          </p>
          <Col md="12">
            <CardBody>
              <Button
                style={{
                  borderRadius: "17px",
                  backgroundColor: "#1D308E",
                  color: "white",
                  width: "234px",
                  height: "72px",
                  fontWeight: "700px",
                }}
                outline
              >
                <span className="btn-label">
                  <i className="nc-icon nc-layout-11" />
                </span>
                General
              </Button>

              {/* {/* <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-shop" />
                  </span>
                  Tiendas        
                </Button> */}

              {/* <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-settings-gear-65" />
                  </span>
                  Backoffice    
                </Button>
                 
                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-box-2" />
                  </span>
                 Fulfillment        
                </Button>
                 

                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-single-02" />
                  </span>
                 Cliente    
                </Button>
                   */}
            </CardBody>
          </Col>
          <Col md="12">
          <label htmlFor="select-country">
              <h5
                style={{
                  color: "black",
                  width: "30px",
                  fontSize: "12px",
                  fontWeight: "800",
                  marginLeft: "1em",
                  marginBottom: "0px",
                }}
              >
                País
              </h5>
              <Select
                labelId="select-country"
                id="select-country"
                style={{
                  width: 150,
                  marginLeft: "1em",
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
                {Array.from(new Set(filteredCountryData.map((obj) => obj))).map(
                  (period) => {
                    return (
                      <MenuItem value={period.country}>
                        {period.country}
                      </MenuItem>
                    );
                  }
                )}
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
                  width: 160,
                  fontSize: "10px",
                  marginLeft: "1em",
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
                Fecha Desde
              </h5>

              <DatePicker
                id="datepickerCalendar"
                type="number"
                // selected={fromDate}
                // onChange={(date) => setfromDate(date)}
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
                Fecha Hasta
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
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "12px",
                width: "42px",
                height: "42px",
                left: "1006px",
                top: "405px",
                background: "#EDEEF6",
                borderRadius: "17px",
                border: "none",
              }}
              onClick={displaysalesChannelHandler}
            >
              +
            </button>

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
          </Col>
          <br></br>

          {/* GENERAL DATA */}
          <Col
            md="12"
            style={{
              backgroundColor: "white",
              width: "1040px",
              height: "156px",
              left: "118px",
              top: "669px",
              borderRadius: "12px",
            }}
          >
            <p
              classname="textNameTable"
              style={{
                color: "black",
                width: "450px",
                fontSize: "20px",
                fontWeight: "800",
                marginLeft: "1em",
                paddingTop: "20px",
              }}
            >
              Datos Generales
            </p>

            <Row style={{ padding: "10px", paddingLeft: "20px" }}>

              {/* TOTAL INCOME */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG1} width="30px" />
                    &nbsp;Total Ingresos
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {/* $20.154.365 &nbsp; */}
                    {totalIncome} &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      &nbsp;+4.5%
                    </span>
                  </h5>
                </div>
                {/* DISPATCH COST */}
              </Col>
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG2} width="30px" />
                    &nbsp; Costo Despacho
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {/* $1.253.369 &nbsp; */}
                    {dispatchCost} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -3%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* GM */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG2} width="30px" />
                    &nbsp; GM
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {/* $1.253.369 &nbsp; */}
                    {gm} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -6%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* CONVERSION */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG3} width="30px" />
                    &nbsp; Conversión
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {/* $1.253.369 &nbsp; */}
                    {conversion} &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
          <br></br>
          <br></br>
          {/* ORDER PROCESSING */}
          <Col
            md="12"
            style={{
              backgroundColor: "white",
              width: "1040px",
              height: "156px",
              left: "118px",
              top: "669px",
              borderRadius: "12px",
            }}
          >
            <p
              classname="textNameTable"
              style={{
                color: "black",
                width: "450px",
                fontSize: "20px",
                fontWeight: "800",
                marginLeft: "1em",
                paddingTop: "20px",
              }}
            >
              Procesamiento de pedidos
            </p>

            <Row style={{ padding: "10px", paddingLeft: "20px" }}>
              {/* ORDERS */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP1} width="30px" />
                    &nbsp; Pedidos
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {totalOrders} &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
                {/* ORDERS CANCELLED */}
              </Col>
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP2} width="30px" />
                    &nbsp; Cancelados
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {totalCancelledOrders} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -3%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* DTE SENT */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP3} width="30px" />
                    &nbsp;DTE enviado
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {totalDte} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -6%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* DELIVERED */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP4} width="30px" />
                    &nbsp; Entregados
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    $1.253.369 &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
          <br></br>
          <br></br>
          {/* ORDER FULFILMENT */}
          <Col
            md="12"
            style={{
              backgroundColor: "white",
              width: "1040px",
              height: "156px",
              left: "118px",
              top: "669px",
              borderRadius: "12px",
            }}
          >
            <p
              classname="textNameTable"
              style={{
                color: "black",
                width: "450px",
                fontSize: "20px",
                fontWeight: "800",
                marginLeft: "1em",
                paddingTop: "20px",
              }}
            >
              Cumplimiento de pedidos
            </p>

            <Row style={{ padding: "10px", paddingLeft: "20px" }}>
              {/* IN PROCESS */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                  <img src={iconCP1} width="30px" />
                  &nbsp;  En Proceso
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {inProcess} &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
                {/* PREPARATION */}
              </Col>
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP2} width="30px" />
                    &nbsp;Preparación
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {inPreparation} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -3%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* READY TO DISPATCH */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP3} width="30px" />
                    &nbsp; Listo para despacho
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {readyToShip} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -6%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* READY TO DELIVER */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                  <img src={iconCP4} width="30px" />
                  &nbsp; Próximo a llegar
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {onTheWay} &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Col>
          <br></br>
          <br></br>
          {/* CLIENT EXPERIENCE */}
          <Col
            md="12"
            style={{
              backgroundColor: "white",
              width: "1040px",
              height: "156px",
              left: "118px",
              top: "669px",
              borderRadius: "12px",
            }}
          >
            <p
              classname="textNameTable"
              style={{
                color: "black",
                width: "450px",
                fontSize: "20px",
                fontWeight: "800",
                marginLeft: "1em",
                paddingTop: "20px",
              }}
            >
              Experiencia del cliente
            </p>

            <Row style={{ padding: "10px", paddingLeft: "20px" }}>
              {/* NPS */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconEC1} width="30px" />
                    &nbsp; NPS
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    325 &nbsp;
                    <span
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +4.5%
                    </span>
                  </h5>
                </div>
                {/* REVIEWS */}
              </Col>
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                  <img src={iconEC2} width="30px" />
                  &nbsp;Reviews
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    {reviews} &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -3%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* claims */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                  <img src={iconEC3} width="22px" />
                  &nbsp;Reclamos
                  </p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    500 &nbsp;
                    <span
                      style={{
                        color: "red",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      -6%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* READY TO DELIVER */}
              {/* <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Proximo a llegar</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "#33D69F",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    +4.5%
                  </span>
                </h5>
              </div>
            </Col> */}
            </Row>
          </Col>
          <br></br>
          <br></br>
          <Row>
            <Col md="8">
              <Card className="car-chart">
                <CardHeader>
                  <CardTitle>
                    <strong>Resumen general de venta y órdenes</strong>
                  </CardTitle>
                  {/* <p className="card-category"> </p> */}
                </CardHeader>
                <CardBody>
                  <br></br>
                  <br></br>
                  <Bar
                    data={chartExample100.data}
                    options={chartExample100.options}
                  />
                </CardBody>
                <br></br>
                <br></br>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <strong>Participación canal de venta</strong>
                  </CardTitle>
                  {/* <p className="card-category">Last Campaign Performance</p> */}
                </CardHeader>
                <CardBody style={{ height: "342px" }}>
                  <Pie
                    data={pieChartData}
                    options={chartExample11.options}
                    width={456}
                    height={190}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#344FD5",
                        backgroundColor: "#344FD5",
                        borderRadius: "8px",
                      }}
                    />
                    Vtex
                    {/* ["#344FD5", "#06CBC1","#F10096","#FF6059","#FFD88C","#00B6CB","#00B6CC","#97D456","#FF6059",'yellow','red'], */}
                    <p className="card-category">${vtex}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FF6059",
                        backgroundColor: "#FF6059",
                        borderRadius: "8px",
                      }}
                    />
                    Linio
                    <p className="card-category">${linio}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#F10096",
                        backgroundColor: "#F10096",
                        borderRadius: "8px",
                      }}
                    />
                    MercadoLibre
                    <p className="card-category">${mercadoLibre}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "purple",
                        backgroundColor: "purple",
                        borderRadius: "8px",
                      }}
                    />
                    Exito
                    <p className="card-category">${exito}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FFD88C",
                        backgroundColor: "#FFD88C",
                        borderRadius: "8px",
                      }}
                    />
                    Ripley
                    <p className="card-category">${ripley}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#00B6CB",
                        backgroundColor: "#00B6CB",
                        borderRadius: "8px",
                      }}
                    />
                    Shopify
                    <p className="card-category">${shopify}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#00B6CC",
                        backgroundColor: "#00B6CC",
                        borderRadius: "8px",
                      }}
                    />
                    Paris
                    <p className="card-category">${paris}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#97D456",
                        backgroundColor: "#97D456",
                        borderRadius: "8px",
                      }}
                    />
                    Magento
                    <p className="card-category">${magento}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FF6059",
                        backgroundColor: "#FF6059",
                        borderRadius: "8px",
                      }}
                    />
                    Woo Commerce
                    <p className="card-category">${wooCommerce}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "yellow",
                        backgroundColor: "yellow",
                        borderRadius: "8px",
                      }}
                    />
                    Chambas
                    <p className="card-category">${chambas}</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "red",
                        backgroundColor: "red",
                        borderRadius: "8px",
                      }}
                    />
                    Lista Tienda
                    <p className="card-category">${listaTienda}</p>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Row>
              <Col md="12">
                <Card className="card-chart">
                  <CardHeader>
                    <strong>Órdenes por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar data={barChartData} options={barChartOptions} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col md="12">
                <Card className="card-chart">
                  <CardHeader>
                    <strong>Ingresos por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar data={barChartData} options={barChartOptions} />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample9.data}
                  options={chartExample9.options}
                />
              </CardBody>
            </Card>
          </Col> */}
          </Row>
          <Row>
            {/* <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>Views</CardTitle>
                <p className="card-category">Bar Chart</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={chartExample10.data}
                  options={chartExample10.options}
                />
              </CardBody>
            </Card>
          </Col> */}
          </Row>
          {/* <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle>Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample12.data}
                  options={chartExample12.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" />
                  Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
        </div>
      )}
    </>
  );
}

export default Charts;