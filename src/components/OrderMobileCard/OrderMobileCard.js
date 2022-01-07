
import React from "react";
import SiIcon from "../../assets/img/si.png"
// import noIcon from "assets/css/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import classes from "../Sidebar/mtdi-table.module.css";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Accordion from 'react-bootstrap/Accordion'

function OrderMobileCard() {
  const [horizontalTabs, setHorizontalTabs] = React.useState("home");
  const [verticalTabs, setVerticalTabs] = React.useState("info");
  const [pageTabs, setPageTabs] = React.useState("homePages");
  const [openedCollapses, setOpenedCollapses] = React.useState([
    "collapseOne",
    "collapse1",
  ]);
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  const collapsesToggle = (collapse) => {
    if (openedCollapses.includes(collapse)) {
      setOpenedCollapses(openedCollapses.filter((item) => item !== collapse));
    } else {
      openedCollapses.push(collapse);
      setOpenedCollapses([...openedCollapses, collapse]);
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col className="text-center" lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                {/* <CardTitle tag="h4">Tabla Órdenes</CardTitle>
                <h5 className="card-category">Pedidos</h5> */}
              </CardHeader>
              <CardBody>
                {/* <div className="table-full-width table-responsive"> */}
                  <Table>
                    <tbody>

                      <tr>                     
                        <td>
                          {/* <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup> */}
                        </td>

{/* OPS ID */}
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Ops ID: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          5159308472
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                        
                        </td>               
                      </tr>

{/* FECHA DE ORDEN */}
                    <tr>
                      <td/>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Fecha orden: 
                        </td>               
                        <td className="text-left" style={{fontSize: "12px"}}>
                        2022-01-05 09:57:56
                        </td>
                        <td className="td-actions text-right">
                        <br/>
                        <br/>
                        </td>               
                      </tr>
   
 {/* CANAL DE VENTA   */}
                      <tr>
                        <td/>                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Canal de Venta: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Mercadolibre
                        </td>
                        <td className="td-actions text-right">
                        <br/>
                        <br/>
                        </td>                      
                      </tr>
{/* TIENDA */}

                      <tr>
                        <td/>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                        Cliente:
                        </td>
                     
                        <td className="text-left" style={{fontSize: "12px"}}>
                        CAROZZI FS
                        </td>
                        <td className="td-actions text-right">
                        <br/>
                        <br/>   
                        </td>                     
                      </tr>

{/* CLIENTE */}

                      <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Cliente: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Mercadolibre
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>                      
                      </tr>


{/* TIENDA OFICIAL */}
                      <tr>
                        <td/>                                          
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                        Tienda Oficial:
                        </td>                
                        <td className="text-left" style={{fontSize: "12px"}}>
                        Carozzi Food Service
                        </td>
                        <td className="td-actions text-right">
                        <br/>
                        <br/>     
                        </td>                  
                      </tr>

{/* ORDEN DE COMPRA */}
                      <tr>
                        <td/>                                   
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                       Orden de Compra:
                        </td>                       
                        <td className="text-left" style={{fontSize: "12px"}}>
                        5159308472
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>       
                        </td>                      
                      </tr>

{/* PAÍS */}

                      <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          País: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Chile
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr>

{/* ESTADO DE PEDIDO */}
                      {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado de Pedido: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

                  
                    </tbody>
                  </Table>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Ver más</Accordion.Header>
                      <Accordion.Body>

                      {/* <div className="table-full-width table-responsive"> */}
                  <Table>
                    <tbody>
{/* DTE */}
                      <tr>
                        <td/>                      
                        <td className="img-row">
                          <div className="img-wrapper">
                            <td className="text-left" style={{fontSize: "12px", fontWeight: "bold"}}>
                              DTE:
                            </td>                         
                          </div>
                        </td>
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Sí
                        </td>
                        <td className="td-actions text-right">                                         
                        <br/>
                        <br/>
                          <span
                            className={classes.si}
                            type="button"
                          >                         
                            <img src={SiIcon} />                       
                          </span>
                          &nbsp; 
                          <span
                            className={classes.showPdf}
                            type="button"
                          >                         
                            <img src={showPdf} />                       
                          </span>                                                                         
                        </td>                        
                      </tr>
 
{/* RESPUESTA OMS */}
                      {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Respuesta OMS: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

{/* RESPUESTA WMS */}
                      {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Respuesta WMS: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}
{/* HUB DE PAGO */}
                          
                      {/* <tr>
                        <td>
                         
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Hub de pago:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Approved
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>
                       
                      </tr> */}

{/* TOTAL */}
                      {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                        Total: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}
{/* SHIPPING */}
                      {/* <tr>
                        <td>
                        
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Shipping:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          $ 5000
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                     
                      </tr> */}


{/* ESTADO FULFILLMENT */}
                      <tr>
                        <td>                        
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado Fulfillment:
                        </td>
                    
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Paid
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>
                        
                      </tr>

{/* PICKEADOR */}
                      {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Pickeador:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}
{/* 
JEFE OPS */}
                      {/* <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Jefe OPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Jorman Julio
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                  
                        </td>                  
                      </tr> */}

{/* HUB FULFILLMENT */}
                      {/* <tr>
                        <td/>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                         Hub Fulfillment:
                        </td>                   
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Rodrigo Letelier
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                
                        </td>                  
                      </tr> */}

{/* COURIER */}
                      {/* <tr>
                        <td/>      
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Courier: 
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          
                        </td>
                        <td className="td-actions text-right">
                            <br/>
                            <br/>
                        </td>
                       
                      </tr> */}

{/* SHIPPING ID */}
                      <tr>
                        <td/>                                         
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Shipping ID:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          41093360616
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>        
                        </td>                  
                      </tr>

{/* BULTOS / ETIQUETAS */}

                      {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Bultos / Etiquetas:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

{/* ESTADO DE COURIER */}
                      {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Estado Courier:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Juan Pérez
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

{/* COMPRADOR */}
                      <tr>
                        <td>                   
                        </td>
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Comprador
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Consuelo Miranda
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>                                  
                        </td>                  
                      </tr>

{/* NPS */}
                      {/* <tr>
                        <td/>                                        
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          NPS:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          Consuelo Miranda
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}

{/* REVIEWS */}
                      {/* <tr>
                        <td/>                                       
                        <td className="text-left" style={{fontSize: "12px", fontWeight:"bold"}}>
                          Reviews:
                        </td>
                      
                        <td className="text-left" style={{fontSize: "12px"}}>
                          41093360616
                        </td>
                        <td className="td-actions text-right">
                          <br/>
                          <br/>
                        </td>                  
                      </tr> */}


                   
                    
                    </tbody>
                    </Table>
                    {/* </div> */}
 

                      
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
          {/* </div> */}
        </CardBody>
              {/* <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh spin" />
                  Updated 3 minutes ago
                </div>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>                     
      </div>                       
    </>
  );
}

export default OrderMobileCard;
