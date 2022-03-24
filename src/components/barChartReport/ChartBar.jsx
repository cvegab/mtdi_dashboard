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
import './ChartBart.css';

const stackedDateLabel = [
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
]
let ordersGraph = {
  labels: stackedDateLabel,
  datasets: [
    {
      label: "Ripley",
      backgroundColor: "#FFD88C",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Vtex",
      backgroundColor: "#F10096",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Shopify",
      backgroundColor: "#97D456",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Magento",
      backgroundColor: "#FF6059",
      borderRadius: "20px",
      borderRadius: 6,
      stack: "2",
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Mercadolibre",
      backgroundColor: "yellow",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Paris",
      backgroundColor: "#00B6CB",
      borderRadius: "20px",
      borderRadius: 6,
      barThickness: 30,
      stack: "2",
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Exito",
      backgroundColor: "#E4C41B",
      borderRadius: "20px",
      borderRadius: 6,
      barThickness: 30,
      stack: "2",
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "Linio",
      backgroundColor: "#F29A32",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
   
    {
      label: "Chambas",
      backgroundColor: "#EDA4D1",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "ListaTienda",
      backgroundColor: "blue",
      borderRadius: "20px",
      stack: "2",
      borderRadius: 6,
      data:["1200","2000","1500","1500"],
      barThickness: 30,
    },
    {
      label: "WooCommerce",
      backgroundColor: "purple",
      borderRadius: "20px",
      borderRadius: 6,
      barThickness: 30,
      stack: "2",
      data:["1200","2000","1500","1500","4000","1500","2720","3000"],
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

const ChartBar = (props) => {
  return (
    <div style={{margin:"20px"}}>      
                  <Card className="card-chart">
                    <CardHeader id="textNameTable">
                      <strong>{props.title}</strong>
                    </CardHeader>
                    <br></br>
                    <CardBody>
                      <Bar
                        data={ordersGraph}
                        options={ordersGraph.options}
                      />
                    </CardBody>
                    <CardFooter>
                      <div >
                        <div className="infoLegendReport">
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#FFD88C",
                                  backgroundColor: "#FFD88C",
                                  borderRadius: "3px",
                                  marginLeft:"1em"
                                }}
                              />
                              &nbsp;&nbsp;&nbsp;Ripley
                              <p id="ordersGraphText" className="card-category">
                                420 órdenes
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
                              &nbsp;&nbsp;&nbsp;ListaTienda
                              <p id="ordersGraphText" className="card-category">
                                420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Magento
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Shopify
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Mercadolibre
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Chambas
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp; Linio
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp; Vtex
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;WooCommerce
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Paris
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
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
                              &nbsp;&nbsp;&nbsp;Exito
                              <p id="ordersGraphText" className="card-category">
                              420 órdenes
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                
    </div>
  )
}

export default ChartBar