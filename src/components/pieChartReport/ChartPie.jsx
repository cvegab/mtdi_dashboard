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
import './ChartPie.css'

const pieChart = {
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
      data: [1200, 10020, 3000, 1240,5000,4500,1200,3000,120,2300,3000,4000,10000]
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

const ChartPie = (props) => {
  return (
    <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <strong className="title-chartPie">{props.title}</strong>
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Pie
                        // id="barChartCustom"
                        data={pieChart}
                        options={pieChart.options}
                        // style={{ width: "300px" }}
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
                            &nbsp;&nbsp;&nbsp;Vtex
                            {/* ["#344FD5", "#06CBC1","#F10096","#FF6059","#FFD88C","#00B6CB","#00B6CC","#97D456","#FF6059",'yellow','red'], */}
                            <p className="card-category">
                              {(() => {
                                let number = 1234;
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
                            &nbsp;&nbsp;&nbsp;Linio
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;Mercadolibre
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;Exito
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;Ripley
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;Shopify
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp; Paris
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp; Magento
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;WooCommerce
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;Chambas
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
                            &nbsp;&nbsp;&nbsp;ListaTienda
                            <p className="card-category">
                              {(() => {
                                let number = 4500;
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
    </div>
  )
}

export default ChartPie