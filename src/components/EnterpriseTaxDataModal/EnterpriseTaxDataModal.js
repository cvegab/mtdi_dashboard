import React, { useState } from 'react'
import { FormCheck, FormControl, FormLabel, FormSelect, ModalBody, Row } from 'react-bootstrap'
import { Col, Form, FormGroup } from 'reactstrap'
import './EnterpriseTaxDataModal.css'

const EnterpriseTaxDataModal = () => {

  // const [editMode, setEditMode] = useState(false);
  const [corporateName, setCorporateName] = useState('Softys');
  const [rut, setRut] = useState('76.002.395-2');
  const [address, setAddress] = useState('Américo Vespucio 1235');
  const [name, SetName] = useState('Tennynson Vásquez');
  const [phone, setPhone] = useState ('963104957');
  const [mail, setMail] = useState ('tv@instancelatam.com');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(corporateName, rut, address, name, phone, mail);
  };
  
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
          
        <Form onSubmit={handleSubmit} >
        {/* <fieldset disabled={ editMode ? false : true}> */}
          <Row>
          <Col>
        
                <FormLabel style={{fontWeight: "bold"}}> Razón Social </FormLabel>
                <FormControl
                    type="text"  
                    value={corporateName}
                    name="corporateName"
                    onChange={(e) => setCorporateName(e.target.value)}
                    placeholder="Ingrese aquí Razón Social"
                  
                />
          
          </Col>
          
          <Col>
           
                <FormLabel style={{fontWeight: "bold"}}> Rut Empresa </FormLabel>
                <FormControl
                    type="text"
                    value={rut}
                    name="rut"
                    onChange={(e) => setRut(e.target.value)}
                    placeholder="Ingrese aquí el rut de la empresa"
                />
          
          </Col>
          </Row>

            <br/>
           
            <FormLabel style={{fontWeight: "bold"}}> Dirección de facturación </FormLabel>
                <FormControl
                    type="text"
                    placeholder="Ingrese aquí dirección"
                    value={address}
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}       
                />
           
            <br/>
            <Row>
          <Col>
         
                <FormLabel style={{fontWeight: "bold"}}> Nombre del representante comercial</FormLabel>
                <FormControl
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese aquí Razón Social"
                />
           
          </Col>
          <Col>
           
                <FormLabel style={{fontWeight: "bold"}}> Teléfono del repesentante comercial </FormLabel>
                <FormControl
                    type="number"
                    value={phone}
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ingrese aquí el rut de la empresa"
                />
           
          </Col>
          </Row>
          
          <br/>
            <FormLabel style={{fontWeight: "bold"}}>Mail del representante comercial </FormLabel>
            <FormControl
                    type="mail"
                    value={mail}
                    name="mail"
                    id="mail-form-tax-data"
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="Ingrese aquí Razón Social"
                />
           
            <br/>

            {/* </fieldset> */}



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
        // onClick={(e) => e.preventDefault(setEditMode(true))}
      >
        Guardar cambios
       
      </button>
    </div>

  </Form>
</ModalBody>
</div>
  )
}

export default EnterpriseTaxDataModal