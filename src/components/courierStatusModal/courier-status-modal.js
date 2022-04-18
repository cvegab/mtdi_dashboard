import HorizontalModal from "components/horizontalModal/horizontal-modal";
import inPreparation from "../../assets/img/in-preparation.png";
import dispatchStep1 from "../../assets/img/dispatch-step-1.png";
import inDispatchStep1 from "../../assets/img/step-1-in-dispatch.png";
import arrivalStep1 from "../../assets/img/step1-arrival-ready.png";
import clientstep1 from "../../assets/img/step1-recievedby-client.png";
import step2Prep from "../../assets/img/step2-preparation.png";
import step2readytodispatch from "../../assets/img/step2-ready-to-dispatch.png";
import step3inDispatch from "../../assets/img/step3-in-dispatch.png";
import step3ReadyToDispatch from "../../assets/img/step3-ready-to-dispatch.png";
import step4InDispatch from "../../assets/img/step4-in-dispatch.png";
import step4ArrivalReady from "../../assets/img/step4-arrival-ready.png";
import step5Recieved from "../../assets/img/step5-receieved.png";
import step5ArrivalReady from "../../assets/img/step5-arrival-ready.png";
import "./courier-status-module.css";
const CourierStatusModal = (props) => {
  return (
    <HorizontalModal onhideModal={props.onhideModal}>
      <p style={{ textAlign: "center" }}>Orden {props.purchaser.order_id}</p>
      <h5 style={{ fontWeight: "700", size: "22px", textAlign: "center" }}>
        Estado del courier
      </h5>
      {/* STEP 1 */}
      {props.purchaser.courier_status === "Creado" && (
        <div class="container">
          <figure>
            <img
              src={inPreparation}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={dispatchStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "#D8D8D8;" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={inDispatchStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
          <figure>
            <img
              src={arrivalStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
          <figure>
            <img
              src={clientstep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
        </div>
      )}
      {/* STEP 2 */}
      {props.purchaser.courier_status === "Listo para despacho - Impreso" && (
        <div class="container">
          <figure>
            <img
              src={step2Prep}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step2readytodispatch}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "#D8D8D8;" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={inDispatchStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
          <figure>
            <img
              src={arrivalStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
          <figure>
            <img
              src={clientstep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
        </div>
      )}
      {/* STEP 3 */}
      {props.purchaser.courier_status === "En Reparto" && (
        <div class="container">
          <figure>
            <img
              src={step2Prep}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step3ReadyToDispatch}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step3inDispatch}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={arrivalStep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
          <figure>
            <img
              src={clientstep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
        </div>
      )}
      {/* STEP 4 */}
      {props.purchaser.courier_status=== "En planta de origen" && (
        <div class="container">
          <figure>
            <img
              src={step2Prep}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step3ReadyToDispatch}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step4InDispatch}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step4ArrivalReady}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={clientstep1}
              style={{ float: "left", marginRight: "40px" }}
            />
            {/* <figcaption>Mañana a la 1:30 p.m</figcaption> */}
          </figure>
        </div>
      )}
      {/* STEP5 */}
      {props.purchaser.courier_status === "Entregado" && (
        <div class="container">
          <figure>
            <img
              src={step2Prep}
              style={{ float: "left", marginRight: "43px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step3ReadyToDispatch}
              style={{ float: "left", marginRight: "43px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Hoy a las 12:40pm
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step4InDispatch}
              style={{ float: "left", marginRight: "43px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step5ArrivalReady}
              style={{ float: "left", marginRight: "43px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
          <figure>
            <img
              src={step5Recieved}
              style={{ float: "left", marginRight: "43px" }}
            />
            {/* <figcaption style={{ color: "black" }}>
              Mañana a la 1:30 p.m
            </figcaption> */}
          </figure>
        </div>
      )}
    </HorizontalModal>
  );
};
export default CourierStatusModal;
