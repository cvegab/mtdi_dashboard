import React, { useState, useRef, useEffect } from "react";
import MaterialTable from "material-table";

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
import { FormCheck, FormControl, FormLabel, FormSelect, ModalBody } from 'react-bootstrap'
// import { Form, FormGroup } from 'reactstrap'
import noIcon from "../../assets/img/no.png";
import greyIcon from "../../assets/img/greyIcon.png";
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
import { Select, MenuItem } from "@material-ui/core";
import SaveAlt from "@material-ui/icons/SaveAlt";
import { NoEncryption } from "@material-ui/icons";
import EditProfileModal from "./edit-profile-modal";
import NewUserProfileModal from "components/NewUserProfileModal/new-user-profile-modal";
import DeleteProfileModal from "deleteProfileModal/delete-profile-modal";
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
  const [tableProfileData, settableProfileData] = useState([]);
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [store, setStore] = useState("");
  // const [country, setCountry] = useState("");
  // const [selfservice, setSelfservice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  // const [isNewUser, setIsNewUser] = useState(true);
  // const nameRef = useRef('');
  // const emailRef = useRef('');
  // const userType = useRef(1);
  useEffect(() => {
    fetchProfileDetails();
  }, []);
  const fetchProfileDetails = async () => {
    try {
      const response = await fetch(
        "https://profile-table-default-rtdb.firebaseio.com/profile.json"
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].firts_name,
          mail: data[key].email,
          profile: data[key].profile,
          countries: data[key].countries,
        });
      }
      console.log(loadedData);
      settableProfileData(loadedData);
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
      field: "profile",
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
          <div >
            <FormGroup>
                    <FormCheck style={{width:'5em',height:'3em'}}
                        type="switch"
                        id="custom-switch"
                      // checked={true}
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
              <span>
                <img src={deleteProfile} onClick={showDeleteModalHandler} />
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
      {showDeleteModal && (
        <DeleteProfileModal
          onhideModal={hideDeleteModalHandler}
          profileInfo={profileInfo}
        ></DeleteProfileModal>
      )}

      {showEditProfileModal && 
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

     <NewUserProfileModal flag={1} profileInfo={profileInfo}></NewUserProfileModal>
   </Modal>
        
      }

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

          <NewUserProfileModal flag={0} profileInfo=''></NewUserProfileModal>
        </Modal>
      )}
    </>
  );
};

export default ProfileTableHandler;
