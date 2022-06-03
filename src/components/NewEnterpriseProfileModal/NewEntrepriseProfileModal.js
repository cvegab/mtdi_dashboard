
import React from 'react'
import { FormCheck, FormControl, FormLabel, FormSelect, ModalBody } from 'react-bootstrap'
import { Form, FormGroup } from 'reactstrap'
import './NewEnterpriseProfileModal.css'

const NewEntrepriseProfileModal = () => {
  return (
    <div>
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
                    Crear un nuevo registro
                </p>

                <Form >
                  
                    <FormGroup>
                        <FormLabel> Razón Social </FormLabel>
                        <FormControl
                            id="form-control-create-enterprise"
                            type="email"
                            placeholder="Ingrese aquí un nombre"
                            autofocus
                        />
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <FormLabel> Correo electrónico representante </FormLabel>
                        <FormControl
                            id="form-control-create-enterprise"
                            type="email"
                            placeholder="Ingrese aquí un correo electrónico"
                            
                        />
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <FormLabel>País </FormLabel>
                        <FormSelect
                        id="form-control-create-enterprise">
                            <option>Seleccione un país</option>
                            <option>Chile</option>
                            <option>México</option>
                            <option>Colombia</option>
                        </FormSelect>             
                    </FormGroup>
                    <br/>
                    <FormGroup>
                    <FormCheck 
                        type="switch"
                        id="custom-switch"
                        
                        /> Selfservice
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
                Crear usuario &nbsp;
                
              </button>
            </div>
          </Form>
        </ModalBody>
    </div>
  )
}

export default NewEntrepriseProfileModal