// import Modal from "../UI/Modal";
import classes from "./wms-modal.module.css";
import ellipse from "../../assets/img/ellipse.png";

// import errorButton from  '../../assets/img/errorSyncro.png';
// import { FormGroup, Label, Input } from "reactstrap";
import VerticalModal from "components/UI/vertical-modal";
import RadioInput from "components/UI/radio-input";
const WmsModal = (props) => {
  return (
    <VerticalModal onhideModal={props.onhideModal}>
      <p style={{ textAlign: "center", top: "100%" }}>Orden 1451</p>
      <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
        Configurar Stock
      </h3>
      <div className={classes.configure}>
        <div
          style={{
            top: "20px",
            position: "absolute",
            bottom: "45%",
            left: "1%",
            width: "100%",
          }}
        >
          <img style={{ float: "left" }} src={ellipse} />
          <p
            style={{
              paddingLeft: "40px",
              fontWeight: "500",
              size: "16px",
              fontStyle: "Medium",
              lineHeight: "19px",
              wordSpacing: "10px",
            }}
          >
            Producto ya en bodega,volver a sincronizar
          </p>
        </div>

        <h5 style={{ fontWeight: "700", size: "14px", marginTop: "30px" }}>
          Cambiar de Bodega
        </h5>
        <div className={classes.configure}>
          <div
            style={{ top: "20px", bottom: "45%", left: "1%", width: "100%" }}
          >
            <img style={{ float: "left" }} src={ellipse} />
            <p
              style={{
                paddingLeft: "40px",
                fontWeight: "500",
                size: "16px",
                fontStyle: "Medium",
                lineHeight: "19px",
                wordSpacing: "10px",
              }}
            >
              Producto ya en bodega,volver a sincronizar
            </p>
          </div>
          <div
            style={{ top: "20px", bottom: "45%", left: "1%", width: "100%" }}
          >
            <img style={{ float: "left" }} src={ellipse} />
            <p
              style={{
                paddingLeft: "40px",
                fontWeight: "500",
                size: "16px",
                fontStyle: "Medium",
                lineHeight: "19px",
                wordSpacing: "10px",
              }}
            >
              Producto ya en bodega,volver a sincronizar
            </p>
          </div>
          {/* <RadioInput></RadioInput> */}
          <div
            style={{ top: "20px", bottom: "45%", left: "1%", width: "100%" }}
          >
            <img style={{ float: "left" }} src={ellipse} />
            <p
              style={{
                paddingLeft: "40px",
                fontWeight: "500",
                size: "16px",
                fontStyle: "Medium",
                lineHeight: "19px",
                wordSpacing: "10px",
              }}
            >
              Producto ya en bodega,volver a sincronizar
            </p>
          </div>
        </div>
      </div>
      {/* <h1>hi</h1>
         <h1>input 1</h1> */}
      {/* <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1>
         <h1>hi</h1> */}
      {/* <RadioInput></RadioInput> */}
    </VerticalModal>
  );
};
export default WmsModal;
