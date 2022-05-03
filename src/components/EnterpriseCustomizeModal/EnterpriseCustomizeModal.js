import React, { useState } from 'react'
import {  Col, FormControl, FormLabel,  ModalBody, Row } from 'react-bootstrap'
import {  Button, Form, FormGroup } from 'reactstrap'
import './EnterpriseCustomizeModal.css'
import iconUploadImage from '../../assets/img/icons/iconUploadImage.png';




const EnterpriseCustomizeModal = () => {

    // const [editMode, setEditMode] = useState(false);
    const [logo, setLogo] = React.useState('');
    const [banner, setBanner] = React.useState('');
    const [text, setText] = React.useState("En Softys estamos felices de poder ayudarte. A continuación recibe tu boleta");
    const [color, setColor] = React.useState('#1D308E');

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(logo, banner, color, text);
    }

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

     
        {/* <fieldset disabled={ editMode ? false : true}> */}
        
          <Form onSubmit={handleSubmit}>
           
              
                <FormLabel className="textFormLabel" > Logo </FormLabel>
                <br/>
                {/* <button type="submit">Subir archivo</button> */}
                <input 
                  type="file" 
                  id="file"
                  accept="image/*"
                  name="logo"
                  value={logo}
                  onChange={(event) => setLogo(event.target.value)}    
                  style={{marginBottom:'2em', display:'none'}}
                />
                <Row>
                <Col>
                <div className="input-logo">{logo} </div>
                </Col>
                  <Col>
                  <label for="file"> <img src={iconUploadImage} style={{cursor:"pointer"}} alt="UploadImage" width="100%" /> </label>
                  </Col>
                  
                </Row>
                
                <br/>
                <FormLabel className="textFormLabel" > Banner </FormLabel>
                <br/>
                {/* <button type="submit">Subir archivo</button> */}
                <input 
                  type="file" 
                  id="file"
                  accept="image/*"
                  name="banner"
                  value={banner}
                  onChange={(event) => setBanner(event.target.value)}    
                  style={{marginBottom:'2em', display:'none'}}
                  title="Sube aquí tu Banner corporativo en formato PNG"
                />
                <Row>
                <Col>
                <div className="input-logo">{banner} </div>
                </Col>
                  <Col>
                  <label for="file"> <img src={iconUploadImage} style={{cursor:"pointer"}} alt="UploadBanner" width="100%" /> </label>
                  </Col>
                  
                </Row>
            
            <br/>
           
                <FormLabel  className="textFormLabel"> Color personalizado </FormLabel>
              
              <Row>
                <Col>
                <FormControl 
                    type="color" 
                    class="form-control form-control-color" 
                    name="color"
                    value={color}
                    title="Escoge el color que deseas"
                    onChange={(event) => setColor(event.target.value)}    
                    style={{marginBottom:'2em'}} 

                  />
                </Col>
                <Col>
                <div className="input-color">{color} </div>
                </Col>

              </Row>
   

            <br/>
            
            <FormLabel  className="textFormLabel"> Texto: </FormLabel>
                <FormControl
                    as="textarea"
                    rows={6}
                    placeholder="Ingrese aquí el texto personalizado que tendrá su correo"
                    name="text"
                    id="input-text"
                    value={text}   
                          
                    onChange={(event) => setText(event.target.value)}   
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

export default EnterpriseCustomizeModal