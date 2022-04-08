import Modal from "../UI/Modal";


const ClientModal = (props) => {
console.log('client modal');
  console.log(props);
  return (
    <Modal onhideModal={props.onhideModal}>
            <p style={{ textAlign: "center",  }}>Orden {props.purchaser.order_id}</p>
            <h5 style={{ fontWeight: "700", size: "22px", textAlign: "center" }}>
       {props.purchaser.comprador}
      </h5>
      <p style={{color:'#858F99',textAlign:'center',paddingBottom:'5px'}}>{props.purchaser.rut}
      <br/>
      {/* <span style={{width:'30px',height:'2px',backgroundColor:'#1D308E'}}>---</span></p> */}
     </p>
     <hr style={{width:'30px',textAlign:'center',justifyContent:'center',height:'2px',backgroundColor:'rgb(0 42 252)',color:'rgb(0 42 252)',marginLeft:'48%'}}></hr>
     <p  style={{ fontWeight: "700", size: "22px", textAlign: "center" }}>Envia un mensaje a tu cliente mediante:</p>
    </Modal>
  );
};
export default ClientModal;