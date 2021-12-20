import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import classes from "./Modal.module.css";
import Card from "./Card";
import vector from "../../assets/img/Vector.png";
//import { Modal, ModalHeader, ModalBody, ModalFooter} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  console.log(props.children);
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
      {/* <footer>
        <Button color="primary">Cancelar</Button>
      </footer> */}
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

// const Modal = (props) => {
//   return (
//     <div>
//       <div className={classes.backdrop} />
//       <Card className={classes.modal}>
//         <header className={classes.header}>
//           <h2>hello</h2>
//         </header>
//         <div className={classes.hea}>
//           <p><h2>hello shiny</h2></p>
//         </div>
//         <footer className={classes.actions}>
//          <button>okay</button>
//         </footer>
//       </Card>
//     </div>
//   );
// };

export default Modal;
