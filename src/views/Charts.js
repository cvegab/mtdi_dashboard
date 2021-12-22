

import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";

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
                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-layout-11" />
                  </span>
                  General        
                </Button>
              

                <Button color="primary" style={{borderRadius: "17px"}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-shop" />
                  </span>
                  Tiendas        
                </Button>

                <Button color="primary" style={{borderRadius: "17px"}} outline>
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
                 
                 
              </CardBody>
        </Col>
        <Row>
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
          <Col md="6">
            <Card className="car-chart">
              <CardHeader>
                <CardTitle>Activity</CardTitle>
                <p className="card-category">Multiple Bars Chart</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={chartExample4.data}
                  options={chartExample4.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle>Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
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
                  <i className="fa fa-circle text-info" />
                  Open
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" />
                  Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
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
