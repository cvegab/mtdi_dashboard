import React,{ useEffect, useState } from "react";
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
const PieChart = (props)=>{
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setpieChartGraph();
  }, [
    props.linioPie,
    props.vtexPie,
    props.shopifyPie,
    props.ripleyPie,
    props.magentoPie,
    props.wooPie,
    props.chambasPie,
    props.mercadoPie,
    props.exitoPie,
   props.parisPie,
    props.listaPie,
  ]);
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
  const setpieChartGraph = () => {
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
            props.vtexPie,
            props.linioPie,
            props.mercadoPie,
            props.exitoPie,
            props.ripleyPie,
            props.shopifyPie,
            props.parisPie,
            props.magentoPie,
            props.wooPie,
            props.chambasPie,
            props.listaPie,
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
  };
  
return (
    <React.Fragment>
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
  </React.Fragment>
)
}
export default PieChart;