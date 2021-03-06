import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
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
import CardReports from "components/CardReports/CardReports";
import ChartMixed from "components/MixedChartReport/ChartMixed";
import ChartPie from "components/pieChartReport/ChartPie.jsx";
import ChartBar from "components/barChartReport/ChartBar";

import iconInstance from "../../assets/img/icons/Reports/icon1.png";
import "./PDFReport.css";

const PDFReport = (props) => {
  console.log(props);
  const pdfExportComponent = React.useRef(null);
  const container = React.useRef(null);
  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    let gridElement = document.querySelector(".k-grid");
    drawDOM(element, {
      paperSize: "A4",
    })
      .then((group) => {
        return exportPDF(group);
      })
      .then((dataUri) => {
        console.log(dataUri.split(";base64,")[1]);
      });
  };
  return (
    <div>
      <div className="example-config">
        <button
          className="downloadPDBttn"
          style={{
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            width: "400px",
            height: "64px",
            padding: "22px 81px",
            borderRadius: "33px",
            color: "#1D308E",
            marginLeft: "1em",
            textTransform: "none",
            fontWeight: "bold",
            border: "0",
            fontSize: "11px",
            textDecoration: "underline",
          }}
          //   onClick={() => {
          //   if (pdfExportComponent.current) {
          //     pdfExportComponent.current.save();
          //   }
          // }}

          onClick={() => {
            let element = container.current;
            const f = savePDF(element, {
              paperSize: "auto",
              margin: "0cm",
              fileName: "Reporte General",
            });
            console.log(f);
          }}
        >
          <p className="textBttnDownloadReport">Descarga este Reporte como PDF</p>
        </button>
      </div>

      <div
        id="reportPDFcontent"
        style={{
          position: "absolute",
          left: "-3000px",
          top: 0,
        }}
      >
        <PDFExport
          paperSize="A4"
          margin="1cm"
          ref={pdfExportComponent}
          fileName="Reporte General"
          creator="Instance"
        >
          <div ref={container}>
            <table className="backgroundReport" id="spinz">
              <tr>
                <td>
                  <br />
                  <p className="titleReports">
                    <img src={iconInstance} width="60" /> Reporte General
                  </p>
                  <ChartMixed
                    title="Resumen general de ordenes y ventas"
                    // data={props.barChartData}
                    // options={props.barChartOptions}
                    mixedChartData={props.mixedChartData}
                  />

                  <CardReports
                    title="Procesamiento de pedidos"
                    subtitle1="Pedidos"
                    value1={props.totalOrders}
                    subtitle2="Cancelados"
                    value2={props.totalCancelledOrders}
                    subtitle3="DTE enviado"
                    value3={props.totalDte}
                    // subtitle4="Entregados"
                    // value4="0"
                  />

                  <CardReports
                    title="Experiencia del cliente"
                    subtitle1="NPS"
                    value1={props.totalNps}
                    subtitle2="Reviews"
                    value2={props.reviews}
                    subtitle3="Reclamos"
                    value3={props.totalClaims}
                    subtitle4=""
                    value4=""
                  />
                </td>

                <td>
                  {(() => {
                    let number = props.totalIncome;
                    let totalIncomeTemporal = new Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    }).format(number);

                    let numberDispatch = props.dispatchCost;
                    let totalDispatchCost = new Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    }).format(numberDispatch);

                    let numberGM = props.gm;
                    let totalGM = new Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP",
                    }).format(numberGM);

                    return (
                      <CardReports
                        title="Datos generales"
                        subtitle1="Total ingresos"
                        value1={totalIncomeTemporal}
                        subtitle2="Costo Despacho"
                        value2={totalDispatchCost}
                        subtitle3="GM"
                        value3={totalGM}
                        subtitle4="Conversi??n"
                        value4="0"
                      />
                    );
                  })()}

                  <CardReports
                    title="Cumplimiento de pedidos"
                    subtitle1="En Proceso"
                    value1={props.inProcess}
                    subtitle2="En Preparaci??n"
                    value2={props.inPreparation}
                    subtitle3="Listo para despacho"
                    value3={props.readyToShip}
                    subtitle4="Pr??ximo a llegar"
                    value4={props.onTheWay}
                  />

                  <ChartPie
                    title="Participacion canal de venta"
                    channel={props.channel}
                    linioPie={props.linioPie}
                    vtexPie={props.vtexPie}
                    shopifyPie={props.shopifyPie}
                    ripleyPie={props.ripleyPie}
                    magentoPie={props.magentoPie}
                    wooPie={props.wooPie}
                    chambasPie={props.chambasPie}
                    mercadoPie={props.mercadoPie}
                    exitoPie={props.exitoPie}
                    parisPie={props.parisPie}
                    listaPie={props.listaPie}
                    // data={props.pieChartData}
                    // options={props.pieChartData.options}
                    // ripley={props.ripley}
                    // vtex={props.vtex}
                    // linio={props.linio}
                    // mercadoLibre={props.mercadoLibre}
                    // exito={props.exito}
                    // paris={props.paris}
                    // shopify={props.shopify}
                    // wooCommerce={props.wooCommerce}
                    // magento={props.magento}
                    // chambas={props.chambas}
                    // listaTienda={props.listaTienda}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <ChartBar
                  text='??rdenes'
                 
                    title="Ordenes por canal de venta"
                    stackedDateLabel={props.stackedDateLabel}
                    newlinio={props.newlinioMonthly}
          newVtex={props.newVtexMonthly}
          newRipley={props.newRipleyMonthly}
          newChambas={props.newChambasMonthly}
          newMagento={props.newMagentoMonthly}
          newWooCommerce={props.newWooCommerceMonthly}
          newShopify={props.newShopifyMonthly}
          newMercado={props.newMercadoOrdersMonthly}
          newParis={props.newParisOrders}
          newExtito={props.newExtitoOrders}
          newLista={props.newListaOrders}
          vtex={props.vtex}
          linio={props.linio}
          magento={props.magento}
          mercadoLibre={props.mercadoLibre}
          exito={props.exito}
          ripley={props.ripley}
          shopify={props.shopify}
          paris={props.paris}
          wooCommerce={props.wooCommerce}
          chambas={props.chambas}
          listaTienda={props.listaTienda}
          channel={props.channel}
                  //   data={props.SalesChart}
                  //   options={props.SalesChartOptions}
                  //  stackedDateLabel={props.stackedDateLabel}
                  //   newRipley={props.newRipleyMonthly}
                  //   newVtex={props.newVtexMonthly}
                  //   newlinio={props.newlinioMonthly}
                  //   newMercado={props.newMercadoOrdersMonthly}
                  //   newExtito={props.newExtitoOrders}
                  //   newParis={props.newParisOrders}
                  //   newShopify={props.newShopifyMonthly}
                   
                  //   newMagento={props.newMagentoMonthly}
                  //   newchambas={props.newChambasMonthly}
                  //   newLista={props.newListaOrders}
                  //   newWooCommerc={props.newWooCommerceMonthly}
                  //   ripley={props.ripleyOrders}
                  //   vtex={props.vtexOrders}
                  // linio={props.linioOrders}
                  // mercadoLibre={props.mercadoLibreOrders}
                  // exito={props.exitoOrders}
                  // paris={props.parisOrders}
                  // shopify={props.shopifyOrders}
                  // magento={props.magentoOrders}
                  // chambas={props.chambasOrders}
                  // listaTienda={props.listaTiendaOrders}
                  />
                </td>

                <td>
                  <ChartBar
                  
                    
                    title="Ingresos por canal de venta"
                    stackedDateLabel={props.stackedDateLabel}
                      
                    newlinio={props.newlinioSalesMonthly}
                    newVtex={props.newVtexSalesMonthly}
                    newRipley={props.newRipleySalesMonthly}
                    newChambas={props.newChambasSalesMonthly}
                    newMagento={props.newMagentoSalesMonthly}
                    newWooCommerce={props.newWooCommerceSalesMonthly}
                    newShopify={props.newShopifySalesMonthly}
                    newMercado={props.newMercadoSalesMonthly}
                    newParis={props.newParisSales}
                    newExito={props.newExitoSalesMonthly}
                    newLista={props.newListaSales}
                    //Card data
                     ripley={props.ripleyPie}
                    vtex={props.vtexPie}
                    linio={props.linioPie}
                    mercadoLibre={props.mercadoPie}
                    exito={props.exitoPie}
                    paris={props.parisPie}
                    shopify={props.shopifyPie}
                    wooCommerce={props.wooPie}
                    magento={props.magentoPie}
                    chambas={props.chambasPie}
                    listaTienda={props.listaPie}
                    channel={props.channel}
                    // newRipley={props.newRipleySalesMonthly}
                    // newVtex={props.newVtexSalesMonthly}
                    // newlinio={props.newlinioSalesMonthly}
                    // newMercado={props.newMercadoSalesMonthly}
                    // newExito={props.newExitoSalesMonthly}
                    // newParis={props.newParisSales}
                    // newShopify={props.newShopifySalesMonthly}
                    // newWooCommerc={props.newWooCommerceSalesMonthly}
                    // newMagento={props.newMagentoSalesMonthly}
                    // newChambas={props.newChambasSalesMonthly}
                    // newLista={props.newListaSales}
                    // ripley={props.ripley}
                    // vtex={props.vtex}
                    // linio={props.linio}
                    // mercadoLibre={props.mercadoLibre}
                    // exito={props.exito}
                    // paris={props.paris}
                    // shopify={props.shopify}
                    // wooCommerce={props.wooCommerce}
                    // magento={props.magento}
                    // chambas={props.chambas}
                    // listaTienda={props.listaTienda}
                    // stackedDateLabel={props.stackedDateLabel}
                  />
                </td>
              </tr>
            </table>
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default PDFReport;
