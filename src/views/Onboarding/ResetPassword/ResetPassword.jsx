import NavBar from 'components/Navbars/InstanceNavbar/Navbar'
import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap'
import './ResetPassword.css'
import '../../../'

const ResetPassword = () => {
  return (
    <div>
      <NavBar />
      <div className="backgroundImage">
        <div className="container">
          {/* <div className="boxForm"> */}
          <Container style={{display:"flex", justifyContent:"center"}}>
            <Row>
            <div className="titleBox"> 
              <h5>
                Establecer nueva contraseña
              </h5> 
            </div>
              <Form>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Email">Correo</Label>
                    <Input style={{borderRadius:"17px"}} type="email" name="email" id="exampleEmail" placeholder="Ingresa aquí tu correo" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Password">Contraseña actual</Label>
                    <Input style={{borderRadius:"17px"}} type="password" name="password" id="examplePassword" placeholder="Ingresa aquí tu contraseña actual" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label className="titleLabel" for="Password">Nueva contraseña</Label>
                    <Input style={{borderRadius:"17px"}} type="password" name="password" id="examplePassword" placeholder="Ingresa aquí tu nueva contraseña" />
                  </FormGroup>
                </Col>
                <Button>Siguiente</Button>
              </Form>
              </Row>
              </Container>
            {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default ResetPassword