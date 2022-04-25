import React, { useState,useRef,useEffect } from "react";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    ModalFooter,
    Form,
    Label,
    Col,
    Row,
    Input,
  } from "reactstrap";
const NewUserProfileModal = (props)=>{
  console.log(props.profileInfo);
  const editedName = 'baby'
    const [showModal, setShowModal] = useState(false);
    const [profileDetails, setprofileDetails] = useState([]);

  const [name, setName] = useState('');
  const [mail, setMail] = useState("");
  const [store, setStore] = useState("");
  const [country, setCountry] = useState("");
  const [selfservice, setSelfservice] = useState("");
    const nameRef = useRef('');
    const emailRef = useRef('');
    const userType = useRef(1);
   
  // if(props.profileInfo !== ''){
  //   const nameRef = useRef(props.profileInfo.name);
  //   const emailRef = useRef('');
  //   const userType = useRef(1);
  // }
     
    const nameChangeHandler = (event)=>{
      console.log(event);
setName(event.target.value);
    }
   const editProfileHandler = ()=>{
    const profile = {
      // firts_name: nameRef.current.value,
      firts_name: name,
      email: emailRef.current.value,
      profile: userType.current.value,
      countries:[1,2],
      stores:[1,2,3]
    }
    console.log(profile);
   }
    const addProfileHandler = async () => {
        const profile = {
              // firts_name: nameRef.current.value,
              firts_name: name,
              email: emailRef.current.value,
              profile: userType.current.value,
              countries:[1,2],
              stores:[1,2,3]
            }

       setprofileDetails(profile);   
    
        try {
          const response = await fetch('https://profile-table-default-rtdb.firebaseio.com/profile.json',{
          method: 'POST',
          body: JSON.stringify(profile),
          headers:{
         'Content-Type': 'application/json'
          }
        }
      );
         
          if (!response.ok) {
            throw new Error();
          }
          const data = await response.json();
          console.log(data);
          console.log(profileDetails);
         window.location.reload();
        } catch (error) {
          console.log(error);
        }
      };
 
return(
   

        <ModalBody>
       {props.flag === 0 &&
         <h3
            style={{
              fontWeight: "700",
              size: "24px",
              textAlign: "center",
            }}
          >
            Crear nuevo usuario
          </h3>}
          {props.flag === 1 &&
         <h3
            style={{
              fontWeight: "700",
              size: "24px",
              textAlign: "center",
            }}
          >
            Edit User
          </h3>}
        
          <Form>
            <FormGroup>
              <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                Nombre:
              </Label>
              <input
                className="input"
                type="email"
                name="email"
                id="exampleEmail"
                style={{ fontSize: "12px" }}
                // value={editedName}
                defaultValue={props.profileInfo.name}
                onChange={nameChangeHandler}
                // ref={nameRef}
                // value={props.profileInfo.name}
                // placeholder="Ingresa un correo"
                // value={this.state.emailState}
                // onChange={this.handleEmailChange}
                // onBlur={this.checkEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
              >
                Correo Electronico:
              </Label>

              <input
                className="input"
                ref={emailRef}
                defaultValue={props.profileInfo.mail}
                // value={props.profileInfo.mail}
                // className={"input " + (this.state.error && " has-error")}
                // value={this.state.value}
                // placeholder="Escribe aquí el correo y presiona la tecla 'Enter'"
                // style={{ fontSize: "12px" }}
                // onKeyDown={this.handleKeyDown}
                // onChange={this.handleChange}
                // onPaste={this.handlePaste}
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                    Usuario
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
                    ref={userType}
                    // value={props.profileInfo.profile}
                    defaultValue={props.profileInfo.profile}
                  >
                    <option selected>Selcciona un tipo de usuario</option>
                    <option value={1}>Administrador</option>
                    <option value={2}>KAM</option>
                    <option value={3}>Cliente</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                    Pais
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
               
                  >
                    <option selected>Selccione un pais</option>
                    <option value="1">Chile</option>
                    <option value="2">Mexico</option>
                    <option value="3">Peru</option>
                    <option value="4">Colombia</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                  Cliente
                  </Label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style={{ borderRadius: "10px" }}
                  >
                    <option selected>Selccione un cliente</option>
                    <option value="1">Unilever</option>
                    <option value="2">Softys</option>
                    <option value="3">DeMaria</option>
                    <option value="4">Faber Castell</option>
                  </select>
                </FormGroup>
              </Col>
            </Row>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
            {props.flag === 0 && 
            <div class="text-center">
              <button
                id="bttnSubmit"
                type="submit"
                style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  color: "white",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight: "bold",
                  border: "0",
                }}
                 onClick={addProfileHandler}
              >
                Crear Usuario &nbsp;
              
              </button>
            </div>}
            {props.flag === 1 && 
            <div class="text-center">
              <button
                id="bttnSubmit"
                type="submit"
                style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  color: "white",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight: "bold",
                  border: "0",
                }}
                 onClick={editProfileHandler}
              >
               Edit Usuario &nbsp;
              
              </button>
            </div>}
          </Form>
        </ModalBody>
      
     
)
}
export default NewUserProfileModal;