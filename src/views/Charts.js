import { Select, MenuItem } from "@material-ui/core";
import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample4,
  chartExample9,
  chartExample10,
  chartExample11,
  chartExample12,
} from "variables/charts.js";
registerLocale("es", es);
function Charts() {
  return (
    <>
      <div className="content">
        <h5
          className="titleTable"
          style={{
            color: "#C4C4C4",
            width: "450px",
            fontSize: "10px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "0px",
          }}
        >
          Dashboard: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Tu tienda
        </p>
        <Col md="12">
          <CardBody>
            <Button
              style={{
                borderRadius: "17px",
                backgroundColor: "#1D308E",
                color: "white",
                width: "234px",
                height: "72px",
                fontWeight: "700px",
              }}
              outline
            >
              <span className="btn-label">
                <i className="nc-icon nc-layout-11" />
              </span>
              General
            </Button>

            {/* {/* <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-shop" />
                  </span>
                  Tiendas        
                </Button> */}

            {/* <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-settings-gear-65" />
                  </span>
                  Backoffice    
                </Button>
                 
                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-box-2" />
                  </span>
                 Fulfillment        
                </Button>
                 

                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-single-02" />
                  </span>
                 Cliente    
                </Button>
                   */}
          </CardBody>
        </Col>
        <Col md="12">
          <label htmlFor="select-tienda">
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "0px",
                marginTop: "1em",
              }}
            >
              Tienda
            </h5>
            <Select
              labelId="select-tienda"
              id="select-tienda"
              style={{
                width: 160,
                fontSize: "10px",
                marginLeft: "1em",
                marginTop: "1em",
              }}
              label="select-canal"
              placeholder="&nbsp; Seleccione una tienda"
            ></Select>
          </label>
          <label htmlFor="select-country">
            <h5
              style={{
                color: "black",
                width: "30px",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "0px",
              }}
            >
              País
            </h5>
            <Select
              labelId="select-country"
              id="select-country"
              style={{
                width: 150,
                marginLeft: "1em",
                borderRadius: "17px",
                marginBottom: "1em",
                fontSize: "10px",
                marginTop: "1em",
              }}
              label="Country"
              placeholder="&nbsp; Seleccione un país"
            ></Select>
          </label>
          <label className="seventhStepTour">
            <h5
              id="fechaDesde"
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "6px",
                marginTop: "0px",
              }}
            >
              Fecha Desde
            </h5>

            <DatePicker
              id="datepickerCalendar"
              type="number"
              onChange={(date) => setStartDate(date)}
              style={{ width: 200, marginLeft: "1em" }}
              placeholderText="dd/mm/yy"
              locale="es"
            />
          </label>

          <label className="seventhStepTour">
            <h5
              id="fechaHasta"
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "6px",
                marginTop: "0px",
              }}
            >
              Fecha Hasta
            </h5>

            <DatePicker
              id="datepickerCalendar"
              type="number"
              onChange={(date) => setEndDate(date)}
              style={{ width: 200, marginLeft: "1em" }}
              placeholderText="dd/mm/yy"
              locale="es"
            />
          </label>

          <Button className="btn-round btn-icon fourthStepTour" color="primary">
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
          </Button>
        </Col>

        <Col md="12">
          <h5
            id="fechaDesde"
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "6px",
              marginTop: "0px",
            }}
          >
            Canales De Venta
          </h5>
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "12px",
              width: "42px",
              height: "42px",
              left: "1006px",
              top: "405px",
              background: "#EDEEF6",
              borderRadius: "17px",
              border: "none",
            }}
          >
            +
          </button>
        </Col>
        <br></br>
        {/* GENERAL DATA */}
        <Col
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
            classname="textNameTable"
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
                <p style={{ color: "#C4C4C4" }}>Total Ingresos</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $20.154.365 &nbsp;
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
              {/* DISPATCH COST */}
            </Col>
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Costo Despacho</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -3%
                  </span>
                </h5>
              </div>
            </Col>
            {/* GM */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>GM</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -6%
                  </span>
                </h5>
              </div>
            </Col>
            {/* CONVERSION */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Conversion</p>
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
            </Col>
          </Row>
        </Col>
        <br></br>
        <br></br>
        {/* ORDER PROCESSING */}
        <Col
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
            classname="textNameTable"
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
                <p style={{ color: "#C4C4C4" }}>Pedidos</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $20.154.365 &nbsp;
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
              {/* ORDERS CANCELLED */}
            </Col>
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Cancelados</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -3%
                  </span>
                </h5>
              </div>
            </Col>
            {/* DTE SENT */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>DTE enviado</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -6%
                  </span>
                </h5>
              </div>
            </Col>
            {/* DELIVERED */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Entregados</p>
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
            </Col>
          </Row>
        </Col>
        <br></br>
        <br></br>
        {/* ORDER FULFILMENT */}
        <Col
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
            classname="textNameTable"
            style={{
              color: "black",
              width: "450px",
              fontSize: "20px",
              fontWeight: "800",
              marginLeft: "1em",
              paddingTop: "20px",
            }}
          >
          Cumplimiento de pedidos
          </p>

          <Row style={{ padding: "10px", paddingLeft: "20px" }}>
            {/* IN PROCESS */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>En Proceso</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $20.154.365 &nbsp;
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
              {/* PREPARATION */}
            </Col>
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Preparacion</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -3%
                  </span>
                </h5>
              </div>
            </Col>
            {/* READY TO DISPATCH */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Listo para despacho</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -6%
                  </span>
                </h5>
              </div>
            </Col>
            {/* READY TO DELIVER */}
            <Col md="3">
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
            </Col>
          </Row>
        </Col>
        <br></br>
        <br></br>
        {/* CLIENT EXPERIENCE */}
        <Col
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
            classname="textNameTable"
            style={{
              color: "black",
              width: "450px",
              fontSize: "20px",
              fontWeight: "800",
              marginLeft: "1em",
              paddingTop: "20px",
            }}
          >
          Cumplimiento de pedidos
          </p>

          <Row style={{ padding: "10px", paddingLeft: "20px" }}>
            {/* IN PROCESS */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>En Proceso</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $20.154.365 &nbsp;
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
              {/* PREPARATION */}
            </Col>
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Preparacion</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -3%
                  </span>
                </h5>
              </div>
            </Col>
            {/* READY TO DISPATCH */}
            <Col md="3">
              <div>
                <p style={{ color: "#C4C4C4" }}>Listo para despacho</p>
                <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                  $1.253.369 &nbsp;
                  <span
                    style={{
                      color: "red",
                      fontSize: "16px",
                      textAlign: "right",
                    }}
                  >
                    -6%
                  </span>
                </h5>
              </div>
            </Col>
            {/* READY TO DELIVER */}
            <Col md="3">
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
            </Col>
          </Row>
        </Col>
        <br></br>
        <br></br>
        <Row>
          <Col md="6">
            <Card className="car-chart">
              <CardHeader>
                <CardTitle>
                  <strong>Resumen general de venta y órdenes</strong>
                </CardTitle>
                {/* <p className="card-category"> </p> */}
              </CardHeader>
              <CardBody>
                <Bar
                  data={chartExample4.data}
                  options={chartExample4.options}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle>
                  <strong>Participación canal de venta</strong>
                </CardTitle>
                {/* <p className="card-category">Last Campaign Performance</p> */}
              </CardHeader>
              <CardBody style={{ height: "342px" }}>
                <Pie
                  data={chartExample11.data}
                  options={chartExample11.options}
                  width={456}
                  height={300}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-gray" />
                  Mercadolibre
                  <p className="card-category">$4.365.222</p>
                  <i className="fa fa-circle text-info" />
                  Woocommerce
                  <p className="card-category">$2.689.210</p>
                  <i className="fa fa-circle text-warning" />
                  Shopify
                  <p className="card-category">$1.000.933</p>
                </div>
                {/* <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                  Number of emails sent
                </div> */}
              </CardFooter>
            </Card>
          </Col>

          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>24 Hours Performance</CardTitle>
                <p className="card-category">Line Chart</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample1.data}
                  options={chartExample1.options}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample9.data}
                  options={chartExample9.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>Views</CardTitle>
                <p className="card-category">Bar Chart</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={chartExample10.data}
                  options={chartExample10.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <CardTitle>Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={chartExample12.data}
                  options={chartExample12.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" />
                  Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Charts;
