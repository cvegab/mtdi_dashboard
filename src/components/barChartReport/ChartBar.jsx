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
import "./ChartBart.css";
import StackedSalesGraph from "../../components/GraphComponent/stacked-sales-graph";

const ChartBar = (props) => {
 
  
  let channel = props.channel.map((item) => {
    return item.channel;
  });
  console.log(channel);
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
  ];
  let ordersGraph = {
    labels: props.stackedDateLabel,
    datasets: [
      {
        label: "Ripley",
        backgroundColor: "#FFD88C",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newRipley,
        barThickness: 30,
      },
      {
        label: "Vtex",
        backgroundColor: "#F10096",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newVtex,
        barThickness: 30,
      },
      {
        label: "Shopify",
        backgroundColor: "#97D456",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newShopify,
        barThickness: 30,
      },
      {
        label: "Magento",
        backgroundColor: "#FF6059",
        borderRadius: "20px",
        borderRadius: 6,
        stack: "2",
        data: props.newMagento,
        barThickness: 30,
      },
      {
        label: "Mercadolibre",
        backgroundColor: "yellow",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newMercado,
        barThickness: 30,
      },
      {
        label: "Paris",
        backgroundColor: "#00B6CB",
        borderRadius: "20px",
        borderRadius: 6,
        barThickness: 30,
        stack: "2",
        data: props.newParis,
        barThickness: 30,
      },
      {
        label: "Exito",
        backgroundColor: "#E4C41B",
        borderRadius: "20px",
        borderRadius: 6,
        barThickness: 30,
        stack: "2",
        data: props.newExito,
        barThickness: 30,
      },
      {
        label: "Linio",
        backgroundColor: "#F29A32",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newlinio,
        barThickness: 30,
      },

      {
        label: "Chambas",
        backgroundColor: "#EDA4D1",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newChambas,
        barThickness: 30,
      },
      {
        label: "ListaTienda",
        backgroundColor: "blue",
        borderRadius: "20px",
        stack: "2",
        borderRadius: 6,
        data: props.newLista,
        barThickness: 30,
      },
      {
        label: "WooCommerce",
        backgroundColor: "purple",
        borderRadius: "20px",
        borderRadius: 6,
        barThickness: 30,
        stack: "2",
        data: props.newWooCommerc,
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
  // console.log(props);
  let ripley = props.ripley;
  let vtex = props.vtex;
  let linio = props.linio;
  let mercadoLibre = props.mercadoLibre;
  let exito = props.exito;
  let paris = props.paris;
  let shopify = props.shopify;
  let wooCommerce = props.wooCommerce;
  let magento = props.magento;
  let chambas = props.chambas;
  let listaTienda = props.listaTienda;
  return (
    <div style={{ margin: "20px", borderRadius: "30px" }}>
      <Card id="cardChartBarReport" className="card-chart">
        <CardHeader className="textNameTableReport">
          <strong>{props.title}</strong>
        </CardHeader>
        <br></br>
        <CardBody>
          <Bar data={ordersGraph} options={ordersGraph.options} />
          {/* <StackedSalesGraph
                         // cR={pcR}
                         cR={props.channel}
                          channelId={props.channelId}
                          stackedDateLabel={props.stackedDateLabel}
                          storeId={props.storeId}
                          selectedDateTo={props.selectedDateTo}
                          selectedDateFrom={props.selectedDateFrom}
                          countryId={props.countryId}
                        ></StackedSalesGraph> */}
                    </CardBody>
        
        <CardFooter>
          <div>
            <div className="infoLegendReport">
              <div>
              {channel.includes('Ripley') &&   <p className="titleTextLegendReport">
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FFD88C",
                        backgroundColor: "#FFD88C",
                        borderRadius: "3px",
                        marginLeft: "1em",
                      }}
                    />
                    &nbsp;&nbsp;&nbsp;Ripley
                    <p id="ordersGraphText" className="numberTextLegendReport">
                      {ripley} {props.text}
                    </p>
                  </p>}
              </div>
              <div>
              {channel.includes('ListaTienda') &&<p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "blue",
                      backgroundColor: "blue",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;ListaTienda
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {listaTienda} {props.text}
                  </p>
                </p>}
              </div>
              <div>
              {channel.includes('Magento') &&<p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#FF6059",
                      backgroundColor: "#FF6059",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Magento
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {magento} {props.text}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Shopify') && <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#97D456",
                      backgroundColor: "#97D456",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Shopify
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {shopify} {props.text}
                  </p>
                </p>}
              </div>
              <div>
                <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "yellow",
                      backgroundColor: "yellow",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Mercadolibre
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {mercadoLibre} {props.text}
                  </p>
                </p>
              </div>

              <div>
              {channel.includes('Chambas') && <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#EDA4D1",
                      backgroundColor: "#EDA4D1",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Chambas
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {chambas} {props.text}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Linio')&&  <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#F29A32",
                      backgroundColor: "#F29A32",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp; Linio
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {linio} {props.text}{" "}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Vtex')&& <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#F10096",
                      backgroundColor: "#F10096",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp; Vtex
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {vtex} {props.text}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Woocommerce')&& <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "purple",
                      backgroundColor: "purple",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;WooCommerce
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {wooCommerce} {props.text}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Paris')&&  <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#00B6CB",
                      backgroundColor: "#00B6CB",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Paris
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {paris} {props.text}
                  </p>
                </p>}
              </div>

              <div>
              {channel.includes('Exito')&&  <p className="titleTextLegendReport">
                  <i
                    className="fa fa-circle"
                    style={{
                      color: "#E4C41B",
                      backgroundColor: "#E4C41B",
                      borderRadius: "3px",
                    }}
                  />
                  &nbsp;&nbsp;&nbsp;Exito
                  <p id="ordersGraphText" className="numberTextLegendReport">
                    {exito} {props.text}
                  </p>
                </p>}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChartBar;
