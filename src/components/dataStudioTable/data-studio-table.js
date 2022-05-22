import React, { useState, useRef, useEffect } from "react";
import MaterialTable from "material-table";
import SplashScreen from "components/UI/splash-screen";
import "./data-studio-table.css";
import {
  Button,
  Container,
  Modal,
  ModalHeader,
} from "reactstrap";

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
import NewDataStudioModal from "components/NewDataStudioModal/new-data-studio-modal";
import EditDataStudioModal from "components/EditDataStudioModal/EditDataStudioModal";
import DeleteProfileModal from "deleteProfileModal/delete-profile-modal";

const DataStudioTableHandler = () => {
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
  const [dataTiendaInfo, setDataTiendaInfo] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [tableDataStudio, settableDataStudio] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    fetchProfileDetails();
  }, []);
  const fetchProfileDetails = async () => {
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store?id=0",
        requestOptions
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      console.log(data);
      settableDataStudio(data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewDataStudio = () => {
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
      title: "Tienda",
      field: "tienda",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
        borderRadius: "20px 0px 0px 20px",
      },
      
    },
    {
      title: "Link",
      field: "datastudio_iframe",
      width: "13%",

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

          <EditDataStudioModal
            
            dataTiendaInfo={dataTiendaInfo}
          ></EditDataStudioModal>
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
          onClick={addNewDataStudio}
          style={{ float: "right", padding: "16px" }}
        >
          {" "}
          Integrar nuevo BI{" "}
        </Button>

        <br />
        <br />
        <MaterialTable
          onRowClick={(evt, selectedRow) => setDataTiendaInfo(selectedRow)}
          icons={tableIcons}
          title=""
          data={tableDataStudio}
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

          <NewDataStudioModal flag={0} dataTiendaInfo=""></NewDataStudioModal>
        </Modal>
      )}
    </>
  );
};

export default DataStudioTableHandler;
