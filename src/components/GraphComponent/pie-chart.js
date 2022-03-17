import React from "react";
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
    Input,
    Spinner,
    Badge,
  } from "reactstrap";
const PieChart = (props)=>{
return (
    <React.Fragment>
    <CardHeader>
    <CardTitle id="textNameTable">
      <strong>Participación canal de venta</strong>
    </CardTitle>
  </CardHeader>
  <CardBody
  // style={{ height: "342px" }}
  >
    <Pie
      id="barChartCustom"
      data={props.pieChartData}
      options={props.pieChartData.options}
      style={{ width: "300px" }}
    />
  </CardBody>
  </React.Fragment>
)
}
export default PieChart;