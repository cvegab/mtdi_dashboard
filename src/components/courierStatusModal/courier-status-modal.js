import HorizontalModal from "components/horizontalModal/horizontal-modal";
import inPreparation from '../../assets/img/in-preparation.png';
import dispatchStep1 from '../../assets/img/dispatch-step-1.png';
import inDispatchStep1 from '../../assets/img/step-1-in-dispatch.png';
import arrivalStep1 from '../../assets/img/step1-arrival-ready.png';
import clientstep1 from '../../assets/img/step1-recievedby-client.png';
import './courier-status-module.css';
const CourierStatusModal = (props)=>{
return(
    <HorizontalModal onhideModal={props.onhideModal}>
         <p style={{ textAlign: "center" }}>Orden 1534</p>
         <h5 style={{ fontWeight: "700", size: "22px", textAlign: "center" }}>
     Estado del courier
      </h5>
      <div class="container">
    <figure>
        <img src={inPreparation} style={{ float: "left", marginRight: "40px" }}/>
        <figcaption>First image</figcaption>
    </figure>
    <figure>
        <img src={dispatchStep1} style={{ float: "left", marginRight: "40px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
    <figure>
        <img src={inDispatchStep1} style={{ float: "left", marginRight: "40px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
    <figure>
        <img src={arrivalStep1} style={{ float: "left", marginRight: "40px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
    <figure>
        <img src={clientstep1} style={{ float: "left", marginRight: "40px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
</div>
    </HorizontalModal>
)
}
export default CourierStatusModal;