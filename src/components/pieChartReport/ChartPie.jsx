// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Row,
//   Col,
//   Button,
//   Input,
//   Spinner,
//   Badge,
// } from "reactstrap";
// import { Line, Bar, Pie, Chart } from "react-chartjs-2";
// import './ChartPie.css'
// import PieChart from "../../components/GraphComponent/pie-chart";

// const ChartPie = (props) => {
//   console.log(props.channel);
//   let channel = props.channel.map(item=>{
//     return item.channel;
//   })
//   let ripley=props.ripleyPie;
//  let vtex=props.vtexPie;
//   let linio=props.linioPie;
//   let mercadoLibre=props.mercadoPie;
//   let exito=props.exitoPie;
//   let paris=props.parisPie;
//   let shopify=props.shopifyPie;
//   let wooCommerce=props.wooPie;
//   let magento=props.magentoPie;
//   let chambas=props.chambasPie;
//   let listTienda=props.listaPie;
//   const pieChart = {
//     labels: [
//       "Vtex",
//       "Linio",
//       "Mercadolibre",
//       "Exito",
//       "Ripley",
//       "Shopify",
//       "Paris",
//       "Magento",
//       "WooCommerce",
//       "Chambas",
//       "ListaTienda",
//     ],
    
//     datasets: [
//       {
//         label: "Emails",
//         pointRadius: 0,
//         pointHoverRadius: 0,
//         backgroundColor: [
//           "#F10096",
//           "#F29A32",
//           "yellow",
//           "#E4C41B",
//           "#FFD88C",
//           "#97D456",
//           "#00B6CB",
//           "#FF6059",
//           "purple",
//           "#EDA4D1",
//           "blue",
//         ],
//         borderWidth: 0,
//         barPercentage: 1.6,
//         data: [1000,384,467,46768,478]
//       },
//     ],
//     options: {
//       plugins: {
//         legend: {
//           display: false,
//         },
  
//         tooltips: {
//           enabled: false,
//         },
//       },
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           ticks: {
//             display: false,
//           },
//           grid: {
//             drawBorder: false,
//             zeroLineColor: "transparent",
//             color: "rgba(255,255,255,0.05)",
//           },
//         },
//         x: {
//           grid: {
//             drawBorder: false,
//             color: "rgba(255,255,255,0.1)",
//             zeroLineColor: "transparent",
//           },
//           ticks: {
//             display: false,
//           },
//         },
//       },
//     },
//   };
  
//   // console.log(props.data.datasets[0].data);
//   return (
//     <div style={{margin:"20px"}}>
//                   <Card style={{borderRadius:"40px", height:"800px"}}>
//                     <CardHeader>
//                       <CardTitle>
//                         <strong className="title-chartPieReport">{props.title}</strong>
//                       </CardTitle>
//                     </CardHeader>
//                     <CardBody>
//                       <Pie
//                          id="barChartCustom"
//                         data={pieChart}
//                         options={pieChart.options}
//                         style={{ height: "200px"}}
//                       />
//                        {/* <PieChart linioPie = {props.linioPie} vtexPie={props.vtexPie} shopifyPie={props.shopifyPie} ripleyPie={props.ripleyPie} magentoPie={props.magentoPie} wooPie={props.wooPie}  chambasPie={props.chambasPie} mercadoPie={props.mercadoPie} exitoPie={props.exitoPie} parisPie={props.parisPie} listaPie={props.listaPie}></PieChart> */}
//                     </CardBody>
//                     <CardFooter>
//                     <div className="infoLegendPieChart">
//         <div>
//          {channel.includes('Vtex') && <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#F10096",
//                 backgroundColor: "#F10096",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Vtex
//             {/* ["#344FD5", "#06CBC1","#F10096","#FF6059","#FFD88C","#00B6CB","#00B6CC","#97D456","#FF6059",'yellow','red'], */}
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number =vtex;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>
//         <div>
//          {channel.includes('Linio')&& <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#F29A32",
//                 backgroundColor: "#F29A32",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Linio
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number =linio;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>
//         <div>
//          {channel.includes('MercadoLibre')&& <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "yellow",
//                 backgroundColor: "yellow",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Mercadolibre
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number =mercadoLibre;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
//         {channel.includes('Exito')&& <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#E4C41B",
//                 backgroundColor: "#E4C41B",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Exito
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = exito;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>
//         <div>
//         {channel.includes('Ripley')&&<p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#FFD88C",
//                 backgroundColor: "#FFD88C",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Ripley
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = ripley;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p> }
//         </div>

//         <div>
//         {channel.includes('Shopify')&&  <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#97D456",
//                 backgroundColor: "#97D456",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Shopify
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = shopify;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
//         {channel.includes('Paris')&& <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#00B6CB",
//                 backgroundColor: "#00B6CB",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp; Paris
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = paris;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
       
//         {channel.includes('Magento')&&<p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#FF6059",
//                 backgroundColor: "#FF6059",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp; Magento
//             <p className="card-category">
//               {(() => {
//                 let number = magento;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
//         {channel.includes('Woocommerce') &&<p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "purple",
//                 backgroundColor: "purple",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;WooCommerce
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = wooCommerce;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
//         {channel.includes('Chambas')&&<p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "#EDA4D1",
//                 backgroundColor: "#EDA4D1",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;Chambas
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = chambas;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {" "}
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>

//         <div>
//          {channel.includes('ListaTienda')&& <p className="titleTextLegend">
//             <i
//               className="fa fa-circle"
//               style={{
//                 color: "blue",
//                 backgroundColor: "blue",
//                 borderRadius: "3px",
//               }}
//             />
//             &nbsp;ListaTienda
//             <p className="numberTextLegendReport">
//               {(() => {
//                 let number = listTienda;
//                 let formatted = new Intl.NumberFormat("es-CL", {
//                   style: "currency",
//                   currency: "CLP",
//                 }).format(number);
//                 return (
//                   <p className="numberTextLegend">
//                     {formatted}
//                   </p>
//                 );
//               })()}
//             </p>
//           </p>}
//         </div>
//       </div>
//                     </CardFooter>
//                   </Card>
//     </div>
//   )
// }

// export default ChartPie
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


const ChartPie = (props) => {
  console.log(props);
  let channel = props.channel.map(item=>{
    return item.channel;
  })
  let ripley=props.ripleyPie;
 let vtex=props.vtexPie;
  let linio=props.linioPie;
  let mercadoLibre=props.mercadoPie;
  let exito=props.exitoPie;
  let paris=props.parisPie;
  let shopify=props.shopifyPie;
  let wooCommerce=props.wooCommercePie;
  let magento=props.magentoPie;
  let chambas=props.chambasPie;
  let listaTienda=props.listaPie;
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
  
  
  return (
    <div style={{margin:"20px"}}>
                  <Card style={{borderRadius:"40px", height:"800px"}}>
                    <CardHeader>
                      <CardTitle>
                        <strong className="title-chartPieReport">{props.title}</strong>
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Pie
                        // id="barChartCustom"
                        data={pieChart}
                        options={pieChart.options}
                        style={{ height: "200px"}}
                      />
                    </CardBody>
                    <CardFooter>
                      <div className="infoLegendPieChart">
                        <div>
                        {channel.includes('Vtex') && <p className="titleTextLegendReport">
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
                                let number = vtex;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
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
                            &nbsp;&nbsp;&nbsp;Linio
                            <p className="card-category">
                              {(() => {
                                let number = linio;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>
                        <div>
                        {channel.includes('MercadoLibre')&&<p className="titleTextLegendReport">
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
                                let number = mercadoLibre;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {formatted}
                                  </p>
                                );
                              })()}
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
                            <p className="card-category">
                              {(() => {
                                let number = exito;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>
                        <div>
                        {channel.includes('Ripley')&&    <p className="titleTextLegendReport">
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
                                let number = ripley;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('Shopify')&&    <p className="titleTextLegendReport">
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
                                let number = shopify;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('Paris')&&   <p className="titleTextLegendReport">
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
                                let number = paris;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('Magento')&&  <p className="titleTextLegendReport">
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
                                let number = magento;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('Woocommerce')&&<p className="titleTextLegendReport">
                            <i
                              className="fa fa-circle"
                              style={{
                                color: "purple",
                                backgroundColor: "purple",
                                borderRadius: "3px",
                              }}
                            />
                            &nbsp;&nbsp;WooCommerce
                            <p className="card-category">
                              {(() => {
                                let number = wooCommerce;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('Chambas')&& <p className="titleTextLegendReport">
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
                                let number = chambas;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {" "}
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>

                        <div>
                        {channel.includes('ListaTienda')&& <p className="titleTextLegendReport">
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
                                let number = listaTienda;
                                let formatted = new Intl.NumberFormat("es-CL", {
                                  style: "currency",
                                  currency: "CLP",
                                }).format(number);
                                return (
                                  <p className="numberTextLegendReport">
                                    {formatted}
                                  </p>
                                );
                              })()}
                            </p>
                          </p>}
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
    </div>
  )
}

export default ChartPie