import React, { useEffect, useState } from "react";
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import iconG1 from "../../assets/img/icons/Reports/iconG1.png";
import iconG2 from "../../assets/img/icons/Reports/iconG2.png";
import iconG3 from "../../assets/img/icons/Reports/iconG3.png";
import iconCP1 from "../../assets/img/icons/Reports/icon2CP1.png";
import iconCP2 from "../../assets/img/icons/Reports/icon2CP2.png";
import iconCP3 from "../../assets/img/icons/Reports/icon2CP3.png";
import iconCP4 from "../../assets/img/icons/Reports/icon2CP4.png";
import iconPP1 from "../../assets/img/icons/Reports/iconPP1.png";
import iconPP2 from "../../assets/img/icons/Reports/iconPP2.png";
import iconPP3 from "../../assets/img/icons/Reports/iconPP3.png";
import iconPP4 from "../../assets/img/icons/Reports/iconPP4.png";
import iconEC1 from "../../assets/img/icons/Reports/iconEC1.png";
import iconEC2 from "../../assets/img/icons/Reports/iconEC2.png";
import iconEC3 from "../../assets/img/icons/Reports/iconEC3.png";
import iconNextReport from "../../assets/img/iconArrowNext.png";
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
const ReportCards = (props)=>{
return (
    <div id="ReportInformationDesktop">
    <Col
      id="colReportDatosGenerales"
      md="12"
      style={{
        backgroundColor: "white",
        width: "1260px",
        height: "156px",
        left: "118px",
        top: "669px",
        borderRadius: "12px",
      }}
    >
      <p
        id="textNameTable"
        style={{
          color: "black",
          width: "450px",
          fontSize: "20px",
          fontWeight: "800",
          marginLeft: "1em",
          paddingTop: "20px",
        }}
      >
        Datos Generales
      </p>

      <Row style={{ padding: "10px", paddingLeft: "20px" }}>
        {/* TOTAL INCOME */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconG1} width="30px" />
              &nbsp; Total Ingresos
            </p>

            <h5
              className="textInfoCard"
              style={{
                fontSize: "20px",
                color: "#444B54",
                fontWeight: "500",
              }}
            >
              {(() => {
                let number =props.totalIncome;
                let totalIncomeformatted = new Intl.NumberFormat(
                  "es-CL",
                  {
                    style: "currency",
                    currency: "CLP",
                  }
                ).format(number);
                return (
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    {totalIncomeformatted}
                    &nbsp;
                    {/* <span
                  id="spanTextInfoCard"
                  style={{
                    color: "#33D69F",
                    fontSize: "10px",
                    textAlign: "right",
                  }}
                >
               +4.5%
             </span> */}
                  </div>
                );
              })()}
            </h5>
          </div>
          {/* DISPATCH COST */}
        </Col>
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconG2} width="30px" />
              &nbsp;Costo Despacho
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "20px", color: "#444B54" }}
            >
             c
            </h5>
          </div>
        </Col>
        {/* GM */}
        {/* <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconG2} width="30px" />
              &nbsp;GM
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {(() => {
                let number = props.gm;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatted}
                    &nbsp;
      
                  </div>
                );
              })()}
            </h5>
          </div>
        </Col> */}
        {/* CONVERSION */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconG3} width="30px" />
              &nbsp;Conversión
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* $1.253.369 &nbsp; */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.conversion} &nbsp;
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +4.5%
              </span> */}
            </h5>
          </div>
        </Col>
      </Row>
    </Col>
    <br></br>
    <br></br>
    {/* ORDER PROCESSING */}
    <Col
      id="colReportOrderProcessing"
      md="12"
      style={{
        backgroundColor: "white",
        width: "1040px",
        height: "156px",
        left: "118px",
        top: "669px",
        borderRadius: "12px",
      }}
    >
      <p
        id="textNameTable"
        style={{
          color: "black",
          width: "450px",
          fontSize: "20px",
          fontWeight: "800",
          marginLeft: "1em",
          paddingTop: "20px",
        }}
      >
        Procesamiento de pedidos
      </p>

      <Row style={{ padding: "10px", paddingLeft: "20px" }}>
        {/* ORDERS */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconPP1} width="30px" />
              &nbsp; Pedidos
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.totalOrders} &nbsp;
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +4.5%
              </span> */}
            </h5>
          </div>
          {/* ORDERS CANCELLED */}
        </Col>
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconPP2} width="30px" />
              &nbsp; Cancelados
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              {props.totalCancelledOrders} &nbsp;
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#FF6059",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                -3%
              </span> */}
            </h5>
          </div>
        </Col>
        {/* DTE SENT */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconPP3} width="30px" />
              &nbsp; DTE enviado
            </p>

            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.totalDte} &nbsp;
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +8%
              </span> */}
            </h5>
          </div>
        </Col>
        {/* DELIVERED */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconPP4} width="30px" />
              &nbsp; Entregados
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              &nbsp;&nbsp;&nbsp;
              <Badge
                style={{ backgroundColor: "#06CBC1", color: "white" }}
                pill
              >
                Próximamente
              </Badge>
              &nbsp;
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +12%
              </span> */}
            </h5>
          </div>
        </Col>
      </Row>
    </Col>
    <br></br>
    <br></br>
    {/* ORDER FULFILLMENT */}
    <Col
      id="colReportOrderFulfillment"
      md="12"
      style={{
        backgroundColor: "rgb(255, 255, 255,0.68)",
        width: "1040px",
        height: "156px",
        left: "118px",
        top: "669px",
        borderRadius: "12px",
      }}
    >
      <p
        id="textNameTable"
        style={{
          color: "rgb(196, 196, 196)",
          width: "450px",
          fontSize: "20px",
          fontWeight: "800",
          marginLeft: "1em",
          paddingTop: "20px",
        }}
      >
        Cumplimiento de pedidos 
        &nbsp; <Badge
                style={{ backgroundColor: "#06CBC1", color: "white" }}
                pill
              >
                Próximamente
              </Badge>
        
      </p>

      <Row style={{ padding: "10px", paddingLeft: "20px" }}>
        {/* IN PROCESS */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconCP1} width="30px" />
              &nbsp; En Proceso
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.inProcess} &nbsp; */}
           
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +4.5%
              </span> */}
            </h5>
          </div>
          {/* PREPARATION */}
        </Col>
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconCP2} width="30px" />
              &nbsp; En Preparación
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              {props.inPreparation} &nbsp; */}
           
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#FF6059",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                -3%
              </span> */}
            </h5>
          </div>
        </Col>
        {/* READY TO DISPATCH */}
        <Col md="3">
          <div>
            <p
              id="textListoParaDespacho"
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold", width:"200px" }}
            >
              <img src={iconCP3} width="30px" />
              &nbsp; Listo para despacho
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.readyToShip} &nbsp; */}
           
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#FF6059",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                -6%
              </span> */}
            </h5>
          </div>
        </Col>
        {/* READY TO DELIVER */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconCP4} width="30px" />
              &nbsp; Próximo a llegar
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.onTheWay} &nbsp; */}
        
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +4.5%
              </span> */}
            </h5>
          </div>
        </Col>
      </Row>
    </Col>
    <br></br>
    <br></br>
    {/* CLIENT EXPERIENCE */}
    <Col
      id="colReportClientExperience"
      md="12"
      style={{
        backgroundColor: "white",
        width: "1040px",
        height: "156px",
        left: "118px",
        top: "669px",
        borderRadius: "12px",
      }}
    >
      <p
        id="textNameTable"
        style={{
          color: "black",
          width: "450px",
          fontSize: "20px",
          fontWeight: "800",
          marginLeft: "1em",
          paddingTop: "20px",
        }}
      >
        Experiencia del cliente
      </p>

      <Row style={{ padding: "10px", paddingLeft: "20px" }}>
        {/* NPS */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconEC1} width="30px" />
              &nbsp; NPS
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.totalNps} &nbsp; */}
             &nbsp;&nbsp;&nbsp;
              <Badge
                style={{ backgroundColor: "#06CBC1", color: "white" }}
                pill
              >
                Próximamente
              </Badge>
              {/* <span

                id="spanTextInfoCard"
                style={{
                  color: "#33D69F",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                +4.5%
              </span>  */}
            </h5>
          </div>
          {/* REVIEWS */}
        </Col>
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconEC2} width="30px" />
              &nbsp; Reviews
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {props.reviews} &nbsp; */}
             &nbsp;&nbsp;&nbsp;
              <Badge
                style={{ backgroundColor: "#06CBC1", color: "white" }}
                pill
              >
                Próximamente
              </Badge>
              {/* <span
                id="spanTextInfoCard"
                style={{
                  color: "#FF6059",
                  fontSize: "16px",
                  textAlign: "right",
                }}
              >
                -3%
              </span> */}
            </h5>
          </div>
        </Col>

        {/* claims */}
        <Col md="3">
          <div>
            <p
              className="titlesInfoCard"
              style={{ color: "#C4C4C4", fontWeight: "bold" }}
            >
              <img src={iconEC3} width="30px" />
              &nbsp; Reclamos
            </p>
            <h5
              className="textInfoCard"
              style={{ fontSize: "22px", color: "#444B54" }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.totalClaims} &nbsp;
              {/* <span
                  id="spanTextInfoCard"
                  style={{
                    color: "red",
                    fontSize: "16px",
                    textAlign: "right",
                  }}
                >
                  -6%
                </span> */}
            </h5>
          </div>
        </Col>
        {/* READY TO DELIVER */}
        {/* <Col md="3">
        <div>
          <p style={{ color: "#C4C4C4" }}>Proximo a llegar</p>
          <h5 style={{ fontSize: "22px", color: "#444B54" }}>
            $1.253.369 &nbsp;
            <span
              style={{
                color: "#33D69F",
                fontSize: "16px",
                textAlign: "right",
              }}
            >
              +4.5%
            </span>
          </h5>
        </div>
      </Col> */}
      </Row>
    </Col>
  </div>  
)
}
export default ReportCards;