import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
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
import CardReports from 'components/CardReports/CardReports';
import ChartMixed from 'components/MixedChartReport/ChartMixed';
import ChartPie from 'components/pieChartReport/ChartPie.jsx';
import ChartBar from 'components/barChartReport/ChartBar';
import { drawDOM, exportPDF } from '@progress/kendo-drawing';


const GenerateBase64Report = ()=>{
  let base64Value = '';
    const pdfExportComponent = React.useRef(null);
    const container = React.useRef(null);
    const exportPDFWithMethod = (props) => {
      let element = container.current || document.body;
      let gridElement = document.querySelector('.k-grid');
      drawDOM(element, {
        paperSize: "A4"
      }).then(group => {
        return exportPDF(group);
      }).then(dataUri => {
        console.log(dataUri.split(';base64,')[1]);
        base64Value = dataUri.split(';base64,')[1];
        // props.base64val(base64Value);
        // return base64Value;
      // props.getBaseValue(39);
      });
    
    }
      return <div>
      {/* <div className="example-config">
        <button 
        style={{
          backgroundColor: "#1D308E",
          textAlign: "center",
          width: "296px",
          height: "64px",
          padding: "22px 81px",
          borderRadius: "33px",
          color: "#FFFFFF",
          marginLeft: "1em",
          textTransform: "none",
          fontWeight:"bold",
          border:"0",
          fontSize: "11px"
        }}
  
      //   onClick={() => {
      //   if (pdfExportComponent.current) {
      //     pdfExportComponent.current.save();
      //   }
      // }}

      //   onClick={() => {
      //   let element = container.current || document.body;
      //   const f=savePDF(element, {
      //     paperSize: "auto",
      //     margin: 40,
      //     fileName: "Reporte Instance"
      //   });
      //   console.log(f);
      // }}
      onClick={exportPDFWithMethod}
      
       >
          Descargar PDF
        </button>
      </div> */}

      <div 
      id="reportPDFcontent"
      style={{
      position: "absolute",
      left: "-2000px",
      top: 0
      }}>
       <PDFExport paperSize="A4" margin="1cm"  ref={pdfExportComponent} fileName="Reporte General" creator='Instance'> 
      <div ref={container}>
      <table>
        <tr>
          <td>
           <p style={{fontSize:"10px", fontSize:"bold", color: "#373737"}}>Instance · Reportes </p>
            <ChartMixed
                title="Resumen general de ordenes y ventas"
                data=""
                options=""
             />  
          </td>

          <td>
          <CardReports 
              title="Datos generales"
              subtitle1="Total ingresos"
              value1="$720.000"
              subtitle2="Costo Despacho"
              value2="$720.000"
              subtitle3="GM"
              value3="$0"
              subtitle4="Conversión"
              value4="0"
            />    

            <CardReports 
              title="Cumplimiento de pedidos"
              subtitle1="En Proceso"
              value1="0"
              subtitle2="En Preparación"
              value2="20.000"
              subtitle3="Listo para despacho"
              value3="0"
              subtitle4="Próximo a llegar"
              value4="0" 
            />     
          </td>
        </tr>

        <tr>
          <td>
          <CardReports 
              title="Procesamiento de pedidos"
              subtitle1="Pedidos"
              value1="720.000"
              subtitle2="Cancelados"
              value2="20.000"
              subtitle3="DTE enviado"
              value3="0"
              subtitle4="Entregados"
              value4="0" 
            />
     
            <CardReports 
              title="Experiencia del cliente"
              subtitle1="NPS"
              value1="0"
              subtitle2="Reviews"
              value2="20.000"
              subtitle3="Reclamos"
              value3="0"
              subtitle4=""
              value4="" 
            />

          </td>

          <td>
              <ChartPie
                title="Participacion canal de venta"
                data=""
                options=""
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
         </PDFExport> 
      </div>
    </div>;

}
export default GenerateBase64Report;