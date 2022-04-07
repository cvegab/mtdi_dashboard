import NavBar from 'components/Navbars/InstanceNavbar/Navbar'
import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap'
import IconRectangle from '../../../assets/img/icons/Reports/iconRectangle.png'
import IconBox from '../../../assets/img/icons/Reports/iconBoxs.png'
import './ResetPassword.css'



const ResetPassword = () => {
  return (
    <div>
      <NavBar />
      <div className="backgroundImage">
        <div className="container">
          <Container style={{display:"flex", justifyContent:"center", marginTop:"15em"}}>
            <div className="row">     
              <div className="col-12 col-lg-12"> 
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
                <img src={IconBox} alt="Icon"  style={{marginBottom:"2em"}} width="40" height="auto" />
                <p className="welcomeText">Bienvenido</p>
                <p className="titleNameUser">Tennynson Vásquez</p>
                <img src={IconRectangle} alt="Icon" className="iconRectangle" width="40" height="auto" />  
                </div>
                <br/>  
                
              </div>
            </div>    
          </Container>
          <Container style={{marginTop:"3em"}}>
            <Row>
              <Col>
                Datos de tu negocio
              </Col>
              <Col>
                Tiendas
              </Col>
              <Col>
                Backoffice
              </Col>
              <Col>
                Fulfillment
              </Col>
              <Col>
                Cliente
              </Col>
            </Row>
          </Container>
          <Container style={{display:"flex", justifyContent:"center"}}>
            <Row>
            <div className="titleBox"> 
              <h5 className='titleFont'>
                Establecer nueva contraseña
              </h5> 
            </div>
              <Form>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Email">Correo</Label>
                    <Input style={{borderRadius:"17px", fontSize:"12px", marginBottom:"2em"}} type="email" name="email" id="exampleEmail" placeholder="Ingresa aquí tu correo" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Password">Contraseña actual</Label>
                    <Input style={{borderRadius:"17px", fontSize:"12px", marginBottom:"2em"}} type="password" name="password" id="examplePassword" placeholder="Ingresa aquí tu contraseña actual" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Password">Nueva contraseña</Label>
                    <Input style={{borderRadius:"17px", fontSize:"12px", marginBottom:"2em"}} type="password" name="password" id="examplePassword" placeholder="Ingresa aquí tu nueva contraseña" />
                  </FormGroup>
                </Col>
              </Form>
              </Row>
          </Container>
           
              <div className="d-grid gap-12 col-12" style={{justifyItems:"center"}}>
                <Button className="bttnSiguiente">Siguiente</Button>
              </div>
   
        </div>
     
      </div>
    </div>
  )
}

export default ResetPassword