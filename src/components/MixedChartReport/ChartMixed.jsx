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
import './ChartMixed.css';



const mixedChart = {
  data: {
    datasets: [{
        type: 'bar',
        label: 'Ventas',
        data: [1200, 10020, 3000, 1240,5000,4500,1200,3000,120,2300,3000,4000,10000],
        backgroundColor: "#344FD5",
        borderRadius: 5,
        order: 1,
    }, {
        type: 'line',
        label: 'Órdenes',
        data: [500, 150, 50, 2000,50, 5000, 1280, 1000,50, 250, 350, 5000,5500],
        backgroundColor: "#06CBC1",
        borderColor: "#06CBC1",
        fill: false,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 5,
        type: "line",
        order: 0,
        color: "#9f9f9f",
    }],
    labels: [
      'Vtex',
      'Linio',
      'Magento',
      'Shopify',
      'Chambas',
      'Prestashop',
      'ListaTienda',
      'Ripley',
      'Paris',
      'Woocommerce',
      'Mercadolibre',
      'Exito',
      'Falabella'
    ]
  },
};



const ChartMixed = (props) => {
  return (
    <div style={{margin:"30px"}}>
                      <Card className="car-chart" id="mixedChartCustom">
                      <CardHeader>
                      <CardTitle id="textNameTable">
                        <strong className="title-chartMixed">{props.title}</strong>
                      </CardTitle>
                      <p className="card-category"> </p>
                    </CardHeader>
                    <CardBody>
                    
                      <Bar
                        data={mixedChart.data}
                        // options={mixedChart.options}
                        
                      />
                    </CardBody>
                    <br></br>
                    <br></br>
                  </Card>
    </div>
  )
}

export default ChartMixed