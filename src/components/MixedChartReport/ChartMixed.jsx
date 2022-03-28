import React from "react";
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
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import './ChartMixed.css';
// import MixedAndPieChart from "components/GraphComponent/mixed-and-pie-chart";
import MixedAndPieChart from "../../components/GraphComponent/mixed-and-pie-chart";





const ChartMixed = (props) => {
  // console.log(props.data.datasets[1].data);
  // let MIXED = {
  //   labels: props.data.labels,
  //   datasets: [
  //     {
  //       label: "Ventas",
  //       data: props.data.datasets[0].data,
  //       backgroundColor: "#344FD5",
  //       borderRadius: 5,
  //       order: 0,
  //     },
  //     {
  //       label: "Órdenes",
  //       yAxisID: "Ordenes",

  //       data: props.data.datasets[1].data,
  //       backgroundColor: "#06CBC1",
  //       borderColor: "#06CBC1",
  //       fill: false,
  //       pointHoverRadius: 10,
  //       pointHoverBorderWidth: 5,
  //       type: "line",
  //       order:1,
  //       color: "#9f9f9f",
  //     },
  //   ],

  //   options: {
  //     responsive: true,
  //     // maintainAspectRatio: false,
  //     aspectRatio: 2,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //     scales: {
  //       grid: {
  //         drawBorder: false,
  //         display: false,
  //         zeroLineColor: "transparent",
  //       },
  //       y: {
  //         display: true,
  //         position: "right",
  //         ticks: {
  //           color: "#9f9f9f",
  //           beginAtZero: true,
  //           maxTicksLimit: 5,
  //           callback: function (data) {
  //             let number = data;
  //             let totalValueFormatted = new Intl.NumberFormat("es-CL", {
  //               style: "currency",
  //               currency: "CLP",
  //             }).format(number);
  //             return totalValueFormatted;
  //           },
  //           // padding: 100,
  //         },
  //         grid: {
  //           zeroLineColor: "transparent",
  //           display: false,
  //           drawBorder: false,
  //           color: "#EBEBEBf",
  //           // borderDash: [8, 6],
  //           lineWidth: 0,
  //         },
  //       },

  //       x: {
  //         display: true,
  //         grid: {
  //           display: false,
  //           drawBorder: false,
  //         },
  //         ticks: {
  //           font: {
  //             size: 10,
  //           },
  //           padding: 20,
  //           color: "#9f9f9f",
  //           //  color:"blue",
  //         },
  //       },
  //     },
  //   },
  // };
  
  return (
    <div style={{margin:"30px"}}>
                      <Card className="card-chart" id="mixedChartCustom" style={{borderRadius:"40px"}}>
                      <CardHeader>
                      <CardTitle id="textNameTable">
                        <strong className="title-chartMixed">{props.title}</strong>
                      </CardTitle>
                      <p className="card-category"> </p>
                    </CardHeader>
                    <CardBody>
                    
                      {/* <Bar
                        data={MIXED}
                         options={MIXED.options}
                        
                      /> */}
                      {/* <ChartMixed  mixedChartData={props.mixedChartData}></ChartMixed> */}
                      <MixedAndPieChart
                    mixedChartData={props.mixedChartData}
                  ></MixedAndPieChart>
                 
                    </CardBody>
                    <br></br>
                    <br></br>
                  </Card>
    </div>
  )
}

export default ChartMixed