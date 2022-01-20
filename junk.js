var x=29;
var y = x<13 ? "Child" : x<20 ? "Teenage" : x<30 ? "Twenties" : "Old people";
console.log(y);



var x = ['a','b','c'];
const ke = x.toString();
console.log(ke);
let str = '';
for(let i =0;i<=x.length;i++){
  console.log(x[i]);
  // str = x[i] + ','+ x[i+1];
  // return str;
}
console.log(str);

var text = `<!DOCTYPE html>
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
              <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon1.png" alt="Icon" title="Icon" width="30">
              <br/>
              <a href="http://www.instancelatam.com">
                <img src= "https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/logo-azul.png" alt="Logo-instance" title="Logo" width="120">
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
                      <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/image-delivery.png" alt="ImagenDelivery" width="90%">
                        
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
                           Hola [nombre],        
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
                        <a href="#"><img src="storeLogo" alt="Logo-Marca" title="Logo Marca" width="250px" style="max-width: 250px; margin-top:-4em"></a>
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
            
              <a href="dteLink" type=button class="button"> Ver Boleta</a>
            
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
              <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-boleta.png" alt="IconoBoleta" title="IconoBoleta" width="30" style="padding:14px 0px 2px 35px;">
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
            <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-help.png" alt="iconHelp" title="iconHelp" width="30">
            <p style="padding: 0px; font-size:14px; letter-spacing: 0.5px;" > ¿Necesitas ayuda?</p>
            <p style="padding: 8px; font-size: 12px; line-height: 30px; letter-spacing: 0.5px;"> Comunícate directamente con tu vendedor zonal o al correo <a href="mailto:contacto@instancelatam.com" style="color:#ffffff">contacto@instancelatam.com</a></p>
    
            
      
          <!-- <tr> 
          <td style="text-align: center; padding:0px 20px"> -->
            <a href="http://www.instancelatam.com">
              <img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/logo-white.png" alt="IconoInstance" title="LogoInstance" width="90" style="padding:18px;">
            </a>
            <br/>
      
                <a href="https://www.linkedin.com/company/instancelatam/"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-linkedin.png" alt="Linkedin" title="Linkedin" width="30"> </a>
                <a href="http://www.instagram.com/instance_latam"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-instagram.png" alt="Instagram" title="Instagram" width="30"> </a>
                <a href="mailto:contacto@instancelatam.com"><img src="https://instancebucket.s3.amazonaws.com/imagenes/imagesHtmlDTE/img/icon-mail.png" alt="Correo" title="Correo" width="30"> </a>
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













































    <!DOCTYPE html>
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
    
        @media screen and (max-width: 600px) {
    
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
              <img src="../assets/imgMail/icons/icon1.png" alt="Icon" title="Icon" width="20">
              <br/>
              <a href="http://www.instancelatam.com">
                <img src="../assets/imgMail/logosIntance/logo-azul.png" alt="Logo-instance" title="Logo" width="100">
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
                        style="
                         font-size: 26px;
                         color:#1D308E;
                         padding-left: 40px;
                         line-height: 43px;
                        
                        ">
                         <strong>
                           Tu pedido ha sido ingresado
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
                      <img src="../assets/imgMail/imgs/image-delivery.png" alt="ImagenDelivery" width="90%">
                        
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
                        <a href="#"><img src="storeLogo" alt="Logo-Marca" title="Logo" width="100%" style="max-width: 100%"></a>
                        
                   
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
                          
                           ">
                            A continuación encontrarás un detalle con tu pedido e información relevante.
                          </p>
                
                          <p
                          style="padding: 0px 0px;
                          line-height: 23px;
                          color: #1D308E;
                          font-weight: bold;
                          font-size:12px;
                          width:100%;
                          
                           ">
                            Recuerda, tu pedido será despachado en un máximo de 48 horas hábiles.
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
            
              <a href="dteLink" type=button class="button"> Ve los detalles de tu pedido aquí</a>
            
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
              
              <p style="text-align: left; font-weight: 700; line-height: 17px; font-size: 15px; margin-left:2.5em;"> IMPORTANTE</p>
              <p style="text-align: left; font-weight: 700; line-height: 17px; font-size: 12px; margin-left:3em;"> Este correo no es válido como boleta ni factura. Tu documentación tributaria será entregada junto con tu pedido.</p>
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
            <img src="../assets/imgMail/icons/icon-help.png" alt="iconHelp" title="iconHelp" width="30">
            <p style="padding: 0px; font-size:14px; letter-spacing: 0.5px;" > ¿Necesitas ayuda?</p>
            <p style="padding: 8px; font-size: 12px; line-height: 30px; letter-spacing: 0.5px;"> Comunícate directamente con tu vendedor zonal o al correo <a href="mailto:contacto@instancelatam.com" style="color:#ffffff">contacto@instancelatam.com</a></p>
    
            
      
          <!-- <tr> 
          <td style="text-align: center; padding:0px 20px"> -->
            <a href="http://www.instancelatam.com">
              <img src="../assets/imgMail/logosIntance/logo-white.png" alt="IconoInstance" title="LogoInstance" width="90" style="padding:18px;">
            </a>
            <br/>
      
                <a href="https://www.linkedin.com/company/instancelatam/"><img src="../assets/imgMail/icons/icon-linkedin.png" alt="Linkedin" title="Linkedin" width="30"> </a>
                <a href="http://www.instagram.com/instance_latam"><img src="../assets/imgMail/icons/icon-instagram.png" alt="Instagram" title="Instagram" width="30"> </a>
                <a href="mailto:contacto@instancelatam.com"><img src="../assets/imgMail/icons/icon-mail.png" alt="Correo" title="Correo" width="30"> </a>
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
    </html>













    //</head>































    //order mobile card


    <Table>
                  <tbody>
                    <tr>
                      <td>
                        {/* <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup> */}
                      </td>

                      {/* OPS ID */}
                      <td
                        className="text-left"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        Ops ID:
                      </td>

                      <td className="text-left" style={{ fontSize: "12px" }}>
                        {props.opsId}
                      </td>
                      <td
                        className="td-actions text-right"
                        style={{ marginTop: "15px" }}
                      >
                        <br />
                      </td>
                    </tr>

                    {/* CLIENTE   */}
                    <tr>
                      <td />
                      <td
                        className="text-left"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        Cliente:
                      </td>

                      <td className="text-left" style={{ fontSize: "12px" }}>
                        {props.client}
                      </td>
                      <td className="td-actions text-right">
                        <br />
                        <br />
                      </td>
                    </tr>

                    {/* DTE */}
                    <tr>
                      <td />

                      <td
                        className="text-left"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        DTE:
                      </td>
                      <td className="text-left" style={{ fontSize: "12px" }}>
                        {(() => {
                          switch (props.dte) {
                            case "":
                              return (
                                <div>
                                  {" "}
                                  No{" "}
                                  <span className={classes.noIcon}>
                                    <img src={noIcon} />
                                  </span>
                                  <span className={classes.greyIcon}>
                                    <img src={greyIcon} />
                                  </span>
                                </div>
                              );

                            case "-":
                              return (
                                <div>
                                  {" "}
                                  No{" "}
                                  <span className={classes.noIcon}>
                                    <img src={noIcon} />
                                  </span>
                                  <span className={classes.greyIcon}>
                                    <img src={greyIcon} />
                                  </span>
                                </div>
                              );

                            default:
                              return (
                                <div>
                                  {" "}
                                  Si &nbsp;
                                  {/* <span
                                       style={{ marginLeft: "14px", cursor: "pointer" }}
                                       className={classes.si}
                                     > */}
                                  {/* <img src={SiIcon} onClick={showModalHandler.bind(this, props)}/>
                                     </span> */}
                                  &nbsp;
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className={classes.showPdf}
                                  >
                                    <a
                                      href={props.dte}
                                      target="_blank"
                                      title="Mostrar DTE"
                                    >
                                      <img src={showPdf} />
                                    </a>
                                  </span>
                                </div>
                              );
                          }
                        })()}
                      </td>
                      <td className="td-actions text-right">
                        <br />
                        <br />
                      </td>
                    </tr>

                    {/* RESPUESTA WMS */}
                    <tr>
                      <td />
                      <td
                        className="text-left"
                        style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        Estado WMS:
                      </td>

                      <td className="text-left" style={{ fontSize: "12px" }}>
                        {(() => {
                          switch (props.wmsState) {
                            case "Enviado":
                              return (
                                <div className={classes.enviado}>
                                  {" "}
                                  &nbsp;&nbsp;Enviado
                                </div>
                              );
                            case "Pendiente":
                              return (
                                <div className={classes.pendiente}>
                                  &nbsp;Pendiente
                                </div>
                              );
                            case "No Aplica":
                              return (
                                <div className={classes.noAplica}>
                                  &nbsp;No Aplica
                                </div>
                              );
                            default:
                              return (
                                <div className={classes.noAplica}>
                                  &nbsp;No Aplica
                                </div>
                              );
                          }
                        })()}
                      </td>

                      <td className="td-actions text-right">
                        <br />
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <strong>Ver más</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* <div className="table-full-width table-responsive"> */}
                      <Table>
                        <tbody>
                          {/* FECHA DE ORDEN */}

                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Fecha orden:
                            </td>
                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.date}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* TIENDA */}

                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Tienda:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.store}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* CANAL DE VENTA */}

                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Canal de venta:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.channelStore}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* TIENDA OFICIAL */}
                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Tienda Oficial:
                            </td>
                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.officialStore}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* ORDEN DE COMPRA */}
                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Orden de Compra:
                            </td>
                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.orderId}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* PAÍS */}

                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              País:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.country}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* ESTADO DE PEDIDO */}
                          {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado de Pedido: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                          {/* RESPUESTA OMS */}
                          {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Respuesta OMS: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                          {/* HUB DE PAGO */}

                          {/* <tr>
                        <td>
                         
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Hub de pago:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Approved
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                    
                      </tr> */}

                          {/* TOTAL */}
                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Total:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              $ {props.total}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* SHIPPING */}
                          {/* <tr>
                        <td>
                        
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Shipping:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          $ 5000
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                     
                      </tr> */}

                          {/* ESTADO FULFILLMENT */}
                          <tr>
                            <td></td>
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Estado Fulfillment:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.ocState}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* PICKEADOR */}
                          {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Pickeador:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                          {/* JEFE OPS */}
                          {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Jefe OPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Jorman Julio
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                  
                        </td>                  
                      </tr> */}

                          {/* HUB FULFILLMENT */}
                          {/* <tr>
                        <td/>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                         Hub Fulfillment:
                        </td>                   
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                
                        </td>                  
                      </tr> */}

                          {/* COURIER */}
                          {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Courier: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                          {/* SHIPPING ID */}
                          <tr>
                            <td />
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Shipping ID:
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.shippingId}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* BULTOS / ETIQUETAS */}

                          {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Bultos / Etiquetas:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                          {/* ESTADO DE COURIER */}
                          {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado Courier:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                          {/* COMPRADOR */}
                          <tr>
                            <td></td>
                            <td
                              className="text-left"
                              style={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Comprador
                            </td>

                            <td
                              className="text-left"
                              style={{ fontSize: "12px" }}
                            >
                              {props.consumer}
                            </td>
                            <td className="td-actions text-right">
                              <br />
                              <br />
                            </td>
                          </tr>

                          {/* NPS */}
                          {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          NPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Consuelo Miranda
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

                          {/* REVIEWS */}
                          {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Reviews:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          41093360616
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}
                        </tbody>
                      </Table>
                      {/* </div> */}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>



































                //edited


                <CardBody>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            {/* <FormGroup check>
                                               <Label check>
                                                 <Input defaultChecked type="checkbox" />
                                                 <span className="form-check-sign" />
                                               </Label>
                                             </FormGroup> */}
                          </td>

                          {/* OPS ID */}
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Ops ID:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.order_id}
                          </td>
                          <td
                            className="td-actions text-right"
                            style={{ marginTop: "15px" }}
                          >
                            <br />
                          </td>
                        </tr>

                        {/* CLIENTE   */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Cliente:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {post.tienda}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* DTE */}
                        <tr>
                          <td />

                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            DTE:
                          </td>
                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.dte) {
                                case "":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                case "-":
                                  return (
                                    <div>
                                      {" "}
                                      No{" "}
                                      <span className={classes.noIcon}>
                                        <img src={noIcon} />
                                      </span>
                                      <span className={classes.greyIcon}>
                                        <img src={greyIcon} />
                                      </span>
                                    </div>
                                  );

                                default:
                                  return (
                                    <div>
                                      {" "}
                                      Si &nbsp; &nbsp;
                                      <span
                                        style={{ cursor: "pointer" }}
                                        className={classes.showPdf}
                                      >
                                        <a
                                          href={post.dte}
                                          target="_blank"
                                          title="Mostrar DTE"
                                        >
                                          <img src={showPdf} />
                                        </a>
                                      </span>
                                    </div>
                                  );
                              }
                            })()}
                          </td>
                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>

                        {/* RESPUESTA WMS */}
                        <tr>
                          <td />
                          <td
                            className="text-left"
                            style={{ fontSize: "12px", fontWeight: "bold" }}
                          >
                            Estado WMS:
                          </td>

                          <td
                            className="text-left"
                            style={{ fontSize: "12px" }}
                          >
                            {(() => {
                              switch (post.wmsState) {
                                case "Enviado":
                                  return (
                                    <div className={classes.enviado}>
                                      {" "}
                                      &nbsp;&nbsp;&nbsp;&nbsp;Enviado
                                    </div>
                                  );
                                case "Pendiente":
                                  return (
                                    <div className={classes.pendiente}>
                                      &nbsp;&nbsp;Pendiente
                                    </div>
                                  );
                                case "No Aplica":
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;&nbsp;No Aplica
                                    </div>
                                  );
                                default:
                                  return (
                                    <div className={classes.noAplica}>
                                      &nbsp;&nbsp;No Aplica
                                    </div>
                                  );
                              }
                            })()}
                          </td>

                          <td className="td-actions text-right">
                            <br />
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <strong>Ver más</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="table-full-width table-responsive"> */}
                          <Table>
                            <tbody>
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Bodega:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.bodega}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>
                              {/* FECHA DE ORDEN */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Fecha orden:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.fecha_creacion}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.tienda}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* CANAL DE VENTA */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Canal de venta:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.canal_de_venta}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* TIENDA OFICIAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Tienda Oficial:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.official_store}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ORDEN DE COMPRA */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Orden de Compra:
                                </td>
                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.order_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PAÍS */}

                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  País:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.pais}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* ESTADO DE PEDIDO */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Estado de Pedido: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* RESPUESTA OMS */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Respuesta OMS: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* HUB DE PAGO */}

                              {/* <tr>
                                           <td>
                                            
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Hub de pago:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Approved
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                    
                                         </tr> */}

                              {/* TOTAL */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Total:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  $ {post.precio_sin_shipping}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* SHIPPING */}
                              {/* <tr>
                                           <td>
                                           
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Shipping:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             $ 5000
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                     
                                         </tr> */}

                              {/* ESTADO FULFILLMENT */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Estado Fulfillment:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.estado_oc}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* PICKEADOR */}
                              {/* <tr>
                                           <td>                   
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Pickeador:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Rodrigo Letelier
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* JEFE OPS */}
                              {/* <tr>
                                           <td>                   
                                           </td>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Jefe OPS:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Jorman Julio
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>                  
                                           </td>                  
                                         </tr> */}

                              {/* HUB FULFILLMENT */}
                              {/* <tr>
                                           <td/>
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                            Hub Fulfillment:
                                           </td>                   
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Rodrigo Letelier
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>                
                                           </td>                  
                                         </tr> */}

                              {/* COURIER */}
                              {/* <tr>
                                           <td/>      
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Courier: 
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             
                                           </td>
                                           <td className="td-actions text-right">
                                               <br/>
                                               <br/>
                                           </td>
                                          
                                         </tr> */}

                              {/* SHIPPING ID */}
                              <tr>
                                <td />
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Shipping ID:
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.shipping_id}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* BULTOS / ETIQUETAS */}

                              {/* <tr>
                                           <td/>                                       
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Bultos / Etiquetas:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Juan Pérez
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* ESTADO DE COURIER */}
                              {/* <tr>
                                           <td/>                                        
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Estado Courier:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Juan Pérez
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* COMPRADOR */}
                              <tr>
                                <td></td>
                                <td
                                  className="text-left"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Comprador
                                </td>

                                <td
                                  className="text-left"
                                  style={{ fontSize: "12px" }}
                                >
                                  {post.comprador}
                                </td>
                                <td className="td-actions text-right">
                                  <br />
                                  <br />
                                </td>
                              </tr>

                              {/* NPS */}
                              {/* <tr>
                                           <td/>                                        
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             NPS:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             Consuelo Miranda
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}

                              {/* REVIEWS */}
                              {/* <tr>
                                           <td/>                                       
                                           <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                                             Reviews:
                                           </td>
                                         
                                           <td className="text-left" style={{fontSize: "12px"}}>
                                             41093360616
                                           </td>
                                           <td className="td-actions text-right">
                                             <br/>
                                             <br/>
                                           </td>                  
                                         </tr> */}
                            </tbody>
                          </Table>
                          {/* </div> */}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </CardBody>
