

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
                <Button  style={{borderRadius: "17px",  backgroundColor: "#1D308E",  color: "white",width: '234px',height:'72px',fontWeight:'700px'}} outline>
                  <span className="btn-label">
                    <i className="nc-icon nc-layout-11" />
                  </span>
                  General        
                </Button>
                {/* <button
                id="bttnSubmit"
                type="submit"
                style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  color: "white",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight:"bold",
                  border:"0"
               
                }}
              >
                General
               
              </button> */}

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
         <div className="secondStepTour">
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
              onChange={handleCountryChange}
            >
             
            
            </Select>
          </label>
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
              value={store}
              label="select-canal"
              placeholder="&nbsp; Seleccione una tienda"
              onChange={handleStoreChange}
            >
              {Array.from(
                new Set(filteredStoreData.map((obj) => obj.store))
              ).map((period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              })}
            </Select>
          </label>
          <label htmlFor="select-canal">
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
              Canal De Venta
            </h5>

            <Select
              labelId="select-canal"
              id="select-canal"
              placeholder="&nbsp; Seleccione un canal"
              style={{
                width: 150,
                marginLeft: "1em",
                fontSize: "10px",
                marginTop: "1em",
              }}
              value={salesChannel}
              label="select-canal"
              onChange={handleSalesChannelChange}
            >
              {Array.from(
                new Set(filteredChannelArray.map((obj) => obj.channel))
              ).map((period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              })}
              {/* {filteredChannelArray.map((channelItem) => {
                return <MenuItem value={channelItem}>{channelItem}</MenuItem>;
              })} */}
            </Select>
          </label>

          {/* <label htmlFor="select-tienda-official">
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginRight: "1em",
                marginBottom: "0px",
                marginTop: "1em",
              }}
            >
              Tienda Oficial  
            </h5>
            <Select
              labelId="select-tienda-official"
              id="select-tienda-official"
              placeholder="&nbsp; Seleccione una tienda oficial"
              style={{ width: 150, fontSize: "10px", marginLeft: "1em" }}
              value={officialStore}
              label="select-tienda-official"
              onChange={handleOfficialStoreChange}
            > */}
          {/* {Array.from(new Set(data.map((obj) => obj.official_store))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )} */}
          {/* {filteredOfficialStore.map((channelItem) => {
                return <MenuItem value={channelItem}>{[channelItem]}</MenuItem>
              })} */}
          {/* {filteredOfficialStore.forEach((channelItem,index) => {
                return <MenuItem value={channelItem}>{channelItem}</MenuItem>;
              })} */}
          {/* </Select>
          </label> */}
        
          <label
          className="seventhStepTour">
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ width: 200, marginLeft: "1em" }}
              placeholderText="dd/mm/yy"
              locale="es"
            />
          </label>

          <label
          className="seventhStepTour">
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
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              style={{ width: 200, marginLeft: "1em" }}
              placeholderText="dd/mm/yy"
              locale="es"
            />
          </label>

          <Button
            color="primary"
            style={{
              borderRadius: "22px",
              color: "#FFFFFF",
              marginLeft: "1em",
              textTransform: "none",
              letterSpacing: "1px",
              width: "120px",
              height: "38px",
              fontWeight: "600",
            }}
            className="thirdStepTour"
            onClick={applyFiltersButtonhandler}
            >
            Aplicar
          </Button>

          <Button
            className="btn-round btn-icon fourthStepTour"
            color="primary"
            onClick={reloadTableHandler}
            >
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
          </Button>

        </div>  


        </Col>
        <Row>
        <Col md="6">
            <Card className="car-chart">
              <CardHeader>
                <CardTitle><strong>Resumen general de  venta y órdenes</strong></CardTitle>
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
                <CardTitle><strong>Participación canal de venta</strong></CardTitle>
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
