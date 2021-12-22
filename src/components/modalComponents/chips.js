import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./chip.css";
import Test from './test';
import MailFile from '../../../src/Mail/mail.txt';
// import {mailFile} from '../../../src/Mail/mail.html';
// // var perf =require('../../../src/Mail/mail.html');
import SiIcon from "../../assets/img/si.png";
export default class Chips extends React.Component {
  state = {
    items: [],
    value: "",
    error: null,
    emailState: [],
    emailError: null,
    finalEmail : ''
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
      error = `${evt.target.value} is not a valid email address.`;
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
      error = `${email} has already been added.`;
    }

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
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

//    readHtmlFile(evt){
//     var f = evt.target.files[0];
// console.log(f);
//     if (f) {
//         var r = new FileReader();
//         console.log(r);
//         r.onload = function (e) {
//             var contents = e.target.result;
//             document.getElementById("ReadResult").innerHTML = contents;
//         }
//         r.readAsText(f);
//     } else {
//         alert("Failed to load file");
//     }
  
//   }
readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

  submitHandler = (event) => {
    let error = null;
    event.preventDefault();
    if (!this.isEmail(this.state.emailState)) {
      error = `${this.state.emailState} is not a valid email address.`;
    }
    if (error) {
      if (error) {
        this.setState({ emailError: error });

        return false;
      }
    }

    const x = [...this.state.items];
    x.push(this.state.emailState);
    console.log(x);
    const y = x.forEach((y)=>{return y});
    console.log(y);
    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/enviaremail",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/html",
        },

        body: JSON.stringify({
          to: "shiny.kavery@gmail.com",
          subject: "desdepostman 4.0",
          // body: this.readTextFile('file:///E:/pro-paper/src/Mail/mail.txt'),
          body: `<!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
          
              .wrapper {
                width: 100%;
                table-layout: fixed;
                background-color: #cccccc;
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
                padding: 12px 20px;
                font-weight: medium;
                color:white;
                font-size: 12px;
                width: 313px;
                height: 67px;
          
              }
          
              .two-columns.last {
                padding: 20px 0;
              }
              .two-columns .padding {
                padding:20px;
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
          
              <table class="column">
                <tr>
                  <td style="padding: 20px 60px; ">
                    <img src="./img/icon1.png" alt="Icon" title="Icon" width="30">
                    <br/>
                    <a href="http://www.instancelatam.com">
                      <img src= "./pic/logo-azul.png" alt="Logo-instance" title="Logo" width="120">
                    </a>
                  </td>
                </tr>
              </table>
          
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
                              style="
                               font-size: 26px;
                               color:#232A38;
                               padding-left: 40px;
                               line-height: 43px;
                              
                              ">
                               <strong>
                                 ¡Tu pedido ha sido ingresado!
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
                            <img src="./img/image-delivery.png" alt="ImagenDelivery" width="90%">
                              
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
          
              </tr>
            </td> 
          </tr>
                  <!-- BLUE BORDER
                  <tr>
                    <td height="1" style="background-color: #06CBC1; margin-top:-5em; "></td>
                  </tr> -->
          
          
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
                             
                              
                             <p
                             style="
                               font-size:16px;
                               
                               color: #1D308E;
                               font-weight: bold;
                               padding: 0px 40px;   
                             ">          
                                 Hola, [nombre]         
                             </p>
                     
                               <p
                               style="padding: 0px 40px;
                               line-height: 23px;
                                ">
                                 A continuación encontrarás un detalle con tu pedido e información relevante.
                               </p>
                     
                               <p
                               style="padding: 0px 40px;
                               line-height: 23px;
                               color: #1D308E;
                               font-weight: bold;
                               font-size:18px;
                               width:150%;
                               
                                ">
                                 Recuerda, tu pedido será despachado en máximo 48 horas hábiles.
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
                              <a href="#"><img src="./img/logo-unilever.png" alt="Logo-Marca" title="Logo Marca" width="250px" style="max-width: 250px; margin-top:-4em"></a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
          
              </tr>
            </td>
          </tr>
          
          
          
          <!-- INFO DETAIL SECTION-->
          <!-- <tr>
            <td>
              <table width="100%">
          
                <tr>
                  <td>
                    <p
                    style="
                    font-size:14px;
                    font-weight: bold;
                    color: black;
                    text-align: left;
                    padding-left: 60px;"> Detalle pedido</p>
          
                    <p>
                      <p
                      style="
                      font-size: 12px;
                      padding-left: 60px;">
                        Comercio: <strong>[Tienda]</strong>
                        <br/>
                        <br/>
                        Nombre: <strong>[Nombre]</strong>
                        <br/>
                        <br/>
                        Medio de pago: <strong>[Pago]</strong>
                        <br/>
                        <br/>
                        Monto bruto: <strong>[Bruto]</strong>
                        <br/>
                        <br/>
                        IVA: <strong>[IVA]</strong>
                        <br/>
                        <br/>
                        Monto total: <strong>[Total]</strong>
                      </p>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr> -->
          <!-- BUTTON SECTION -->
          <tr>
            <td style="padding: 5px 0 58px;">
              <table width="100%">
          
          
                <tr>
                  <td style="text-align:center; padding: 15px">
                  
                    <a href="#" type=button class="button"> Ver Boleta</a>
                  
                  </td>
              
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- WARNING SECTION -->
          <tr>
            <td style="padding: 0px 20px 10px 10px;">
              <table width="100%">
          
                <tr>
                  <td style="background-color:  #F3F6F9; color:#1D308E; border-radius: 17px; width: 20px; height:20px;">
                    <img src="./img/icon-boleta.png" alt="IconoBoleta" title="IconoBoleta" width="30" style="padding:14px 0px 2px 35px;">
                    <p style="text-align: left; font-weight: 700; line-height: 17px; font-size: 15px; margin-left:2.5em;"> Importante</p>
                    <p style="text-align: left; font-weight: 700; line-height: 17px; font-size: 12px; margin-left:3em;"> Este comprobante no es válido como boleta ni factura. Tu documentación tributaria será entregada junto con tu pedido.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!--FOOTER SECTION -->
          
          <tr>
            <td style="background-color: #1D308E; color:#ffffff;" >
            <table width="100%">
          
              <tr>
                <td style="text-align: center; padding: 30px 20px;">
                  <img src="./img/icon-help.png" alt="iconHelp" title="iconHelp" width="30">
                  <p style="padding: 0px; font-size:14px; letter-spacing: 0.5px;" > ¿Necesitas ayuda?</p>
                  <p style="padding: 8px; font-size: 12px; line-height: 30px; letter-spacing: 0.5px;"> Comunícate directamente con tu vendedor zonal o al correo <a href="mailto:contacto@instancelatam.com" style="color:#ffffff">contacto@instancelatam.com</a></p>
          
                  
            
                <!-- <tr> 
                <td style="text-align: center; padding:0px 20px"> -->
                  <a href="http://www.instancelatam.com">
                    <img src="./img/logo-white.png" alt="IconoInstance" title="LogoInstance" width="90" style="padding:18px;">
                  </a>
                  <br/>
            
                      <a href="https://www.linkedin.com/company/instancelatam/"><img src="./img/icon-linkedin.png" alt="Linkedin" title="Linkedin" width="30"> </a>
                      <a href="http://www.instagram.com/instance_latam"><img src="./img/icon-instagram.png" alt="Instagram" title="Instagram" width="30"> </a>
                      <a href="mailto:contacto@instancelatam.com"><img src="./img/icon-mail.png" alt="Correo" title="Correo" width="30"> </a>
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
          </html>`,
          filename: "",
          file: "",
        }),
      }
    ).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
            Enviar a:
          </Label>
          <input
            className={"input " + (this.state.emailError && " has-error")}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter a email"
            value={this.state.emailState}
            onChange={this.handleEmailChange}
            onBlur={this.checkEmail}
          />
          {this.state.emailError && (
            <p className="error">{this.state.emailError}</p>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
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
            placeholder="Type or paste email addresses and press `Enter`..."
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            onPaste={this.handlePaste}
          />

          {this.state.error && <p className="error">{this.state.error}</p>}
        </FormGroup>
        <div class="text-center">
          <Button
            type="submit"
            style={{
              background: "#1D308E",
              textAlign: "center",
              color: "white",
              width: "296px",
              height: "64px",
              padding: "22px 81px",
            }}
          >
            Enviar Correo &nbsp;
            <img src={SiIcon} />
          </Button>
        </div>
      </Form>
    );
  }
}
