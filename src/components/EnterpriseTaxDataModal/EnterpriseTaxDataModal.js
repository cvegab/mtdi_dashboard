import React from 'react'
import { FormCheck, FormControl, FormLabel, FormSelect, ModalBody, Row } from 'react-bootstrap'
import { Col, Form, FormGroup } from 'reactstrap'

const EnterpriseTaxDataModal = () => {
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
            Datos tributarios
        </p>

        <Form >
        <fieldset disabled>
          <Row>
          <Col>
          <FormGroup>
                <FormLabel> Razón Social </FormLabel>
                <FormControl
                    type="email"
                    value="Softys"
                    placeholder="Ingrese aquí Razón Social"
                />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
                <FormLabel> Rut Empresa </FormLabel>
                <FormControl
                    type="email"
                    value="76.002.395-2"
                    placeholder="Ingrese aquí el rut de la empresa"
                />
            </FormGroup>
          </Col>
          </Row>

            <br/>
            <FormGroup>
            <FormLabel> Dirección de facturación </FormLabel>
                <FormControl
                    type="email"
                    placeholder="Ingrese aquí dirección"
                    value="Américo Vespucio 1556, Las Condes"            
                />
            </FormGroup>
            <br/>
            <Row>
          <Col>
          <FormGroup>
                <FormLabel> Nombre del representante comercial</FormLabel>
                <FormControl
                    type="email"
                    value="Tennynson Vásquez"
                    placeholder="Ingrese aquí Razón Social"
                />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
                <FormLabel> Teléfono del repesentante comercial </FormLabel>
                <FormControl
                    type="phone"
                    value="963104957"
                    placeholder="Ingrese aquí el rut de la empresa"
                />
            </FormGroup>
          </Col>
          </Row>
            <FormGroup>
            <FormLabel>Correo del representante comercial </FormLabel>
            <FormControl
                    type="email"
                    value="tv@instancelatam.com"
                    placeholder="Ingrese aquí Razón Social"
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

export default EnterpriseTaxDataModal