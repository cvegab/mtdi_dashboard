import React from 'react'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import Logo from './logo-instance-blanco.png'
import './Navbar.css'




const NavBar = () => {



  return (

<Navbar collapseOnSelect expand="lg" className="navbar-custom" variant={"dark"}>
  {/* <Container> */}
  <Navbar.Brand href="/">
  <img src={Logo} alt="Logo" width="100" height="auto" style={{marginLeft:"1em"}} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      {/* <NavDropdown className="text-custom" title="Industria"  id="collasible-nav-dropdown"> */}
        {/* <NavDropdown.Item href="/">Retail</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="/">BTL</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="/">Canal tradicional</NavDropdown.Item> */}
      {/* </NavDropdown> */}


      {/* I removed in pulse's effect to try use Navbar more simple. If we need add the effect again, 
      only write in all classNames "PULSE" */}

      <Nav.Link className="text-custom"href="">Servicios </Nav.Link>
      <Nav.Link  className="text-custom" href="">¿Quiénes Somos? </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="text-custom" href="">Blog</Nav.Link>
      {/* <Nav.Link className="text-custom" href="/documentacion">Documentación</Nav.Link> */}
      <Nav.Link className="text-custom" href="">Contacto </Nav.Link> 
      <NavDropdown className="text-custom" title={<svg id="iconWorld" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg>} id="collasible-nav-dropdown"> 
        {/* <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}> <img src={ES} alt="ES-Flag" className="flags-i18n" width="20" height="auto" /> ES </NavDropdown.Item>
        <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}> <img src={EN} alt="EN-Flag" className="flags-i18n" width="20" height="auto" /> EN </NavDropdown.Item>
        <NavDropdown.Item onClick={() => i18n.changeLanguage("pt")}> <img src={PT} alt="PT-Flag" className="flags-i18n" width="20" height="auto" /> PT </NavDropdown.Item> */}
      </NavDropdown>
      {/* <Button variant="outline-light" className="rounded-pill" href="/login">Login</Button> */}
    </Nav>
  </Navbar.Collapse>
  {/* </Container>  */}
</Navbar>

  )
}

export default NavBar