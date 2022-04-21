import React, { useState,useRef,useEffect } from "react";
import MaterialTable from "material-table";

import "./profile-table.css";
// import '../ClientsTable/ClientsTable.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Form,
  Label,
  Col,
  Row,
  Input,
} from "reactstrap";
import noIcon from "../../assets/img/no.png";
import greyIcon from "../../assets/img/greyIcon.png";
import editProfile from "../../assets/img/edit-profile.png";
import deleteProfile from "../../assets/img/delete-profile.png";
const data = [
  {
    id: 1,
    name: "Harry Potter",
    mail: "harry@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Activado",
  },
  {
    id: 2,
    name: "Rick Sanchez",
    mail: "rsanc@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Activado",
  },
  {
    id: 3,
    name: "Bob the builder",
    mail: "bob@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Desactivado",
  },
  {
    id: 4,
    name: "Gremlin",
    mail: "greml@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Activado",
  },
  {
    id: 5,
    name: "Shrek",
    mail: "shrek@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Desactivado",
  },
  {
    id: 6,
    name: "Daenarays targareyan",
    mail: "Daena@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Activado",
  },
  {
    id: 7,
    name: "Kaleesi",
    mail: "kaleesi@gmail.com",
    store: "Mercadolibre",
    country: "Chile",
    selfservice: "Activado",
  },
];
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
import { NoEncryption } from "@material-ui/icons";
import EditProfileModal from "./edit-profile-modal";
// import Switch from '@mui/material/Switch';
const ProfileTableHandler = () => {
  const [showEditProfileModal, setshowEditProfileModal] = useState(false);
  const tableIcons = {
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
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
  const [profileInfo, setProfileInfo] = useState("");
  const [profileDetails, setprofileDetails] = useState({});
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [store, setStore] = useState("");
  // const [country, setCountry] = useState("");
  // const [selfservice, setSelfservice] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [isNewUser, setIsNewUser] = useState(true);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const userType = useRef(1);
  // useEffect(() => {
  //  addProfileHandler();
  // }, [profileDetails])
  
  //   const editClient = () => {
  //     console.log(profileInfo);
  //     setName('Pedro')
  //     setMail('pedrovidal@gmail.com')
  //     setStore('Mercadolibre')
  //     setCountry('Chile')
  //     setSelfservice('Activado')
  //     setShowModal(true)
  //     setIsNewUser(false)
  //     }


  // const addClient = () => {
  //   setShowModal(true);
  // };
  const addProfileDetails =()=>{
setShowModal(true);

  }
  // const submitProfileDetails = ()=>{
  //   const profile = {
  //     firts_name: nameRef.current.value,
  //     email: emailRef.current.value,
  //     profile: userType.current.value,
  //     countries:[1,2],
  //     stores:[1,2,3]
  //   }
  //   setprofileDetails(profile);
    
  // }
  const addProfileHandler = async () => {
    const profile = {
          firts_name: nameRef.current.value,
          email: emailRef.current.value,
          profile: userType.current.value,
          countries:[1,2],
          stores:[1,2,3]
        }
      

    try {
      const response = await fetch('https://profile-table-default-rtdb.firebaseio.com/profile.json',{
      method: 'POST',
      body: JSON.stringify(profile),
      headers:{
     'Content-Type': 'application/json'
      }
    }
  );
     
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
     
    } catch (error) {
      console.log(error);
    }
  };

  const editModalHandler = () => {
    setshowEditProfileModal(true);
  };

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
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              checked
            />
            <label class="custom-control-label" for="customSwitch1">
              Toggle this switch element
            </label>
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
      render: (rowData) => {
        if (rowData != undefined) {
          return (
            <div>
              <span style={{ marginLeft: "4px" }}>
                <img src={editProfile} onClick={editModalHandler} />
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
  const HideeditModalHandler = () => {
    setshowEditProfileModal(false);
  };
  return (
    <>
      {showEditProfileModal && (
        <EditProfileModal
          profileInfo={profileInfo}
          onhideModal={HideeditModalHandler}
        ></EditProfileModal>
      )}
      <Container>
        <br />
        <Button
          color="primary"
          onClick={addProfileDetails}
          style={{ float: "right", padding: "16px" }}
        >
          {" "}
          Crear nuevo Perfil{" "}
        </Button>

        <br />
        <br />
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
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              style={{
                background: "none",
                position: "relative",
                marginLeft: "14em",
                color: "black",
                border: "none",
              }}
              onClick={() => setShowModal(false)}
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
              textAlign: "center",
            }}
          >
            Crear nuevo usuario
          </h3>

          {/* <FormGroup>
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
          </FormGroup> */}
          <Form>
            <FormGroup>
              <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                Nombre:
              </Label>
              <input
                className="input"
                type="email"
                name="email"
                id="exampleEmail"
                style={{ fontSize: "12px" }}
                ref={nameRef}
                // placeholder="Ingresa un correo"
                // value={this.state.emailState}
                // onChange={this.handleEmailChange}
                // onBlur={this.checkEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
                Correo Electronico:
              </Label>

              <input
                className="input"
                ref={emailRef}
                // className={"input " + (this.state.error && " has-error")}
                // value={this.state.value}
                // placeholder="Escribe aquí el correo y presiona la tecla 'Enter'"
                // style={{ fontSize: "12px" }}
                // onKeyDown={this.handleKeyDown}
                // onChange={this.handleChange}
                // onPaste={this.handlePaste}
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                    Usuario
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
                    ref={userType}
                  >
                    <option selected>Selcciona un tipo de usuario</option>
                    <option value={1}>Administrador</option>
                    <option value={2}>KAM</option>
                    <option value={3}>Cliente</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                    Pais
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
                  >
                    <option selected>Selccione un pais</option>
                    <option value="1">Chile</option>
                    <option value="2">Mexico</option>
                    <option value="3">Peru</option>
                    <option value="4">Colombia</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                  Cliente
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
                  >
                    <option selected>Selccione un cliente</option>
                    <option value="1">Unilever</option>
                    <option value="2">Softys</option>
                    <option value="3">DeMaria</option>
                    <option value="4">Faber Castell</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
            <div class="text-center">
              <button
                id="bttnSubmit"
                type="submit"
                style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  color: "white",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight: "bold",
                  border: "0",
                }}
                onClick={addProfileHandler}
              >
                Crear Usuario &nbsp;
                {/* <span className="btn-label">
                  <i className="nc-icon nc-send" />
                </span> */}
              </button>
            </div>
          </Form>
        </ModalBody>
        {/* <ModalFooter>
          {isNewUser ? (
            <Button color="primary">Crear usuario</Button>
          ) : (
            <Button color="primary">Actualizar usuario </Button>
          )}
        </ModalFooter> */}
      </Modal>
    </>
  );
};

export default ProfileTableHandler;
