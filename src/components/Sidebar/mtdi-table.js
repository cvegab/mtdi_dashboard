import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import RoomIcon from "@material-ui/icons/Room";
import { MuiThemeProvider } from "@material-ui/core";
//import FormControl from '@mui/material/FormControl';
import { Select, MenuItem } from "@material-ui/core";
import { isJSDocUnknownTag } from "typescript";
import CustomFilter from "./custom-filter-row";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { zhCN } from "date-fns/locale";
import zIndex from "@material-ui/core/styles/zIndex";
import "../../assets/css/global.css";

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
    dte: "",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "cross_docking",
    id_mpago: 18378018289,
    status_detail: "accredited",
    order_status: "Cancelado",
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
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "fulfillment",
    id_mpago: 18377774274,
    status_detail: "accredited",
    order_status: "Despachado",
  },
  {
    id_mtdi: "ml619e8aff5b8efcacad397d73",
    canal_de_venta: "Mercado Libre",
    tienda: "ELITE PROFESSIONAL",
    cliente: "ELITE PROFESSIONAL",
    order_id: 5043361057,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:32:41",
    shipping_id: 40993074966,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 15490,
    comprador: "SUPERFIL CHILE",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "cross_docking",
    id_mpago: 18377751629,
    status_detail: "accredited",
    order_status: "Cancelado",
  },
  {
    id_mtdi: "ml619e8b00e3823d3ad5f41c08",
    canal_de_venta: "Mercado Libre",
    tienda: "ELITE PROFESSIONAL",
    cliente: "ELITE PROFESSIONAL",
    order_id: 5043343674,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:27:19",
    shipping_id: 40993062785,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 26190,
    comprador: "CRORTEGA1",
    hub: "master",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "self_service",
    id_mpago: 18377638337,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e8524ae50e1c50b6fcf1a",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043328587,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:22:58",
    shipping_id: 40993050395,
    valor_shipping: 0,
    estado_pago: "",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 6590,
    comprador: "DRAGERT",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Babysec",
    tipo_envio: "fulfillment",
    id_mpago: "",
    status_detail: "",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e88308e36b7c74eca91e6",
    canal_de_venta: "Mercado Libre",
    tienda: "Unilever",
    cliente: "Unilever",
    order_id: 5043322020,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:18:49",
    shipping_id: 40993039564,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 1890,
    comprador: "ACRIVERAC",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "fulfillment",
    id_mpago: 18377467510,
    status_detail: "accredited",
    order_status: "Cancelado",
  },
  {
    id_mtdi: "ml619e85251aa98aa1ae4d0c2c",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043290850,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:11:04",
    shipping_id: 40993018959,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 9570,
    comprador: "MARCELABERNARDAARAYAMERCADO",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Softys",
    tipo_envio: "fulfillment",
    id_mpago: 18377320339,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e852508fd29c7ea07b1d1",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043294001,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:09:30",
    shipping_id: 40993015507,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 3600,
    comprador: "LOPA7655100",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite",
    tipo_envio: "fulfillment",
    id_mpago: 18377282832,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e88310dd92f36555d904d",
    canal_de_venta: "Mercado Libre",
    tienda: "Unilever",
    cliente: "Unilever",
    order_id: 5043284035,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:05:44",
    shipping_id: 40993005636,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 2490,
    comprador: "PALO265445",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "fulfillment",
    id_mpago: 18377205880,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "wo619e6fd7ceb34c0ebe9c2525",
    canal_de_venta: "Woocommerce",
    tienda: "I Am Not Plastic",
    cliente: "I Am Not Plastic",
    order_id: "3578",
    pais: "Chile",
    fecha_creacion: "2021-11-24 13:44:28",
    valor_shipping: "0",
    estado_pago: "",
    estado_oc: "processing",
    estado_delivery: "",
    precio_sin_shipping: 17460,
    comprador: "Silvana Laissle Casas del Valle",
    hub: "Transbank Webpay Plus",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "",
    tipo_envio: "",
    id_mpago: "",
    status_detail: "",
    order_status: "Confirmado",
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
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "fulfillment",
    id_mpago: 18377774274,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e8aff5b8efcacad397d73",
    canal_de_venta: "Mercado Libre",
    tienda: "ELITE PROFESSIONAL",
    cliente: "ELITE PROFESSIONAL",
    order_id: 5043361057,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:32:41",
    shipping_id: 40993074966,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 15490,
    comprador: "SUPERFIL CHILE",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "cross_docking",
    id_mpago: 18377751629,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e8b00e3823d3ad5f41c08",
    canal_de_venta: "Mercado Libre",
    tienda: "ELITE PROFESSIONAL",
    cliente: "ELITE PROFESSIONAL",
    order_id: 5043343674,
    pais: "Mexico",
    fecha_creacion: "2021-11-24 14:27:19",
    shipping_id: 40993062785,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 26190,
    comprador: "CRORTEGA1",
    hub: "master",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite Professional",
    tipo_envio: "self_service",
    id_mpago: 18377638337,
    status_detail: "accredited",
    order_status: "Confirmado",
  },
  {
    id_mtdi: "ml619e8524ae50e1c50b6fcf1a",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043328587,
    pais: "Colombia",
    fecha_creacion: "2021-11-24 14:22:58",
    shipping_id: 40993050395,
    valor_shipping: 0,
    estado_pago: "",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 6590,
    comprador: "DRAGERT",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Babysec",
    tipo_envio: "fulfillment",
    id_mpago: "",
    status_detail: "",
  },
  {
    id_mtdi: "ml619e88308e36b7c74eca91e6",
    canal_de_venta: "Mercado Libre",
    tienda: "Unilever",
    cliente: "Unilever",
    order_id: 5043322020,
    pais: "Peru",
    fecha_creacion: "2021-11-24 14:18:49",
    shipping_id: 40993039564,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 1890,
    comprador: "ACRIVERAC",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "fulfillment",
    id_mpago: 18377467510,
    status_detail: "accredited",
  },
  {
    id_mtdi: "ml619e85251aa98aa1ae4d0c2c",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043290850,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:11:04",
    shipping_id: 40993018959,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 9570,
    comprador: "MARCELABERNARDAARAYAMERCADO",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Softys",
    tipo_envio: "fulfillment",
    id_mpago: 18377320339,
    status_detail: "accredited",
  },
  {
    id_mtdi: "ml619e852508fd29c7ea07b1d1",
    canal_de_venta: "Mercado Libre",
    tienda: "Softys",
    cliente: "Softys",
    order_id: 5043294001,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:09:30",
    shipping_id: 40993015507,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 3600,
    comprador: "LOPA7655100",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Elite",
    tipo_envio: "fulfillment",
    id_mpago: 18377282832,
    status_detail: "accredited",
  },
  {
    id_mtdi: "ml619e88310dd92f36555d904d",
    canal_de_venta: "Mercado Libre",
    tienda: "Unilever",
    cliente: "Unilever",
    order_id: 5043284035,
    pais: "Chile",
    fecha_creacion: "2021-11-24 14:05:44",
    shipping_id: 40993005636,
    valor_shipping: 0,
    estado_pago: "approved",
    estado_oc: "paid",
    estado_delivery: "",
    precio_sin_shipping: 2490,
    comprador: "PALO265445",
    hub: "account_money",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "Unilever",
    tipo_envio: "fulfillment",
    id_mpago: 18377205880,
    status_detail: "accredited",
  },
  {
    id_mtdi: "wo619e6fd7ceb34c0ebe9c2525",
    canal_de_venta: "Woocommerce",
    tienda: "I Am Not Plastic",
    cliente: "I Am Not Plastic",
    order_id: "3578",
    pais: "Chile",
    fecha_creacion: "2021-11-24 13:44:28",
    valor_shipping: "0",
    estado_pago: "",
    estado_oc: "processing",
    estado_delivery: "",
    precio_sin_shipping: 17460,
    comprador: "Silvana Laissle Casas del Valle",
    hub: "Transbank Webpay Plus",
    rut: "",
    dte: "",
    dte_exist: "disabled",
    official_store: "",
    tipo_envio: "",
    id_mpago: "",
    status_detail: "",
  },
];

const MtdiTable = () => {
  const [data, setData] = useState(orderList);
  const [country, setcountry] = useState("select a country");
  const [salesChannel, setsalesChannel] = useState("Seleccione Una");
  const [store, setstore] = useState("Seleccione Una");
  const [client, setclient] = useState("Seleccione Una");
  const [officialStore, setofficialStore] = useState("Seleccione Una");
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    if (
      country === "select a country" ||
      salesChannel === "Seleccione Una" ||
      store === "Seleccione Una" ||
      officialStore === "Seleccione Una" ||
      client === "Seleccione Una" ||
      startDate === null
    ) {
      console.log("hello");
      setData(orderList);
    } else {
      console.log("bye");
      const x = data
        .filter((item) => item.pais === country)
        .filter((item) => item.canal_de_venta.includes(salesChannel))
        .filter((item) => item.tienda.includes(store))
        .filter((item) => item.cliente.includes(client))
        // .filter((item) => item.tienda_official.includes(officialStore))
        .filter((item) =>
          item.fecha_creacion.includes(
            startDate.getFullYear() +
              "-" +
              (startDate.getMonth() + 1) +
              "-" +
              startDate.getDate()
          )
        );
      console.log(x);
      setData(x);
    }
    //    const x =  data.filter(item => item.pais === country)
    //    .filter(item => item.canal_de_venta.includes(salesChannel));
    //    console.log(x);
    //    setData(x);
    //   .filter(item => item.canal_de_venta.includes(salesChannel))
    //   .filter((item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1)

    console.log(country, salesChannel, store, client, officialStore);
  }, [country, salesChannel, store, client, startDate, officialStore]);
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
          return (
            <div
              style={{
                background: "#f90000aa",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              Cancelado
            </div>
          );
        }
        if (rowData.order_status === "Despachado") {
          return (
            <div
              style={{
                background: "#c0c0c0",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              Despachado
            </div>
          );
        }
        if (rowData.order_status === "Confirmado") {
          return (
            <div
              style={{
                background: "#008000aa",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              Confirmado
            </div>
          );
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
      field: "dte",
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
      field: "valor_shipping",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado Fulfilment",
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
      title: "Shipping Id",
      field: "comprador",
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
    setData(orderList);
    setclient(null);
    setcountry(null);
    setofficialStore(null);
    setsalesChannel(null);
    setstore(null);
    setStartDate(null);
  };
  return (
    <div
      id="mtdiTableBackground"
      className="App"
      style={{ background: "#E5E5E5" }}
    >
      <h5
        className="titleTable"
        style={{
          color: "#C4C4C4",
          width: "450px",
          fontSize: "14px",
          fontWeight: "800",
          marginTop: "6rem",
          marginLeft: "2em",
        }}
      >
        Transacciones digitales: Vista Administrador
      </h5>
      <p
        classname="textNameTable"
        style={{
          color: "black",
          width: "450px",
          fontSize: "30px",
          fontWeight: "800",
          marginLeft: "1em",
        }}
      >
        Camilo Vega
      </p>
      <label htmlFor="select-country">
        <h5
          style={{
            color: "black",
            width: "30px",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          País
        </h5>
      </label>

      <Select
        labelId="select-country"
        id="select-country"
        style={{ width: 100, marginLeft: "1em", borderRadius: "17px" }}
        value={country}
        label="Country"
        onChange={handleCountryChange}
      >
        {Array.from(new Set(data.map((obj) => obj.pais))).map((period) => {
          return <MenuItem value={period}>{period}</MenuItem>;
        })}
      </Select>

      <label htmlFor="select-canal">
        <h5
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Canal De Venta
        </h5>
      </label>

      <Select
        labelId="select-canal"
        id="select-canal"
        style={{ width: 100, marginLeft: "1em" }}
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
      <label htmlFor="select-tienda">
        <h5
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Tienda
        </h5>
      </label>
      <Select
        labelId="select-tienda"
        id="select-tienda"
        style={{ width: 100 }}
        value={store}
        label="select-canal"
        onChange={handleStoreChange}
      >
        {/* {data.map((e, key) => {
          return (
            <MenuItem key={key} value={e.tienda}>
              {e.tienda}
            </MenuItem>
          );
        })} */}
        {Array.from(new Set(data.map((obj) => obj.tienda))).map((period) => {
          return <MenuItem value={period}>{period}</MenuItem>;
        })}
      </Select>

      <label htmlFor="select-tienda-official">
        <h5
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Tienda Oficial
        </h5>
      </label>
      <Select
        labelId="select-tienda-official"
        id="select-tienda-official"
        style={{ width: 100 }}
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
      <label htmlFor="select-client">
        <h5
          style={{
            color: "black",
            fontSize: "14px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Cliente
        </h5>
      </label>
      <Select
        labelId="select-client"
        id="select-client"
        style={{ width: 100 }}
        value={client}
        label="select-tienda-official"
        onChange={handleClientChange}
      >
        {Array.from(new Set(data.map((obj) => obj.cliente))).map((period) => {
          return <MenuItem value={period}>{period}</MenuItem>;
        })}
      </Select>
      <button onClick={reloadTableHandler}>Hit me!!</button>
      <div>
        <label>
          <h5
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "800",
              marginLeft: "1em",
            }}
          >
            Fecha
          </h5>
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <MaterialTable
        title="Instance Table"
        icons={tableIcons}
        title=""
        data={data}
        columns={columns}
        options={{ columnsButton: true, sorting: true }}
        style={{ marginLeft: "1em", marginTop: "2em" }}
      />
    </div>
  );
};

export default MtdiTable;
