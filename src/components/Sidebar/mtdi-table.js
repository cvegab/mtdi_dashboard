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
import RefreshIcon from "../../assets/img/icon-refresh.png";
//import FormControl from '@mui/material/FormControl';
import { Select, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import SearchIcon from "material-ui/svg-icons/action/search";

import "../../assets/css/global.css";
// import CalendarIcon from '../../assets/img/calendar-icon.png'
import "../../assets/css/global.css";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import { Button, Col, Spinner } from "reactstrap";
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "./mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";
import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard"

import CustomLoader from "./custom-filter-row";

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

const orderList = [
  {
    id_mtdi: "ml619e8bb5f6d955dc7455468e",
    canal_de_venta: "Mercado Libre",
    tienda: "Unilever",
    cliente: "Unilever",
    order_id: 5043399300,
    pais: "Chile",
    fecha_creacion: "2020-11-24 14:45:24",
    shipping_id: 40993109945,
    valor_shipping: 2443,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 7662,
    comprador: "IVISPATIO",
    hub: "redcompra",
    rut: "",
    dte: "Si",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "cross_docking",
    id_mpago: 18378018289,
    status_detail: "accredited",
    order_status: "Cancelado",
    wms: "Integrado a wms",
  },
  {
    id_mtdi: "ml619e8aff4bcbf54da2960a96",
    canal_de_venta: "Mercado Libre",
    tienda: "ELITE PROFESSIONAL",
    cliente: "ELITE PROFESSIONAL",
    order_id: 5043355576,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:33:10",
    shipping_id: 40993074958,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 133980,
    comprador: "SUPERFIL CHILE",
    hub: "account_money",
    rut: "",
    dte: "No",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "fulfillment",
    id_mpago: 18377774274,
    status_detail: "accredited",
    order_status: "Despachado",
    wms: "Integrado a wms",
  },
];

const MtdiTable = (props) => {
  const [data, setData] = useState([]);
  const [shiny, setshiny] = useState([]);
  const [country, setcountry] = useState("");

  const [salesChannel, setsalesChannel] = useState("");
  const [store, setstore] = useState("");
  const [client, setclient] = useState("");
  const [officialStore, setofficialStore] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    fetchOrderData();
  }, []);

  useEffect(() => {
    if (country !== "") {
      const x = data.filter((item) => item.pais === country);

      setData(x);
    }
  }, [country]);

  useEffect(() => {
    if (salesChannel !== "") {
      const x = data.filter((item) =>
        item.canal_de_venta.includes(salesChannel)
      );
      setData(x);
    }
  }, [salesChannel]);

  useEffect(() => {
    if (store !== "") {
      const x = data.filter((item) => item.tienda.includes(store));
      setData(x);
    }
  }, [store]);
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
  }, [officialStore]);
  useEffect(() => {
    console.log(startDate);
    if (startDate !== null) {
      const x = data.filter((item) =>
        item.fecha_creacion.includes(
          startDate.getFullYear() +
            "-" +
            (startDate.getMonth() + 1) +
            "-" +
            startDate.getDate()
        )
      );
      console.log(x);
      if (x.length === 0) {
        console.log("hello");
        //setData(['hello']);
        setshiny(x);
        setData(x);
      } else {
        console.log("bye");
        setData(x);
      }
    }
  }, [startDate]);

 
  const fetchOrderData = async () => {
    console.log("1 start");
    setisLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/orders?qty=20&user=admin&tienda=2\n\n",
        requestOptions
      );
      console.log("2.run");
      if (!response.ok) {
        console.log(response);
        console.log("3.error");
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setisLoading(false);
      const transformedData = data.map((poke) => {
        return [poke.fecha_creacion];
      });
      console.log(transformedData);
      setshiny(transformedData);

      console.log("Date" + data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };


  const showModalHandler = () => {
    console.log("hi i was clicked");
    setshowModal(true);
  };
  const hideModalHandler = () => {
    setshowModal(false);
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
      title: "Pais",
      field: "pais",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado De Pedido",
      field: "order_status",

      render: (rowData) => {
        if (rowData.order_status === "Cancelado") {
          return <div className={classes.cancelado}>Cancelado</div>;
        }
        if (rowData.order_status === "Despachado") {
          return <div className={classes.despachado}>Despachado</div>;
        }
        if (rowData.order_status === "Confirmado") {
          return <div className={classes.confirmado}>Confirmado</div>;
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "DTE",
      field: "dte_exist",
      // icon: Search,
      lookup: {
        "": (
          // style={{display: 'flex', flexDirection:'row',padding:'10px'}}
          <div>
            Si &nbsp;
            <span className={classes.si}>
              <img src={SiIcon} onClick={showModalHandler} />
            </span>
            &nbsp;
            <span className={classes.showPdf}>
              <img src={showPdf} />
            </span>
          </div>
        ),
        disabled: (
          <div>
            No &nbsp;
            <span className={classes.noIcon}>
              <img src={noIcon} />
            </span>
            &nbsp;
            <span className={classes.greyIcon}>
              <img src={greyIcon} />
            </span>
          </div>
        ),
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Respuesta OMS",
      field: "role",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Respuesta WMS",
      field: "role",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Hub De pago",
      field: "estado_pago",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Total",
      field: "role",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Shipping",
      field: "",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado Fulfillment",
      field: "estado_oc",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Pickeador",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Jefe ops",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Hub Fulfilment",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Courier",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Shipping ID",
      field: "shipping_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Butos/Etiquettas",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado Courier",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Cliente",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "NPS",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Reviews",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        borderRadius: "0px 20px 20px 0px",
        fontSize: "12px",
      },
    },
  ];

  const handleCountryChange = (event) => {
    setcountry(event.target.value);
  };

  const handleSalesChannelChange = (event) => {
    setsalesChannel(event.target.value);
  };

  const handleStoreChange = (event) => {
    setstore(event.target.value);
  };
  const handleClientChange = (event) => {
    setclient(event.target.value);
  };
  const handleOfficialStoreChange = (event) => {
    setofficialStore(event.target.value);
  };
  const reloadTableHandler = () => {
    // setData(data);
    fetchOrderData();
    setclient(null);
    setcountry(null);
    setofficialStore(null);
    setsalesChannel(null);
    setstore(null);
    setStartDate(null);
  };

  return (
    <React.Fragment>
      {showModal && (
        // <Modal onhideModal={hideModalHandler}>
        //   <h1>Hello</h1>
        // </Modal>
        // <SendMail onhideModal={hideModalHandler}></SendMail>

        // <SendMail onhideModal={hideModalHandler}></SendMail>
        <SendMail onhideModal={hideModalHandler}></SendMail>
      )}

      {/* <div
        id="mtdiTableBackground"
        className="App"
        style={{ background: "#E5E5E5" }}
      > */}

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
            marginBottom: "2em"

          }}
        >
          Camilo Vega
        </p>


        <Col md="12">

        <label htmlFor="select-country">
          <h5
            style={{
              color: "black",
              width: "30px",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "2em",
              marginBottom: "0px",
            }}
          >
            País
          </h5>
          <Select
            labelId="select-country"
            id="select-country"     
            style={{ width: 150, marginLeft: "1em", borderRadius: "17px", marginBottom: "1em" }}
            value={country}
            label="Country"      
            onChange={handleCountryChange}
          >
            
            {Array.from(new Set(data.map((obj) => obj.pais))).map((period) => {
              return <MenuItem value={period}>{period}</MenuItem>;
            })}
          </Select>
        </label>

        <label>
          <h5
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "18px",
            }}
          >    
            Fecha
          </h5>
          
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            style={{width:200}}
            placeholderText="dd/mm/yy"
          >
            <i className="nc-icon nc-layout-11" style={{ color: "#232A38" }}/>
          </DatePicker>          

          {/* <img src={CalendarIcon} /> */}
        </label>

        <label htmlFor="select-canal">
          <h5
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "2em",
              marginBottom: "0px",
            }}
          >
            Canal De Venta
          </h5>


          <Select
            labelId="select-canal"
            id="select-canal"
            style={{ width: 130, marginLeft: "1em" }}
            value={salesChannel}
            label="select-canal"
            onChange={handleSalesChannelChange}
          >
            {Array.from(new Set(data.map((obj) => obj.canal_de_venta))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
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
            }}
          >
            Tienda
          </h5>
          <Select
            labelId="select-tienda"
            id="select-tienda"
            style={{ width: 150 }}
            value={store}
            label="select-canal"
            onChange={handleStoreChange}
          >
            {Array.from(new Set(data.map((obj) => obj.tienda))).map(

              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>


        <label htmlFor="select-tienda-official">
          <h5
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "0em",
              marginRight: "1em",
              marginBottom: "0px",
            }}
          >
            Tienda Oficial
          </h5>
          <Select
            labelId="select-tienda-official"
            id="select-tienda-official"
            style={{ width: 150 }}
            value={officialStore}
            label="select-tienda-official"
            onChange={handleOfficialStoreChange}
          >
            {Array.from(new Set(data.map((obj) => obj.official_store))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

     

        <label htmlFor="select-client">
          <h5
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "2em",
              marginBottom: "0px",
            }}
          >
            Cliente
          </h5>
          <Select
            labelId="select-client"
            id="select-client"
            style={{ width: 150, marginLeft: '1em' }}
            value={client}
            label="select-tienda-official"
            onChange={handleClientChange}
          >
            {Array.from(new Set(data.map((obj) => obj.cliente))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>

        <Button className="btn-round btn-icon" color="primary" onClick={reloadTableHandler}>
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
         </Button>

      
      
      </Col>

      {/* MOBILE VERSION */}
      <div id="OrderMobileCard">
      <OrderMobileCard />
      
      </div>


      {/* DESKTOP VERSION */}

      <div id="OrderDesktopTable">
        {/* // add is Loading */}
        {isLoading && (
          <MaterialTable
            title=""
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
                  {/* <h1 color="red">Hello ghwgdj kdlwkflkel hkhkwhflh hjfhfjeq</h1> */}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <Spinner
                    animation="border"
                    style={{ color: "#1D308E", alignItems: "center" }}
                  ></Spinner>
                </div>
              ),
              emptyDataSourceMessage: <h1>No data found</h1>,
            }}
          ></MaterialTable>
        )}

        {data.length === 0 && !isLoading && (
          <MaterialTable
            title=""
            icons={tableIcons}
            columns={columns}
            data={[]}
            components={{
              Row: (props) => <CustomLoader {...props} />,
            }}
          ></MaterialTable>
        )}

        {data.length !== 0 && (
          <MaterialTable
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <div>
                    <span>No hay información disponible</span>
                    <Spinner
                      animation="border"
                      style={{ color: "#1D308E", marginLeft: "1em" }}
                    />
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
            options={{ columnsButton: true, sorting: true }}
            style={{ marginLeft: "1em", marginTop: "2em" }}
          />
        )}
      </div>
      </div>
    </React.Fragment>
  );
};

export default MtdiTable;
