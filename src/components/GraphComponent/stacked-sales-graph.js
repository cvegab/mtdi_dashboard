import SplashScreen from "components/UI/splash-screen";
import React, { Fragment, useEffect, useState } from "react";
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
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
const StackedSalesGraph = (props) => {
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
  const [stackedSalesGraph, setstackedSalesGraph] = useState(barChartData);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    //fetchStackedGraphForSales();
  }, []);
  useEffect(() => {
    //fetchStackedGraphForOrders();
   // fetchStackedGraphForSales();
  }, [props.channelId]);
  useEffect(() => {
    setStackedGraphForSales();
  }, [
    props.stackedDateLabel,
    props.newlinioSalesMonthly,
    props.newVtexSalesMonthly,
    props.newRipleySalesMonthly,
    props.newChambasSalesMonthly,
    props.newMagentoSalesMonthly,
    props.newWooCommerceSalesMonthly,
    props.newShopifySalesMonthly,
    props.newMercadoSalesMonthly,
    props.newParisSales,
    props.newExitoSalesMonthly,
    props.newListaSales,
  ]);
  // const fetchStackedGraphForSales = () => {
  //   setisLoading(true);
  //   console.log(props.cR);
  //   let newChannelList = props.cR.map((item) => {
  //     return item.channel;
  //   });
  //   console.log(newChannelList);
  //   var myHeaders = new Headers();
  //   myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/resume?channels=${props.channelId}&store=${props.storeId}&dateFrom=${props.selectedDateFrom}&dateTo=${props.selectedDateTo}&country=${props.countryId}`;
  //   console.log(url);

  //   fetch(url, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       var obj = JSON.parse(result);
  //       console.log(newChannelList);
  //       if (newChannelList.length === 0) {
  //         newChannelList = [
  //           "Vtex",
  //           "Linio",
  //           "MercadoLibre",
  //           "Exito",
  //           "Ripley",
  //           "Shopify",
  //           "Paris",
  //           "Magento",
  //           "Woocommerce",
  //           "Chambas",
  //           "ListaTienda",
  //         ];
  //       }

  //       // NEW LOGIC
  //       let linio = [];
  //       if (newChannelList.includes("Linio")) {
  //         linio = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Linio;
  //         });
  //         console.log(linio[0].Linio);
  //         setnewlinioSalesMonthly(linio[0].Linio);
  //       }
  //       if (!newChannelList.includes("Linio")) {
  //         setnewlinioSalesMonthly(0);
  //       }

  //       let Vtex = [];
  //       if (newChannelList.includes("Vtex")) {
  //         Vtex = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Vtex;
  //         });

  //         setnewVtexSalesMonthly(Vtex[0].Vtex);
  //       }
  //       if (!newChannelList.includes("Vtex")) {
  //         setnewVtexSalesMonthly(0);
  //       }
  //       let ripley = [];
  //       if (newChannelList.includes("Ripley")) {
  //         ripley = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Ripley;
  //         });

  //         setnewRipleySalesMonthly(ripley[0].Ripley);
  //       }
  //       if (!newChannelList.includes("Ripley")) {
  //         setnewRipleySalesMonthly(0);
  //       }
  //       let chambas = [];
  //       if (newChannelList.includes("Chambas")) {
  //         chambas = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Chambas;
  //         });
  //         console.log(chambas[0].Chambas);
  //         setnewChambasSalesMonthly(chambas[0].Chambas);
  //       }
  //       if (!newChannelList.includes("Chambas")) {
  //         setnewChambasSalesMonthly(0);
  //       }
  //       let magento = [];
  //       if (newChannelList.includes("Magento")) {
  //         magento = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Magento;
  //         });
  //         console.log(magento[0].Magento);
  //         setnewMagentoSalesMonthly(magento[0].Magento);
  //       }
  //       if (!newChannelList.includes("Magento")) {
  //         setnewMagentoSalesMonthly(0);
  //       }
  //       let woo = [];
  //       if (newChannelList.includes("Woocommerce")) {
  //         woo = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Woocommerce;
  //         });

  //         setnewWooCommerceSalesMonthly(woo[0].Woocommerce);
  //       }
  //       if (!newChannelList.includes("Woocommerce")) {
  //         setnewWooCommerceSalesMonthly(0);
  //       }
  //       let shopify = [];
  //       if (newChannelList.includes("Shopify")) {
  //         shopify = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Shopify;
  //         });

  //         setnewShopifySalesMonthly(shopify[0].Shopify);
  //       }
  //       if (!newChannelList.includes("Shopify")) {
  //         setnewShopifySalesMonthly(0);
  //       }
  //       let mer = [];
  //       if (newChannelList.includes("MercadoLibre")) {
  //         mer = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.MercadoLibre;
  //         });

  //         setnewMercadoSalesMonthly(mer[0].MercadoLibre);
  //       }
  //       if (!newChannelList.includes("MercadoLibre")) {
  //         setnewMercadoSalesMonthly(0);
  //       }
  //       let pari = [];
  //       if (newChannelList.includes("Paris")) {
  //         pari = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Paris;
  //         });

  //         setnewParisSales(pari[0].Paris);
  //       }
  //       if (!newChannelList.includes("Paris")) {
  //         setnewParisSales(0);
  //       }
  //       let exi = [];
  //       if (newChannelList.includes("Exito")) {
  //         exi = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.Exito;
  //         });

  //         setnewExitoSalesMonthly(exi[0].Exito);
  //       }
  //       if (!newChannelList.includes("Exito")) {
  //         setnewExitoSalesMonthly(0);
  //       }
  //       let lista = [];
  //       if (newChannelList.includes("ListaTienda")) {
  //         lista = obj.resume.stackedSalesGraphByMonth.filter((item) => {
  //           return item.ListaTienda;
  //         });

  //         setnewListaSales(lista[0].ListaTienda);
  //       }
  //       if (!newChannelList.includes("ListaTienda")) {
  //         setnewListaSales(0);
  //       }
  //       setisLoading(false);
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  const setStackedGraphForSales = () => {
    let MONTLY_SALES_GRAPH = {
      labels: props.stackedDateLabel,

      datasets: [
        {
          label: "Ripley",
          backgroundColor: "#FFD88C",
          borderRadius: "20px",
          stack: "2",
          borderRadius: 6,
          data: newRipleySalesMonthly,
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
          data: newMagentoSalesMonthly,
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
  };
  return (
    <Fragment>
      {props.isStackedGraphLoading&&<SplashScreen message='Reportes'></SplashScreen>}
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
    </Fragment>
  );
};
export default StackedSalesGraph;
