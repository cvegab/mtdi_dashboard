import React from "react";
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
const ViewCardReports = ()=>{
return(
    <React.Fragment>
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
            id="textNameTable"
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
              <button
                id="bttnGeneral"
                type="button"
                style={{
                  borderRadius: "17px",
                  backgroundColor: "#1D308E",
                  color: "white",
                  width: "185px",
                  height: "60px",
                  border: "0",
                  marginBottom: "1em",
                }}
              >
                <p
                  id="textBttnGeneral"
                  style={{
                    alignItems: "initial",
                    marginLeft: "1em",
                    display: "flex",
                    marginTop: "10px",
                    fontSize: "16px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  <span className="btn-label">
                    <i className="nc-icon nc-layout-11" />
                  </span>
                  &nbsp; General
                </p>
              </button>

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

    </React.Fragment>
)
}
export default ViewCardReports;