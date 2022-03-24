import PDFReport from 'components/PDFReport/PDFReport'
import React, { useState } from 'react'
import { Form, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";



const shareReports = () => {
  const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
  return (
    <div>
            <button 
                 id="bttnSubmit"
                //  className="bttnCompartirReporte" 
                 style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight:"bold",
                  border:"0",
                  fontSize: "11px"
                }}
                onClick={toggle}
              > 
                    Enviar por correo              
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                  <div style={{display:"flex", justifyContent:"end"}}> 
                    <button 
                    style={{
                      background:"none",
                      position: "relative", 
                      marginLeft:"14em", 
                      color:"black", 
                      border:"none" 
                    }} 
                    onClick={toggle}
                    >
                      x
                    </button> 
                  </div>
                </ModalHeader>
                <ModalBody>
                  <p 
                  style={{
                    fontSize:"24px", 
                    fontWeight:"bold", 
                    display:"flex", 
                    justifyContent:"center", 
                    marginBottom:"2em"
                  }}
                  >
                    Compartir con otros usuarios
                  </p>
              
                <h3 
                style={{ 
                  fontWeight: "700", 
                  size: "24px", 
                  textAlign: "center" 
                }}
                >
                  Enviar documento tributario
                </h3>
                <Form onSubmit={this.submitHandler}>
                  <FormGroup>
                    <Label
                      for="exampleEmail"
                      style={{ fontWeight: "600", size: "14px" }}
                    >
                      Enviar a:
                    </Label>
                   <input    
                    type="email"
                    name="email"
                    id="exampleEmail"
                    style={{ fontSize: "12px" }}
                    placeholder="Ingresa un correo"
                    />
             
                  </FormGroup>
              <FormGroup>
               <Label
                for="exampleEmail"
                style={{ fontWeight: "600", size: "14px" }}
                >
                  Agregar otro correo:
                </Label>
          
                  <button
                    type="button"
                    className="button"              
                  >                  
                  </button>
  
              <input
                value={this.state.value}
                placeholder="Escribe aquí el correo y presiona la tecla 'Enter'"
                style={{ fontSize: "12px" }}
              />

              
            </FormGroup>
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
              >
                Compartir reporte &nbsp;
                
              </button>
            </div>
          </Form>
        </ModalBody>
               
      </Modal>
    </div>
  )
};

export default shareReports;