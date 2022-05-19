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
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/global.css";
const XLSX = require("xlsx");
import noDataImage from "../../assets/img/noDataImageBlue.png";
import SaveAlt from "@material-ui/icons/SaveAlt";
import { Button, Modal, ModalHeader, FormGroup } from "reactstrap";
import iconNo from "../../assets/img/icons/iconNo.png";
import iconGoto from "../../assets/img/icons/iconOpen.png";
import iconEdit from "../../assets/img/icons/iconEdit.png";
import iconRemoveAccount from "../../assets/img/icons/iconRemoveAccount.png";
import {  FormCheck } from "react-bootstrap";
import NewEntrepriseProfileModal from "components/NewEnterpriseProfileModal/NewEntrepriseProfileModal";
import EnterpriseTaxDataModal from "components/EnterpriseTaxDataModal/EnterpriseTaxDataModal";
import EnterpriseCustomizeModal from "components/EnterpriseCustomizeModal/EnterpriseCustomizeModal";
import EnterpriseCategoriesModal from "components/EnterpriseCategoriesModal/EnterpriseCategoriesModal";
import EnterpriseRemoveAccountModal from "components/EnterpriseRemoveAccountModal/EnterpriseRemoveAcctoundModal";
// import { db } from '../../util/firebase.js';
// import { collection, getDocs } from 'firebase/firestore';




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

const EnterpriseTable = () => {

const [users, setUsers] = useState([]);
// const usersCollectionRef = collection(db, "enterpriseUsers");
const [modalNewEnterprise, setModalNewEnterpise] = useState(false);
const toggle = () => setModalNewEnterpise(!modalNewEnterprise);
const [modalTaxData, setModalTaxData] = useState(false);
const toggle2 = () => setModalTaxData(!modalTaxData);
const [modalEnterpriseCustomize, setModalEnterpriseCustomize] = useState(false);
const toggle3= () => setModalEnterpriseCustomize(!modalEnterpriseCustomize); 
const [modalEnterpriseCategories, setModalEnterpriseCategories] = useState(false);
const toggle4 = () => setModalEnterpriseCategories(!modalEnterpriseCategories);
const [modalRemoveAccount, setModalRemoveAccount] = useState(false);
const toggle5 = () => setModalRemoveAccount(!modalRemoveAccount);

//  useEffect(() => {
//   const getUsers = async () => {
//     const data = await getDocs(usersCollectionRef);
    // setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
//    console.log(data);
//   };

//   getUsers();
//  }, []);

const data = [
  {
    order_id: '0001',
    corporate_name: 'Softys',
    mail: 'tv@instancelatam.com',
    country: 'Chile',
    selfservice: 'Si',
    onboarding: 'No',
    datas: 'datos',
    categories: 'datos',
    customize: 'datos',
    remove_account: 'Eliminar',
  }
]
const columns = [
        {
        title: "ID",
        field: "order_id",
        width: "13%",
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
          borderRadius: "20px 0px 0px 20px",
        },
      },
      {
        title: "Razón Social",
        field: "corporate_name",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
      },
      {
        title: "Correo Representante",
        field: "mail",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
      },
      {
        title: "País",
        field: "country",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
      },
      {
        title: "Selfservice",
        field: "selfservice",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
        render: (data) => {
      
           if (data.selfservice === "Si") {
             return <div>
             <FormGroup>
               <FormCheck
                 type="switch"
                 id="custom-switch"
                  checked
               />
             </FormGroup>
           </div>
           } 
           if (data.selfservice === "No") {
            return <div>
            <FormGroup>
              <FormCheck
                type="switch"
                id="custom-switch"
              />
            </FormGroup>
          </div>
           }
          
        }
      },
      {
        title: "Onboarding",
        field: "onboarding",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
              render: (data) => {
        if (data.onboarding === "Si") {
          return <div>&nbsp;Sí&nbsp;<img src={iconGoto} style={{marginLeft:"1em"}} width="40%" /></div>;
        }
        if (data.onboarding === "No") {
          return <div>&nbsp;No&nbsp;<img src={iconNo} style={{marginLeft:"1em"}} width="40%" /> </div>;
        }
    
      },

      }, 
      {
        title: "Datos tributarios",
        field: "general_information",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
        render: (data) => {
          if (data.datas === "datos") {
            return <button style={{border:"none", backgroundColor:"white"}}  onClick={toggle2}>&nbsp;&nbsp;<img src={iconEdit} style={{marginLeft:"1em"}} width="50%" /></button>;
          }
          if (data.datas === "No") {
            return <div>&nbsp;&nbsp;<img src={iconNo} style={{marginLeft:"1em"}} width="40%" /> </div>;
          }
      
        },
      },
      {
        title: "Personalización Empresa",
        field: "customize",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
        render: (data) => {
          {
            return <button style={{border:"none", backgroundColor:"white"}}  onClick={toggle3}>&nbsp;&nbsp;<img src={iconEdit} style={{marginLeft:"1em"}} width="50%" /></button>;
          }
      
        },
      },
      {
        title: "Categorías de tu negocio",
        field: "categories",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
        render: (data) => {
          if (data.categories === "datos") {
            return <button style={{border:"none", backgroundColor:"white"}}  onClick={toggle4}>&nbsp;&nbsp;<img src={iconEdit} style={{marginLeft:"1em"}} width="50%" /></button>;
          }
          if (data.categories === "No") {
            return <div>&nbsp;&nbsp;<img src={iconNo} style={{marginLeft:"1em"}} width="40%" /> </div>;
          }
      
        },
      },
      {
        title: "Eliminar cuenta",
        field: "remove_account",
        width: "13%",
  
        headerStyle: {
          backgroundColor: "#1D308E",
          color: "#FFF",
          fontSize: "12px",
        },
      
      render: (data) => {
        if (data.remove_account === "Eliminar") {
          return <button style={{border:"none", backgroundColor:"white"}}  onClick={toggle5}>&nbsp;&nbsp;<img src={iconRemoveAccount} style={{marginLeft:"1em"}} width="50%" /></button>;
        }
        if (data.remove_account === "No") {
          return <div>&nbsp;&nbsp;<img src={iconNo} style={{marginLeft:"1em"}} width="40%" /> </div>;
        }
    
      },
      },

]



  return (
      

    <div>

{/* {users.map((user) => {
      return (
        <div>
          {""}
          <h1>Name: {user.corporate_name} </h1>
          <h1>Name: {user.country} </h1>
        </div>
      )
    })} */}
    <div style={{display:'flex', justifyContent: 'right'}}>
        <Button
            color="primary"
            style={{
                borderRadius: "22px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                letterSpacing: "1px",
                width: "250px",
                height: "60px",
                fontWeight: "600",
            }}
            onClick={toggle}
        >
              Agregar nueva Empresa
        </Button>
    </div>
    <div>
        <MaterialTable
            options={{
                    search: true,
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

        {/* MODALS */}
   
        <Modal isOpen={modalNewEnterprise} toggle={toggle}>
          <ModalHeader>
            <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
                onClick={toggle}
              >
                x
              </button> 
            </div>
          </ModalHeader>
          <NewEntrepriseProfileModal />
        </Modal>

        <Modal isOpen={modalTaxData} toggle={toggle2} size="lg">
          <ModalHeader>
            <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
                onClick={toggle2}
              >
                x
              </button> 
            </div>
          </ModalHeader>
          <EnterpriseTaxDataModal />
        </Modal>

        <Modal isOpen={modalEnterpriseCustomize} toggle={toggle3} size="lg">
          <ModalHeader>
            <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
                onClick={toggle3}
              >
                x
              </button> 
            </div>
          </ModalHeader>
          <EnterpriseCustomizeModal />
        </Modal>

        <Modal isOpen={modalEnterpriseCategories} toggle={toggle4} size="lg">
          <ModalHeader>
            <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
                onClick={toggle4}
              >
                x
              </button> 
            </div>
          </ModalHeader>
          <EnterpriseCategoriesModal />
        </Modal>

        <Modal isOpen={modalRemoveAccount} toggle={toggle5}>
          <ModalHeader>
            <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
                onClick={toggle5}
              >
                x
              </button> 
            </div>
          </ModalHeader>
          <EnterpriseRemoveAccountModal />
        </Modal>

    </div>
    

  )
}

export default EnterpriseTable