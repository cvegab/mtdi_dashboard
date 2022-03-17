import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "../assets/css/Charts.css";
import "react-datepicker/dist/react-datepicker.css";
import iconShareReport from "../assets/img/iconEnviarReporte.png";
import iconNextReport from "../assets/img/iconArrowNext.png";
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
const moment = require("moment");
import iconFilterButton from "../assets/img/icons/Reports/iconFilters.png";
//Generate Report PDF
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



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
import StackedGraphOrderCard from 'components/GraphComponent/stacked-graph-order-card';
import MixedAndPieChart from "components/GraphComponent/mixed-and-pie-chart";
import PieChart from "components/GraphComponent/pie-chart";
registerLocale("es", es);

const barChartData = {
  labels: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  datasets: [
    {
      label: "Ripley",
      backgroundColor: "#F10096",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data: [30, 50, 20, 40, 50, 30, 20, 110, 32, 12, 33, 89],
    },
    {
      label: "Shopify",
      backgroundColor: "#00B6CB",
      stack: "2",
      borderRadius: 6,
      data: [10, 0, 5, 15, 0, 4, 8, 8, 32, 11, 33, 66],
    },
    {
      label: "Mercadolibre",
      backgroundColor: "#344FD5",
      stack: "2",
      borderRadius: 6,
      data: [30, 50, 20, 40, 50, 30, 20, 110, 44, 55, 33, 13],
    },
    {
      label: "CornerShop",
      backgroundColor: "#5E35B1",
      stack: "2",
      borderRadius: 6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Linio",
      backgroundColor: "#97D456",
      stack: "2",
      borderRadius: 6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Rappi",
      backgroundColor: "#FFD88C",
      stack: "2",
      borderRadius: 6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "WooCommerce",
      backgroundColor: "#FF6059",
      borderRadius: 6,
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
  ],
};


const data11 = [1, 8, 5, 9, 20, 10, 15];
const data2 = [209, 3, 10, 5, 5, 9, 10, 10];

function MtdiReports() {
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
 
  const [mixedGraphDatas, setmixedGraphDatas] = useState([]);
  const [newData, setnewData] = useState([]);
  const [newStackedData, setnewStackedData] = useState([]);
  const [redefinedChannel, setredefinedChannel] = useState([]);
  const [mixedGraphLabels, setmixedGraphLabels] = useState([]);
  const [pageFullyLoaded, setpageFullyLoaded] = useState(false);
  const [mixedGraphChannels, setmixedGraphChannels] = useState([]);
  const [pieChartData, setpieChartData] = useState(PIE_CHART_DATA);
  const [deleteChannelArray, setdeleteChannelArray] = useState([
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
  ]);
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
  const [BarLineGraphLabels, setBarLineGraphLabels] = useState([]);
  const [mixedChartsalesData, setmixedChartsalesData] = useState([]);
  const [mixedChartOrdersData, setmixedChartOrdersData] = useState([]);
  const [ChannelSelectedForDelete, setChannelSelectedForDelete] =
    useState(undefined);
  const [stackedChartData, setstackedChartData] = useState(barChartData);
  const [stackedSalesGraph, setstackedSalesGraph] = useState(barChartData);
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
  const [StackedisLoading, setStackedisLoading] = useState(false);
  const [totalCancelledOrders, settotalCancelledOrders] = useState(0);

  const [fromDate, setfromDate] = useState(new Date());
  const [showFilter, setshowFilter] = useState(false);
  const printReport = React.useRef();
  const [isDownloadingReports, setisDownloadingReports] = useState(false);
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
  const [linioMonthly, setlinioMonthly] = useState([]);
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
  const [newWooCommerceSalesMonthly, setnewWooCommerceSalesMonthly] = useState([]);
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
  const [ripleyStackedSalesState, setripleyStackedSalesState] = useState([]);
  const [ripleyStackedOrdersState, setripleyStackedOrdersState] = useState([]);
  const [shopifyStackedSalesState, setshopifyStackedSalesState] = useState([]);
  const [shopifyStackedOrdersState, setshopifyStackedOrdersState] = useState(
    []
  );
  const [magentoStackedSalesState, setmagentoStackedSalesState] = useState([]);
  const [magentoStackedOrdersState, setmagentoStackedOrdersState] = useState(
    []
  );
  const [linioStackedSalesState, setlinioStackedSalesState] = useState([]);
  const [linioStackedOrdersState, setlinioStackedOrdersState] = useState([]);
  const [mercadoStackedSalesState, setmercadoStackedSalesState] = useState([]);
  const [mercadoStackedOrdersState, setmercadoStackedOrdersState] = useState(
    []
  );
  const [chambasStackedSalesState, setchambasStackedSalesState] = useState([]);
  const [chambasStackedOrdersState, setchambasStackedOrdersState] = useState(
    []
  );
  const [parisStackedSalesState, setparisStackedSalesState] = useState([]);
  const [parisStackedOrdersState, setparisStackedOrdersState] = useState([]);
  const [vtexStackedSalesState, setvtexStackedSalesState] = useState([]);
  const [vtexStackedOrdersState, setvtexStackedOrdersState] = useState([]);
  const [wooCommerceStackedSalesState, setwooCommerceStackedSalesState] =
    useState([]);
  const [wooCommerceStackedOrdersState, setwooCommerceStackedOrdersState] =
    useState([]);
  const [listaStackedSalesState, setlistaStackedSalesState] = useState([]);
  const [listaStackedOrdersState, setlistaStackedOrdersState] = useState([]);
  const [exitoStackedSalesState, setexitoStackedSalesState] = useState([]);
  const [exitoStackedOrdersState, setexitoStackedOrdersState] = useState([]);
  const [ripleyLength, setripleyLength] = useState();
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
  // const handleLoading = () => {
  //   setpageFullyLoaded(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("load", handleLoading);
  //   return () => window.removeEventListener("load", handleLoading);
  // }, []);

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
    
  }, [channels, channelId, cR,store]);
 
  useEffect(() => {
    setStackedGraphForOrders();
  }, [stackedDateLabel,newlinioMonthly,newVtexMonthly,newRipleyMonthly,newChambasMonthly,newMagentoMonthly,newWooCommerceMonthly,newShopifyMonthly,newMercadoOrdersMonthly,newParisOrders,newExtitoOrders,newListaOrders]);
  useEffect(() => {
    setStackedGraphForSales();
  }, [stackedDateLabel,newlinioSalesMonthly,newVtexSalesMonthly,newRipleySalesMonthly,newChambasSalesMonthly,newMagentoSalesMonthly,newWooCommerceSalesMonthly,newShopifySalesMonthly,newMercadoSalesMonthly,newParisSales,newExitoSalesMonthly,newListaSales]);
 //FOR CLEANING UP STATES
  useEffect(() => {
    return () => {
      setnewStackedData(null);
      setcR(null);
    }
}, []);

  const setStackedGraphForSales = ()=>{
    let MONTLY_SALES_GRAPH = {
      labels: stackedDateLabel,

      datasets: [
        {
          label: "Ripley",
          backgroundColor: "#FFD88C",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data:newRipleySalesMonthly,
          barThickness: 30,
        },
        {
          label: "Chambas",
          backgroundColor: "#EDA4D1",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newChambasSalesMonthly,
          barThickness: 30,
        },
        {
          label: "Linio",
          backgroundColor: "#F29A32",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newlinioSalesMonthly,
          barThickness: 30,
        },
        {
          label: "Magento",
          backgroundColor: "#FF6059",
          borderRadius: "20px",
          borderRadius: 6,
          stack: "2",
          data:newMagentoSalesMonthly,
          barThickness: 30,
        },
        {
          label: "ListaTienda",
          backgroundColor: "blue",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newListaSales,
          barThickness: 30,
        },
        {
          label: "WooCommerce",
          backgroundColor: "purple",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newWooCommerceSalesMonthly,
        },
        {
          label: "Paris",
          backgroundColor: "#00B6CB",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newParisSales,
          barThickness: 30,
        },
        {
          label: "Shopify",
          backgroundColor: "#97D456",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newShopifySalesMonthly,
          barThickness: 30,
        },
        {
          label: "Vtex",
          backgroundColor: "#F10096",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newVtexSalesMonthly,
          barThickness: 30,
        },
        {
          label: "Mercadolibre",
          backgroundColor: "yellow",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newMercadoSalesMonthly,
          barThickness: 30,
        },
        {
          label: "Exito",
          backgroundColor: "#E4C41B",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newExitoSalesMonthly,
          barThickness: 30,
        },
      ],

      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            gridLines: { drawBorder: false, lineWidth: 0 },
            ticks: {
              color: "#9f9f9f",
              // beginAtZero: true,
              maxTicksLimit: 6,
              fontSize: 40,
              // padding: 20,
              callback: function (data) {
                let number = data;
                let totalValueFormatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return totalValueFormatted;
              },
            },
          },
          grid: {
            zeroLineColor: "transparent",
            display: false,
            drawBorder: false,
            color: "#9f9f9f",
          },

          x: {
            grid: {
              display: false,
              drawBorder: false,
              zeroLineColor: "transparent",
            },
            ticks: {
              font: {
                size: 10,
              },
              padding: 1,
              color: "#9f9f9f",
            },
          },
        },
      },
    };
   setstackedSalesGraph(MONTLY_SALES_GRAPH);
  }
  const setStackedGraphForOrders = () => {
   
    let MONTLY_ORDER_GRAPH = {
      labels: stackedDateLabel,
      datasets: [
        {
          label: "Ripley",
          backgroundColor: "#FFD88C",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data:newRipleyMonthly,
          barThickness: 30,
        },
        {
          label: "Vtex",
          backgroundColor: "#F10096",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newVtexMonthly,
          barThickness: 30,
        },
        {
          label: "Shopify",
          backgroundColor: "#97D456",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newShopifyMonthly,
          barThickness: 30,
        },
        {
          label: "Magento",
          backgroundColor: "#FF6059",
          borderRadius: "20px",
          borderRadius: 6,
          stack: "2",
          data:newMagentoMonthly,
          barThickness: 30,
        },
        {
          label: "Mercadolibre",
          backgroundColor: "yellow",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newMercadoOrdersMonthly,
          barThickness: 30,
        },
        {
          label: "Paris",
          backgroundColor: "#00B6CB",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newParisOrders,
          barThickness: 30,
        },
        {
          label: "Exito",
          backgroundColor: "#E4C41B",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newExtitoOrders,
          barThickness: 30,
        },
        {
          label: "Linio",
          backgroundColor: "#F29A32",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newlinioMonthly,
          barThickness: 30,
        },
       
        {
          label: "Chambas",
          backgroundColor: "#EDA4D1",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newChambasMonthly,
          barThickness: 30,
        },
        {
          label: "ListaTienda",
          backgroundColor: "blue",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newListaOrders,
          barThickness: 30,
        },
        {
          label: "WooCommerce",
          backgroundColor: "purple",
          borderRadius: "20px",
          borderRadius: 6,
          barThickness: 30,
          stack: "2",
          data: newWooCommerceMonthly,
        },
      ],
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },

        scales: {
          y: {
            gridLines: { drawBorder: false, lineWidth: 0 },
            ticks: {
              color: "#9f9f9f",
              // beginAtZero: true,
              maxTicksLimit: 6,
              fontSize: 100,
              // padding: 20,
            },
          },
          grid: {
            zeroLineColor: "transparent",
            display: false,
            drawBorder: false,
            color: "#9f9f9f",
          },

          x: {
            grid: {
              display: false,
              drawBorder: false,
              zeroLineColor: "transparent",
            },
            ticks: {
              font: {
                size: 10,
              },
              padding: 0,
              color: "#9f9f9f",
            },
          },
        },
      },
    };
    setstackedChartData(MONTLY_ORDER_GRAPH);
  };

  const fetchStackedGraphForOrders = () => {
    console.log(cR);
    let newChannelList = cR.map(item=>{
      return item.channel;
    })
    console.log(newChannelList);
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
    console.log(url);

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(obj);
        console.log(redefinedChannel);
        console.log(newChannelList);
       
        if(newChannelList.length===0){
          newChannelList = ['Vtex', 'Linio', 'MercadoLibre', 'Exito', 'Ripley', 'Shopify', 'Paris', 'Magento', 'Woocommerce', 'Chambas', 'ListaTienda'];
        }
        let linio = [];
       if(newChannelList.includes('Linio')){
        linio = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Linio;
            });
             console.log(linio[0].Linio);
            setnewlinioMonthly(linio[0].Linio);
       }
       if(!newChannelList.includes('Linio')){
        setnewlinioMonthly(0);
       }
       let Vtex = [];
       if(newChannelList.includes('Vtex')){
        Vtex = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Vtex;
            });
             console.log(Vtex[0].Vtex);
            setnewVtexMonthly(Vtex[0].Vtex);
       }
       if(!newChannelList.includes('Vtex')){
        setnewVtexMonthly(0);
       }
       let ripley = [];
       if(newChannelList.includes('Ripley')){
        ripley = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Ripley;
            });
             console.log(ripley[0].Ripley);
            setnewRipleyMonthly(ripley[0].Ripley);
       }
       if(!newChannelList.includes('Ripley')){
       setnewRipleyMonthly(0);
       }
      let chambas = [];
      if(newChannelList.includes('Chambas')){
        chambas = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Chambas;
            });
             console.log(chambas[0].Chambas);
            setnewChambasMonthly(chambas[0].Chambas);
       }
       if(!newChannelList.includes('Chambas')){
        setnewChambasMonthly(0);
       }
       let magento = [];
       if(newChannelList.includes('Magento')){
        magento = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Magento;
            });
             console.log(magento[0].Magento);
           setnewMagentoMonthly(magento[0].Magento);
       }
       if(!newChannelList.includes('Magento')){
       setnewMagentoMonthly(0);
       }
       let woo = [];
       if(newChannelList.includes('Woocommerce')){
        woo = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Woocommerce;
            });
             console.log(woo[0].Woocommerce);
           setnewWooCommerceMonthly(woo[0].Woocommerce);
       }
       if(!newChannelList.includes('Woocommerce')){
        setnewWooCommerceMonthly(0);
       }
       let shopify = [];
       if(newChannelList.includes('Shopify')){
       shopify = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Shopify;
            });
             console.log(shopify[0].Shopify);
           setnewShopifyMonthly(shopify[0].Shopify);
       }
       if(!newChannelList.includes('Shopify')){
      setnewShopifyMonthly(0);
       }
       let  mer=[];
       if(newChannelList.includes('MercadoLibre')){
       mer = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.MercadoLibre;
            });
             
           setnewMercadoOrdersMonthly(mer[0].MercadoLibre);
       }
       if(!newChannelList.includes('MercadoLibre')){
        setnewMercadoOrdersMonthly(0);
       }  
       let  pari=[];
       if(newChannelList.includes('Paris')){
       pari = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Paris;
            });
             
           setnewParisOrders(pari[0].Paris);
       }
       if(!newChannelList.includes('Paris')){
      setnewParisOrders(0);
       }   
       let  exi=[];
       if(newChannelList.includes('Exito')){
       exi = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.Exito;
            });
             
          setnewExtitoOrders(exi[0].Exito);
       }
       if(!newChannelList.includes('Exito')){
    setnewExtitoOrders(0);
       }  
       let  lista=[];
       if(newChannelList.includes('ListaTienda')){
       lista = obj.resume.stackedOrderQtyGraphByMonth.filter((item) => {
              return item.ListaTienda;
            });
             
          setnewListaOrders(lista[0].ListaTienda);
       }
       if(!newChannelList.includes('ListaTienda')){
   setnewListaOrders(0);
       }     
      })
      .catch((error) => console.log("error", error));
  };

  const fetchStackedGraphForSales = ()=> {
    console.log(cR);
    let newChannelList = cR.map(item=>{
      return item.channel;
    })
    console.log(newChannelList);
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
    console.log(url);

  fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
         console.log(newChannelList);
         if(newChannelList.length===0){
           newChannelList = ['Vtex', 'Linio', 'MercadoLibre', 'Exito', 'Ripley', 'Shopify', 'Paris', 'Magento', 'Woocommerce', 'Chambas', 'ListaTienda'];
         }
        
       // NEW LOGIC
        let linio = [];
        if(newChannelList.includes('Linio')){
              linio = obj.resume.stackedSalesGraphByMonth.filter((item) => {
                    return item.Linio;
                  });
                   console.log(linio[0].Linio);
                 setnewlinioSalesMonthly(linio[0].Linio);
             }
             if(!newChannelList.includes('Linio')){
             setnewlinioSalesMonthly(0);
             }
          
                let Vtex = [];
       if(newChannelList.includes('Vtex')){
        Vtex = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Vtex;
            });
             
            setnewVtexSalesMonthly(Vtex[0].Vtex);
       }
       if(!newChannelList.includes('Vtex')){
       setnewVtexSalesMonthly(0);
       }
       let ripley = [];
       if(newChannelList.includes('Ripley')){
        ripley = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Ripley;
            });
           
           setnewRipleySalesMonthly(ripley[0].Ripley);
       }
       if(!newChannelList.includes('Ripley')){
       setnewRipleySalesMonthly(0);
       }
      let chambas = [];
      if(newChannelList.includes('Chambas')){
        chambas = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Chambas;
            });
             console.log(chambas[0].Chambas);
           setnewChambasSalesMonthly(chambas[0].Chambas);
       }
       if(!newChannelList.includes('Chambas')){
       setnewChambasSalesMonthly(0);
       }
       let magento = [];
       if(newChannelList.includes('Magento')){
        magento = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Magento;
            });
             console.log(magento[0].Magento);
           setnewMagentoSalesMonthly(magento[0].Magento);
       }
       if(!newChannelList.includes('Magento')){
      setnewMagentoSalesMonthly(0);
       }
       let woo = [];
       if(newChannelList.includes('Woocommerce')){
        woo = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Woocommerce;
            });
           
           setnewWooCommerceSalesMonthly(woo[0].Woocommerce);
       }
       if(!newChannelList.includes('Woocommerce')){
     setnewWooCommerceSalesMonthly(0);
       }
       let shopify = [];
       if(newChannelList.includes('Shopify')){
       shopify = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Shopify;
            });

          setnewShopifySalesMonthly(shopify[0].Shopify);
       }
       if(!newChannelList.includes('Shopify')){
     setnewShopifySalesMonthly(0);
       }
     let  mer=[];
       if(newChannelList.includes('MercadoLibre')){
       mer = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.MercadoLibre;
            });
             
           setnewMercadoSalesMonthly(mer[0].MercadoLibre);
       }
       if(!newChannelList.includes('MercadoLibre')){
       setnewMercadoSalesMonthly(0);
       }    
       let  pari=[];
       if(newChannelList.includes('Paris')){
       pari = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Paris;
            });
             
           setnewParisSales(pari[0].Paris);
       }
       if(!newChannelList.includes('Paris')){
      setnewParisSales(0);
       }    
       let  exi=[];
       if(newChannelList.includes('Exito')){
       exi = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.Exito;
            });
             
          setnewExitoSalesMonthly(exi[0].Exito);
       }
       if(!newChannelList.includes('Exito')){
     setnewExitoSalesMonthly(0);
       }   
       let  lista=[];
       if(newChannelList.includes('ListaTienda')){
       lista = obj.resume.stackedSalesGraphByMonth.filter((item) => {
              return item.ListaTienda;
            });
             
          setnewListaSales(lista[0].ListaTienda);
       }
       if(!newChannelList.includes('ListaTienda')){
    setnewListaSales(0);
       } 
      })
      .catch((error) => console.log("error", error));
  }; 
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

    const date = new Date("2021-08-01");
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
 
  useEffect(() => {
 setpieChartGraph();
  }, [linioPie,vtexPie,shopifyPie,ripleyPie,magentoPie,wooPie,chambasPie,mercadoPie,exitoPie,parisPie,listaPie])
  const setpieChartGraph = ()=>{
    let PIE = {
      labels: [
        "Vtex",
        "Linio",
        "Mercadolibre",
        "Exito",
        "Ripley",
        "Shopify",
        "Paris",
        "Magento",
        "WooCommerce",
        "Chambas",
        "ListaTienda",
      ],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [
            "#F10096",
            "#F29A32",
            "yellow",
            "#E4C41B",
            "#FFD88C",
            "#97D456",
            "#00B6CB",
            "#FF6059",
            "purple",
            "#EDA4D1",
            "blue",
          ],
          borderWidth: 0,
          barPercentage: 1.6,
          data: [
          vtexPie,
          linioPie,
        mercadoPie,
          exitoPie,
          ripleyPie,
          shopifyPie,
         parisPie,
          magentoPie,
          wooPie,
        chambasPie,
        listaPie

          ],
        },
      ],
      options: {
        plugins: {
          legend: {
            display: false,
          },

          tooltips: {
            enabled: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: "rgba(255,255,255,0.05)",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    };
    setpieChartData(PIE);

  }
  const fetchPieChartDetails = ()=>{
    console.log(cR);
    let newChannelList = cR.map(item=>{
      return item.channel;
    })
    console.log(newChannelList);
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
        console.log(obj.resume.stackedSalesGraphTotal);
        if(newChannelList.includes('Linio')){
        let linio;
        linio = obj.resume.stackedSalesGraphTotal.filter((item) => {
          return item.Linio;
        });
       
        setlinioPie(linio[0].Linio);
      } if(!newChannelList.includes('Linio')){
        setlinioPie(0);
      }
      let vtex;
      if(newChannelList.includes('Vtex')){
       
        vtex = obj.resume.stackedSalesGraphTotal.filter((item) => {
          return item.Vtex;
        });
       
        setvtexPie(vtex[0].Vtex);
      } if(!newChannelList.includes('Vtex')){
      setvtexPie(0);
      }
      let shopify;
      if(newChannelList.includes('Shopify')){
      shopify = obj.resume.stackedSalesGraphTotal.filter((item) => {
             return item.Shopify;
           });
          
          setshopifyPie(shopify[0].Shopify);
      }
      if(!newChannelList.includes('Shopify')){
      setshopifyPie(0);
      }
      let ripley;
      if(newChannelList.includes('Ripley')){
       ripley = obj.resume.stackedSalesGraphTotal.filter((item) => {
             return item.Ripley;
           });
            
           setripleyPie(ripley[0].Ripley);
      }
      if(!newChannelList.includes('Ripley')){
     setripleyPie(0);
      }
      let magento;
       if(newChannelList.includes('Magento')){
        magento = obj.resume.stackedSalesGraphTotal.filter((item) => {
              return item.Magento;
            });
             
         setmagentoPie(magento[0].Magento);
       }
       if(!newChannelList.includes('Magento')){
      setmagentoPie(0);
       }
       let woo;
       if(newChannelList.includes('Woocommerce')){
        woo = obj.resume.stackedSalesGraphTotal.filter((item) => {
              return item.Woocommerce;
            });
            
           setwooPie(woo[0].Woocommerce);
       }
       if(!newChannelList.includes('Woocommerce')){
       setwooPie(0);
       }
      })
      .catch((error) => console.log("error", error));
  }
  const setSalesCardData = ()=>{
   
    const vtexSales = newData.filter(item=>{
      return item.channel === 'Vtex';
    });
    const vtexSalesValue = vtexSales.map(item=>{
      return item.orderValue;
    });
    setvtexOrders(vtexSalesValue[0]);
    const linioSales = newData.filter(item=>{
      return item.channel === 'Linio';
    });
    const linioSalesValue = linioSales.map(item=>{
      return item.orderValue;
    });
    setlinioOrders(linioSalesValue[0]);
    const magentoSales = newData.filter(item=>{
      return item.channel === 'Magento';
    });
    const magentoSalesValue = magentoSales.map(item=>{
      return item.orderValue;
    });
    setmagentoOrders(magentoSalesValue[0]);
    const merSales = newData.filter(item=>{
      return item.channel === 'MercadoLibre';
    });
    const merSalesValue = merSales.map(item=>{
      return item.orderValue;
    });
    setmercadoLibreOrders(merSalesValue[0]);
    const exiSales = newData.filter(item=>{
      return item.channel === 'Exito';
    });
    const exiSalesValue = exiSales.map(item=>{
      return item.orderValue;
    });
    setexitoOrders(exiSalesValue[0]);
    const ripSales = newData.filter(item=>{
      return item.channel === 'Ripley';
    });
    const ripSalesValue = ripSales.map(item=>{
      return item.orderValue;
    });
   setripleyOrders(ripSalesValue[0]);
   const shopSales = newData.filter(item=>{
    return item.channel === 'Shopify';
  });
  const shopSalesValue = shopSales.map(item=>{
    return item.orderValue;
  });
setshopifyOrders(shopSalesValue[0]);
const pariSales = newData.filter(item=>{
  return item.channel === 'Paris';
});
const pariSalesValue = pariSales.map(item=>{
  return item.orderValue;
});
setparisOrders(pariSalesValue[0]);
const wooSales = newData.filter(item=>{
  return item.channel === 'Paris';
});
const wooSalesValue = wooSales.map(item=>{
  return item.orderValue;
});
setwooCommerceOrders(wooSalesValue[0]);
const chambasSales = newData.filter(item=>{
  return item.channel === 'Chambas';
});
const chambasSalesValue = chambasSales.map(item=>{
  return item.orderValue;
});
setchambasOrders(chambasSalesValue[0]);
  }
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
    const linioSales = newData.filter((item)=>{
      return item.channel === 'Linio';
    })
    const linioSalesValue = linioSales.map((item)=>{
      return item.salesValue;
    })
   setlinioPie(linioSalesValue[0]);
   const vtexSales = newData.filter((item)=>{
    return item.channel === 'Vtex';
  })
  const vtexSalesValue = vtexSales.map((item)=>{
    return item.salesValue;
  })
 setvtexPie(vtexSalesValue[0]);
 const ripleySales = newData.filter((item)=>{
  return item.channel === 'Ripley';
})
const ripleySalesValue = ripleySales.map((item)=>{
  return item.salesValue;
})
setripleyPie(ripleySalesValue[0]);
const shopifySales = newData.filter((item)=>{
  return item.channel === 'Shopify';
})
const shopifySalesValue = shopifySales.map((item)=>{
  return item.salesValue;
})
setshopifyPie(shopifySalesValue[0]);
const magentoSales = newData.filter((item)=>{
  return item.channel === 'Magento';
})
const magentoSalesValue = magentoSales.map((item)=>{
  return item.salesValue;
})
setmagentoPie(magentoSalesValue[0]);
const wooSales = newData.filter((item)=>{
  return item.channel === 'Woocommerce';
})
const wooSalesValue = wooSales.map((item)=>{
  return item.salesValue;
})
setwooPie(wooSalesValue[0]);
const chambasSales = newData.filter((item)=>{
  return item.channel === 'Chambas';
})
const chambasSalesValue = chambasSales.map((item)=>{
  return item.salesValue;
})
setchambasPie(chambasSalesValue[0]);
const merSales = newData.filter((item)=>{
  return item.channel === 'MercadoLibre';
})
const merSalesValue = merSales.map((item)=>{
  return item.salesValue;
})
setmercadoPie(merSalesValue[0]);
const exiSales = newData.filter((item)=>{
  return item.channel === 'Exito';
})
const exiSalesValue = exiSales.map((item)=>{
  return item.salesValue;
})
setexitoPie(exiSalesValue[0]);
const parisSales = newData.filter((item)=>{
  return item.channel === 'Paris';
})
const parisSalesValue = parisSales.map((item)=>{
  return item.salesValue;
})
setparisPie(parisSalesValue[0]);
const listaSales = newData.filter((item)=>{
  return item.channel === 'ListaTienda';
})
const listaSalesValue = listaSales.map((item)=>{
  return item.salesValue;
})
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
        console.log(obj.resume.lineAndBarChart);
       
        setnewData(obj.resume.lineAndBarChart);
        
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
       
      //DO NOT REMOVE THIS
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
                  
                },
                grid: {
                  zeroLineColor: "transparent",
                  display: false,
                  drawBorder: false,
                  color: "#EBEBEBf",
                  
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
                 
                },
              },
            },
          },
        };
        setmixedChartData(MIXED);
      })
      .catch((error) => console.log("error", error));
  };

  const fetchGeneralData = () => {
    console.log(cR);
    setredefinedChannel(cR);
    
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
        console.log(obj);
        let res1 = [];

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

       setTimeout(() => {
        setisLoading(false);
       }, 2000);
        
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
        console.log(obj);
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

        let countryArray = [];

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
    const channels = filteredChannelArray.map((item) => {
      // return item.channel;
      return item;
    });
    const channelsId = filteredChannelArray.map((item) => {
      return item.value;
    });

    let x = channelsId.join(",");
    console.log(filteredChannelArray);
   if(filteredChannelArray.length!==0){
     console.log('hi');
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

  // Function to generate a PDF Report 
  const handleDownloadPdf = async () => {

    setisDownloadingReports(true);
    const element = printReport.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    

    const pdf = new jsPDF('p', 'in', 'legal', true);
    pdf.setFillColor(245);
    pdf.rect(0, 0, 210, 700, "F");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = 
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0.5, 0, pdfWidth-1, pdfHeight-4);
    pdf.save('InstanceReporte.pdf');
    setisDownloadingReports(false);
  };

  return (
    <>
      {pageFullyLoaded && <SplashScreen></SplashScreen>}
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
            id="textNameTable"
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
              <button
                id="bttnGeneral"
                type="button"
                style={{
                  borderRadius: "17px",
                  backgroundColor: "#1D308E",
                  color: "white",
                  width: "185px",
                  height: "60px",
                  border: "0",
                  marginBottom: "1em",
                }}
              >
                <p
                  id="textBttnGeneral"
                  style={{
                    alignItems: "initial",
                    marginLeft: "1em",
                    display: "flex",
                    marginTop: "10px",
                    fontSize: "16px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  <span className="btn-label">
                    <i className="nc-icon nc-layout-11" />
                  </span>
                  &nbsp; General
                </p>
              </button>

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
                    Fecha Inicio
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
              </Col>
            </div>
          )}
          <br></br>

      
          <div id="generateReport" ref={printReport}>  
          <div id="ReportInformationDesktop">
            <Col
              id="colReportDatosGenerales"
              md="12"
              style={{
                backgroundColor: "white",
                width: "1260px",
                height: "156px",
                left: "118px",
                top: "669px",
                borderRadius: "12px",
              }}
            >
              <p
                id="textNameTable"
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
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconG1} width="30px" />
                      &nbsp; Total Ingresos
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{
                        fontSize: "20px",
                        color: "#444B54",
                        fontWeight: "500",
                      }}
                    >
                      {(() => {
                        let number = totalIncome;
                        let totalIncomeformatted = new Intl.NumberFormat(
                          "es-CL",
                          {
                            style: "currency",
                            currency: "CLP",
                          }
                        ).format(number);
                        return (
                          <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            {totalIncomeformatted}
                            &nbsp;
                            {/* <span
                            id="spanTextInfoCard"
                            style={{
                              color: "#33D69F",
                              fontSize: "10px",
                              textAlign: "right",
                            }}
                          >
                         +4.5%
                       </span> */}
                          </div>
                        );
                      })()}
                    </h5>
                  </div>
                  {/* DISPATCH COST */}
                </Col>
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconG2} width="30px" />
                      &nbsp;Costo Despacho
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "20px", color: "#444B54" }}
                    >
                      {(() => {
                        let number = dispatchCost;
                        let formatted = new Intl.NumberFormat("es-CL", {
                          style: "currency",
                          currency: "CLP",
                        }).format(number);
                        return (
                          <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            {formatted}
                            &nbsp;
                            {/* <span
                            id="spanTextInfoCard"
                            style={{
                              color: "#FF6059",
                              fontSize: "10px",
                              textAlign: "right",
                            }}
                          >
                         -3%
                       </span> */}
                          </div>
                        );
                      })()}
                    </h5>
                  </div>
                </Col>
                {/* GM */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconG2} width="30px" />
                      &nbsp;GM
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      {(() => {
                        let number = gm;
                        let formatted = new Intl.NumberFormat("es-CL", {
                          style: "currency",
                          currency: "CLP",
                        }).format(number);
                        return (
                          <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatted}
                            &nbsp;
                            {/* <span
                            id="spanTextInfoCard"
                            style={{
                              color: "#FF6059",
                              fontSize: "10px",
                              textAlign: "right",
                            }}
                          >
                         -6%
                       </span> */}
                          </div>
                        );
                      })()}
                    </h5>
                  </div>
                </Col>
                {/* CONVERSION */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconG3} width="30px" />
                      &nbsp;Conversión
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      {/* $1.253.369 &nbsp; */}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {conversion} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +4.5%
                        </span> */}
                    </h5>
                  </div>
                </Col>
              </Row>
            </Col>
            <br></br>
            <br></br>
            {/* ORDER PROCESSING */}
            <Col
              id="colReportOrderProcessing"
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
                id="textNameTable"
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
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconPP1} width="30px" />
                      &nbsp; Pedidos
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {totalOrders} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +4.5%
                        </span> */}
                    </h5>
                  </div>
                  {/* ORDERS CANCELLED */}
                </Col>
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconPP2} width="30px" />
                      &nbsp; Cancelados
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                      {totalCancelledOrders} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#FF6059",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          -3%
                        </span> */}
                    </h5>
                  </div>
                </Col>
                {/* DTE SENT */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconPP3} width="30px" />
                      &nbsp; DTE enviado
                    </p>

                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {totalDte} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +8%
                        </span> */}
                    </h5>
                  </div>
                </Col>
                {/* DELIVERED */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconPP4} width="30px" />
                      &nbsp; Entregados
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;
                      <Badge
                        style={{ backgroundColor: "#06CBC1", color: "white" }}
                        pill
                      >
                        Próximamente
                      </Badge>
                      &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +12%
                        </span> */}
                    </h5>
                  </div>
                </Col>
              </Row>
            </Col>
            <br></br>
            <br></br>
            {/* ORDER FULFILLMENT */}
            <Col
              id="colReportOrderFulfillment"
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
                id="textNameTable"
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
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconCP1} width="30px" />
                      &nbsp; En Proceso
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {inProcess} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +4.5%
                        </span> */}
                    </h5>
                  </div>
                  {/* PREPARATION */}
                </Col>
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconCP2} width="30px" />
                      &nbsp; En Preparación
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{inPreparation}{" "}
                      &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#FF6059",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          -3%
                        </span> */}
                    </h5>
                  </div>
                </Col>
                {/* READY TO DISPATCH */}
                <Col md="3">
                  <div>
                    <p
                      id="textListoParaDespacho"
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconCP3} width="30px" />
                      &nbsp; Listo para despacho
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {readyToShip} &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#FF6059",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          -6%
                        </span> */}
                    </h5>
                  </div>
                </Col>
                {/* READY TO DELIVER */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconCP4} width="30px" />
                      &nbsp; Próximo a llegar
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onTheWay}{" "}
                      &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +4.5%
                        </span> */}
                    </h5>
                  </div>
                </Col>
              </Row>
            </Col>
            <br></br>
            <br></br>
            {/* CLIENT EXPERIENCE */}
            <Col
              id="colReportClientExperience"
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
                id="textNameTable"
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
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconEC1} width="30px" />
                      &nbsp; NPS
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalNps}{" "}
                      &nbsp;
                      {/* <span
    
                          id="spanTextInfoCard"
                          style={{
                            color: "#33D69F",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          +4.5%
                        </span>  */}
                    </h5>
                  </div>
                  {/* REVIEWS */}
                </Col>
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconEC2} width="30px" />
                      &nbsp; Reviews
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{reviews}{" "}
                      &nbsp;
                      {/* <span
                          id="spanTextInfoCard"
                          style={{
                            color: "#FF6059",
                            fontSize: "16px",
                            textAlign: "right",
                          }}
                        >
                          -3%
                        </span> */}
                    </h5>
                  </div>
                </Col>

                {/* claims */}
                <Col md="3">
                  <div>
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconEC3} width="30px" />
                      &nbsp; Reclamos
                    </p>
                    <h5
                      className="textInfoCard"
                      style={{ fontSize: "22px", color: "#444B54" }}
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalClaims} &nbsp;
                      {/* <span
                            id="spanTextInfoCard"
                            style={{
                              color: "red",
                              fontSize: "16px",
                              textAlign: "right",
                            }}
                          >
                            -6%
                          </span> */}
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
          </div>

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
          {!pageFullyLoaded && (
            <div>
              <Row>
              <MixedAndPieChart mixedChartData={mixedChartData}></MixedAndPieChart>
                <Col id="ColPieChart" lg="5" md="12" sm="12">
                  <Card id="pieChartCard">
                   <PieChart pieChartData={pieChartData}></PieChart>
                    <CardFooter>
                     <SalesCard channel={cR} vtex={vtexPie} linio={linioPie} magento={magentoPie} mercadoLibre={mercadoPie} exito={exitoPie} ripley={ripleyPie} shopify={shopifyPie} paris={parisPie} wooCommerce={wooPie} chambas={chambasPie} listaTienda={listaPie}></SalesCard>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
         
              <Row>
                <Col md="6">
                  <Card className="card-chart">
                    <CardHeader id="textNameTable">
                      <strong>Órdenes por canal de venta</strong>
                    </CardHeader>
                    <br></br>
                    <CardBody>
                      <Bar
                        data={stackedChartData}
                        options={stackedChartData.options}
                      />
                    </CardBody>
                    <CardFooter>
                      <StackedGraphOrderCard channel={cR} vtex={vtexOrders} linio={linioOrders} magento={magentoOrders} mercadoLibre={mercadoLibreOrders} exito={exitoOrders} ripley={ripleyOrders} shopify={shopifyOrders} paris={parisOrders} wooCommerce={wooCommerceOrders} chambas={chambasOrders} listaTienda={listaTiendaOrders}></StackedGraphOrderCard>
                    </CardFooter>
                  </Card>
                </Col>

                {StackedisLoading && <SplashScreen></SplashScreen>}
                {!StackedisLoading && (
                  <Col md="6">
                    <Card className="card-chart">
                      <CardHeader id="textNameTable">
                        <strong>Ingresos por canal de venta</strong>
                      </CardHeader>
                      <br></br>
                      <CardBody>
                        <Bar
                          data={stackedSalesGraph}
                          options={stackedSalesGraph.options}
                          //  options={barChartOptions}
                        />
                      </CardBody>
                      <CardFooter>
                       <StackedGraphSalesCard channel={cR} vtex={vtex} linio={linioPie} magento={magentoPie} mercadoLibre={mercadoPie} exito={exitoPie} ripley={ripleyPie} shopify={shopifyPie} paris={parisPie} wooCommerce={wooPie} chambas={chambasPie} listaTienda={listaPie} ></StackedGraphSalesCard>
                      </CardFooter>
                    </Card>
                  </Col>
                )}  
              </Row>
            </div>
          )}
          </div>
              <Row>
                <div class="text-center" style={{ marginTop: "3em" }}>
              
                  {!isDownloadingReports && (
                  <button
                    
                    id="bttnSubmit"
                    className="bttnCompartirReporte"    
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
                    onClick={handleDownloadPdf}
                  >
                  <span className="btn-label">
                    <img src={iconShareReport} width="19px"/>
                  </span>
                    &nbsp;Descargar Reporte &nbsp;
                  </button>
                )}
                {isDownloadingReports && (
                  <Button
                  type="button"
                  id="bttnSubmit"
                  className="bttnCompartirReporte"    
                  style={{
                    backgroundColor: "#06cbc1",
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
                  onClick={handleDownloadPdf}
                  disabled
                  >
                    <Spinner
                      style={{ width: "0.7rem", height: "0.7rem" }}
                      type="grow"
                      color="light"
                    />
                    &nbsp; Descargando...
                  </Button>
                )}
                
                </div>
              </Row>
        
        </div> 
      )}
    </> 
  );
}

export default MtdiReports;

