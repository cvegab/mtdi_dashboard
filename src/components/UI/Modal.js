import { Fragment } from "react";
import classes from "./Modal.module.css";
//import { Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {/* <header>
    <p style={{color:"black"}}>hello</p>
        <h1 style={{position:'relative', justifyContent: 'right', color: "black" }} onClick={props.close}>
          X
        </h1>
    </header> */}
      <ModalHeader>
        {/* <img src={vector} alt='icon'  style={{textAlign:'right'}} /> */}
        <h2
          style={{ color: "black" }}
          style={{ textAlign: "right", color: "black" }}
          onClick={props.close}
        >
          x
        </h2>
      </ModalHeader>

      <div className={classes.hea}>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop close={props.onhideModal} />,
      <ModalOverlay close={props.onhideModal}>{props.children}</ModalOverlay>,
    </Fragment>
  );
};

export default Modal;
