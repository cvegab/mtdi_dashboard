import React, { useState} from 'react';
import MaterialTable from "material-table";
// import '../ClientsTable/ClientsTable.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import noIcon from "../../assets/img/no.png";
import greyIcon from "../../assets/img/greyIcon.png";
import editProfile from "../../assets/img/edit-profile.png";
import deleteProfile from "../../assets/img/delete-profile.png";
const data =[
    { id: 1, name: "Pedro Vidal", mail: "pedrovidal@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 2, name: "Rosario Garcia", mail: "rgarcia@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 3, name: "Raimundo Silva", mail: "rsl@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Desactivado"},
    { id: 4, name: "Camila Gonzalez", mail: "cammigonza@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 5, name: "Valeria Jimenez", mail: "vvjimenezl@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Desactivado"},
    { id: 6, name: "Claudio Figueroa", mail: "cefigueroa@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 7, name: "Camilo Vasquez", mail: "ca.vasquez@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
  ] 
  import ArrowDownward from "@material-ui/icons/ArrowDownward";
  import ViewColumn from "@material-ui/icons/ViewColumn";
  import Search from "@material-ui/icons/Search";
  import FirstPage from "@material-ui/icons/FirstPage";
  import LastPage from "@material-ui/icons/LastPage";
  import { forwardRef } from "react";
  import ChevronLeft from "@material-ui/icons/ChevronLeft";
  import ChevronRight from "@material-ui/icons/ChevronRight";
  import RoomIcon from "@material-ui/icons/Room";
  import { Select, MenuItem } from "@material-ui/core";
  import SaveAlt from "@material-ui/icons/SaveAlt";
import { NoEncryption } from '@material-ui/icons';
// import Switch from '@mui/material/Switch';
const ProfileTableHandler = () => {
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
  const [profileInfo, setProfileInfo] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [store, setStore] = useState('');
  const [country, setCountry] = useState('');
  const [selfservice, setSelfservice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  const editClient = () => {
    console.log(profileInfo);
    setName('Pedro')
    setMail('pedrovidal@gmail.com')
    setStore('Mercadolibre')
    setCountry('Chile')
    setSelfservice('Activado')
    setShowModal(true)
    setIsNewUser(false)
    }

    const addClient = () => {

    setShowModal(true)
    setName('')
    setMail('')
    setStore('')
    setCountry('')
    setSelfservice('')
    setIsNewUser(true)

    }
    const columns = [
        {
          title: "Id",
          field: "id",
          width: "13%",
          headerStyle: {
            backgroundColor: "#1D308E",
            color: "#FFF",
            fontSize: "12px",
            borderRadius: "20px 0px 0px 20px",
          },
        },
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
          title: "Correo",
          field: "mail",
          width: "13%",
          headerStyle: {
            backgroundColor: "#1D308E",
            color: "#FFF",
            fontSize: "12px",
          },
        },
        {
            title: "Tipo de Usuario",
            field: "store",
            width: "13%",
            headerStyle: {
              backgroundColor: "#1D308E",
              color: "#FFF",
              fontSize: "12px",
            },
          },
          {
            title: "Activo",
            field: "store",
            width: "13%",
            render: (rowData) => {
                return (
                    <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked/>
                    <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
                  </div>
                  );
              },
            headerStyle: {
              backgroundColor: "#1D308E",
              color: "#FFF",
              fontSize: "12px",
            },
          },
          {
            title: "",
            field: "",
            width: "13%",
          sorting: false,
            render: (rowData)=>{
                if (rowData != undefined) {
                 
                      return (
                        <div>
                         
                          <span style={{ marginLeft: "4px" }} >
                            <img src={editProfile} onClick={editClient} />
                          </span>
                          &nbsp;
                          <span>
                            <img src={deleteProfile} />
                          </span>
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
    ];
    return (
    <>
    <Container>
      <br/>
        <Button color="primary" onClick={addClient} style={{float:'right',padding:'16px'}}> Crear nuevo Perfil  </Button>
       
      <br/><br/>
      <MaterialTable   
               onRowClick={(evt, selectedRow) => setProfileInfo(selectedRow)}
                icons={tableIcons}
                title=""
                data={data}
                columns={columns}
                options={{
                  columnsButton: true,
                  sorting: true,
                  search: true,
                  exportButton: true,
                  tableLayout: "fixed",
                }}
                style={{ marginLeft: "1em", marginTop: "2em" }}
                // actions={[
                //     {
                //       icon: editProfile,
                //       tooltip: 'Save User',
                //       onClick: (event, rowData) => {
                //         // Do save operation
                //       }
                //     }
                //   ]}
              />
      
    </Container>
      
      <Modal isOpen={showModal}>
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
               onClick={()=>setShowModal(false)}
              >
                x
              </button> 
          </div>
        </ModalHeader>

        <ModalBody>
          <h3 
            style={{ 
              fontWeight: "700", 
              size: "24px", 
              textAlign: "center" 
            }}
          >
            Crear nuevo usuario
          </h3>
                
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="name" type="text" value={name} onChange={e=>setName(e.target.value)} />
            <label>{name}</label>
          </FormGroup>

          <FormGroup>
            <label>Correo electronico:</label>
            <input className="form-control" name="mail" type="text" value={mail} onChange={e=>setMail(e.target.value)}  />
          </FormGroup>
          
          <FormGroup>
            <label>Tienda:</label>
            <input className="form-control" name="store" type="text" value={store} onChange={e=>setStore(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <label>Pais:</label>
            <input className="form-control" name="country" type="text" value={country} onChange={e=>setCountry(e.target.value)}  />
          </FormGroup>

          <FormGroup>
            <label>Selfservice:</label>
            <input className="form-control" name="selfservice" type="text" value={selfservice} onChange={e=>setSelfservice(e.target.value)}  />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        { 
            isNewUser ? (<Button color="primary">Crear usuario</Button>) : (<Button color="primary">Actualizar usuario </Button>)
        }
         
        </ModalFooter>
      </Modal>

      
    </>
  )
}

export default ProfileTableHandler;