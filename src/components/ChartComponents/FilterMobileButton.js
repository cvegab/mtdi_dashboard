import React, {useState} from "react";
import classes from "../Sidebar/mtdi-table.module.css";
import { Select, MenuItem } from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";

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


function FilterMobileButton() {
  
  const [selectedDateFrom, setselectedDateFrom] = useState("");
  
  

 
  return (
    <>
          <Row>
            <Col  md="12">

              <Accordion id="accordionFilterBttn">
                <Accordion.Item id="accordionFilterBttn"  eventKey="0">
                  <div id="accordionFilterBttn">
                    <Accordion.Header id="accordionFilterBttn">
                      <div >
                        <strong>Mostrar filtros </strong>
                      </div>
                           
                    </Accordion.Header>
                  </div>
                      <Accordion.Body>
                        <Table>
                          <tbody>
                            

                        <Col md="12">
                          <label>
                            <h5
                              id="fechaDesde"
                              style={{
                                color: "black",
                                fontSize: "12px",
                                fontWeight: "800",
                                marginLeft: "1em",
                                marginBottom: "6px",
                                marginTop: "0px",
                              }}
                            >
                              Fecha inicio
                            </h5>

                            <DatePicker
                              id="datepickerCalendar"
                              type="number"
                              // selected={fromDate}
                              // onChange={(date) => setfromDate(date)}
                              // value={selectedDateFrom}
                              // onChange={changeDateHandler}
                              style={{ width: 200, marginLeft: "1em" }}
                              placeholderText="dd/mm/yy"
                              locale="es"
                            />
                          </label>

            <label className="seventhStepTour">
              <h5
                id="fechaHasta"
                style={{
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "800",
                  marginLeft: "1em",
                  marginBottom: "6px",
                  marginTop: "0px",
                }}
              >
                Fecha fin
              </h5>

              <DatePicker
                id="datepickerCalendar"
                type="number"
                // onChange={(date) => setEndDate(date)}
                style={{ width: 200, marginLeft: "1em" }}
                placeholderText="dd/mm/yy"
                locale="es"
              />
            </label>

                     <label htmlFor="select-country">
              <h5
                style={{
                  color: "black",
                  width: "30px",
                  fontSize: "12px",
                  fontWeight: "800",
                  marginLeft: "1em",
                  marginBottom: "0px",
                }}
              >
                País
              </h5>
               <Select
                labelId="select-tienda"
                id="select-tienda"
                style={{
                  width: 300,
                  fontSize: "10px",
                  marginLeft: "1em",
                  marginTop: "1em",
                }}
                label="select-canal"
                placeholder="&nbsp; Seleccione un país"
              ></Select>
            </label>

            <label htmlFor="select-tienda">
              <h5
                style={{
                  color: "black",
                  width: "30px",
                  fontSize: "12px",
                  fontWeight: "800",
                  marginLeft: "1em",
                  marginBottom: "0px",
                }}
              >
                Tienda
              </h5>
              <Select
                labelId="select-tienda"
                id="select-tienda"
                style={{
                  width: 300,
                  fontSize: "10px",
                  marginLeft: "1em",
                  marginTop: "1em",
                }}
                label="select-canal"
                placeholder="&nbsp; Seleccione una tienda"
              ></Select>
            </label>

              <label htmlFor="select-tienda">
              <h5
                style={{
                  color: "black",
                  width: "100px",
                  fontSize: "12px",
                  fontWeight: "800",
                  marginLeft: "1em",
                  marginBottom: "0px",
                }}
              >
                Canal de venta
              </h5>
              <Select
                labelId="select-tienda"
                id="select-tienda"
                style={{
                  width: 300,
                  fontSize: "10px",
                  marginLeft: "1em",
                  marginTop: "1em",
                }}
                label="select-canal"
                placeholder="&nbsp; Seleccione un canal de venta"
              ></Select>
            </label>
          </Col>           
                              </tbody>
                            </Table>
                            {/* </div> */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion> 
               
            </Col>
          </Row>         
    </>
  );
}

export default FilterMobileButton;
