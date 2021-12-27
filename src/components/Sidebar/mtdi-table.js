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
import DatePicker from "react-datepicker";
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

const MtdiTable = (props) => {
  const [data, setData] = useState([]);

  const [country, setcountry] = useState("");
  const [buyer, setbuyer] = useState("");
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
    }
  }, [startDate]);

  const fetchOrderData = async () => {
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

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();

      setData(data);
      setisLoading(false);
      const transformedData = data.map((poke) => {
        return [poke.fecha_creacion];
      });

      setshiny(transformedData);

      setData(data);
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

      lookup: {
        "": (
          <div>
            Si &nbsp;
            <span className={classes.si}>
              <img src={SiIcon} onClick={showModalHandler.bind(this, data)} />
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
              style={{
                width: 150,
                marginLeft: "1em",
                borderRadius: "17px",
                marginBottom: "1em",
                fontSize: "12px",
              }}
              value={country}
              label="Country"
              placeholder="Seleccione un país"
              onChange={handleCountryChange}
            >
              {Array.from(new Set(data.map((obj) => obj.pais))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )}
            </Select>
          </label>

          <label>
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "11px",
                marginTOp: "3px",
              }}
            >
              Fecha
            </h5>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ width: 200, fontSize: "12px" }}
              placeholderText="dd/mm/yy"
            >
              <i
                className="nc-icon nc-layout-11"
                style={{ color: "#232A38" }}
              />
            </DatePicker>
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
              placeholder="Seleccione un canal"
              style={{ width: 150, marginLeft: "1em", fontSize: "12px" }}
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
              style={{ width: 160, fontSize: "12px" }}
              value={store}
              label="select-canal"
              placeholder="Seleccione una tienda"
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
              placeholder="Seleccione una tienda oficial"
              style={{ width: 150, fontSize: "12px" }}
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
              style={{ width: 150, marginLeft: "1em", fontSize: "12px" }}
              value={client}
              label="select-tienda-official"
              placeholder="Seleccione un cliente"
              onChange={handleClientChange}
            >
              {Array.from(new Set(data.map((obj) => obj.cliente))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )}
            </Select>
          </label>

          <Button
            className="btn-round btn-icon"
            color="primary"
            onClick={reloadTableHandler}
          >
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
          </Button>
        </Col>

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
            onRowClick={(evt, selectedRow) => setbuyer(selectedRow.comprador)}
            localization={{
              body: {
                emptyDataSourceMessage: (
                  <div>
                    <span>No records match the value</span>
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
    </React.Fragment>
  );
};

export default MtdiTable;
