import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { Button } from "reactstrap";
import "./chip.css";
import sentEmail from "../../assets/img/emailSent.png";
import SiIcon from "../../assets/img/si.png";
import PDFReport from "components/PDFReport/PDFReport";
import GenerateBase64Report from "./generate-base-64-report";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import CardReports from 'components/CardReports/CardReports';
import ChartMixed from 'components/MixedChartReport/ChartMixed';
import ChartPie from 'components/pieChartReport/ChartPie.jsx';
import ChartBar from 'components/barChartReport/ChartBar';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { getValueMap } from "@progress/kendo-react-dropdowns";
export default class SendReportChips extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    //
  }
  state = {
    items: [],
    value: "",
    error: null,
    emailState: [],
    emailError: null,
    emailSent: null,
    downloadReport: false,
    base64Value:''
  };

  bodyMail = `  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset-utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instance - Pedido ingresado </title>
    <style type="text/css">
      body {
        margin: 0;
        background-color: #cccccc;
      }
      table {
        border-spacing: 0;
      }
      td {
        padding: 0;
      }
      img {
        border: 0;
      }
  
      @media screen and (max-width: 425px) {
        #textPedido {
          text-align: left !important;
          font-size: 17px !important;
          text-align: center !important;
        }
        #imageDelivery {
          margin:auto;
          display:block;
          text-align: center !important;
          width:70%;
        }
        #clientLogo {
          margin-left:3.5em;
          display:block !important;
          text-align: center !important;
          width:70%;
        }
        #bttnBoleta {
          padding: 10px 38px;
        }
        #icon1 {
          width:20px !important;
        }
        #instanceLogo {
          width: 80px !important;
        }
        #titleWarning {
          margin-left:10px !important;
        }
        #textWarning {
          margin-left: 8px !important;
        }
      }
  
      .wrapper {
        width: 100%;
        table-layout: fixed;
        background-color: #f7f7f7;
        padding-bottom: 60px;
      }
  
      .main {
        background-color: #ffffff;
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        border-spacing: 0;
        font-family: sans-serif;
        color: #4a4a4a;
      }
      .two-columns {
        text-align: center;
        font-size: 0;
      }
  
      .two-columns .column {
        width: 100%;
        max-width: 300px;
        display: inline-block;
        vertical-align: top;
      }
      .button {
        background-color: #1D308E;
        border-radius: 17px;
        text-decoration: none;
        padding: 12px 100px;
        font-weight: medium;
        color:white;
        font-size: 12px;
        width: 700px !important;
        height: 70px; 
        text-decoration: none;
  
      }
  
      .button:hover {
        background-color: #06CBC1;
      }
      
      a:link :visited :hover :active{
        color: white;
        text-decoration: none;
      }
  
      a:-webkit-any-link {
        text-decoration: none;
      }
  
      .two-columns.last {
        padding: 10px 0;
      }
      .two-columns .padding {
        padding:º0px;
      }
  
      .two-columns .content {
        font-size: 15px;
        line-height: 20px;
        text-align: left;
      }
  
    </style>
  </head>
  <body>
   
  
      <center class="wrapper">
  
        <table class="main" width="100%">
  <!-- BLUE BORDER-->
  <tr>
    <td height="8" style="background-color: #1D308E;"></td>
  </tr>
  
  <!-- LOGO INSTANCE SECTION-->
  <tr>
    <td>
      <table width="100%">
  
  <tr>
    <td class="column">
  
      <!-- <table class="column"> -->
        <tr>
          <!-- <td style="padding: 20px 60px; "> -->
            <td style="text-align: center; padding: 8px 0 4px;">
            <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon1.png" alt="Icon" alt="Icon" id='icon1' title="Icon" width="20">
            <br/>
            <a href="http://www.instancelatam.com">
              <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/logo-azul.png" alt="Logo-instance" alt="Logo-instance"  id="instanceLogo" title="Logo" width="100">
            </a>
          </td>
        </tr>
      <!-- </table> -->
  
    </td>
  </tr>
      </table>
    </td>
  </tr>
  
  <!-- BANNER SECTION-->
  
  <tr>
    <td width="200" >
      <tr>
        <td class="two-columns last">
  
          <table class="column">
            <tr>
              <td class="padding" >
  
                <table class="content">
                  <tr>
                    
                    <td>
                
                      
                    </td>
                  </tr>
                </table>
  
              </td>
            </tr>
          </table>
  
          <table class="column">
            <tr>
              <td class="padding">
                <table class="content">
                  <tr>
                    <td>
                      
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
  
      </tr>
    </td> 
  </tr>
          <!-- BLUE BORDER-->
          <!-- <tr>
            <td height="1" style="background-color: #1D308E"></td>
          </tr>  -->
  
  
  <!--TWO COLUMN SECTION -->
  
  <tr>
    <td width="100%">
      <tr>
        <td class="two-columns last">
  
          <table class="column">
            <tr>
              <td class="padding">
  
                <table class="content">
                  <tr>
                    <td>
                    
                    </td>
                  </tr>
                </table>
  
              </td>
            </tr>
          </table>
  
          <table class="column">
            <tr>
              <td class="padding">
                <table class="content">
                  <tr>
                    <td>
  
                      <p
                      style="
                        font-size:16px;
                        margin-top:2em;
                        color: #1D308E;
                        font-weight: bold;
                        padding: 0px 0px;   
                      ">          
                          ¡Hola!         
                      </p>
              
                        <p
                        style="padding: 0px 0px;
                        line-height: 23px;
                        font-size: 14px;
                        margin-top: 1em;
                        color: #1D308E;
                        
                         ">

                         Desde el equipo de Instance Latam queremos compartir contigo este Reporte general.
                         Adjuntamos a continuación un PDF para que puedas visualizarlo.

                        </p>
              
                      
              
                                
                     
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
  
      </tr>
    </td>
  </tr>
     
  
  <tr>
    <td style="padding: 5px 0 58px;">
      <table width="100%">
  
  
        <tr>
          <td style="text-align:center; padding: 15px">
          
          </td>
      
        </tr>
      </table>
    </td>
  </tr>

  <!-- WARNING SECTION -->
<!-- <tr>
<td style="padding: 0px 20px 10px 10px;">
  <table width="100%">

    <tr>
      <td style="background-color:  #F3F6F9; color:#1D308E; border-radius: 17px; width: 20px; height:20px;">
        
   
    
      </td>
    </tr>
  </table>
</td>
</tr> -->
  
  <!--FOOTER SECTION -->
  
  <tr>
    <td style="background-color: #1D308E; color:#ffffff;" >
    <table width="100%">
  
      <tr>
        <td style="text-align: center; padding: 30px 20px;">
          
    
        <!-- <tr> 
        <td style="text-align: center; padding:0px 20px"> -->

          <a style="text-decoration:none" href="http://www.instancelatam.com">
            <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/logo-white.png" alt="IconoInstance" title="LogoInstance" width="90" style="padding:18px; text-decoration:none;">
          </a>
          <br/>
    
              <a style="text-decoration:none" href="https://www.linkedin.com/company/instancelatam/"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-linkedin.png" alt="Linkedin" title="Linkedin" width="30" style="text-decoration:none"> </a>
              <a style="text-decoration:none" href="http://www.instagram.com/instance_latam"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-instagram.png" alt="Instagram" title="Instagram" width="30" style="text-decoration:none"> </a>
              <a style="text-decoration:none" href="mailto:sacchile@instancelatam.com"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-mail.png" alt="Correo" title="Correo" width="30" style="text-decoration:none"> </a>

            </td>
          </tr> 
  
  <!-- 
        </td>
      </tr> -->
  
    </table>
          
    </td>
  </tr>  
        </table>
      </center>
    
  </body>
  </html>`;

  handleKeyDown = (evt) => {
    if (
      ["Enter", "Tab", ","].includes(evt.key) ||
      this.isValid(this.state.value)
    ) {
      evt.preventDefault();

      var value = this.state.value.trim();

      if (value && this.isValid(value)) {
        this.setState({
          items: [...this.state.items, this.state.value],
          value: "",
        });
      }
    }
  };

  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
      error: null,
    });
  };

  handleEmailChange = (evt) => {
    this.setState({
      emailState: evt.target.value,
    });
  };

  checkEmail = (evt) => {
    let error = null;

    if (!this.isEmail(evt.target.value)) {
      error = `${evt.target.value} No es un correo válido`;
    }

    if (error) {
      this.setState({ emailError: error });

      return false;
    } else {
      this.setState({ emailError: null });
    }
  };

  handleDelete = (item) => {
    this.setState({
      items: this.state.items.filter((i) => i !== item),
    });
  };

  handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !this.isInList(email));

      this.setState({
        items: [...this.state.items, ...toBeAdded],
      });
    }
  };

  isValid(email) {
    let error = null;

    if (this.isInList(email)) {
      error = `${email} Fue agregado correctamente`;
    }

    if (!this.isEmail(email)) {
      error = `${email} No es un correo válido`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }

  isInList(email) {
    return this.state.items.includes(email);
  }

  isEmail(email) {
    // return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    return /[\w\d\.-]+@[\w\d\.-]+\.(com|cl)+/.test(email);
  }
    async parseEmail() {
      let x = await this.exportPDFWithMethod();
      console.log(x);
      return x;
}
 exportPDFWithMethod = async() => {
  let base64Value='';
  this. mypdfExportComponent = React.createRef();
  
   const container = this.myRef;
  
  let element = document.querySelector('#spinz');
  await drawDOM(element, {
    paperSize: "auto"
  }).then(group => {
    return exportPDF(group);
  }).then(dataUri => {
   
    console.log(dataUri.split(';base64,')[1]);
    base64Value = dataUri.split(';base64,')[1];
    this.setState({base64Value:dataUri.split(';base64,')[1]})
    return base64Value;
  });
 }
 setBaseValue(value){
  console.log(value);
}
   submitHandler = async(event) => {
    
   // this.parseEmail();
    if (this.isValid(this.state.value)) {
      this.setState({
        items: [...this.state.items, this.state.value],
        value: "",
        error: null
      });
    }

   // this.findRoutes;
   
    let error = null;

    event.preventDefault();
   

    if (!this.isEmail(this.state.emailState)) {
      error = `${this.state.emailState} Debes ingresar un correo válido`;
    }
    if (error) {
      if (error) {
        this.setState({ emailError: error });

        return false;
      }
    }


    const x = [...this.state.items];
    x.push(this.state.emailState);
    if (this.isValid(this.state.value)) {
      x.push(this.state.value);
    }

    
    let final = "" + x.toString() + "";

   
     const base64FileValue =  await this.parseEmail();
     console.log(base64FileValue);
    console.log(this.state.base64Value);
     await fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/enviaremail",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/html",
        },

        body: JSON.stringify({
          to: final,
          subject: "Envío de Reporte",

           body: this.bodyMail,      
          filename: "ReporteGeneral.pdf",
          file: this.state.base64Value
        }),
      }
    ).then((response) => {
      console.log(response);
      this.setState({ emailSent: true });
    });
  };
  entendidoButtonHandler = () => {
    this.props.onhideModal();
  };
  downloadPdfHandler = ()=>{
      console.log('hi');
      this.setState({downloadReport: true});
  }
  getBaseValue= (value)=>{
console.log(this.props.getBaseValue);
  }
  render() {
    
    {this.state.downloadReport && <div 
    id="reportPDFcontent"
    style={{
    position: "absolute",
    left: '-2000px',
    top: 0
    }}>
      <PDFExport paperSize="A4" margin="1cm"  ref={this.mypdfExportComponent} fileName="Reporte General" creator='Instance'>  
    <div  id='shiny'>
    <table id='spinz'>
      <tr>
        <td>
         <p style={{fontSize:"10px", fontSize:"bold", color: "#373737"}}>Instance · Reportes </p>
          <ChartMixed
              title="Resumen general de órdenes y ventas"
              data=""
              options=""
           />  
        </td>

        <td>
        <CardReports 
            title="Datos generales"
            subtitle1="Total ingresos"
            value1={this.props.totalIncomeformatted}
            subtitle2="Costo Despacho"
            value2={this.props.dispatchCost}
            subtitle3="GM"
            value3={this.props.gm}
            subtitle4="Conversión"
            value4="0"
          />    

          <CardReports 
            title="Cumplimiento de pedidos"
            subtitle1="En Proceso"
            value1={this.props.inProcess}
            subtitle2="En Preparación"
            value2={this.props.inPreparation}
            subtitle3="Listo para despacho"
            value3={this.props.readyToShip}
            subtitle4="Próximo a llegar"
            value4={this.props.onTheWay} 
          />     
        </td>
      </tr>

      <tr>
        <td>
        <CardReports 
            title="Procesamiento de pedidos"
            subtitle1="Pedidos"
            value1={this.props.totalOrders}
            subtitle2="Cancelados"
            value2={this.props.totalCancelledOrders}
            subtitle3="DTE enviado"
            value3={this.props.totalDte}
            subtitle4="Entregados"
            value4="0" 
          />
   
          <CardReports 
            title="Experiencia del cliente"
            subtitle1="NPS"
            value1={this.props.totalNps}
            subtitle2="Reviews"
            value2={this.props.reviews}
            subtitle3="Reclamos"
            value3={this.props.totalClaims}
            subtitle4=""
            value4="" 
          />

        </td>

        <td>
            <ChartPie
              title="Participacion canal de venta"
              pieChartData={this.props.pieChartData}
              pieChartOptions={this.props.pieChartData.options}
            />
        </td>
      </tr>

      <tr>
        <td>
        <ChartBar 
           title="Ordenes por canal de venta"
           data=""
           options=""
          />
        </td>

        <td>
        <ChartBar
           title="Ingresos por canal de venta"
           data=""
           options=""
          />
        </td>
      </tr>


    </table>


    </div>
        </PDFExport >  
    </div>}
    if (!this.state.emailSent) {
      return (
        <React.Fragment>
          <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
            Compartir Reporte
          </h3>
          <Form onSubmit={this.submitHandler}>
            <FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
                Enviar a:
              </Label>
              <input
                className={"input " + (this.state.emailError && " has-error")}
                type="email"
                name="email"
                id="exampleEmail"
                style={{ fontSize: "12px" }}
                placeholder="Ingresa un correo"
                value={this.state.emailState}
                onChange={this.handleEmailChange}
                onBlur={this.checkEmail}
              />
              {this.state.emailError && (
                <p className="error">{this.state.emailError}</p>
              )}
              {/* { this.state.downloadReport && <GenerateBase64Report onParse={this.saveBase64}></GenerateBase64Report> } */}
              {/* { this.state.downloadReport && <PDFReport setBaseValue={this.props.setBaseValue}></PDFReport>} */}
            </FormGroup>
            <FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
                Agregar otro correo:
              </Label>
              {this.state.items.map((item) => (
                <div className="tag-item" key={item}>
                  {item}
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.handleDelete(item)}
                  >
                    &times;
                  </button>
                </div>
              ))}

              <input
                className={"input " + (this.state.error && " has-error")}
                value={this.state.value}
                placeholder="Escribe aquí el correo y presiona la tecla 'Enter'"
                style={{ fontSize: "12px" }}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange}
                onPaste={this.handlePaste}
              />

              {this.state.error && <p className="error">{this.state.error}</p>}
            </FormGroup>
            <div class="text-center">
              <button
                id="bttnSubmit"
                type="submit"
                style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  color: "white",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight: "bold",
                  border: "0",
                  marginBottom:"10px"
                }}
                onClick={this.downloadPdfHandler}
              >
             
                Enviar Reporte &nbsp;
                <span className="btn-label">
                  <i className="nc-icon nc-send" />
                </span>
               
              </button>

              {/* <PDFReport 
                totalIncomeformatted={this.props.totalIncomeformatted}
                dispatchCost={this.props.dispatchCost}
                gm={this.props.gm}
                inProcess={this.props.inProcess}
                inPreparation={this.props.inPreparation}
                readyToShip={this.props.readyToShip}
                onTheWay={this.props.onTheWay}
                totalOrders={this.props.totalOrders}
                totalCancelledOrders={this.props.totalCancelledOrders}
                totalDte={this.props.totalDte}
                totalNps={this.props.totalNps}
                reviews={this.props.reviews}
                totalClaims={this.props.totalClaims}
                
              /> */}
            </div>
          </Form>

          <div class="text-center">
            <PDFReport 
                totalIncomeformatted={this.props.totalIncomeformatted}
                dispatchCost={this.props.dispatchCost}
                gm={this.props.gm}
                inProcess={this.props.inProcess}
                inPreparation={this.props.inPreparation}
                readyToShip={this.props.readyToShip}
                onTheWay={this.props.onTheWay}
                totalOrders={this.props.totalOrders}
                totalCancelledOrders={this.props.totalCancelledOrders}
                totalDte={this.props.totalDte}
                totalNps={this.props.totalNps}
                reviews={this.props.reviews}
                totalClaims={this.props.totalClaims}
                pieChartData={this.props.pieChartData}
                pieChartOptions={this.props.pieChartData.options}  
                barChartData={this.props.barChartData}
                barChartOptions={this.props.barChartOptions}
                SalesChart={this.props.SalesChart}
                SalesChartOptions={this.props.SalesChartOptions}
                newRipleySalesMonthly={this.props.newRipleySalesMonthly}
                newVtexSalesMonthly={this.props.newVtexSalesMonthly}
              newlinioSalesMonthly={this.props.newlinioSalesMonthly}
              newMercadoSalesMonthly={this.props.newMercadoSalesMonthly}
              newExitoSalesMonthly={this.props.newExitoSalesMonthly}
              newParisSales={this.props.newParisSales}
              newShopifySalesMonthly={this.props.newShopifySalesMonthly}
              newWooCommerceSalesMonthly={this.props.newWooCommerceSalesMonthly}
              newMagentoSalesMonthly={this.props.newMagentoSalesMonthly}
              newChambasSalesMonthly={this.props.newChambasSalesMonthly}
              newListaSales={this.props.newListaSales}
              stackedDateLabel={this.props.stackedDateLabel}
              newRipleyMonthly={this.props.newRipleyMonthly}
              newVtexMonthly={this.props.newVtexMonthly}
              newlinioMonthly={this.props.newlinioMonthly}
              newMercadoOrdersMonthly={this.props.newMercadoOrdersMonthly}
              newExtitoOrders={this.props.newExtitoOrders}
              newParisOrders={this.props.newParisOrders}
              newShopifyMonthly={this.props.newShopifyMonthly}
              newMagentoMonthly={this.props.newMagentoMonthly}
              newChambasMonthly={this.props.newChambasMonthly}
              newListaOrders={this.props.newListaOrders}
              newWooCommerceMonthly={this.props.newWooCommerceMonthly}
                ripley={this.props.ripley}
                vtex={this.props.vtex}
                linio={this.props.linio}
                mercadoLibre={this.props.mercadoLibre}
                exito={this.props.exito}
                paris={this.props.paris}
                shopify={this.props.shopify}
                wooCommerce={this.props.wooCommerce}
                magento={this.props.magento}
                chambas={this.props.chambas}
                listaTienda={this.props.listaTienda}
                ripleyOrders={this.props.ripleyOrders}
                vtexOrders={this.props.vtexOrders}
              linioOrders={this.props.linioOrders}
              mercadoLibreOrders={this.props.mercadoLibreOrders}
              exitoOrders={this.props.exitoOrders}
              parisOrders={this.props.parisOrders}
              shopifyOrders={this.props.shopifyOrders}
              magentoOrders={this.props.magentoOrders}
              chambasOrders={this.props.chambasOrders}
              listaTiendaOrders={this.props.listaTiendaOrders}
              />
          </div>
        </React.Fragment>
      );
    }
    if (this.state.emailSent) {
      return (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={sentEmail} width="25%" />
          </div>
          <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
            Reporte enviado con éxito
          </h3>

          <div class="text-center">
            <button
              type="button"
              style={{
                cursor: "pointer",
                backgroundColor: "#1D308E",
                textAlign: "center",
                color: "white",
                width: "296px",
                height: "64px",
                padding: "22px 81px",
                borderRadius: "33px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                fontWeight: "bold",
                border: "0",
              }}
              onClick={this.entendidoButtonHandler}
            >
              Entendido
            </button>
          </div>

     {/* SEND REPORTS */}
    
     
    
        </React.Fragment>
      );
    }
  }
}
