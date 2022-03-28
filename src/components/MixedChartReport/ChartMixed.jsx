import React from "react";
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
import { Line, Bar, Pie, Chart } from "react-chartjs-2";
import "./ChartMixed.css";
// import MixedAndPieChart from "components/GraphComponent/mixed-and-pie-chart";
import MixedAndPieChart from "../../components/GraphComponent/mixed-and-pie-chart";

const ChartMixed = (props) => {
  return (
    <div style={{ margin: "30px" }}>
      <Card
        className="card-chart"
        id="mixedChartCustom"
        style={{ borderRadius: "40px" }}
      >
        <CardHeader>
          <CardTitle id="textNameTable">
            <strong className="title-chartMixed">{props.title}</strong>
          </CardTitle>
          <p className="card-category"> </p>
        </CardHeader>
        <CardBody>
          <MixedAndPieChart
            mixedChartData={props.mixedChartData}
          ></MixedAndPieChart>
        </CardBody>
        <br></br>
        <br></br>
      </Card>
    </div>
  );
};

export default ChartMixed;
