import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// react plugin used to create charts
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
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
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample4,
  chartExample5,
  chartExample9,
  chartExample10,
  chartExample100,
  chartExample11,
  chartExample12,
  data1,
} from "variables/charts.js";
import SplashScreen from "components/UI/splash-screen";
registerLocale("es", es);
const line = "";
const bar = "";
const mixedChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
let mixedData = {
  mixedChartLabels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      yAxisID: "A",
      borderColor: "#06CBC1",
      borderWidth: 2,
      fill: false,
      data: [100, 200, 300, 400, 500, 600],
    },
    {
      type: "bar",
      label: "Dataset 2",
      yAxisID: "A",
      backgroundColor: "#344FD5",
      data: [78, 123, 45, 67, 12],
      borderRadius:5,
    },
  ],
};
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
      borderRadius:6,
      data: [30, 50, 20, 40, 50, 30, 20, 110, 32, 12, 33, 89],
    },
    {
      label: "Shopify",
      backgroundColor: "#00B6CB",
      stack: "2",
      borderRadius:6,
      data: [10, 0, 5, 15, 0, 4, 8, 8, 32, 11, 33, 66],
    },
    {
      label: "Mercadolibre",
      backgroundColor: "#344FD5",
      stack: "2",
      borderRadius:6,
      data: [30, 50, 20, 40, 50, 30, 20, 110, 44, 55, 33, 13],
    },
    {
      label: "CornerShop",
      backgroundColor: "#5E35B1",
      stack: "2",
      borderRadius:6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Linio",
      backgroundColor: "#97D456",
      stack: "2",
      borderRadius:6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Rappi",
      backgroundColor: "#FFD88C",
      stack: "2",
      borderRadius:6,
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "WooCommerce",
      backgroundColor: "#FF6059",
      borderRadius:6,
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
  ],
};
// let options = {
//   scales: {
//     x:{
// stacked:false,
//     },
//       y: {
//           max: 50000000,
//           min: 0,
//           position: 'left',
//           ticks: {
//               stepSize: 10000000
//           }
//       }
//   }
// };
let options12 = {
  scales: {
    yAxes: [
      {
        id: "A",
        type: "linear",
        position: "right",
      },
      {
        id: "B",
        type: "linear",
        position: "right",
        ticks: {
          max: 100,
          min: 0,
        },
      },
    ],
  },
};

const barChartOptions = {
  plugins: {
    labels: {
      render: "image",
      images: [
        {
          src:
            "data:image/jpeg;base64,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",
          height: 30,
          width: 30
        },
        {
          src:
            "data:image/jpeg;base64,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",
          height: 30,
          width: 30
        }
      ]
    },
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

//Inside data props
const dataMix = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Data1",
      data: data11,
      backgroundColor: "rgba(87, 121, 234, 0.6)",
      borderColor: "rgba(87, 121, 234, 0.6)",
      order: 1,
    },

    {
      label: "Total",
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
  const [pieChartData, setpieChartData] = useState(PIE_CHART_DATA);
  const [mixedChartData, setmixedChartData] = useState(MIXED_DATA);
  const [mixedChartLoading, setmixedChartLoading] = useState(true);
  const [stackedChartData, setstackedChartData] = useState(barChartData);
  const [stackedSalesGraph, setstackedSalesGraph] = useState(barChartData);
  const [stackedDateLabel, setstackedDateLabel] = useState([]);
  const [stackedDatevalues, setstackedDatevalues] = useState([])
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
  const [showFilter, setshowFilter] = useState(false);
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
  const [cR, setcR] = useState([{ channels: "", channelId: 0 }]);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isMobileSizes, setIsMobileSized] = useState(false);
  const [filtersClass, setfiltersClass] = useState("FiltersInDesktop");
  const [op, setop] = useState({});
  // const [FilterButtonTitle, setFilterButtonTitle] = useState(second)
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
  // fetchStackedGraphData();
   getDateLabels();
     //setpieChart();
    setMixedChart();
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
    ripleyOrders,
    vtexOrders,
    linioOrders,
    shopifyOrders,
    chambasOrders,
    magentoOrders,
    wooCommerceOrders,
    parisOrders,
    exitoOrders,
   stackedDatevalues,
 stackedDateLabel
  ]);
 
  useEffect(() => {
 
  // fetchStackedGraphData();
  }, [stackedDatevalues,stackedDateLabel]);
  
  
  const getDateLabels = ()=>{
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

    const date = new Date('2021-08-01');
    const x = result.map((item) => {
      let d = new Date(item);
      d.setDate(1);
      d.setMonth(d.getMonth()+1);
      const dateString = `${d.getDate()}-${
        MONTHS[d.getMonth()]
      }-${d.getFullYear()}`;
      return dateString;
    });
    setstackedDateLabel(x);
  }
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

  const fetchGeneralData = () => {
    console.log(cR);
    const channelsId = cR.map((item) => {
      return item.value;
    });
//     const channelList = cR.map((item) => {
//       return item.channels;
//     });
// console.log(channelList);
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
      let res1 = [];
      for(let i = 0;i<=stackedDatevalues.length-1;i++){
        let ripleyMonthlySales = obj.filter((item) => {
       
          let dateTobeCompared = stackedDatevalues[i];
          
          const splitDateCompared = dateTobeCompared.split(/[- :]/);
          const splitMonth = splitDateCompared[1];
          const splitYear = splitDateCompared[0];
          const dateTime = item.date_created;
          const parts = dateTime.split(/[- :]/);
          var month = parts[1];
          var year = parts[0];
          let result = [];
         return item.channel == 5 && month===splitMonth && year===splitYear;
      // if(item.channel == 5 && month===splitMonth && year===splitYear) res1.push(item);
      // return res1;
        });
        res1.push(ripleyMonthlySales);
      }
     
      let orderQuantityArraY = [];
      let linioStackedSalesArray = [];
      for(let i=0;i<=res1.length-1;i++){
   let channel5MonthlySales = res1[i].map((item,index)=>{
       return item.orders_qty;
     });
     let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
     orderQuantityArraY.push(totalOrder);
     linioStackedSalesArray.push(totalMonthlySales);
      } 
     
      setlinioMonthly(orderQuantityArraY);
   
      let res2 = [];
      for(let i = 0;i<=stackedDatevalues.length-1;i++){
        let ripleyMonthlySales = obj.filter((item) => {
          let dateTobeCompared = stackedDatevalues[i];
          const splitDateCompared = dateTobeCompared.split(/[- :]/);
          const splitMonth = splitDateCompared[1];
          const splitYear = splitDateCompared[0];
          const dateTime = item.date_created;
          const parts = dateTime.split(/[- :]/);
          var month = parts[1];
          var year = parts[0]; 
         return item.channel == 4 && month===splitMonth && year===splitYear;
        });
        res2.push(ripleyMonthlySales);
      }
     
      let ripleyMonthlyArray = [];
    let  ripleyStackedSalesArray = [];
      for(let i=0;i<=res2.length-1;i++){
   let channel5MonthlySales = res2[i].map((item,index)=>{
       return item.orders_qty;
     });
     let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
      }
      
//  WOO COMMERCE STACKED GRAPH ORDERS
let res3 = [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 3 && month===splitMonth && year===splitYear;

  });
  res3.push(ripleyMonthlySales);
}

let WooCommerceMonthlyArray = [];
let WooCommerceStackedSalesArray = [];
for(let i=0;i<=res3.length-1;i++){
let channel5MonthlySales = res3[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}
// SHOPIFY STACKED MONTHLY DATA

let res4 = [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
    let dateTobeCompared = stackedDatevalues[i];  
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 6 && month===splitMonth && year===splitYear;

  });
  res4.push(ripleyMonthlySales);
}

let ShopifyMonthlyArray = [];
let shopifyStackedSalesArray = [];
for(let i=0;i<=res4.length-1;i++){
let channel5MonthlySales = res4[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
ShopifyMonthlyArray.push(totalOrder);
shopifyStackedSalesArray.push(totalMonthlySales);
}
//MERCADO LIBRE STACKED MONTHLY DATA
let res5= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
    let dateTobeCompared = stackedDatevalues[i];  
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 2 && month===splitMonth && year===splitYear;

  });
  res5.push(ripleyMonthlySales);
}

let MercadoArray = [];
let MercadoStackedSalesArray = [];
for(let i=0;i<=res5.length-1;i++){
let channel5MonthlySales = res5[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}


//CHAMBAS STACKED GRAPH MONTHLY
let res6= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
    let dateTobeCompared = stackedDatevalues[i];
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 11 && month===splitMonth && year===splitYear;

  });
  res6.push(ripleyMonthlySales);
}

let ChambasMonthlyArray = [];
let ChambasStackedSalesArray = [];
for(let i=0;i<=res6.length-1;i++){
let channel5MonthlySales = res6[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
ChambasStackedSalesArray.push(totalMonthlySales);
}


//VTEX STACKED MONTHLY ARRAY

let res7= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 7 && month===splitMonth && year===splitYear;

  });
  res7.push(ripleyMonthlySales);
}

let vtexMonthlyArray = [];
let vtexStackedSalesArray = [];
for(let i=0;i<=res7.length-1;i++){
let channel5MonthlySales = res7[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}
//MAGENTO MONTHLY ARRAY
let res8= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
  let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 9 && month===splitMonth && year===splitYear;

  });
  res8.push(ripleyMonthlySales);
}

let MagentoMonthlyArray = [];
let magentoStackedSalesArray = [];
for(let i=0;i<=res8.length-1;i++){
let channel5MonthlySales = res8[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
MagentoMonthlyArray.push(totalOrder);
magentoStackedSalesArray.push(totalMonthlySales);
}
// LISTA TIENDA MONTHLY SALES
let res9= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){

  let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 8 && month===splitMonth && year===splitYear;

  });
  res9.push(ripleyMonthlySales);
}

let ListaMonthlyArray = [];
let ListaStackedSalesArray = [];
for(let i=0;i<=res9.length-1;i++){
let channel5MonthlySales = res9[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}

// PARIS STACKED MONTHLY SALES
let res10= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){

  let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == 1 && month===splitMonth && year===splitYear;

  });
  res10.push(ripleyMonthlySales);
}

let ParisMonthlyArray = [];
let ParisStackedSalesArray = [];
for(let i=0;i<=res10.length-1;i++){
let channel5MonthlySales = res10[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}
//EXITO MONTHLY STACKED ARRAY

let res11= [];
for(let i = 0;i<=stackedDatevalues.length-1;i++){
 let ripleyMonthlySales = obj.filter((item) => {
 
    let dateTobeCompared = stackedDatevalues[i];
    
    const splitDateCompared = dateTobeCompared.split(/[- :]/);
    const splitMonth = splitDateCompared[1];
    const splitYear = splitDateCompared[0];
    const dateTime = item.date_created;
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    let result = [];
   return item.channel == '12' && month===splitMonth && year===splitYear;

  });
  res11.push(ripleyMonthlySales);
}

let ExitoMonthlyArray = [];
let ExitoStackedSalesArray = [];
for(let i=0;i<=res11.length-1;i++){
let channel5MonthlySales = res11[i].map((item,index)=>{
 return item.orders_qty;
});
let stackedSalesMonthlySales = res1[i].map((item,index)=>{
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
}


        let ripleySales = obj.filter((item) => {
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
        let vtexSales = obj.filter((item) => {
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
        let linioSales = obj.filter((item) => {
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
        let mercadoSales = obj.filter((item) => {
          return item.channel == 2;
        });
   
        if (mercadoSales.length === 0) {
          setmercadoLibreOrders(0);
          setmercadoLibre(0);
        }
        let mercadoSalesArray = mercadoSales.map((item) => {
          return item.total;
        });
        let mercadoOrders = mercadoSales.map((item) => {
          return item.orders_qty;
        });
        let totalMercadoOrders = mercadoOrders.map((item) => {
          return item.orders_qty;
        });
   
        let totalmercadoSales = mercadoSalesArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let exitoSales = obj.filter((item) => {
          return item.channel == "12";
        });
        if (exitoSales.length === 0) {
          setexitoOrders(0);
          setexito(0);
        }
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
        let parisSales = obj.filter((item) => {
          return item.channel == 1;
        });
        if (parisSales.length === 0) {
          setparisOrders(0);
          setparis(0);
        }
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
        let wooCommerceSales = obj.filter((item) => {
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
        let chambasSales = obj.filter((item) => {
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
        let ListaSales = obj.filter((item) => {
          return item.channel == 8;
        });
     
        if (ListaSales.length === 0) {
          setlistaTiendaOrders(0);
          setlistaTienda(0);
        }
        let ListaArray = ListaSales.map((item) => {
          return item.total;
        });
        let totalListaSales = ListaArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );

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
        setripleyOrders(totalRipleyOrder);
        setvtexOrders(TotalVtexOrder);
        setlinioOrders(totalLinioOrder);
        setshopifyOrders(totalShopifyOrder);
        setmercadoLibreOrders(totalMercadoOrders);
        setchambasOrders(totalChambasOrders);
        setmagentoOrders(totalMagentoOrders);
        setwooCommerceOrders(totalwooCommerceOrders);
        console.log(channels);
        console.log(cR);
        let MIXED = {
          labels: channels,
          datasets: [
            {
              label: "Ventas",

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
              backgroundColor: "#344FD5",
              
              borderRadius:5,
              order: 1,
            },

            {
              label: "Órdenes",
              yAxisID: "Ordenes",
              data: [
                vtexOrders,
                linioOrders,
                mercadoLibreOrders,
                exitoOrders,
                ripleyOrders,
                shopifyOrders,
                parisOrders,
                magentoOrders,
                wooCommerceOrders,
                chambasOrders,
                listaTiendaOrders,
              ],
              backgroundColor: "#06CBC1",
              borderColor: "#06CBC1",
              fill: false,
              pointHoverRadius: 20,
              pointHoverBorderWidth: 5,
              type: "line",
              order: 0,
            },
          ],
           options: {
             labels: {
        render: 'image',
        textMargin: 10,
        images: [
          {
            src: 'https://i.stack.imgur.com/9EMtU.png',
            width: 20,
            height: 20
          },
          null, 
          {
            src: 'https://i.stack.imgur.com/9EMtU.png',
            width: 20,
            height: 20
          },
          null
        ]
      },
    
             plugins: {
               legend: {
                 display: false,
          },
             },
            scales: {
              yAxes: [
                {
                  id: "Ordenes",
                  type: "linear",
                  position: "left",
                  
                },
                {
                  id: "B",
                  type: "linear",
                  position: "right",
                  ticks: {
                    max: 1,
                    min: 0,
                  },
                },
              ],
            },
          },
        };
    
        setmixedChartData(MIXED);
      
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
       
    
        // setstackedChartData({
        //   labels: stackedDateLabel,
        //   datasets: stackedChartData.datasets,
         
        // });
        let MONTLY_ORDER_GRAPH = {
          labels:  stackedDateLabel,
          datasets: [
            {
              label: "Ripley",
              backgroundColor: "#FFD88C",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ripleyMonthlyArray,
            },
            {
              label: "ListaTienda",
              backgroundColor: "blue",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ListaMonthlyArray,
            },
            {
              label: "Magento",
              backgroundColor: "#FF6059",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: MagentoMonthlyArray,
            },
            {
              label: "Shopify",
              backgroundColor: "#97D456",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ShopifyMonthlyArray,
            },
            {
              label: "Mercadolibre",
              backgroundColor: "yellow",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: MercadoArray,
            },
            {
              label: "Chambas",
              backgroundColor: "#EDA4D1",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ChambasMonthlyArray,
            },
            {
              label: "Linio",
              backgroundColor: "#F29A32",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: orderQuantityArraY
            },
            {
              label: "Vtex",
              backgroundColor: "#F10096",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data:  vtexMonthlyArray,
            },
            {
              label: "WooCommerce",
              backgroundColor: "purple",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: WooCommerceMonthlyArray,
            },
            {
              label: "Paris",
              backgroundColor: "#00B6CB",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: ParisMonthlyArray,
            },
            {
              label: "Exito",
              backgroundColor: "#E4C41B",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: ExitoMonthlyArray,
            },
          ],
           options: {
            plugins: {
              legend: {
                display: false,
      },
            },
           },
        };
       
        setstackedChartData(MONTLY_ORDER_GRAPH);
        let MONTLY_SALES_GRAPH = {
          labels:  stackedDateLabel,
          datasets: [
            {
              label: "Ripley",
              backgroundColor: "#FFD88C",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ripleyStackedSalesArray,
            },
            {
              label: "ListaTienda",
              backgroundColor: "blue",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ListaStackedSalesArray,
            },
            {
              label: "Magento",
              backgroundColor: "#FF6059",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: magentoStackedSalesArray,
            },
            {
              label: "Shopify",
              backgroundColor: "#97D456",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: shopifyStackedSalesArray,
            },
            {
              label: "Mercadolibre",
              backgroundColor: "yellow",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: MercadoStackedSalesArray,
            },
            {
              label: "Chambas",
              backgroundColor: "#EDA4D1",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: ChambasStackedSalesArray,
            },
            {
              label: "Linio",
              backgroundColor: "#F29A32",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: linioStackedSalesArray
            },
            {
              label: "Vtex",
              backgroundColor: "#F10096",
              borderRadius: "20px",
              stack: "2",
              borderRadius:6,
              data: vtexStackedSalesArray,
            },
            {
              label: "WooCommerce",
              backgroundColor: "purple",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: WooCommerceStackedSalesArray,
            },
            {
              label: "Paris",
              backgroundColor: "#00B6CB",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: ParisStackedSalesArray,
            },
            {
              label: "Exito",
              backgroundColor: "#E4C41B",
              borderRadius: "20px",
              borderRadius:6,
              stack: "2",
              data: ExitoStackedSalesArray,
            },
          ],
        };
        setstackedSalesGraph(MONTLY_SALES_GRAPH);
        setisLoading(false);
      })
      .catch((error) => console.log("error", error));
  };
  
  const fetchFilterData = async () => {
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
 
  const setMixedChart = () => {
    setmixedChartData({
      labels: channels,
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: "#06CBC1",
          borderWidth: 2,
          fill: false,
          data: [100, 200, 300, 400, 500, 600],
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: "#344FD5",
          data: [78, 123, 45, 67, 12],
          borderColor: "#344FD5",
          borderRadius: 5,
          borderWidth: 2,
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
    setchannelId(x);
    setcR(channels);
    // setchannels(channels);
    //I HAVE COMMENTED THIS BECAUSE I AM TESTING WITH CR;
  };
  const handleDelete = (item) => {
   let x = cR.filter((i) => i !== item);
    setcR(x);
  };
  const showFiltersHandler = () => {
    setshowFilter(!showFilter);
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
                fontSize: "12px"

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
                      marginTop: "1em"
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
                  <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG1} width="30px" />
                    &nbsp; Total Ingresos
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "20px", color: "#444B54", fontWeight: "500" }}>
                 {(() => {
                    let number  = totalIncome;
                    let totalIncomeformatted = new Intl.NumberFormat("es-CL",{
                      style:'currency',
                      currency:'CLP'
                    }).format(number);
                     return <div> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {totalIncomeformatted}
                        &nbsp;<span
                        id="spanTextInfoCard"
                        style={{
                          color: "#33D69F",
                          fontSize: "10px",
                          textAlign: "right",
                        }}
                      >
                     +4.5%
                   </span></div>   
                 })()}

                  </h5>
                </div>
                {/* DISPATCH COST */}
              </Col>
              <Col md="3">
                <div>
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG2} width="30px" />
                    &nbsp;Costo Despacho
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "20px", color: "#444B54" }}>
                  {(() => {
                    let number  = dispatchCost;
                    let formatted = new Intl.NumberFormat("es-CL",{
                      style:'currency',
                      currency:'CLP'
                    }).format(number);
                     return <div> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatted}
                        &nbsp;<span
                        id="spanTextInfoCard"
                        style={{
                          color: "#FF6059",
                          fontSize: "10px",
                          textAlign: "right",
                        }}
                      >
                     -3%
                   </span></div>
                                
                              })()}

                  </h5>
                </div>
              </Col>
              {/* GM */}
              <Col md="3">
                <div>
                  <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG2} width="30px" />
                    &nbsp;GM
                  </p>

                  <h5 className="textInfoCard"  style={{ fontSize: "22px", color: "#444B54" }}>
                  {(() => {
                    let number  = gm;
                    let formatted = new Intl.NumberFormat("es-CL",{
                      style:'currency',
                      currency:'CLP'
                    }).format(number);
                     return <div> 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatted}
                        &nbsp;<span
                        id="spanTextInfoCard"
                        style={{
                          color: "#FF6059",
                          fontSize: "10px",
                          textAlign: "right",
                        }}
                      >
                     -6%
                   </span></div>   
                 })()}

                   
                  </h5>
                </div>
              </Col>
              {/* CONVERSION */}
              <Col md="3">
                <div>
                   <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconG3} width="30px" />
                    &nbsp;Conversión
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                    {/* $1.253.369 &nbsp; */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{conversion} &nbsp;
                    <span
                      id="spanTextInfoCard"
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
                    <p
                      className="titlesInfoCard"
                      style={{ color: "#C4C4C4", fontWeight: "bold" }}
                    >
                      <img src={iconPP1} width="30px" />
                      &nbsp; Pedidos
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalOrders} &nbsp;
                    <span
                      id="spanTextInfoCard"
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
                  <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP2} width="30px" />
                    &nbsp; Cancelados
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{totalCancelledOrders} &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#FF6059",
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
                  <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP3} width="30px" />
                    &nbsp; DTE enviado
                  </p>

                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totalDte} &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +8%
                    </span>
                  </h5>
                </div>
              </Col>
              {/* DELIVERED */}
              <Col md="3">
                <div>
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconPP4} width="30px" />
                    &nbsp; Entregados
                  </p>
                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;220 &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#33D69F",
                        fontSize: "16px",
                        textAlign: "right",
                      }}
                    >
                      +12%
                    </span>
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
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP1} width="30px" />
                    &nbsp; En Proceso
                  </p>
                  <h5  className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inProcess} &nbsp;
                    <span
                      id="spanTextInfoCard"
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
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP2} width="30px" />
                    &nbsp; En Preparación
                  </p>
                  <h5  className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{inPreparation} &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#FF6059",
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
                <p id="textListoParaDespacho" className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP3} width="30px" />
                    &nbsp; Listo para despacho
                  </p>
                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{readyToShip} &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#FF6059",
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
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconCP4} width="30px" />
                    &nbsp;  Próximo a llegar
                  </p>
                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{onTheWay} &nbsp;
                    <span
                      id="spanTextInfoCard"
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
                  <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconEC1} width="30px" />
                    &nbsp; NPS
                  </p>
                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;325 &nbsp;
                    <span
                      id="spanTextInfoCard"
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
                <p className="titlesInfoCard" style={{ color: "#C4C4C4", fontWeight:"bold" }}>
                    <img src={iconEC2} width="30px" />
                    &nbsp; Reviews
                  </p>
                  <h5 className="textInfoCard" style={{ fontSize: "22px", color: "#444B54" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{reviews} &nbsp;
                    <span
                      id="spanTextInfoCard"
                      style={{
                        color: "#FF6059",
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;500 &nbsp;
                      <span
                        id="spanTextInfoCard"
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
            />
          </div>

          <br></br>
          <br></br>

          {/* GRAPHS */}
          <Row>

           <Col id="ColMixedChart" md="6" sm="12" >
              <Card className="car-chart" style={{ height: "97%"}}>
                <CardHeader>
                  <CardTitle>
                    <strong>Resumen general de venta y órdenes</strong>
                  </CardTitle>  
                   <p className="card-category"> </p> 
                 </CardHeader>
                <CardBody>
                  <br></br>
                  <br></br>
                  <Bar data={mixedChartData} 
                  options={chartExample4.options}
                   />
                </CardBody>
                <br></br>
                <br></br>
              </Card>
              </Col>


              <Col id="ColPieChart" md="6" sm="12">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <strong>Participación canal de venta</strong>
                    </CardTitle>
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
                          let number  = vtex;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
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
                            let number  = linio;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
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
                          let number  = mercadoLibre;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
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
                          let number  = exito;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
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
                          let number  = ripley;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
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
                          let number  = shopify;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
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
                            let number  = paris;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
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
                            let number  = magento;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
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
                              let number  = wooCommerce;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
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
                              let number  = chambas;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
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
                              let number  = listaTienda;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
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
                  <CardHeader>
                    <strong>Órdenes por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar data={stackedChartData} 
                    options={chartExample5.options}
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
                    
                     {/* <p className="card-category">
                       {(() => {
                          let number  = vtex;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                     </p> */}
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
                        {/* <p className="card-category">
                          {(() => {
                            let number  = linio;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}

                        </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = mercadoLibre;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}  
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = exito;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = ripley;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = shopify;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                            let number  = paris;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                            let number  = magento;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                              let number  = wooCommerce;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                              let number  = chambas;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}  
                      </p> */}
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
                      {/* <p className="card-category">
                          {(() => {
                              let number  = listaTienda;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}
                      
                      </p> */}
                    </p>
                    </div>
                  </div>
                </div>

                    </CardFooter>
                </Card>
              
              </Col>
            

             <Col md="6">
                <Card className="card-chart">
                  <CardHeader>
                    <strong>Ingresos por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar
                      data={stackedSalesGraph}
                      options={chartExample5.options}
                      // options={barChartOptions}
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
                    
                     {/* <p className="card-category">
                       {(() => {
                          let number  = vtex;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                     </p> */}
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
                        {/* <p className="card-category">
                          {(() => {
                            let number  = linio;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}

                        </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = mercadoLibre;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}  
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = exito;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = ripley;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
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
                    {/* <p className="card-category">
                      {(() => {
                          let number  = shopify;
                          let formatted = new Intl.NumberFormat("es-CL",{
                            style:'currency',
                            currency:'CLP'
                          }).format(number);
                          return <div> {formatted}</div>   
                       })()}
                    </p> */}
                    </p>
                    </div>

                    <div>
                    <p className="titleTextLegend">
                      <i
                        className="fa fa-circle"
                        style={{
                          color: "#FF7ECE",
                          backgroundColor: "#FF7ECE",
                          borderRadius: "3px",
                        }}
                      />
                     &nbsp; Linio
                      {/* <p className="card-category">
                        {(() => {
                            let number  = paris;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                            let number  = magento;
                            let formatted = new Intl.NumberFormat("es-CL",{
                              style:'currency',
                              currency:'CLP'
                            }).format(number);
                            return <div> {formatted}</div>   
                        })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                              let number  = wooCommerce;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}
                      </p> */}
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
                      {/* <p className="card-category">
                        {(() => {
                              let number  = chambas;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}  
                      </p> */}
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
                      {/* <p className="card-category">
                          {(() => {
                              let number  = listaTienda;
                              let formatted = new Intl.NumberFormat("es-CL",{
                                style:'currency',
                                currency:'CLP'
                              }).format(number);
                              return <div> {formatted}</div>   
                          })()}
                      
                      </p> */}
                    </p>
                    </div>
                  </div>
                </div>
                  </CardFooter>
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
          {/* </Row> */}
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

         <Row>
           <div class="text-center" style={{marginTop: "3em"}}>
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
                
                <span className="btn-label">
                  <img src={iconShareReport} width="19px"/>
                </span>
                &nbsp;Compartir Reporte &nbsp;
              </button>
           
              <button
                id="bttnSubmit"
                
                style={{
                  backgroundColor: "white",
                  textAlign: "center",
                  color: "black",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  fontSize: "11px",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight:"bold",
                  border:"0"
               
                }}
              >
                Siguiente Reporte &nbsp;
                <span className="btn-label">
                   <img src={iconNextReport} width="19px"/>
                </span>
              </button>
            </div>
          </Row>

        </div>
      )}
    </>
  );
}

export default Charts;
