import { Fragment } from "react";
import classes from "./Modal.module.css";

import ModalHeader from "react-bootstrap/ModalHeader";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <ModalHeader>
        <h2
          style={{ color: "black" }}
          style={{
            textAlign: "right",
            color: "black",
            fontSize: "16px",
            cursor: "pointer",
          }}
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
