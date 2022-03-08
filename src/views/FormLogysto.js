import React, { Fragment, useState, useEffect, useRef } from "react";
import sentEmail from "../assets/img/emailSent.png";
import addProductsFailed from "../assets/img/adding-products-failed.png";
import ImageError from "../assets/img/error-image.png";
import ImageOrderPlaced from "../assets/img/order-placed.png";
import { Select, MenuItem } from "@material-ui/core";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { Spinner } from "reactstrap";
import RoomIcon from "@material-ui/icons/Room";
import ReactBSAlert from "react-bootstrap-sweetalert";
import noDataImage from "../assets/img/noDataImageBlue.png";
import  * as XLSX from "xlsx";
// import sentEmail from "../../assets/img/emailSent.png";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  CardHeader,
  ModalHeader,
} from "reactstrap";
import Modal from "components/UI/Modal";

const Form = (props) => {
  const [file, setFile] = useState({});
  const [bttnEnable, setbttnEnable] = useState(true);
  const nameInput = useRef("");
  const directionInput = useRef("");
  const instructionInput = useRef("");
  const codeInput = useRef("");
  const dteInput = useRef("");
  const phoneInput = useRef("");
  const mailInput = useRef("");
  const maxheightInput = useRef("");
  const maxlengthInput = useRef("");
  const maxwidthinput = useRef("");

  
const uploadFile = (e) => {
  e.preventDefault();
  if(e.target.files){
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      console.log(workbook);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      setFile(worksheet);
      setbttnEnable(false);
      
    };
    reader.readAsBinaryString(e.target.files[0]);
  };
};

  const sendFalabellaDataHandler = () => {
    // console.log(file);
    if (validateData('Falabella')) {
      const jsonFather = {
        "id": 123,
        "channel": 'Falabella',
      }
      const json = XLSX.utils.sheet_to_json(file);
      // console.log(json);
      jsonFather.data = json;
      console.log(jsonFather);
    } else {
      alert('El archivo no corresponde a un archivo Falabella');
    }
  };

  const sendRappiDataHandler = () => {
    if (validateData('Rappi')) {
      const jsonFather = {
        "id": 123,
        "channel": 'Rappi',
      } 
      const json = XLSX.utils.sheet_to_json(file);
      // console.log(json);
      jsonFather.data = json;
      console.log(jsonFather);
    } else {
      alert('El archivo no corresponde a un archivo Rappi');
    }
  };

  const sendCornershopDataHandler = () => {
    if (validateData('Cornershop')) {
      const jsonFather = {
        "id":123,
        "channel": 'Cornershop',
      }
      const json = XLSX.utils.sheet_to_json(file);
      // console.log(json);
      jsonFather.data = json;
      console.log(jsonFather);
    } else {
      alert ('El archivo no corresponde a un archivo Corneershop');
    }
  }

  const validateData = (channel) => {
    if (channel === 'Falabella' && file["A1"].v === 'FECHA COMPRA') {
      return true; 
    } 
    if (channel === 'Rappi' && file["A1"].v === 'state') {
      return true;
    }
    if (channel == 'Cornershop' && file["A1"].v === '# Order') {
      return true;
    }
    return false;

  };


  return (
    <Fragment>
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
          Panel: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "1em",
          }}
        >
          Ingreso OC
        </p>

          <div className="card text-center">
            <div className="card-header">
              <h5 className="card-title">
                <b>Cargar Archivo</b>
              </h5>
            </div>
            <div className="card-body">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={ uploadFile }
                />
              </div>
            </div>

            <div className="card-footer">
              <Button
                className="btn btn-primary"
                onClick={sendFalabellaDataHandler}
                disabled={bttnEnable}
              >
                Falabella
              </Button>
              <Button
                className="btn btn-primary"
                onClick={sendRappiDataHandler}
                disabled={bttnEnable}
              >
                Rappi
              </Button>
              <Button
                className="btn btn-primary"
                onClick={sendCornershopDataHandler}
                disabled={bttnEnable}
              >
                Cornershop
              </Button>
              </div>

            </div>
            
      </div>
        
      
    </Fragment>
  );
};
export default Form;
