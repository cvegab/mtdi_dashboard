import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import { Button } from "reactstrap";
import "./chip.css";
import sentEmail from "../../assets/img/emailSent.png";
import SiIcon from "../../assets/img/si.png";
export default class Chips extends React.Component {
  state = {
    items: [],
    value: "",
    error: null,
    emailState: [],
    emailError: null,
    emailSent: null,
  };

  handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
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
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }
  parseEmail() {
    let text = `  <!DOCTYPE html>
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
                      <p
                      id="textPedido"
                      style="
                       font-size: 26px;
                       color:#1D308E;
                       padding-left: 40px;
                       line-height: 43px;
                      ">
                       <strong>

                        ¡Tu boleta electrónica ha sido generada!

                       </strong>
                   </p>
                        
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
                      <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/image-delivery.png" alt="ImagenDelivery" alt="ImagenDelivery"  id="imageDelivery" width="90%">
                        
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
                        <a href="#"><img src="storeLogo" alt="Logo-Marca" title="Logo" id="clientLogo" width="100%" style="max-width: 100%"></a>
                        
                   
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
                            ¡Hola, [nombre]!         
                        </p>
                
                          <p
                          style="padding: 0px 0px;
                          line-height: 23px;
                          font-size: 14px;
                          margin-top: 1em;
                          color: #1D308E;
                          
                           ">

                           Gracias por tu compra. <br/>
                           Haz click en el botón “Descargar boleta” a continuación para visualizar tu documento tributario electrónico.

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
            

              <a  style='color:white' href="dteLink" id="bttnBoleta" type=button class="button"> Descargar boleta </a>

            
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
          
          <p id="titleWarning" style="text-align: left; font-weight: 700; line-height: 17px; font-size: 15px; margin-left:2.5em;"> RECUERDA </p>

          <p  id="textWarning" style="text-align: left; font-weight: 700; line-height: 17px; font-size: 12px; margin-left:3em;"> Tu pedido será despachado en un máximo de 48 horas hábiles.</p>

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
            <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-help.png" alt="iconHelp" title="iconHelp" width="30">
            <p style="padding: 0px; font-size:14px; letter-spacing: 0.5px;" > ¿Tienes alguna duda?</p>
            <p style="padding: 8px; font-size: 12px; line-height: 30px; letter-spacing: 0.5px;"> Comunícate con nosotros a <a href="mailto:sacchile@instancelatam.com" style="color:#ffffff">sacchile@instancelatam.com</a></p>
    
            
      
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

    if (this.props.purchaser.tienda === "Unilever") {
   
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-unilever.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Softys") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-softys.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Schneider Electric") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-schneider.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Afe") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-afe.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Alicorp") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-alicorp.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "CAROZZI FS") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-carozzi.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Mercado Carozzi") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-mercadocarozzi.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Babysec") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-babysec.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "I Am Not Plastic") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-imnotplastic.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Redlemon") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-redlemon.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "ELITE PROFESSIONAL") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-eliteprofessional.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "ELITE") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-elite.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "ENEX") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-enex.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Cotidian") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-cotidian.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "Chek") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-chek.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "p&g") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-p&g.png"
        );
      return finalEmailText;
    }
    if (this.props.purchaser.tienda === "SC Johnson") {
      let finalEmailText = text
        .replace("[nombre]", this.props.purchaser.comprador)
        .replace("dteLink", this.props.purchaser.dte)
        .replace(
          "storeLogo",
          "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/logos-clientes/logo-scj.png"
        );
      return finalEmailText;
    }
  }

  submitHandler = (event) => {
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

    let final = "" + x.toString() + "";

    const emailBody = this.parseEmail();
    console.log(emailBody);
    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/enviaremail",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/html",
        },

        body: JSON.stringify({
          to: final,
          subject: "Envío de Documento Tributario Electrónico",

          body: emailBody,
          filename: "",
          file: "",
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
  render() {
    if (!this.state.emailSent) {
      return (
        <React.Fragment>
          <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
            Enviar documento tributario
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
                style={{fontSize:"12px"}}
                placeholder="Ingresa un correo"
                value={this.state.emailState}
                onChange={this.handleEmailChange}
                onBlur={this.checkEmail}
              />
              {this.state.emailError && (
                <p className="error">{this.state.emailError}</p>
              )}
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
                style={{fontSize:"12px"}}
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
                  fontWeight:"bold",
                  border:"0"
               
                }}
              >
                Enviar Correo &nbsp;
                <span className="btn-label">
                  <i className="nc-icon nc-send" />
                </span>
              </button>
            </div>
          </Form>
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
            <img src={sentEmail} width="25%"/>
          </div>
          <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
            Documento enviado con éxito
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
                fontWeight:"bold",
                border:"0"
              }}
              onClick={this.entendidoButtonHandler}
            >
              Entendido
            </button>
          </div>
        </React.Fragment>
      );
    }
  }
}
