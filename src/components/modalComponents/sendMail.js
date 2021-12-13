import Modal from "../UI/Modal";
const SendMail = (props) => {
    console.log('i am from sendmail amd i was called');
  return (
    <Modal onhideModal={props.onhideModal}>
      <h1>hello</h1>
    </Modal>
  );
};
export default SendMail;
