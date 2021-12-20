import Modal from "../UI/Modal";
import Chips from "./chips";

const SendMail = (props) => {
  return (
    <Modal onhideModal={props.onhideModal}>
      <h3 style={{ fontWeight: "700", size: "24px", textAlign: "center" }}>
        Enviar documento tributario
      </h3>
      <Chips></Chips>
    </Modal>
  );
};
export default SendMail;
