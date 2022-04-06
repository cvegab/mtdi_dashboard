import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import React, { useEffect, useState,useRef } from "react";
import iconShareReport from "../../assets/img/iconEnviarReporte.png";
//Generate Report PDF
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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
const DownloadReports = (props)=>{
   
    const [isDownloadingReports, setisDownloadingReports] = useState(false);
    // Function to generate a PDF Report
  const handleDownloadPdf = async () => {
    setisDownloadingReports(true);
    const element = props.printReport.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "in", "legal", true);
    pdf.setFillColor(245);
    pdf.rect(0, 0, 210, 700, "F");
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0.5, 0, pdfWidth - 1, pdfHeight - 4);
    pdf.save("InstanceReporte.pdf");
    setisDownloadingReports(false);
  };
 
return (
    <Row>
    <div class="text-center" style={{ marginTop: "3em" }}>
      {!isDownloadingReports && (
        <button
          id="bttnSubmit"
          className="bttnCompartirReporte"
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
            fontWeight: "bold",
            border: "0",
            fontSize: "11px",
          }}
          onClick={handleDownloadPdf}
        >
          <span className="btn-label">
            <img src={iconShareReport} width="19px" />
          </span>
          &nbsp;Descargar Reporte &nbsp;
        </button>
      )}
      {isDownloadingReports && (
        <Button
          type="button"
          id="bttnSubmit"
          className="bttnCompartirReporte"
          style={{
            backgroundColor: "#06cbc1",
            textAlign: "center",
            width: "296px",
            height: "64px",
            padding: "22px 81px",
            borderRadius: "33px",
            color: "#FFFFFF",
            marginLeft: "1em",
            textTransform: "none",
            fontWeight: "bold",
            border: "0",
            fontSize: "11px",
          }}
          onClick={handleDownloadPdf}
          disabled
        >
          <Spinner
            style={{ width: "0.7rem", height: "0.7rem" }}
            type="grow"
            color="light"
          />
          &nbsp; Descargando...
        </Button>
      )}
    </div>
  </Row>
)
}
export default DownloadReports;