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