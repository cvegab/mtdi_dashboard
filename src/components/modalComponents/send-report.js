import Modal from "../UI/Modal";
import Chips from "./chips";
import { Form, FormGroup, Label } from "reactstrap";
import SendReportChips from "./sendReportChips";
const SendReport = (props)=>{
    return (
        
        <Modal onhideModal={props.onhideModal}>
             
        <SendReportChips  onhideModal={props.onhideModal}></SendReportChips>
        </Modal>
      );
}
export default SendReport;