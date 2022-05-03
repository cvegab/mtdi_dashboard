import MaterialTable from 'material-table'
import React, { forwardRef } from 'react'
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


const BallotDetailTable = () => {


    const data = [
        {
          nombre: 'En nombre ponle una descripción más grande a ver qué tal queda porfa vale',
          SKU: '2353252',
          EAN: 'SDkf983k',
          cantidad: '5'

        }
      ]
      const columns = [
              {
              title: "Nombre",
              field: "nombre",
              width: "13%",
              headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
               
              },
            },
            {
              title: "SKU",
              field: "SKU",
              width: "13%",
        
              headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            },

            {
              title: "Ean",
              field: "EAN",
              width: "13%",
        
              headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
              },
            },
            {
              title: "Cantidad",
              field: "cantidad",
              width: "13%",
        
              headerStyle: {
                backgroundColor: "#1D308E",
                color: "#FFF",
                fontSize: "12px",
                
              },
    
            },
      
      ]
      
      
      
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
                  data={data}
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
                                <span> No hay información disponible.</span>
                              </p>
                            </div>
                          ),
                        },
                        toolbar: {
                          searchTooltip: "Buscar cuenta específica",
                          searchPlaceholder: "Buscar",
                          showColumnsTitle: "Mostrar opciones de columnas",
                          addRemoveColumns: "Agregar o Eliminar Columnas",
                        },
                        pagination: {
                          labelRowsSelect: "líneas",
                          labelDisplayedRows: "{from}-{to} cuentas de {count}",
                          firstTooltip: "Ir a la primera página",
                          previousTooltip: "Página anterior",
                          nextTooltip: "Próxima página",
                          lastTooltip: "Ir a la última página",
                        },
                      }}
                  
              />
              </div>
      
      
          </div>
          
      
        )
      }
      

export default BallotDetailTable