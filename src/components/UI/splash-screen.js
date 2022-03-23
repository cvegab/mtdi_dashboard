import React from "react";
import spinnerGif from "../../assets/img/spinnerLogos.gif";
import classes from './splash-screen.module.css';
const SplashScreen = (props) => {
  return (
    <React.Fragment>
        <div className={classes.backdrop}>
      <div className={classes.centered}>
          <img
            src={spinnerGif}
            style={{ marginTop: "2em" }}
            width="300"
            alt="Cargando..."
          />
          <p className={classes.message}>&nbsp;&nbsp;&nbsp;Cargando {props.message}</p>
      </div>
      </div>
    </React.Fragment>
  );
};
export default SplashScreen;
