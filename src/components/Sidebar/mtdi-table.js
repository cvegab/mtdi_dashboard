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
    fecha_creacion: "2021-11-24 14:45:24",
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
  const [salesChannel, setsalesChannel] = useState('Seleccione Una');
  useEffect(() => {
    console.log(country);
    setData(
      country === "select a country"
        ? orderList
        : orderList.filter((dt) => dt.pais === country)
    );
  }, [country]);
  const columns = [
    { title: "OpsId", field: "order_id" },
    { title: "Fecha de Orden", field: "fecha_creacion" },
    { title: "Canal de Venta", field: "canal_de_venta" },
    { title: "Tienda", field: "tienda" },
    { title: "Cliente", field: "cliente" },
    { title: "Tiende Official", field: "official_store" },
    { title: "Orden de Compra", field: "order_id" },
    { title: "Pais", field: "pais" },
    { title: "Estado De Pedido", field: "estado_delivery" },
    { title: "DTE", field: "dte" },
    { title: "Respuesta OMS", field: "role" },
    { title: "Respuesta WMS", field: "role" },
    { title: "Hub De pago", field: "estado_pago" },
    { title: "Total", field: "role" },
    { title: "Shipping", field: "valor_shipping" },
    { title: "Estado Fulfilment", field: "estado_oc" },
    { title: "Pickeador", field: "comprador" },
    { title: "Jefe ops", field: "comprador" },
    { title: "Hub Fulfilment", field: "comprador" },
    { title: "Courier", field: "comprador" },
    { title: "Shipping Id", field: "comprador" },
    { title: "Butos/Etiquettas", field: "comprador" },
    { title: "Estado Courier", field: "comprador" },
    { title: "Cliente", field: "comprador" },
    { title: "NPS", field: "comprador" },
    { title: "Reviews", field: "comprador" },
  ];

  const handleCountryChange = (event) => {
    setcountry(event.target.value);
  };

  const handleSalesChannelChange = (event)=>{
      setsalesChannel(event.target.value);
  }

  return (
    <div className="App">
      <h1>Tu Tienda</h1>
      <label htmlFor='select-country'><h5>Pais</h5></label>
      <Select
        labelId="select-country"
        id="select-country"
        style={{ width: 100 }}
        value={country}
        label="Country"
        onChange={handleCountryChange}
      >
        {/* {data.map((e, key) => {
          return (
            <MenuItem key={key} value={e.value}>
              {e.pais}
            </MenuItem>
          );
        })} */}
        <MenuItem value={"Select a country"}>
          <em>Select a country</em>
        </MenuItem>
        <MenuItem value={"Chile"}>Chile</MenuItem>
        <MenuItem value={"Mexico"}>Mexico</MenuItem>
        <MenuItem value={"Peru"}>Peru</MenuItem>
        <MenuItem value={"Colombia"}>Colombia</MenuItem>
      </Select>
      <label htmlFor='select-canal'><h5>Canal De Venta</h5></label>
      <Select
        labelId="select-canal"
        id="select-date"
        style={{ width: 100 }}
        value={salesChannel}
        label="select-canal"
        onChange={handleSalesChannelChange}
      >
        {data.map((e, key) => {
          return (
            <MenuItem key={key} value={e.canal_de_venta}>
              {e.canal_de_venta}
            </MenuItem>
          );
        })}
        {/* <MenuItem value={"Select a country"}>
          <em>Select a country</em>
        </MenuItem>
        <MenuItem value={"Chile"}>Chile</MenuItem>
        <MenuItem value={"Mexico"}>Mexico</MenuItem>
        <MenuItem value={"Peru"}>Peru</MenuItem>
        <MenuItem value={"Colombia"}>Colombia</MenuItem> */}
      </Select>
      <MaterialTable
        title="Instance Table"
        icons={tableIcons}
        data={data}
        columns={columns}
        options={{ columnsButton: true, sorting: true }}
      />

    </div>
  );
};

export default MtdiTable;
