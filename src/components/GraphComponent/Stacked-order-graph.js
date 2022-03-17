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
const StackedOrderGraph = () => {
  return (
    <React.Fragment>
      <CardHeader id="textNameTable">
        <strong>Órdenes por canal de venta</strong>
      </CardHeader>
      <br></br>
      <CardBody>
        {/* <Bar data={stackedChartData} options={stackedChartData.options} /> */}
      </CardBody>
    </React.Fragment>
  );
};
export default StackedOrderGraph;
