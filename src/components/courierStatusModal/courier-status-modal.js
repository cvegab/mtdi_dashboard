import HorizontalModal from "components/horizontalModal/horizontal-modal";

const CourierStatusModal = (props)=>{
return(
    <HorizontalModal onhideModal={props.onhideModal}>
         <p style={{ textAlign: "center" }}>Orden 1534</p>
         <h5 style={{ fontWeight: "700", size: "22px", textAlign: "center" }}>
     Estado del courier
      </h5>
       
    </HorizontalModal>
)
}
export default CourierStatusModal;