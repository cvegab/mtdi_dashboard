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
const MixedAndPieChart = (props) => {
  return (
     
    <Col id="ColMixedChart" lg="7" md="12" sm="12">
      <Card className="car-chart" id="mixedChartCustom">
        <CardHeader>
          <CardTitle id="textNameTable">
            <strong>Resumen general de órdenes y ventas</strong>
          </CardTitle>
          <p className="card-category"> </p>
        </CardHeader>
        <CardBody>
          <br></br>
          <br></br>
          <Bar
            data={props.mixedChartData}
            options={props.mixedChartData.options}
            style={{ width: "400px", height: "300px" }}
          />
        </CardBody>
        <br></br>
        <br></br>
      </Card>
    </Col>
    
  );
};
export default MixedAndPieChart;
