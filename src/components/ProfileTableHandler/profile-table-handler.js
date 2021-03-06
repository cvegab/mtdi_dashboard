import React, { useState, useRef, useEffect } from "react";
import MaterialTable from "material-table";
import SplashScreen from "components/UI/splash-screen";
import "./profile-table.css";
// import '../ClientsTable/ClientsTable.css';
import {
  Button,
  Container,
  Modal,
  ModalHeader,
  Form,
  FormGroup,
  // FormCheck,
} from "reactstrap";
import {
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  ModalBody,
} from "react-bootstrap";
// import { Form, FormGroup } from 'reactstrap'
import editProfile from "../../assets/img/edit-profile.png";
import deleteProfile from "../../assets/img/delete-profile.png";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import { forwardRef } from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import RoomIcon from "@material-ui/icons/Room";
import SaveAlt from "@material-ui/icons/SaveAlt";
import NewUserProfileModal from "components/NewUserProfileModal/new-user-profile-modal";
import DeleteProfileModal from "deleteProfileModal/delete-profile-modal";
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
  const [isLoading, setisLoading] = useState(false);
  const [tableProfileData, settableProfileData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  useEffect(() => {
    fetchProfileDetails();
  }, []);
  const fetchProfileDetails = async () => {
    let accessToken = localStorage.getItem("Token");
    let bearerToken = `Bearer ${accessToken}`;
    const userEmail=localStorage.getItem("dtm");
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiMjAyMi0wNy0wMVQxNjoyMDowNy43MjdaIiwidXNlciI6eyJfaWQiOiI2MWMxZjQ1MzZmNDg0MDM1YjYyNzQ4ZDciLCJDaXR5IjoiU2FudGlhZ28iLCJlbWFpbCI6InNvZmlhdmF0YXJAY2hhbWJhcy5jbCIsImZpcnN0X25hbWUiOiJTb2bDrWEiLCJsYXN0X25hbWUiOiIgIiwiY29uZmlnIjp7InNob3dUdXRvcmlhbCI6ZmFsc2V9LCJwcm9maWxlIjoxLCJwYXNzd29yZF9lbmFibGVkIjp0cnVlLCJzdG9yZXMiOlsxLDMsMiw0LDI4LDE1LDksNSwyNiw2LDI0LDI5LDgsNywxMSwxMCwxMiwyMywxNywxMywyMSwxNiwxNCwxOCwyMCwxOSwyNSwyN10sImNvdW50cmllcyI6WzEsMiwzLDRdLCJkYXRlX21vZGlmaWVkIjoiMjAyMi0wNi0xMVQwMjo0MToxNS41NDdaIiwiZW5hYmxlZCI6dHJ1ZSwibW9kaWZpZWRfYnkiOiJzb2ZpYXZhdGFyQGNoYW1iYXMuY2wifSwiaWF0IjoxNjU2NjkyNDA3fQ.y2ICkNxcxCeApEpT_vOUR8G5K3vA7wKssuN1HS-EqYU"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/users?user=sofiavatar@chambas.cl`,
        requestOptions
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      settableProfileData(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addProfileDetails = () => {
    setShowModal(true);
  };
  const editModalHandler = () => {
    setshowEditProfileModal(true);
  };
  const showDeleteModalHandler = () => {
    setshowDeleteModal(true);
  };
  const hideDeleteModalHandler = () => {
    setshowDeleteModal(false);
  };
  const columns = [
    {
      title: "Id",
      field: "_id",
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
      field: "first_name",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Correo",
      field: "email",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tipo de Usuario",
      field: "profile",
      width: "13%",
      render: (rowData) => {
        if (rowData != undefined) {
          if (rowData.profile === 1) {
            return <div>Administrador</div>;
          }
          if (rowData.profile === 2) {
            return <div>KAM</div>;
          }
          if (rowData.profile === 3) {
            return <div>Cliente</div>;
          }
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Activo",
      field: "enabled",
      width: "13%",
      render: (rowData) => {
        return (
          <div>
            <FormGroup>
              <FormCheck
                style={{ width: "5em", height: "3em" }}
                type="switch"
                id="custom-switch"
                checked={rowData.enabled}
              />
            </FormGroup>
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
              {/* <span>
                <img src={deleteProfile} onClick={showDeleteModalHandler} />
              </span> */}
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
    
    {isLoading && <SplashScreen></SplashScreen>}
      {showDeleteModal && (
        <DeleteProfileModal
          onhideModal={hideDeleteModalHandler}
          profileInfo={profileInfo}
        ></DeleteProfileModal>
      )}

      {showEditProfileModal && (
        <Modal isOpen={showEditProfileModal}>
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
                onClick={() => setshowEditProfileModal(false)}
              >
                x
              </button>
            </div>
          </ModalHeader>

          <NewUserProfileModal
            flag={1}
            profileInfo={profileInfo}
          ></NewUserProfileModal>
        </Modal>
      )}

      {/* // <EditProfileModal
        //   profileInfo={profileInfo}
        //   onhideModal={HideeditModalHandler}
        // ></EditProfileModal> */}

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
          data={tableProfileData}
          columns={columns}
          options={{
            columnsButton: true,
            sorting: true,
            search: true,
            exportButton: true,
            tableLayout: "fixed",
          }}
          style={{ marginLeft: "1em", marginTop: "2em" }}
        />
      </Container>

      {showModal && !showEditProfileModal && (
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

          <NewUserProfileModal flag={0} profileInfo=""></NewUserProfileModal>
        </Modal>
      )}
    </>
  );
};

export default ProfileTableHandler;
