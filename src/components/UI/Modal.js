import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Card from './Card';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  console.log(props.children);
  return (
    <div className={classes.modal}>
      <h1>My modal</h1>
      <div className={classes.hea}><h2>{props.children}</h2></div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop close={props.onhideModal} />,
      <ModalOverlay>{props.children}</ModalOverlay>,
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
