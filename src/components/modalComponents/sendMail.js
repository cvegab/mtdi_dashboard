import Modal from "../UI/Modal";
import Chips from "./chips";

const SendMail = (props) => {
  return (
    <Modal onhideModal={props.onhideModal}>
      <Chips onhideModal={props.onhideModal}></Chips>
    </Modal>
  );
};
export default SendMail;
