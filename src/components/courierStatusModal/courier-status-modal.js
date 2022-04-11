import HorizontalModal from "components/horizontalModal/horizontal-modal";
import inPreparation from '../../assets/img/in-preparation.png';
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
        <img src={inPreparation} style={{ float: "left", marginRight: "20px" }}/>
        <figcaption>First image</figcaption>
    </figure>
    <figure>
        <img src={inPreparation} style={{ float: "left", marginRight: "20px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
    <figure>
        <img src={inPreparation} style={{ float: "left", marginRight: "20px" }}/>
        <figcaption>Second image</figcaption>
    </figure>
</div>
    </HorizontalModal>
)
}
export default CourierStatusModal;