import { Select, MenuItem, TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
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
import PDFReport from '../components/PDFReport/PDFReport';
const moment = require("moment");
import iconFilterButton from "../assets/img/icons/Reports/iconFilters.png";
//Generate Report PDF
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import '@progress/kendo-theme-material/dist/all.css';
// import { Button } from '@progress/kendo-react-buttons';
// import '@progress/kendo-theme-default/dist/all.css';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';




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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import SplashScreen from "components/UI/splash-screen";
import ChartMixed from "components/MixedChartReport/ChartMixed";
import ChartPie from "components/pieChartReport/ChartPie";
import ChartBar from "components/barChartReport/ChartBar";
import CardReports from "components/CardReports/CardReports";

registerLocale("es", es);

const mixedChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
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

const barChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    xAxes: [
      {
        stacked: false,
      },
    ],
    yAxes: [
      {
        stacked: false,
      },
    ],
  },
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
  const BAR_CHART_DATA = {
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
  // const [mixedChartLoading, setmixedChartLoading] = useState(true);
  // const [mixedChartLables, setmixedChartLables] = useState([]);
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
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
  const [op, setop] = useState({});

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
    //fetchStackedGraphSalesForFirstTime();
  }, []);
  useEffect(() => {
    fetchResumenGraphDetails();
   
  fetchStackedGraphForSales();
  fetchStackedGraphForOrders();
  }, [channelId]);
  // useEffect(() => {
  //  fetchStackedGraphForSales();
  // }, [redefinedChannel])
  
  
  useEffect(() => {
    displaysalesChannelHandler();
  }, [store]);

  useEffect(() => {
    fetchGeneralData();
    
  }, [channels, channelId, cR,store]);
  //I AM CHANGING THIS TO SEE HOW THE DATA WORKS EVENING 7PM
  // useEffect(() => {
  //   fetchStackedGraphForOrders();
  // }, [cR,store,channelId]);
  // useEffect(() => {
  //  fetchStackedGraphForSales();
  // }, [cR,ChannelSelectedForDelete,store,channelId,channels,filteredStoreData]);
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
        // console.log(obj);
        // console.log(redefinedChannel);
        // console.log(cR);
         console.log(newChannelList);
         if(newChannelList.length===0){
           newChannelList = ['Vtex', 'Linio', 'MercadoLibre', 'Exito', 'Ripley', 'Shopify', 'Paris', 'Magento', 'Woocommerce', 'Chambas', 'ListaTienda'];
         }
        // console.log(obj.resume.stackedSalesGraphByMonth);
        // console.log(obj.resume.stackedOrderQtyGraphByMonth);
        //  setnewStackedData(obj.resume.stackedSalesGraphByMonth);
      //  console.log(newStackedData);
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
  useEffect(() => {
    let newChannel = [
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
    var ring = newChannel.map((id, index) => {
      return {
        channel: id,
        value: mixedChartsalesData[index],
        orderValue: mixedChartOrdersData[index],
      };
    });
    setmixedGraphDatas(ring);
    let x = [];
    console.log(ChannelSelectedForDelete);

    if (ChannelSelectedForDelete !== undefined) {
      x = mixedGraphDatas.filter((item, index) => {
        return item.channel !== ChannelSelectedForDelete.channel;
      });
      setmixedGraphDatas(x);

      if (ChannelSelectedForDelete.channel === "Ripley") {
        setripleyStackedSalesState(0);
        setripleyStackedOrdersState(0);
      }
      if (ChannelSelectedForDelete.channel === "Shopify") {
        setshopifyStackedOrdersState(0);
        setshopifyStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Magento") {
        setmagentoStackedOrdersState(0);
        setmagentoStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Linio") {
        setlinioStackedOrdersState(0);
        setlinioStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "MercadoLibre") {
        setmercadoStackedOrdersState(0);
        setmercadoStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Chambas") {
        setchambasStackedOrdersState(0);
        setchambasStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Paris") {
        console.log("hi");
        setparisStackedOrdersState(0);
        setparisStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Vtex") {
        console.log("hi");
        setvtexStackedOrdersState(0);
        setvtexStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Woocommerce") {
        console.log("hi");
        setwooCommerceStackedOrdersState(0);
        setwooCommerceStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "ListaTienda") {
        console.log("hi");
        setlistaStackedOrdersState(0);
        setlistaStackedSalesState(0);
      }
      if (ChannelSelectedForDelete.channel === "Exito") {
        console.log("hi");
        setexitoStackedOrdersState(0);
        setexitoStackedSalesState(0);
      }
    }
    console.log(ripleyStackedSalesState);
    console.log(mixedGraphDatas);
    const lineAndBarChartLabels = mixedGraphDatas.map((item) => {
      return item.channel;
    });
    // setmixedGraphChannels(lineAndBarChartLabels);
    console.log(lineAndBarChartLabels);
    setBarLineGraphLabels(lineAndBarChartLabels);
    const lineAndBarChartValues = mixedGraphDatas.map((item) => {
      return item.value;
    });

    const lineAndBarChartOrderValues = mixedGraphDatas.map((item) => {
      return item.orderValue;
    });
  }, [mixedChartsalesData, mixedChartOrdersData]);

  const getDateLabels = () => {
    var startDate = moment(selectedDateFrom);
    var endDate = moment(selectedDateTo);

    var result = [];

    if (endDate.isBefore(startDate)) {
      throw "End date must be greated than start date.";
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
  }, [newData]);
 
  // useEffect(() => {
  //  fetchPieChartDetails();
  // }, [cR, ChannelSelectedForDelete])
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
  const setResumenGraph = () => {
   
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
        //fetchStackedGraphForSales();
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
        let newChannel = [
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
        let xio = [];
        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "Ripley") {
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
          if (ChannelSelectedForDelete.channel === "Shopify") {
            console.log("hello");
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
          if (ChannelSelectedForDelete.channel === "Magento") {
            console.log("hello");
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
          if (ChannelSelectedForDelete.channel === "Linio") {
            console.log("hello");
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
          if (ChannelSelectedForDelete.channel === "MercadoLibre") {
            console.log("hello");
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
          if (ChannelSelectedForDelete.channel === "Chambas") {
            console.log("hello");
            xio = deleteChannelArray.filter((item) => {
              return item !== ChannelSelectedForDelete.channel;
            });
          }
        }
        console.log(xio);
        setdeleteChannelArray(xio);
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let LINIOMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];
            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            return (
              item.channel == 5 && month === splitMonth && year === splitYear
            );
          });
          res1.push(LINIOMonthlySales);
        }

        let LINIOMonthlyArray = [];
        let LINIOStackedSalesArray = [];
        for (let i = 0; i <= res1.length - 1; i++) {
          let channel5MonthlySales = res1[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res1[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );

          LINIOMonthlyArray.push(totalOrder);
          LINIOStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("Linio")) {
            setlinioStackedOrdersState(LINIOMonthlyArray);
            setlinioStackedSalesState(LINIOStackedSalesArray);
          }
        }

        //RIPLEY STACKED

        let res2 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];
            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            return (
              item.channel == 4 && month === splitMonth && year === splitYear
            );
          });
          res2.push(ripleyMonthlySales);
        }

        let ripleyMonthlyArray = [];
        let ripleyStackedSalesArray = [];
        for (let i = 0; i <= res2.length - 1; i++) {
          let channel5MonthlySales = res2[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res2[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );

          ripleyMonthlyArray.push(totalOrder);
          ripleyStackedSalesArray.push(totalMonthlySales);

          if (deleteChannelArray.includes("Ripley")) {
            console.log("ripley present");
            setripleyLength(ripleyMonthlyArray.length);
            setripleyStackedOrdersState(ripleyMonthlyArray);
            setripleyStackedSalesState(ripleyStackedSalesArray);
          }
        }

        //  WOO COMMERCE STACKED GRAPH ORDERS
        let res3 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 3 && month === splitMonth && year === splitYear
            );
          });
          res3.push(ripleyMonthlySales);
        }

        let WooCommerceMonthlyArray = [];
        let WooCommerceStackedSalesArray = [];
        for (let i = 0; i <= res3.length - 1; i++) {
          let channel5MonthlySales = res3[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res3[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          WooCommerceMonthlyArray.push(totalOrder);
          WooCommerceStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("Woocommerce")) {
            setwooCommerceStackedOrdersState(WooCommerceMonthlyArray);
            setwooCommerceStackedSalesState(WooCommerceStackedSalesArray);
          }
        }
        // SHOPIFY STACKED MONTHLY DATA

        let res4 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];
            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 6 && month === splitMonth && year === splitYear
            );
          });
          res4.push(ripleyMonthlySales);
        }

        let ShopifyMonthlyArray = [];
        let shopifyStackedSalesArray = [];
        for (let i = 0; i <= res4.length - 1; i++) {
          let channel5MonthlySales = res4[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res4[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          if (deleteChannelArray.includes("Shopify")) {
            ShopifyMonthlyArray.push(totalOrder);
            shopifyStackedSalesArray.push(totalMonthlySales);

            setshopifyStackedOrdersState(ShopifyMonthlyArray);
            setshopifyStackedSalesState(shopifyStackedSalesArray);
          }
        }
        //MERCADO LIBRE STACKED MONTHLY DATA
        let res5 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];
            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 2 && month === splitMonth && year === splitYear
            );
          });
          res5.push(ripleyMonthlySales);
        }

        let MercadoArray = [];
        let MercadoStackedSalesArray = [];
        for (let i = 0; i <= res5.length - 1; i++) {
          let channel5MonthlySales = res5[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res5[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          MercadoArray.push(totalOrder);

          MercadoStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("MercadoLibre")) {
            console.log("mercado");
            setmercadoStackedOrdersState(MercadoArray);
            setmercadoStackedSalesState(MercadoStackedSalesArray);
          }
        }

        //CHAMBAS STACKED GRAPH MONTHLY
        let res6 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];
            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 11 && month === splitMonth && year === splitYear
            );
          });
          res6.push(ripleyMonthlySales);
        }

        let ChambasMonthlyArray = [];
        let ChambasStackedSalesArray = [];
        for (let i = 0; i <= res6.length - 1; i++) {
          let channel5MonthlySales = res6[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res6[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          ChambasMonthlyArray.push(totalOrder);
          if (deleteChannelArray.includes("Chambas")) {
            ChambasStackedSalesArray.push(totalMonthlySales);
            setchambasStackedOrdersState(ChambasMonthlyArray);
            setchambasStackedSalesState(ChambasStackedSalesArray);
          }
        }

        //VTEX STACKED MONTHLY ARRAY

        let res7 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 7 && month === splitMonth && year === splitYear
            );
          });
          res7.push(ripleyMonthlySales);
        }

        let vtexMonthlyArray = [];
        let vtexStackedSalesArray = [];
        for (let i = 0; i <= res7.length - 1; i++) {
          let channel5MonthlySales = res7[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res7[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          vtexMonthlyArray.push(totalOrder);
          vtexStackedSalesArray.push(totalMonthlySales);
          console.log(vtexMonthlyArray);
          if (deleteChannelArray.includes("Vtex")) {
            setvtexStackedOrdersState(vtexMonthlyArray);
            setvtexStackedSalesState(vtexStackedSalesArray);
          }
        }
        //MAGENTO MONTHLY ARRAY
        let res8 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 9 && month === splitMonth && year === splitYear
            );
          });
          res8.push(ripleyMonthlySales);
        }

        let MagentoMonthlyArray = [];
        let magentoStackedSalesArray = [];
        for (let i = 0; i <= res8.length - 1; i++) {
          let channel5MonthlySales = res8[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res8[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          if (deleteChannelArray.includes("Magento")) {
            MagentoMonthlyArray.push(totalOrder);
            magentoStackedSalesArray.push(totalMonthlySales);
            setmagentoStackedOrdersState(MagentoMonthlyArray);
            setmagentoStackedSalesState(magentoStackedSalesArray);
          }
        }
        // LISTA TIENDA MONTHLY SALES
        let res9 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 8 && month === splitMonth && year === splitYear
            );
          });
          res9.push(ripleyMonthlySales);
        }

        let ListaMonthlyArray = [];
        let ListaStackedSalesArray = [];
        for (let i = 0; i <= res9.length - 1; i++) {
          let channel5MonthlySales = res9[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res9[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );

          ListaMonthlyArray.push(totalOrder);
          ListaStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("ListaTienda")) {
            setlistaStackedOrdersState(ListaMonthlyArray);
            setlistaStackedSalesState(ListaStackedSalesArray);
          }
        }

        // PARIS STACKED MONTHLY SALES
        let res10 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == 1 && month === splitMonth && year === splitYear
            );
          });
          res10.push(ripleyMonthlySales);
        }

        let ParisMonthlyArray = [];
        let ParisStackedSalesArray = [];
        for (let i = 0; i <= res10.length - 1; i++) {
          let channel5MonthlySales = res10[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res10[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );

          ParisMonthlyArray.push(totalOrder);
          ParisStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("Paris")) {
            setparisStackedOrdersState(ParisMonthlyArray);
            setparisStackedSalesState(ParisStackedSalesArray);
          }
        }
        //EXITO MONTHLY STACKED ARRAY

        let res11 = [];
        for (let i = 0; i <= stackedDatevalues.length - 1; i++) {
          let ripleyMonthlySales = obj.detail.filter((item) => {
            let dateTobeCompared = stackedDatevalues[i];

            const splitDateCompared = dateTobeCompared.split(/[- :]/);
            const splitMonth = splitDateCompared[1];
            const splitYear = splitDateCompared[0];
            const dateTime = item.date_created;
            const parts = dateTime.split(/[- :]/);
            var month = parts[1];
            var year = parts[0];
            let result = [];
            return (
              item.channel == "12" && month === splitMonth && year === splitYear
            );
          });
          res11.push(ripleyMonthlySales);
        }

        let ExitoMonthlyArray = [];
        let ExitoStackedSalesArray = [];
        for (let i = 0; i <= res11.length - 1; i++) {
          let channel5MonthlySales = res11[i].map((item, index) => {
            return item.orders_qty;
          });
          let stackedSalesMonthlySales = res11[i].map((item, index) => {
            return item.total;
          });
          let totalOrder = channel5MonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );
          let totalMonthlySales = stackedSalesMonthlySales.reduce(
            (partialSum, a) => partialSum + a,
            0
          );

          ExitoMonthlyArray.push(totalOrder);
          ExitoStackedSalesArray.push(totalMonthlySales);
          if (deleteChannelArray.includes("Exito")) {
            setexitoStackedOrdersState(ExitoMonthlyArray);
            setexitoStackedSalesState(ExitoStackedSalesArray);
          }
        }

        let ripleySales = obj.detail.filter((item) => {
          return item.channel == 4;
        });
        let ripleySalesArray = ripleySales.map((item) => {
          return item.total;
        });
        let ripleyOrder = ripleySales.map((item) => {
          return item.orders_qty;
        });
        let totalRipleyOrder = ripleyOrder.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let totalRipleySales = ripleySalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        console.log(totalRipleySales);
        let vtexSales = obj.detail.filter((item) => {
          return item.channel == 7;
        });

        let vtexSalesArray = vtexSales.map((item) => {
          return item.total;
        });
        let vtexrders = vtexSales.map((item) => {
          return item.orders_qty;
        });
        let TotalVtexOrder = vtexrders.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let totalVtexSales = vtexSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let linioSales = obj.detail.filter((item) => {
          return item.channel == 5;
        });

        let linioSalesArray = linioSales.map((item) => {
          return item.total;
        });
        let linioOrderQuantity = linioSales.map((item) => {
          return item.orders_qty;
        });
        let totalLinioOrder = linioOrderQuantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let totallinioSales = linioSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let mercadoSales = obj.detail.filter((item) => {
          return item.channel == 2;
        });
        console.log(mercadoSales);
        // if (mercadoSales.length === 0) {
        //   setmercadoLibreOrders(0);
        //   setmercadoLibre(0);
        // }else{
        let mercadoSalesArray = mercadoSales.map((item) => {
          return item.total;
        });
        let totalmercadoSales = mercadoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        console.log(mercadoSalesArray);
        let mercadoOrderQuantity = mercadoSales.map((item) => {
          return item.orders_qty;
        });
        // let totalMercadoOrders =  mercadoOrderQuantity.map((item) => {
        //   return item.orders_qty;
        // });
        let totalMercadoOrders = mercadoOrderQuantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "MercadoLibre")
            totalMercadoOrders = "0";
          totalmercadoSales = "0";
        }
        console.log(totalmercadoSales);
        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "Paris")
            totalparisSales = "0";
        }

        let exitoSales = obj.detail.filter((item) => {
          return item.channel == "12";
        });
        // if (exitoSales.length === 0) {
        //   setexitoOrders(0);
        //   setexito(0);
        // }
        let exitoSalesArray = exitoSales.map((item) => {
          return item.total;
        });
        let totalexitoSales = exitoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "Exito")
            totalexitoSales = "0";
        }
        let shopifySales = obj.detail.filter((item) => {
          return item.channel == 6;
        });
        let shopifySalesArray = shopifySales.map((item) => {
          return item.total;
        });
        let shopifyOrdersquantity = shopifySales.map((item) => {
          return item.orders_qty;
        });

        let totalShopifyOrder = shopifyOrdersquantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let totalshopifySales = shopifySalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        // let parisSales = obj.filter((item) => {
        //   return item.channel == 1;
        // });

        // let parisSalesArray = parisSales.map((item) => {
        //   return item.total;
        // });
        // let parisOrderQuantity = parisSales.map((item) => {
        //   return item.orders_qty;
        // });
        // let totalparisOrder = parisOrderQuantity.reduce(
        //   (partialSum, a) => partialSum + a,
        //   0
        // );

        // let totalparisSales = parisSalesArray.reduce(
        //   (partialSum, a) => partialSum + a,
        //   0
        // );
        let parisSales = obj.detail.filter((item) => {
          return item.channel == 1;
        });

        // // if (parisSales.length === 0) {
        // //   console.log('hi');
        // //   setparisOrders(0);
        // //   setparis(0);
        // //   totalparisSales = 0;
        // // }
        let parisSalesArray = parisSales.map((item) => {
          return item.total;
        });
        console.log(parisSalesArray);
        let totalparisSales = parisSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let parisOrderQuantity = parisSales.map((item) => {
          return item.orders_qty;
        });
        let totalparisOrder = parisOrderQuantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "Paris")
            totalparisSales = "0";
          totalparisOrder = "0";
        }
        let magentoSales = obj.detail.filter((item) => {
          return item.channel == 9;
        });
        let magentoSalesOrders = magentoSales.map((item) => {
          return item.orders_qty;
        });
        let totalMagentoOrders = magentoSalesOrders.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let magentoSalesArray = magentoSales.map((item) => {
          return item.total;
        });
        let totalmagentoSales = magentoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let wooCommerceSales = obj.detail.filter((item) => {
          return item.channel == 3;
        });
        let wooCommerceOrdersQuantity = wooCommerceSales.map((item) => {
          return item.orders_qty;
        });
        let totalwooCommerceOrders = wooCommerceOrdersQuantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let wooCommerceArray = wooCommerceSales.map((item) => {
          return item.total;
        });
        let totalwooCommerceSales = wooCommerceArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let chambasSales = obj.detail.filter((item) => {
          return item.channel == 11;
        });
        let chambasArray = chambasSales.map((item) => {
          return item.total;
        });
        let chambasOrderQuantity = chambasSales.map((item) => {
          return item.orders_qty;
        });
        let totalChambasOrders = chambasOrderQuantity.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

        let totalchambasSales = chambasArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let ListaSales = obj.detail.filter((item) => {
          return item.channel == 8;
        });

        // if (ListaSales.length === 0) {
        //   setlistaTiendaOrders(0);
        //   setlistaTienda(0);
        // }
        let ListaArray = ListaSales.map((item) => {
          return item.total;
        });
        let totalListaSales = ListaArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        if (ChannelSelectedForDelete !== undefined) {
          if (ChannelSelectedForDelete.channel === "ListaTienda")
            totalListaSales = "0";
        }
        console.log(totalListaSales);
        setmixedChartsalesData([
          totalVtexSales,
          totallinioSales,
          totalmercadoSales,
          totalexitoSales,
          totalRipleySales,
          totalshopifySales,
          totalparisSales,
          totalmagentoSales,
          totalwooCommerceSales,
          totalchambasSales,
          totalListaSales,
        ]);
        setmixedChartOrdersData([
          TotalVtexOrder,
          totalLinioOrder,
          totalMercadoOrders,
          totalexitoSales,
          totalRipleyOrder,
          totalShopifyOrder,
          totalparisOrder,
          totalMagentoOrders,
          totalwooCommerceOrders,
          totalChambasOrders,
          totalListaSales,
        ]);
        setripley(totalRipleySales);
        setvtex(totalVtexSales);
        setlinio(totallinioSales);
        // setmercadoLibre(totalmercadoSales);
        setexito(totalexitoSales);
        setshopify(totalshopifySales);
        setparis(totalparisSales);
        //  setparisOrders(totalparisOrder);
        setmagento(totalmagentoSales);
        setwooCommerce(totalwooCommerceSales);
        setchambas(totalchambasSales);
        setripleyOrders(totalRipleyOrder);
        setvtexOrders(TotalVtexOrder);
        setlinioOrders(totalLinioOrder);
        setshopifyOrders(totalShopifyOrder);
        // setmercadoLibreOrders(totalMercadoOrders);
        setchambasOrders(totalChambasOrders);
        setmagentoOrders(totalMagentoOrders);
        setwooCommerceOrders(totalwooCommerceOrders);
        setmercadoLibreOrders(totalMercadoOrders);
        setmercadoLibre(totalmercadoSales);
        setlistaTienda(totalListaSales);
        let channelsList = cR.map((item) => {
          return item.channel;
        });

        //   console.log(channelsList);
        console.log(mixedGraphDatas);
        const lineAndBarChartLabels = mixedGraphDatas.map((item) => {
          return item.channel;
        });
        setmixedGraphChannels(lineAndBarChartLabels);
        console.log(lineAndBarChartLabels);
        console.log(BarLineGraphLabels);

        const lineAndBarChartValues = mixedGraphDatas.map((item) => {
          return item.value;
        });
        const lineAndBarChartOrderValues = mixedGraphDatas.map((item) => {
          return item.orderValue;
        });
        let MIXED = {
          labels: lineAndBarChartLabels,
          datasets: [
            {
              label: "Ventas",
              data: lineAndBarChartValues,
              backgroundColor: "#344FD5",
              borderRadius: 5,
              order: 1,
            },
            {
              label: "Órdenes",
              yAxisID: "Ordenes",
              // data: [
              //   vtexOrders,
              //   linioOrders,
              //   mercadoLibreOrders,
              //   exitoOrders,
              //   ripleyOrders,
              //   shopifyOrders,
              //   parisOrders,
              //   magentoOrders,
              //   wooCommerceOrders,
              //   chambasOrders,
              //   listaTiendaOrders,
              // ],
              data: lineAndBarChartOrderValues,
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

        console.log(MIXED.datasets[0].data);

        //    setmixedChartData(MIXED);

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
        //setpieChartData(PIE);

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

  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    // console.log('clikkkkk');
    pdfExportComponent.current.save();
  };

  const handleExportWithMethod = (event) => {
    // console.log('clikkkkk');
    savePDF(contentArea.current, {paperSize: "auto"});
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

          {/* <div id={isMobileSizes?'FiltersInDesktop':'FiltersInMobile'}> */}
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
        

            <div id="contentAreaPrint" ref={contentArea}> 
            
            {/* <ChartMixed /> */}
            {/* <ChartPie /> */}
            {/* <ChartBar /> */}
       
              

       {/* <PDFExport ref={pdfExportComponent} paperSize="auto"> */}
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
                <Col id="ColMixedChart" lg="7" md="12" sm="12">
                  <Card className="car-chart" id="mixedChartCustom">
                    <CardHeader>
                      <CardTitle id="textNameTable">
                        <strong>Resumen general de órdenes y ventas</strong>
                      </CardTitle>
                      <p className="card-category"> </p>
                    </CardHeader>
                    <CardBody>
                      <br></br>
                      <br></br>
                      <Bar
                        data={mixedChartData}
                        options={mixedChartData.options}
                        style={{ width: "400px", height: "300px" }}
                      />
                    </CardBody>
                    <br></br>
                    <br></br>
                  </Card>
                </Col>

                <Col id="ColPieChart" lg="5" md="12" sm="12">
                  <Card id="pieChartCard">
                    <CardHeader>
                      <CardTitle id="textNameTable">
                        <strong>Participación canal de venta</strong>
                      </CardTitle>
                    </CardHeader>
                    <CardBody
                    // style={{ height: "342px" }}
                    >
                      <Pie
                        id="barChartCustom"
                        data={pieChartData}
                        options={pieChartData.options}
                        style={{ width: "300px" }}
                      />
                    </CardBody>
                    <CardFooter>
                      <div className="infoLegendPieChart">
                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#F10096",
                                backgroundColor: "#F10096",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Vtex
                            {/* ["#344FD5", "#06CBC1","#F10096","#FF6059","#FFD88C","#00B6CB","#00B6CC","#97D456","#FF6059",'yellow','red'], */}
                            <p className="card-category">
                              {(() => {
                                let number = vtex;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>
                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#F29A32",
                                backgroundColor: "#F29A32",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Linio
                            <p className="card-category">
                              {(() => {
                                let number = linio;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>
                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "yellow",
                                backgroundColor: "yellow",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Mercadolibre
                            <p className="card-category">
                              {(() => {
                                let number = mercadoLibre;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#E4C41B",
                                backgroundColor: "#E4C41B",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Exito
                            <p className="card-category">
                              {(() => {
                                let number = exito;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>
                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#FFD88C",
                                backgroundColor: "#FFD88C",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Ripley
                            <p className="card-category">
                              {(() => {
                                let number = ripley;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#97D456",
                                backgroundColor: "#97D456",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Shopify
                            <p className="card-category">
                              {(() => {
                                let number = shopify;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#00B6CB",
                                backgroundColor: "#00B6CB",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp; Paris
                            <p className="card-category">
                              {(() => {
                                let number = paris;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#FF6059",
                                backgroundColor: "#FF6059",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp; Magento
                            <p className="card-category">
                              {(() => {
                                let number = magento;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "purple",
                                backgroundColor: "purple",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;WooCommerce
                            <p className="card-category">
                              {(() => {
                                let number = wooCommerce;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "#EDA4D1",
                                backgroundColor: "#EDA4D1",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;Chambas
                            <p className="card-category">
                              {(() => {
                                let number = chambas;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>

                        <div>
                          <p className="titleTextLegend">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "blue",
                                backgroundColor: "blue",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;ListaTienda
                            <p className="card-category">
                              {(() => {
                                let number = listaTienda;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegend">
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>
                        </div>
                      </div>
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
                      <div className="legend">
                        <div className="infoLegend">
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#FFD88C",
                                  backgroundColor: "#FFD88C",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Ripley
                              <p id="ordersGraphText" className="card-category">
                                {ripleyOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "blue",
                                  backgroundColor: "blue",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;ListaTienda
                              <p id="ordersGraphText" className="card-category">
                                {listaTiendaOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#FF6059",
                                  backgroundColor: "#FF6059",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Magento
                              <p id="ordersGraphText" className="card-category">
                                {magentoOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#97D456",
                                  backgroundColor: "#97D456",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Shopify
                              <p id="ordersGraphText" className="card-category">
                                {shopifyOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "yellow",
                                  backgroundColor: "yellow",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Mercadolibre
                              <p id="ordersGraphText" className="card-category">
                                {mercadoLibreOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#EDA4D1",
                                  backgroundColor: "#EDA4D1",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Chambas
                              <p id="ordersGraphText" className="card-category">
                                {chambasOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#F29A32",
                                  backgroundColor: "#F29A32",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp; Linio
                              <p id="ordersGraphText" className="card-category">
                                {linioOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#F10096",
                                  backgroundColor: "#F10096",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp; Vtex
                              <p id="ordersGraphText" className="card-category">
                                {vtexOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "purple",
                                  backgroundColor: "purple",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;WooCommerce
                              <p id="ordersGraphText" className="card-category">
                                {wooCommerceOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#00B6CB",
                                  backgroundColor: "#00B6CB",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Paris
                              <p id="ordersGraphText" className="card-category">
                                {parisOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#E4C41B",
                                  backgroundColor: "#E4C41B",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Exito
                              <p id="ordersGraphText" className="card-category">
                                {exitoOrders} órdenes
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
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
                        <div className="legend">
                          <div className="infoLegend">
                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#FFD88C",
                                    backgroundColor: "#FFD88C",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Ripley
                                <p className="card-category">
                                  {(() => {
                                    let number = ripley;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>
                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "blue",
                                    backgroundColor: "blue",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;ListaTienda
                                <p className="card-category">
                                  {(() => {
                                    let number = listaTienda;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>
                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#FF6059",
                                    backgroundColor: "#FF6059",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Magento
                                <p className="card-category">
                                  {(() => {
                                    let number = magento;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#97D456",
                                    backgroundColor: "#97D456",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Shopify
                                <p className="card-category">
                                  {(() => {
                                    let number = shopify;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>
                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "yellow",
                                    backgroundColor: "yellow",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Mercadolibre
                                <p className="card-category">
                                  {(() => {
                                    let number = mercadoLibre;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#EDA4D1",
                                    backgroundColor: "#EDA4D1",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Chambas
                                <p className="card-category">
                                  {(() => {
                                    let number = chambas;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#F29A32",
                                    backgroundColor: "#F29A32",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp; Linio
                                <p className="card-category">
                                  {(() => {
                                    let number = linio;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#F10096",
                                    backgroundColor: "#F10096",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp; Vtex
                                <p className="card-category">
                                  {(() => {
                                    let number = vtex;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "purple",
                                    backgroundColor: "purple",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;WooCommerce
                                <p className="card-category">
                                  {(() => {
                                    let number = wooCommerce;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#00B6CB",
                                    backgroundColor: "#00B6CB",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Paris
                                <p className="card-category">
                                  {(() => {
                                    let number = paris;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>

                            <div>
                              <p className="titleTextLegend">
                                <i
                                  className="fa fa-circle"
                                  style={{
                                    color: "#E4C41B",
                                    backgroundColor: "#E4C41B",
                                    borderRadius: "3px",
                                  }}
                                />
                                &nbsp;Exito
                                <p className="card-category">
                                  {(() => {
                                    let number = exito;
                                    let formatted = new Intl.NumberFormat(
                                      "es-CL",
                                      {
                                        style: "currency",
                                        currency: "CLP",
                                      }
                                    ).format(number);
                                    return <div> {formatted}</div>;
                                  })()}
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Col>
                )}
                
              </Row>
              

          
            </div>
          
          )}
         
        
          </div>


          </div>
              <Row>




                <div class="text-center" style={{ marginTop: "3em" }}>
              

                <button 
                 id="bttnSubmit"
                //  className="bttnCompartirReporte" 
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
                onClick={toggle}
              > 
                <span className="btn-label">
                  <img src={iconShareReport} width="19px"/>
                </span>
                    &nbsp;Compartir Reporte &nbsp;               
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                  <div style={{display:"flex", justifyContent:"end"}}> 
                    <button style={{background:"none",  position: "relative", marginLeft:"14em", color:"black", border:"none" }} onClick={toggle}>x</button> 
                  </div>
                </ModalHeader>
                <ModalBody>
                
                <p style={{fontSize:"24px", fontWeight:"bold", display:"flex", justifyContent:"center"}}>Compartir Reporte</p>
                <br/>
                <br/>
                <div style={{display:"grid", justifyContent:"center"}}>
                {/* <button
                  id="bttnSubmit"
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
                    fontSize: "11px",
                    marginBottom:"2em"
                  }}>
                  Descargar Reporte
                </button> */}
                <PDFReport />
                <br/>
                <button
                  id="bttnSubmit"
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
                
                  >
                  <p style={{width:"150px"}}>Enviar por correo</p>
                </button>
                </div>
                </ModalBody>
               
              </Modal>         
        
              <br/>
              
                  {/* {!isDownloadingReports && (
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
                )} */}
                
                
                </div>

              </Row>

            
        </div> 
      )}
    </> 
  );
}

export default MtdiReports;

