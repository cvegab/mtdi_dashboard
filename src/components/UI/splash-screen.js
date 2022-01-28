import React from "react";
import spinnerGif from "../../assets/img/spinnerLogos.gif";
import classes from './splash-screen.module.css';
const SplashScreen = () => {
  return (
    <React.Fragment>
        <div className={classes.backdrop}>
      <div className={classes.centered}>
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; */}
        {/* <div id='spinner'>
          <img
            src={spinnerGif}
            style={{ marginTop: "2em" }}
            width="200"
            alt="Cargando..."
          /> */}
          {/* <h1 style={{color: 'black'}}>hello</h1> */}
          <img
            src={spinnerGif}
            style={{ marginTop: "2em" }}
            width="300"
            alt="Cargando..."
          />
          <p className={classes.message}>&nbsp;&nbsp;&nbsp;Cargando órdenes</p>
     
          {/* <p style={{fontWeight: "bold", color: "#1D308E"}}>Cargando...</p>                   */}
         
     
      </div>
      </div>
    </React.Fragment>
  );
};
export default SplashScreen;
