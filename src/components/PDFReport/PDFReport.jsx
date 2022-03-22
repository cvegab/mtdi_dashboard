import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
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
import MixedChart from 'views/MixedChart';


const PDFReport = () => {
  const pdfExportComponent = React.useRef(null);
  return <div>
      <div className="example-config">
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
        // className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" 
        onClick={() => {
        if (pdfExportComponent.current) {
          pdfExportComponent.current.save();
        }
      }}>
          Descargar PDF
        </button>
      </div>

      <div style={{
      position: "absolute",
      left: "-1000px",
      top: 0
      }}>
      <PDFExport paperSize="A4" margin="1cm"  ref={pdfExportComponent}>
      
      <p style={{fontSize:"10px", fontSize:"bold", color: "#373737"}}>Instance · Reportes </p>

      
       
          <Col>
            <ChartMixed
              title="Resumen general de órdenes y ventas"
              data=""
              options=""
            />  
          </Col>
        
      
        <Row> 
          <Col md="6">
            <div>
              <ChartPie
                title=""
                data=""
                options=""
                />
            </div> 
          </Col>
        </Row>

  
     
      <Row>
        <Col md="12">
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
        </Col>
        <Col>
          {/* <Col>
            <ChartBar 
             title="Órdenes por canal de venta"
             data=""
             options=""
            />
          </Col> */}
          {/* <Col>
            <ChartBar
             title="Ingresos por canal de venta"
             data=""
             options=""
            />
          </Col>  */}
        </Col> 
      </Row>
  
      
          
        </PDFExport>
      </div>
    </div>;
};

export default PDFReport;