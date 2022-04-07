import React, {useState} from "react";
// import classes from "../../components/mtdiTable/mtdi-table.module.css";
import { Select, MenuItem } from "@material-ui/core";
import iconG1 from "../../assets/img/icons/Reports/iconG1.png";
import iconG2 from "../../assets/img/icons/Reports/iconG2.png";
import iconG3 from "../../assets/img/icons/Reports/iconG3.png";
import iconCP1 from "../../assets/img/icons/Reports/iconCP1.png";
import iconCP2 from "../../assets/img/icons/Reports/iconCP2.png";
import iconCP3 from "../../assets/img/icons/Reports/iconCP3.png";
import iconCP4 from "../../assets/img/icons/Reports/iconCP4.png";
import iconPP1 from "../../assets/img/icons/Reports/iconPP1.png";
import iconPP2 from "../../assets/img/icons/Reports/iconPP2.png";
import iconPP3 from "../../assets/img/icons/Reports/iconPP3.png";
import iconPP4 from "../../assets/img/icons/Reports/iconPP4.png";
import iconEC1 from "../../assets/img/icons/Reports/iconEC1.png";
import iconEC2 from "../../assets/img/icons/Reports/iconEC2.png";
import iconEC3 from "../../assets/img/icons/Reports/iconEC3.png";
import '../../assets/css/Charts.css';

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
  Table,
  Row,
  Col,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";


function InformationCardsMobile(props) {
  

  

 
  return (
    <>
          <Row>
            <Col className="text-center" lg="6" md="12">

                      {/* <Accordion defaultActiveKey="0"> */}
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <p
                            style={{display: "flex", fontWeight: "bold", justifyContent:"center"}}
                            >
                              Datos Generales                              
                            </p>
                          </Accordion.Header>
                          <Accordion.Body>
                      
                            <Table>
                              <tbody>
                                <tr>
                                <td />
                                  
                                   <td
                                    // className="text-left"
                                    id="titleReportCardMobile"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4",  
                                      marginTop: "6px",
                                      textAlign: "left",
                                    }}
                                  >
                                  <img src={iconG1} width="22px" />
                                     &nbsp; Total Ingresos
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em",
                                      width: "100px"
                                    }}
                                  >                  

                                  {(() => {
                                    let number  = props.totalIncome;
                                    let totalIncomeformatted = new Intl.NumberFormat("es-CL",{
                                      style:'currency',
                                      currency:'CLP'
                                    }).format(number);
                                    return <div> 
                                        {totalIncomeformatted}
                                      </div>   
                                   })()}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +4.5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* FECHA DE ORDEN */}
                                <tr>
                                  <td>
                                  
                                  </td>
                                   <td
                                    // className="text-left"
                                    id="titleReportCardMobile"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4",  
                                      marginTop: "-1px",
                                      textAlign: "left",
                                      position: "absolute"
                                    }}
                                  >
                                  <img src={iconG2} width="22px" />
                                    &nbsp;Costo Despacho
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em",
                                      width: "100px",
                                      marginTop: "2em"
                                    }}
                                  >
                                   {(() => {
                                    let number  = props.dispatchCost;
                                    let formatted = new Intl.NumberFormat("es-CL",{
                                      style:'currency',
                                      currency:'CLP'
                                    }).format(number);
                                    return <div> 
                                        {formatted}
                                      </div>   
                                   })()}                  
                                    
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#FF6059",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      -3%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* GM */}
                                <tr>
                                  <td>
      
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4",  
                                      marginTop: "6px",
                                      textAlign: "left",
                                    }}
                                  >
                                  <img src={iconG2} width="22px" />
                                    &nbsp;GM
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                 {(() => {
                                    let number  = props.gm;
                                    let formatted = new Intl.NumberFormat("es-CL",{
                                      style:'currency',
                                      currency:'CLP'
                                    }).format(number);
                                    return <div> 
                                        {formatted}
                                      </div>   
                                   })()}                  
                                                          
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#FF6059",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      -6%
                                    </span>
                                    
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                 
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                  <img src={iconG3} width="22px" />
                                    &nbsp;Conversión
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.conversion}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +12%
                                    </span>                      
                                  </td>
                                </tr>
                              </tbody>
                            </Table>                           
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>   
            </Col>
          </Row>     
          <br/>
             
             {/* ORDER PROCESSING */}
            <Row>
            <Col className="text-center" lg="6" md="12">

                      <Accordion>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <p
                            style={{display: "flex", fontWeight: "bold", justifyContent:"center"}}
                            >
                              Procesamiento de pedidos                             
                            </p>
                          </Accordion.Header>
                          <Accordion.Body>
                      
                            <Table>
                              <tbody>
                              
                              {/* ORDERS */}
                                <tr>
                                  <td>
                                                              
                                  </td>
                                   <td
                                    className="text-left"
                                    id="titleReportCardMobile"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                    <img src={iconPP1} width="22px" />
                                     &nbsp; Pedidos
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                  {props.totalOrders}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +4.5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* ORDERS CANCELLED */}
                                <tr>
                                  <td>
                                 
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                    <img src={iconPP2} width="22px" />
                                     &nbsp; Cancelados
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                  {props.totalCancelledOrders}
                                  </td>
                               
                                  <td className="td-actions text-left">                                 
                                     <span
                                      style={{
                                        color: "red",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      -3%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* DTE SENT */}
                                <tr>
                                  <td>
                                   
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconPP3} width="22px" />
                                     &nbsp; DTE enviado
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                  {props.totalDte}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                  
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +8%
                                    </span>
                                    
                                  </td>
                                </tr>
                                 
                                 {/* DELIVERED */}
                                <tr>
                                  <td>                                 
                                                           
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                    <img src={iconPP4} width="22px" />
                                     &nbsp; Entregados
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                    220
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +12%
                                    </span>
                                    
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                            
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>             
            </Col>
          </Row>     
          <br/>

            {/* ORDER FULFILMENT */}
              <Row>
                <Col className="text-center" lg="6" md="12">
                      <Accordion>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            <p
                            style={{display: "flex", fontWeight: "bold", justifyContent:"center"}}
                            >
                              Cumplimiento de pedidos                            
                            </p>
                          </Accordion.Header>
                          <Accordion.Body>
                      
                            <Table>
                              <tbody>

                              {/* IN PROCESS */}
                                <tr>
                                  <td>
                                   
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconCP1} width="22px" />
                                     &nbsp; En Proceso
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.inProcess}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    
                                     <span
                                      style={{
                                        color: "red",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      -5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* PREPARATION*/}
                                <tr>
                                  <td>
                                 
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconCP2} width="22px" />
                                     &nbsp; Preparación
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                  {props.inPreparation}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "red",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      -5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* READY TO DISPATCH*/}
                                <tr>
                                  <td>
                                    
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                    <img src={iconCP3} width="22px" />
                                     &nbsp; Listo para despacho
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.readyToShip}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +10%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* READY TO DELIVER */}
                                <tr>
                                  <td>
                                    
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                    <img src={iconCP4} width="22px" />
                                     &nbsp; Próximo a llegar
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.onTheWay}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +10%
                                    </span>           
                                  </td>
                                </tr>
                              </tbody>
                            </Table>           
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>       
            </Col>
          </Row>     
          <br/>

                {/* CLIENT EXPERIENCE */}
                <Row>
                  <Col className="text-center" lg="6" md="12">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <p
                            style={{display: "flex", fontWeight: "bold", justifyContent:"center"}}
                            >
                              Experiencia del cliente                              
                            </p>
                          </Accordion.Header>
                          <Accordion.Body>
                      
                            <Table>
                              <tbody>
                              {/* NPS */}
                                <tr>
                                  <td> 
                                   
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconEC1} width="22px" />
                                     &nbsp; NPS
                                  </td>
                                  <td
                                    id="numberReportCardMobile"
                                    className="text-right"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.totalNps}
                                  </td>
                               
                                  <td className="td-actions text-left">
                                    {/* <br />
                                    <br /> */}
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* REVIEWS */}
                                <tr>
                                  <td>                                
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      position: "absolute",
                                      marginTop: "-1px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconEC2} width="22px" />
                                     &nbsp; Reviews
                                  </td>
                                  <td
                                    id="numberReportCardMobile"
                                    className="text-right"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                   {props.reviews}
                                  </td>
                               
                                  <td className="td-actions text-left">                                
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +5%
                                    </span>
                                    
                                  </td>
                                </tr>

                                {/* CLAIMS*/}
                                <tr>
                                  <td>                                                              
                                  </td>
                                   <td
                                    id="titleReportCardMobile"
                                    className="text-left"
                                    style={{
                                      fontSize: "11px",
                                      fontWeight: "bold",
                                      color: "#C4C4C4", 
                                      width:"23em",
                                      marginTop: "6px",
                                      textAlign: "left"
                                    }}
                                  >
                                     <img src={iconEC3} width="22px" />
                                     &nbsp; Reclamos
                                  </td>
                                  <td
                                    className="text-right"
                                    id="numberReportCardMobile"
                                    style={{ 
                                      fontSize: "10px",
                                      color: "#444B54", 
                                      fontWeight: "bold",
                                      textAlign: "right",
                                      marginLeft: "1em"
                                    }}
                                  >
                                    20
                                  </td>
                               
                                  <td className="td-actions text-left">                                  
                                     <span
                                      style={{
                                        color: "#33D69F",
                                        fontSize: "11px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                      }}
                                    >
                                      +10%
                                    </span>     
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                            
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion> 
               
            </Col>
          </Row>     
          <br/>
    </>
  );
}

export default InformationCardsMobile;

