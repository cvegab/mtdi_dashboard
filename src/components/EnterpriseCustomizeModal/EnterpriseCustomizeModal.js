import React from 'react'
import {  FormControl, FormLabel,  ModalBody } from 'react-bootstrap'
import {  Form, FormGroup } from 'reactstrap'

const EnterpriseCustomizeModal = () => {
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
            Personalización Empresa
        </p>

        <Form >
        <fieldset disabled>
     
          <FormGroup>
                <FormLabel> Logo </FormLabel>
                <input
                    type="file"
                 ></input>
            </FormGroup>
            <br/>
            <FormGroup>
                <FormLabel> Banner </FormLabel>
                <input
                    type="file"
                 ></input>
            </FormGroup>
            <br/>
            <FormGroup>
                <FormLabel> Color personalizado </FormLabel>
                <FormControl
                    type="email"
                    value="#FFFFFF"
                    placeholder="Ingrese aquí el código de color"
                />
            </FormGroup>

            <br/>
            <FormGroup>
            <FormLabel> Texto: </FormLabel>
                <FormControl
                    as="textarea"
                    rows={6}
                    placeholder="Ingrese aquí el texto personalizado que tendrá su correo"
                    value="¡Gracias por tu compra! Desde Softys te enviamos saludos y adjuntamos tu boleta."            
                />
            </FormGroup>
            <br/>


            </fieldset>



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
        Editar Datos &nbsp;
        
      </button>
    </div>
  </Form>
</ModalBody>
</div>
  )
}

export default EnterpriseCustomizeModal