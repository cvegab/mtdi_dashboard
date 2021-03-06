import MaterialTable from "material-table";
import React, { forwardRef, useState } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import RoomIcon from "@material-ui/icons/Room";
import SaveAlt from "@material-ui/icons/SaveAlt";
import noDataImage from "../../assets/img/noDataImageBlue.png";
import "../../assets/css/global.css";

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <RoomIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

const BallotDetailTable = (props) => {
  const columns = [
    {
      title: "Nombre",
      field: "name",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "SKU",
      field: "sku",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },

    {
      title: "Ean",
      field: "ean",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Cantidad",
      field: "qty",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
  ];

  return (
    <div>
      <div>
        <MaterialTable
          options={{
            search: false,
            exportButton: false,
            tableLayout: "fixed",
          }}
          title=""
          icons={tableIcons}
          columns={columns}
          data={props.productDetails.products}
          localization={{
            body: {
              emptyDataSourceMessage: (
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "20rem",
                    width: "100%",
                  }}
                >
                  <img
                    src={noDataImage}
                    style={{ marginTop: "2em" }}
                    width="160"
                    alt="noData"
                  />
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "#1D308E",
                    }}
                  >
                    {" "}
                    &nbsp;
                    <span> No hay informaci??n disponible.</span>
                  </p>
                </div>
              ),
            },
            toolbar: {
              searchTooltip: "Buscar cuenta espec??fica",
              searchPlaceholder: "Buscar",
              showColumnsTitle: "Mostrar opciones de columnas",
              addRemoveColumns: "Agregar o Eliminar Columnas",
            },
            pagination: {
              labelRowsSelect: "l??neas",
              labelDisplayedRows: "{from}-{to} productos de {count}",
              firstTooltip: "Ir a la primera p??gina",
              previousTooltip: "P??gina anterior",
              nextTooltip: "Pr??xima p??gina",
              lastTooltip: "Ir a la ??ltima p??gina",
            },
          }}
        />
      </div>
    </div>
  );
};

export default BallotDetailTable;
