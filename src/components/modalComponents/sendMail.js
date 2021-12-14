import Modal from "../UI/Modal";
import { Button, Form } from "react-bootstrap";
const SendMail = (props) => {
  console.log("i am from sendmail amd i was called");
  return (
    <Modal onhideModal={props.onhideModal}>
      <h3>Enviar documento tributario</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enviar a:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Agregar otro correo</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};
export default SendMail;
