import { Fragment } from "react";
import classes from "./horizontal-modal.module.css";

import ModalHeader from "react-bootstrap/ModalHeader";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.close} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} >
      
     <header>
        <h2  style={{
            textAlign: "right",
            color: "black",
            fontSize: "16px",
            cursor: "pointer",
          }}onClick={props.close}
        >
   
          <span 
          >x</span>
        </h2>
       
        </header>
<body>

        <p>{props.children}</p>
    
</body>
     
    </div>
  );
};

const HorizontalModal = (props) => {
  return (
    <Fragment>
      <Backdrop close={props.onhideModal} />,
      <ModalOverlay close={props.onhideModal}>{props.children}</ModalOverlay>,
    </Fragment>
  );
};

export default HorizontalModal;
