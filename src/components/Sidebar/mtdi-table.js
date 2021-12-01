import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table'

const orderList = [
  {
      "id_mtdi": "ml619e8bb5f6d955dc7455468e",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Unilever",
      "cliente": "Unilever",
      "order_id": 5043399300,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:45:24",
      "shipping_id": 40993109945,
      "valor_shipping": 2443,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 7662,
      "comprador": "IVISPATIO",
      "hub": "redcompra",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Unilever",
      "tipo_envio": "cross_docking",
      "id_mpago": 18378018289,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e8aff4bcbf54da2960a96",
      "canal_de_venta": "Mercado Libre",
      "tienda": "ELITE PROFESSIONAL",
      "cliente": "ELITE PROFESSIONAL",
      "order_id": 5043355576,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:33:10",
      "shipping_id": 40993074958,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 133980,
      "comprador": "SUPERFIL CHILE",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Elite Professional",
      "tipo_envio": "fulfillment",
      "id_mpago": 18377774274,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e8aff5b8efcacad397d73",
      "canal_de_venta": "Mercado Libre",
      "tienda": "ELITE PROFESSIONAL",
      "cliente": "ELITE PROFESSIONAL",
      "order_id": 5043361057,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:32:41",
      "shipping_id": 40993074966,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 15490,
      "comprador": "SUPERFIL CHILE",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Elite Professional",
      "tipo_envio": "cross_docking",
      "id_mpago": 18377751629,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e8b00e3823d3ad5f41c08",
      "canal_de_venta": "Mercado Libre",
      "tienda": "ELITE PROFESSIONAL",
      "cliente": "ELITE PROFESSIONAL",
      "order_id": 5043343674,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:27:19",
      "shipping_id": 40993062785,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 26190,
      "comprador": "CRORTEGA1",
      "hub": "master",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Elite Professional",
      "tipo_envio": "self_service",
      "id_mpago": 18377638337,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e8524ae50e1c50b6fcf1a",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Softys",
      "cliente": "Softys",
      "order_id": 5043328587,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:22:58",
      "shipping_id": 40993050395,
      "valor_shipping": 0,
      "estado_pago": "",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 6590,
      "comprador": "DRAGERT",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Babysec",
      "tipo_envio": "fulfillment",
      "id_mpago": "",
      "status_detail": ""
  },
  {
      "id_mtdi": "ml619e88308e36b7c74eca91e6",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Unilever",
      "cliente": "Unilever",
      "order_id": 5043322020,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:18:49",
      "shipping_id": 40993039564,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 1890,
      "comprador": "ACRIVERAC",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Unilever",
      "tipo_envio": "fulfillment",
      "id_mpago": 18377467510,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e85251aa98aa1ae4d0c2c",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Softys",
      "cliente": "Softys",
      "order_id": 5043290850,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:11:04",
      "shipping_id": 40993018959,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 9570,
      "comprador": "MARCELABERNARDAARAYAMERCADO",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Softys",
      "tipo_envio": "fulfillment",
      "id_mpago": 18377320339,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e852508fd29c7ea07b1d1",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Softys",
      "cliente": "Softys",
      "order_id": 5043294001,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:09:30",
      "shipping_id": 40993015507,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 3600,
      "comprador": "LOPA7655100",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Elite",
      "tipo_envio": "fulfillment",
      "id_mpago": 18377282832,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "ml619e88310dd92f36555d904d",
      "canal_de_venta": "Mercado Libre",
      "tienda": "Unilever",
      "cliente": "Unilever",
      "order_id": 5043284035,
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 14:05:44",
      "shipping_id": 40993005636,
      "valor_shipping": 0,
      "estado_pago": "approved",
      "estado_oc": "paid",
      "estado_delivery": "",
      "precio_sin_shipping": 2490,
      "comprador": "PALO265445",
      "hub": "account_money",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "Unilever",
      "tipo_envio": "fulfillment",
      "id_mpago": 18377205880,
      "status_detail": "accredited"
  },
  {
      "id_mtdi": "wo619e6fd7ceb34c0ebe9c2525",
      "canal_de_venta": "Woocommerce",
      "tienda": "I Am Not Plastic",
      "cliente": "I Am Not Plastic",
      "order_id": "3578",
      "pais": "Chile",
      "fecha_creacion": "2021-11-24 13:44:28",
      "valor_shipping": "0",
      "estado_pago": "",
      "estado_oc": "processing",
      "estado_delivery": "",
      "precio_sin_shipping": 17460,
      "comprador": "Silvana Laissle Casas del Valle",
      "hub": "Transbank Webpay Plus",
      "rut": "",
      "dte": "",
      "dte_exist": "disabled",
      "official_store": "",
      "tipo_envio": "",
      "id_mpago": "",
      "status_detail": ""
  },
  {
    "id_mtdi": "ml619e8aff4bcbf54da2960a96",
    "canal_de_venta": "Mercado Libre",
    "tienda": "ELITE PROFESSIONAL",
    "cliente": "ELITE PROFESSIONAL",
    "order_id": 5043355576,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:33:10",
    "shipping_id": 40993074958,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 133980,
    "comprador": "SUPERFIL CHILE",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Elite Professional",
    "tipo_envio": "fulfillment",
    "id_mpago": 18377774274,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e8aff5b8efcacad397d73",
    "canal_de_venta": "Mercado Libre",
    "tienda": "ELITE PROFESSIONAL",
    "cliente": "ELITE PROFESSIONAL",
    "order_id": 5043361057,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:32:41",
    "shipping_id": 40993074966,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 15490,
    "comprador": "SUPERFIL CHILE",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Elite Professional",
    "tipo_envio": "cross_docking",
    "id_mpago": 18377751629,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e8b00e3823d3ad5f41c08",
    "canal_de_venta": "Mercado Libre",
    "tienda": "ELITE PROFESSIONAL",
    "cliente": "ELITE PROFESSIONAL",
    "order_id": 5043343674,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:27:19",
    "shipping_id": 40993062785,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 26190,
    "comprador": "CRORTEGA1",
    "hub": "master",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Elite Professional",
    "tipo_envio": "self_service",
    "id_mpago": 18377638337,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e8524ae50e1c50b6fcf1a",
    "canal_de_venta": "Mercado Libre",
    "tienda": "Softys",
    "cliente": "Softys",
    "order_id": 5043328587,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:22:58",
    "shipping_id": 40993050395,
    "valor_shipping": 0,
    "estado_pago": "",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 6590,
    "comprador": "DRAGERT",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Babysec",
    "tipo_envio": "fulfillment",
    "id_mpago": "",
    "status_detail": ""
},
{
    "id_mtdi": "ml619e88308e36b7c74eca91e6",
    "canal_de_venta": "Mercado Libre",
    "tienda": "Unilever",
    "cliente": "Unilever",
    "order_id": 5043322020,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:18:49",
    "shipping_id": 40993039564,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 1890,
    "comprador": "ACRIVERAC",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Unilever",
    "tipo_envio": "fulfillment",
    "id_mpago": 18377467510,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e85251aa98aa1ae4d0c2c",
    "canal_de_venta": "Mercado Libre",
    "tienda": "Softys",
    "cliente": "Softys",
    "order_id": 5043290850,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:11:04",
    "shipping_id": 40993018959,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 9570,
    "comprador": "MARCELABERNARDAARAYAMERCADO",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Softys",
    "tipo_envio": "fulfillment",
    "id_mpago": 18377320339,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e852508fd29c7ea07b1d1",
    "canal_de_venta": "Mercado Libre",
    "tienda": "Softys",
    "cliente": "Softys",
    "order_id": 5043294001,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:09:30",
    "shipping_id": 40993015507,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 3600,
    "comprador": "LOPA7655100",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Elite",
    "tipo_envio": "fulfillment",
    "id_mpago": 18377282832,
    "status_detail": "accredited"
},
{
    "id_mtdi": "ml619e88310dd92f36555d904d",
    "canal_de_venta": "Mercado Libre",
    "tienda": "Unilever",
    "cliente": "Unilever",
    "order_id": 5043284035,
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 14:05:44",
    "shipping_id": 40993005636,
    "valor_shipping": 0,
    "estado_pago": "approved",
    "estado_oc": "paid",
    "estado_delivery": "",
    "precio_sin_shipping": 2490,
    "comprador": "PALO265445",
    "hub": "account_money",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "Unilever",
    "tipo_envio": "fulfillment",
    "id_mpago": 18377205880,
    "status_detail": "accredited"
},
{
    "id_mtdi": "wo619e6fd7ceb34c0ebe9c2525",
    "canal_de_venta": "Woocommerce",
    "tienda": "I Am Not Plastic",
    "cliente": "I Am Not Plastic",
    "order_id": "3578",
    "pais": "Chile",
    "fecha_creacion": "2021-11-24 13:44:28",
    "valor_shipping": "0",
    "estado_pago": "",
    "estado_oc": "processing",
    "estado_delivery": "",
    "precio_sin_shipping": 17460,
    "comprador": "Silvana Laissle Casas del Valle",
    "hub": "Transbank Webpay Plus",
    "rut": "",
    "dte": "",
    "dte_exist": "disabled",
    "official_store": "",
    "tipo_envio": "",
    "id_mpago": "",
    "status_detail": ""
}];

const MtdiTable = ()=> {

  const [data, setData] = useState(orderList)
  const columns = [
    { title: "OpsId", field: "order_id", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px', borderRadius:'20px 0px 0px 20px'}},
    { title: "Fecha de Orden", field: "fecha_creacion", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Canal de Venta", field: "canal_de_venta", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} }, 
    { title: "Tienda", field: 'tienda', headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Cliente", field: "cliente", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Tienda Oficial", field: "official_store", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Orden de Compra", field: "order_id", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Pais", field: "pais", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Estado De Pedido", field: "estado_delivery", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "DTE", field: "dte", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Respuesta OMS", field: "role", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Respuesta WMS", field: "role", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Hub De pago", field: "estado_pago", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Total", field: "role", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Shipping", field: "valor_shipping",headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Estado Fulfilment", field: "estado_oc", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Pickeador", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Jefe ops", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Hub Fulfilment", field: "comprador",headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Courier", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Shipping Id", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Butos/Etiquettas", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'} },
    { title: "Estado Courier", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Cliente", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "NPS", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', fontSize: '12px'}},
    { title: "Reviews", field: "comprador", headerStyle: {backgroundColor: '#1D308E', color: '#FFF', borderRadius: '0px 20px 20px 0px', fontSize: '12px'}},


  ] 
 

  return (
    <div className="App">
      {/* <h1 align="center">React-App</h1>
      <h4 align='center'>Material Table</h4> */}
      <br/>
      <br/>
      <br/>
      <MaterialTable
      
        title=""
        data={data}
        columns={columns}
        // options={{columnsButton:false}}
      />
    </div>
  );
}

export default MtdiTable;
