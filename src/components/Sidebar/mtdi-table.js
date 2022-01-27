import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import RoomIcon from "@material-ui/icons/Room";
import { Select, MenuItem } from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";
import calendarIcon from "../../assets/img/DatePickerIcon.png";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/global.css";
import "../../assets/css/global.css";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import { Button, Col, Spinner } from "reactstrap";
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "./mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";
import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard";
import CustomLoader from "./custom-filter-row";
import spinnerGif from '../../assets/img/spinnerLogos.gif';
import noDataImage from '../../assets/img/noDataImageBlue.png';

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <RoomIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),

  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

registerLocale("es", es);

const MtdiTable = (props) => {
  const [filtersApplied, setfiltersApplied] = useState(false);
  const [data, setData] = useState([]);
  const [pageCount, setpageCount] = useState(2);
  const [country, setcountry] = useState("");
  const [countryId, setcountryId] = useState(0);
  const [store, setstore] = useState("");
  const [storeId, setstoreId] = useState(0);
  const [salesChannel, setsalesChannel] = useState("");
  const [channelId, setchannelId] = useState(0);
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const [selectedDateFrom, setselectedDateFrom] = useState(
    d.toISOString().slice(0, 10)
  );
  const [selectedDateTo, setselectedDateTo] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [buyer, setbuyer] = useState("");
  const [client, setclient] = useState("");
  const [officialStore, setofficialStore] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isLoadingIncrementPage, setisLoadingIncrementPage] = useState(false);
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const [filteredChannelArray, setfilteredChannelArray] = useState([]);
  const [filteredOfficialStore, setfilteredOfficialStore] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [urlState, seturlState] = useState("");
  useEffect(() => {
    // setfirstName(localStorage.getItem("first"));
    fetchOrderData();
    fetchFilterData();
  }, []);
  const fetchFilterData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
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
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        let countryArray = [];

        setfilteredCountryData(obj.countries);
        setfilteredStoreData(obj.stores);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (client !== "") {
      const x = data.filter((item) => item.cliente.includes(client));
      setData(x);
    }
  }, [client]);

  useEffect(() => {
    if (officialStore !== "") {
      const x = data.filter((item) =>
        item.official_store.includes(officialStore)
      );
      setData(x);
    }
  }, [officialStore, storeId]);

  useEffect(() => {
    if (startDate !== null) {
      setselectedDateFrom(startDate.toISOString().slice(0, 10));
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate !== null) {
      setselectedDateTo(endDate.toISOString().slice(0, 10));
    }
  }, [endDate]);

  const fetchOrderData = async () => {
    let countryValue = 3;
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      const response = await fetch(
        `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/orders?qty=50&user=admin&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);

      setData(data);

      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showModalHandler = (row) => {
    setshowModal(true);
  };
  const hideModalHandler = () => {
    setshowModal(false);
  };
  const showPdfHandler = () => {
    window.open(buyer.dte);
  };

  const applyFiltersButtonhandler = async () => {
    setisLoading(true);
    setfiltersApplied(true);
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/orders?qty=50&user=admin&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;
    console.log(url);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data[0].total);
      if (data[0].total === 0) {
       
        setData([]);
      } else {
        setData(data);
      }
      console.log(data.length);

      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementPageHandler = async () => {
    setisLoadingIncrementPage(true);
    setpageCount(pageCount + 1);
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store/orders?qty=50&user=admin&channel=${channelId}&store=${storeId}&page=${pageCount}&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${new Date()
      .toISOString()
      .slice(0, 10)}`;
    console.log(url);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error();
      }
      const newData = await response.json();
      setData([...data, ...newData]);

      setisLoadingIncrementPage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "OpsId",
      field: "order_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
        borderRadius: "20px 0px 0px 20px",
      },
    },
    {
      title: "Fecha de Orden",
      field: "fecha_creacion",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Canal de Venta",
      field: "canal_de_venta",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tienda",
      field: "tienda",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Cliente",
      field: "cliente",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tienda Oficial",
      field: "official_store",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Orden de Compra",
      field: "order_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "País",
      field: "pais",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Estado de Pedido",
    //   field: "order_status",

    //   render: (rowData) => {
    //     if (rowData.order_status === "Cancelado") {
    //       return <div className={classes.cancelado}>Cancelado</div>;
    //     }
    //     if (rowData.order_status === "Despachado") {
    //       return <div className={classes.despachado}>Despachado</div>;
    //     }
    //     if (rowData.order_status === "Confirmado") {
    //       return <div className={classes.confirmado}>Confirmado</div>;
    //     }
    //   },

    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "DTE",
      field: "dte",

      render: (rowData) => {
        if (rowData.dte != undefined) {
          if (rowData.dte === "") {
            return (
              <div>
                {" "}
                No &nbsp;{" "}
                <span style={{ marginLeft: "4px" }} className={classes.noIcon}>
                  <img src={noIcon} />
                </span>
                &nbsp;
                <span className={classes.greyIcon}>
                  <img src={greyIcon} />
                </span>
              </div>
            );
          }
          if (rowData.dte === "-") {
            return (
              <div>
                No &nbsp;
                <span
                  style={{ marginLeft: "4px" }}
                  className={classes.noIcon}
                >
                  <img title="No existe DTE" src={noIcon} />
                </span>
                &nbsp;
                <span className={classes.greyIcon} style={{ cursor: "pointer" }}>
                  <img src={greyIcon} title="No existe DTE"/>
                </span>
              </div>
            );
          }
          if (rowData.dte.substring(0, 4) === "http") {
            return (
              <div>
                Si &nbsp;
                <span
                  style={{ marginLeft: "14px", cursor: "pointer" }}
                  className={classes.si}
                >
                  <img
                    src={SiIcon}
                    title="Enviar DTE"
                    onClick={showModalHandler.bind(this, data)}
                  />
                </span>
                &nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  title="Mostrar DTE"
                  className={classes.showPdf}
                >
                  <a href={rowData.dte} target="_blank">
                    <img src={showPdf} />
                  </a>
                </span>
              </div>
            );
          }
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Bodega",
      field: "bodega",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Respuesta OMS",
    //   field: "role",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Estado WMS",
      field: "estado_wms",

      render: (rowData) => {
        if (rowData.estado_wms === "Enviado") {
          return (
            <div className={classes.enviado}>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;Enviado
            </div>
          );
        }
        if (rowData.estado_wms === "Pendiente") {
          return <div className={classes.pendiente}>&nbsp;&nbsp;Pendiente</div>;
        }
        if (rowData.estado_wms === "No Aplica") {
          return <div className={classes.cancelado}>&nbsp;&nbsp;No Aplica</div>;
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Hub de pago",
    //   field: "estado_pago",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Total",
      field: "precio_sin_shipping",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Shipping",
    //   field: "",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Estado OC",
      field: "estado_oc",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Pickeador",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Jefe OPS",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Hub fulfillment",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Courier",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Shipping ID",
      field: "shipping_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Bultos/Etiquetas",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Estado courier",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Comprador",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "NPS",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Reviews",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     borderRadius: "0px 20px 20px 0px",
    //     fontSize: "12px",
    //   },
    // },
  ];

  const handleCountryChange = (event) => {
    setcountry(event.target.value);
    //Get countryId from filteredCountryData
    const val = filteredCountryData.filter(function (item) {
      if (item.country === event.target.value) {
        return item;
      }
    });
    setcountryId(val[0].value);
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
    const selectedChannelsArray = selectedStoreData[0].channels;
    const selectedChannels = selectedChannelsArray.map((item) => {
      return item;
    });
    setfilteredChannelArray(selectedChannels);
  };

  const handleSalesChannelChange = (event) => {
    setsalesChannel(event.target.value);
    //Get ChannelId from filteredChannelArray
    const val = filteredChannelArray.filter(function (item) {
      if (item.channel === event.target.value) {
        return item;
      }
    });
    setchannelId(val[0].value);
  };

  const handleOfficialStoreChange = (event) => {
    setofficialStore(event.target.value);
  };
  const reloadTableHandler = () => {
    fetchOrderData();

    location.reload();
  };

  return (
    <React.Fragment>
      {showModal && (
        <SendMail
          onhideModal={hideModalHandler}
          data={data}
          purchaser={buyer}
        ></SendMail>
      )}

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
          Transacciones digitales: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "2em",
          }}
        >
          <span>{localStorage.getItem("first")}</span>&nbsp;
          <span>{localStorage.getItem("last")}</span>
        </p>

        <Col md="12">
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
              label="Country"
              placeholder="&nbsp; Seleccione un país"
              onChange={handleCountryChange}
            >
              {/* {Array.from(new Set(data.map((obj) => obj.pais))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )} */}
              {Array.from(new Set(filteredCountryData.map((obj) => obj))).map(
                (period) => {
                  return (
                    <MenuItem value={period.country}>{period.country}</MenuItem>
                  );
                }
              )}
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
            onClick={applyFiltersButtonhandler}
          >
            Aplicar
          </Button>

          <Button
            className="btn-round btn-icon"
            color="primary"
            onClick={reloadTableHandler}
          >
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
          </Button>
        </Col>

        {/* MOBILE VERSION */}
        <div id="OrderMobileCard">
          <br />
          {!isLoading && (
            <div>
              <OrderMobileCard
                data={data}
                isLoading={isLoading}
              ></OrderMobileCard>
            </div>
          )}
          {isLoading && (
            <div id="spinner">

              {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; */}
                  <div>
                    <img src={spinnerGif} style={{marginTop:"2em"}} width="200" alt="Cargando..." /> 
                    <br/>
                    {/* <p style={{fontWeight: "bold", color: "#1D308E"}}>Cargando...</p>                   */}
                    <br />
                  </div>
              
              <OrderMobileCard data={data} isLoading={isLoading}></OrderMobileCard>
             <br/>
            </div>
          )}
        </div>

        {/* DESKTOP VERSION */}

        <div id="OrderDesktopTable">
          {isLoading && (
            <MaterialTable
              title=""
              options={{
                search: false,
              }}
              icons={tableIcons}
              columns={columns}
              data={[]}
              components={{
                Body: (props) => (
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp; &nbsp;{" "}
                    {/* <Spinner

                      style={{
                        width: "0.7rem",
                        height: "0.7rem",
                        marginTop: "4em",
                        marginBottom: "2rem",
                      }}
                      type="grow"
                      color="info"
                    />
                    <Spinner
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginTop: "2em",
                        marginBottom: "2rem",
                      }}
                      type="grow"
                      color="info"

                    /> */}
                    <br/>
                    <div>
                      <img src={spinnerGif} style={{marginTop:"2em"}} width="220" alt="Cargando" /> 
                      
                      {/* <p style={{fontWeight: "bold", color: "#1D308E", marginLeft:"4.5em"}}>Cargando...</p>                   */}
                      <br />
                    </div>

                    <br />
                  </div>
                ),
                emptyDataSourceMessage: (
                  <h1>No se encuentra la información.</h1>
                ),
              }}
            ></MaterialTable>
          )}
          {data.length === 0 && !isLoading && (
            <MaterialTable
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft:"20rem",
                    width: "100%",
                  }}
                >
                  <img src={noDataImage} style={{marginTop:"2em"}} width="160" alt="noData" /> 
                    <p 
                    style={{
                     display: 'flex',
                     justifyContent: "center",
                      color: "#1D308E"
                    }}> &nbsp;
                    <span> No hay información disponible.</span> 
                    </p>  
                    
                  </div>
                ),
             
             
              },
            }}
              title=""
              icons={tableIcons}
              columns={columns}
              data={[]}
              components={{
                Row: (props) => <CustomLoader {...props} />,
              }}
            ></MaterialTable>
          )}
          {data.length !== 0 && !isLoading && (
            <MaterialTable
              onRowClick={(evt, selectedRow) => setbuyer(selectedRow)}
         
              localization={{
                body: {
                  emptyDataSourceMessage: (
                    <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "flex-start",
                      marginLeft:"20rem",
                      width: "100%",
                    }}
                  >
                    <img src={noDataImage} style={{marginTop:"2em"}} width="160" alt="noData" /> 
                      <p 
                      style={{
                       display: 'flex',
                       justifyContent: "center",
                        color: "#1D308E"
                      }}> &nbsp;
                      <span> No hay información disponible.</span> 
                      </p>  
                      
                    </div>
                  ),
               
                },
              }}
              key={data.id_mtdi}
              title="Instance Table"
              icons={tableIcons}
              title=""
              data={data}
              columns={columns}
              options={{ columnsButton: true, sorting: true, search: true }}
              style={{ marginLeft: "1em", marginTop: "2em" }}
            />
          )}
       
        </div>

       {!isLoading && <div className="bttnSeeMore">

          {!isLoadingIncrementPage && (
            <Button
              color="primary"
              style={{
                borderRadius: "22px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                letterSpacing: "1px",
                width: "200px",
                height: "50px",
                fontWeight: "600",
              }}
              onClick={incrementPageHandler}
            >
              Ver más
            </Button>
          )}
          {isLoadingIncrementPage && (
            <Button
              color="primary"
              style={{
                borderRadius: "22px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                letterSpacing: "1px",
                width: "200px",
                height: "50px",
                fontWeight: "600",
              }}
              onClick={incrementPageHandler}
              disabled
            >
              <Spinner
                style={{ width: "0.7rem", height: "0.7rem" }}
                type="grow"
                color="light"
              />
              &nbsp; Cargando...
            </Button>
          )}
        </div>}

      </div>
    </React.Fragment>
  );
};

export default MtdiTable;
