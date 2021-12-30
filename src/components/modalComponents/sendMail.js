import Modal from "../UI/Modal";
import Chips from "./chips";

const SendMail = (props) => {
  console.log(props.purchaser);
  return (
    <Modal onhideModal={props.onhideModal}>
      <Chips
        onhideModal={props.onhideModal}
        purchaser={props.purchaser}
      ></Chips>
    </Modal>
  );
};
export default SendMail;
