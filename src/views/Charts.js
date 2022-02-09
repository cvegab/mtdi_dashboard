import { Select, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  chartExample100,
  chartExample11,
  chartExample12,
  data1,
} from "variables/charts.js";
import SplashScreen from "components/UI/splash-screen";
registerLocale("es", es);
const barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Ripley",
      backgroundColor: "#F10096",
      stack: "2",
      data: [30, 50, 20, 40, 50, 30, 20, 110, 32, 12, 33, 89],
    },
    {
      label: "Shopify",
      backgroundColor: "#00B6CB",
      stack: "2",
      data: [10, 0, 5, 15, 0, 4, 8, 8, 32, 11, 33, 66],
    },
    {
      label: "Mercado Libre",
      backgroundColor: "#344FD5",
      stack: "2",
      data: [30, 50, 20, 40, 50, 30, 20, 110, 44, 55, 33, 13],
    },
    {
      label: "CornerShop",
      backgroundColor: "#5E35B1",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Linio",
      backgroundColor: "#97D456",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "Rappi",
      backgroundColor: "#FFD88C",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
    {
      label: "WooCommerce",
      backgroundColor: "#FF6059",
      stack: "2",
      data: [80, 50, 10, 40, 60, 30, 20, 110, 33, 44, 12, 45],
    },
  ],
};

const barChartOptions = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};
function Charts() {
  const [totalIncome, settotalIncome] = useState(0);
  const [dispatchCost, setdispatchCost] = useState(0);
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [gm, setgm] = useState(0);
  const [conversion, setConversion] = useState(0);
  const [totalDte, settotalDte] = useState(0);
  const [inProcess, setinProcess] = useState(0);
  const [inPreparation, setinPreparation] = useState(0);
  const [country, setcountry] = useState("");
  const [countryId, setcountryId] = useState(0);
  const [store, setstore] = useState("");
  const [storeId, setstoreId] = useState(0);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const [selectedDateFrom, setselectedDateFrom] = useState("2021-08-04");
  const [selectedDateTo, setselectedDateTo] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [isLoading, setisLoading] = useState(false);
  const [totalCancelledOrders, settotalCancelledOrders] = useState(0);

 

  const [fromDate, setfromDate] = useState(new Date());
  

  useEffect(() => {
    fetchGeneralData();
    fetchFilterData();
  }, []);
  const fetchGeneralData = () => {
    console.log("hi i am fetching");
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    //2021-12-01
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/resume?channels=2,7&store=${storeId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}&country=${countryId}`;
    console.log(url);
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(obj);
        var totalIncomeArray = obj.map((item) => {
          return item.total;
        });
        var totalDispatchCostArray = obj.map((item) => {
          return item.shipping_total;
        });
        var gmArray = obj.map((item) => {
          return item.gm;
        });
        let conversionArray = obj.map((item) => {
          return item.conversion;
        });
        let ordersCancelledArray = obj.map((item) => {
          return item.orders_canceled;
        });
        let dteSentArray = obj.map((item) => {
          return item.send_dte_qty;
        });
        let inProcessArray = obj.map((item) => {
          return item.in_process;
        });
        let inPreparationArray = obj.map((item) => {
          return item.in_preparation;
        });
        console.log(inPreparationArray);
        let sumOfTotalIncome = totalIncomeArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfTotalDispatch = totalDispatchCostArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfDteSent = dteSentArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
     
        
       
        console.log(totalDispatchCostArray);
        console.log(sumOfTotalDispatch);
        let Totalgm = gmArray.reduce((partialSum, a) => partialSum + a, 0);
        let TotalConversion = conversionArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfCancelledOrders = ordersCancelledArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfInProcess = inProcessArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        let sumOfInPreparation = inPreparationArray.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        settotalIncome(sumOfTotalIncome);
        setdispatchCost(sumOfTotalDispatch);
        setgm(Totalgm);
        setConversion(TotalConversion);
        settotalCancelledOrders(sumOfCancelledOrders);
        settotalDte(sumOfDteSent);
        setinProcess(sumOfInProcess);
        setinPreparation(sumOfInPreparation);
        // console.log(obj[0].total);
        // //NEW API CODE
        // settotalIncome(obj[0].total);
        // setdispatchCost(obj[0].shipping_total);
        // setgm(obj[0].gm);
        // setConversion(obj[0].conversion);
        //OLD API CODE
        // console.log(fromDate.toISOString().slice(0, 10));
        // const d = fromDate.toISOString().slice(0, 10);
        // var z = obj[0].filter((item) => {
        //   return item.date_created === "2022-01-03";
        // });
        // console.log(z);
        // if (z === undefined) {
        //   settotalIncome(0);
        //   setdispatchCost(0);
        // }
        // settotalIncome(z[0].total);
        // setdispatchCost(z[0].shipping_total);
      })
      .catch((error) => console.log("error", error));
  };
  const fetchFilterData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);

        let countryArray = [];

        setfilteredCountryData(obj);
        // setfilteredStoreData(y[0].stores);
      })
      .catch((error) => console.log("error", error));
  };
  const changeDateHandler = (event) => {
    console.log("hi");
    console.log(event);
    const selectedDate = event.toISOString().slice(0, 10);
    console.log(selectedDate);
    setselectedDateFrom(selectedDate);
    console.log(selectedDateFrom);
  };
  const changeDateToHandler = (event) => {
    console.log("hi");
    console.log(event);
    const selectedDate = event.toISOString().slice(0, 10);
    console.log(selectedDate);
    setselectedDateTo(selectedDate);
    console.log(selectedDateFrom);
  };
  const handleCountryChange = (event) => {
    setcountry(event.target.value);
    //Get countryId from filteredCountryData
    const val = filteredCountryData.filter(function (item) {
      if (item.country === event.target.value) {
        return item;
      }
    });
    setcountryId(val[0].value);
    setfilteredStoreData(val[0].stores);
  };
  const handleStoreChange = (event) => {
    setstore(event.target.value);
    //Get storeId from filteredStoreData
    const val = filteredStoreData.filter(function (item) {
      if (item.store === event.target.value) {
        return item;
      }
    });
    setstoreId(val[0].value);
    const selectedStoreData = filteredStoreData.filter((selectedStore) => {
      return selectedStore.store === event.target.value;
    });
    // const selectedChannelsArray = selectedStoreData[0].channels;
    // const selectedChannels = selectedChannelsArray.map((item) => {
    //   return item;
    // });
  };
  const applyFiltersButtonhandler = () => {
    fetchGeneralData();
  };
  return (
    <>
      {isLoading && <SplashScreen></SplashScreen>}
      {!isLoading && (
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
                value={store}
                onChange={handleStoreChange}
                label="select-canal"
                placeholder="&nbsp; Seleccione una tienda"
              >
                {Array.from(
                  new Set(filteredStoreData.map((obj) => obj.store))
                ).map((period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                })}
              </Select>
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
                value={country}
                onChange={handleCountryChange}
                label="Country"
                placeholder="&nbsp; Seleccione un país"
              >
                {Array.from(new Set(filteredCountryData.map((obj) => obj))).map(
                  (period) => {
                    return (
                      <MenuItem value={period.country}>
                        {period.country}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
            </label>
            <label>
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
                // selected={fromDate}
                // onChange={(date) => setfromDate(date)}
                value={selectedDateFrom}
                onChange={changeDateHandler}
                style={{ width: 200, marginLeft: "1em" }}
                placeholderText="dd/mm/yy"
                locale="es"
              />
            </label>

            <label>
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
                value={selectedDateTo}
                onChange={changeDateToHandler}
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
            >
              <i
                className="nc-icon nc-refresh-69"
                style={{ color: "#ffffff" }}
              />
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
                    {/* $20.154.365 &nbsp; */}
                    {totalIncome} &nbsp;
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
                    {/* $1.253.369 &nbsp; */}
                    {dispatchCost} &nbsp;
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
                    {/* $1.253.369 &nbsp; */}
                    {gm} &nbsp;
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
                    {/* $1.253.369 &nbsp; */}
                    {conversion} &nbsp;
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
                  {totalCancelledOrders} &nbsp;
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
                   {totalDte} &nbsp;
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
                  {inProcess} &nbsp;
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
                   {inPreparation} &nbsp;
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
              Experiencia del cliente
            </p>

            <Row style={{ padding: "10px", paddingLeft: "20px" }}>
              {/* NPS */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4" }}>NPS</p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    325 &nbsp;
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
                {/* REVIEWS */}
              </Col>
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4" }}>Preparacion</p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    4.5 &nbsp;
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
              {/* claims */}
              <Col md="3">
                <div>
                  <p style={{ color: "#C4C4C4" }}>Reclamos</p>
                  <h5 style={{ fontSize: "22px", color: "#444B54" }}>
                    500 &nbsp;
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
          <br></br>
          <br></br>
          <Row>
            <Col md="8">
              <Card className="car-chart">
                <CardHeader>
                  <CardTitle>
                    <strong>Resumen general de venta y órdenes</strong>
                  </CardTitle>
                  {/* <p className="card-category"> </p> */}
                </CardHeader>
                <CardBody>
                  <br></br>
                  <br></br>
                  <Bar
                    data={chartExample100.data}
                    options={chartExample100.options}
                  />
                </CardBody>
                <br></br>
                <br></br>
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
                    height={190}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "blue",
                        backgroundColor: "blue",
                        borderRadius: "8px",
                      }}
                    />
                    Mercadolibre
                    <p className="card-category">$4.365.222</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#06CBC1",
                        backgroundColor: "#06CBC1",
                        borderRadius: "8px",
                      }}
                    />
                    Woocommerce
                    <p className="card-category">$2.689.210</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FFD88C",
                        backgroundColor: "#FFD88C",
                        borderRadius: "8px",
                      }}
                    />
                    Shopify
                    <p className="card-category">$1.000.933</p>
                    <i
                      className="fa fa-circle"
                      style={{
                        color: "#FF6059",
                        backgroundColor: "#FF6059",
                        borderRadius: "8px",
                      }}
                    />
                    Otros
                    <p className="card-category">$2.000.933</p>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Row>
              <Col md="12">
                <Card className="card-chart">
                  <CardHeader>
                    <strong>Órdenes por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar data={barChartData} options={barChartOptions} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col md="12">
                <Card className="card-chart">
                  <CardHeader>
                    <strong>Ingresos por canal de venta</strong>
                  </CardHeader>
                  <br></br>
                  <CardBody>
                    <Bar data={barChartData} options={barChartOptions} />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* <Col md="6">
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
          </Col> */}
          </Row>
          <Row>
            {/* <Col md="6">
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
          </Col> */}
          </Row>
          {/* <Row>
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
        </Row> */}
        </div>
      )}
    </>
  );
}

export default Charts;
