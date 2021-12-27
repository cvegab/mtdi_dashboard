import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
  const OrderTable = (props) => {
    console.log(props.orderData);
    return (
      <div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tabla Cliente</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead className="text-primary">
                    <tr>
                      {/* <th className="text-center">#</th> */}
                      <th>orderId</th>
                      <th>Fecha De Orden</th>
                      <th className="text-center">Canal De Venta</th>
                      <th className="text-right">Tienda</th>
                      <th className="text-right">Cliente</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.orderData.map((item, index) => {
                      return (
                        <tr>
                          {/* <td className="text-center">1</td> */}
                          <td>{item.order_id}</td>
                          <td>{item.fecha_creacion}</td>
                          <td className="text-center">{item.canal_de_venta}</td>
                          <td className="text-right">{item.tienda}</td>
                          <td className="text-right">
                            {item.cliente}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
export default OrderTable;