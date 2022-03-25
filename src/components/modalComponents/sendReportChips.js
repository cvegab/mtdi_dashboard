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

           body: '',
          filename: "InstanceReport.pdf",
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
              />
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
