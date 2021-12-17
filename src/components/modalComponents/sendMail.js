import Modal from "../UI/Modal";
import Chips from './chips';
// import { Button, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Chip } from "@material-ui/core";
// import ReactChipInput from "react-chip-input";
// import classes from "./sendMail.module.css";
const SendMail = (props) => {
  console.log(props);
  const emailInputRef = useRef("");
  const [emailState, setemailState] = useState("");
  const [chipState, setchipState] = useState({
    items: [],
    value: "",
    error: null,
  });
  console.log("i am from sendmail amd i was called");
  const inputChangeHandler = (event) => {
    //console.log(event.target.value);
    console.log(event.target.value);
    setemailState(event.target.value);
    console.log(emailState);
    // console.log(emailState);
  };

  const checkValid = (value)=>{
console.log(value);
return true;
  }

  const handleKeyDown = (evt)=>{
    console.log(evt.key);
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var value = chipState.value.trim();

      if (value && checkValid(value)) {
        // this.setState({
        //   items: [...this.state.items, this.state.value],
        //   value: ""
        // });
        setState(prevState => ({
          ...prevState,
         value: value
      }));
      }
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailState);
  };
  return (
    <Modal onhideModal={props.onhideModal}>
      <h3 style={{fontWeight: '700', size:'24px', textAlign: 'center'}}>Enviar documento tributario</h3>
     <Chips></Chips>
      {/* {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{background:'white'}}>
          <Form.Label>Enviar a:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} onChange={inputChangeHandler} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Agregar otro correo</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </Modal>
  );
};
export default SendMail;
