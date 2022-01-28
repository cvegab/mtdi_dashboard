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

const MOCKUP_DATA = [{"id_mtdi":"wo619e6fd7ceb34c0ebe9c2525","canal_de_venta":"Woocommerce","tienda":"I Am Not Plastic","cliente":"I Am Not Plastic","order_id":"3578","pais":"Chile","fecha_creacion":"2021-11-24 13:44:28","valor_shipping":"0","estado_pago":"","estado_oc":"processing","estado_delivery":"","precio_sin_shipping":17460,"comprador":"Silvana Laissle Casas del Valle","hub":"Transbank Webpay Plus","rut":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619e537a04d828ee128f3f05","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10140","pais":"Chile","fecha_creacion":"2021-11-24 11:30:54","valor_shipping":"0","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":40240,"comprador":"Nelson Cuevas Ibez","hub":"Flow Webpay","rut":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619e45a66c0cdc2c70602d9d","canal_de_venta":"Woocommerce","tienda":"I Am Not Plastic","cliente":"I Am Not Plastic","order_id":"3577","pais":"Chile","fecha_creacion":"2021-11-24 10:47:47","valor_shipping":"0","estado_pago":"","estado_oc":"cancelled","estado_delivery":"","precio_sin_shipping":15730,"comprador":"Laura Yaez","hub":"Transbank Webpay Plus","rut":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619e33d05792f573168a5710","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4241833459866,"pais":"Chile","fecha_creacion":"2021-11-24 09:31:03","shipping_id":3539160170650,"valor_shipping":4502,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"21990","comprador":"genaro vasquez","hub":"mercado_pago","rut":"genarovasquezmunoz@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619e061e6761bf10263c3173","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10139","pais":"Chile","fecha_creacion":"2021-11-24 06:00:30","valor_shipping":"0","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":31320,"comprador":"Diego Montenegro Ducaud","hub":"Flow Webpay","rut":"","dte":"https://app2.bsale.cl/view/48940/db880b39ad29.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619db8c5ed9802e948e71d84","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4241369792666,"pais":"Chile","fecha_creacion":"2021-11-24 00:52:46","shipping_id":3538750767258,"valor_shipping":3130,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"11990","comprador":"Daniel Vera","hub":"mercado_pago","rut":"saimonjre123@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d992002cbec9fa16632fe","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4241233805466,"pais":"Chile","fecha_creacion":"2021-11-23 22:20:00","shipping_id":3538632573082,"valor_shipping":3400,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"15393","comprador":"macarena rosi","hub":"mercado_pago","rut":"macarenarosi@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d8e99d176099467c766cf","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10138","pais":"Chile","fecha_creacion":"2021-11-23 21:54:49","valor_shipping":"0","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":50120,"comprador":"Gonzalo Silva mauri","hub":"Flow Webpay","rut":"","dte":"https://app2.bsale.cl/view/48940/3e920b1695ba.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d8e9d058da8d585626dab","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10137","pais":"Chile","fecha_creacion":"2021-11-23 21:39:41","valor_shipping":"2490","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":20130,"comprador":"Javiera Cornejo riquelme","hub":"Flow Webpay","rut":"","dte":"https://app2.bsale.cl/view/48940/7f3a0c48972b.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d6ef04ba7b1b40313737f","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4241071898778,"pais":"Chile","fecha_creacion":"2021-11-23 19:34:36","shipping_id":3538492686490,"valor_shipping":3130,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"23960","comprador":"Ricardo Vasquez","hub":"mercado_pago","rut":"paula.fariasp@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"mv619d2d86372066627","canal_de_venta":"Paris","tienda":"Paris","cliente":"Faber Castell","order_id":"247522735","pais":"CHILE","fecha_creacion":"2021-11-23 17:55:07","shipping_id":"","valor_shipping":0,"estado_pago":"completed","estado_oc":"created","estado_delivery":"pending","precio_sin_shipping":21990,"comprador":"Valeria Vilches","hub":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d4f4ec891948ad4c737b4","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10136","pais":"Chile","fecha_creacion":"2021-11-23 17:06:08","valor_shipping":"2490","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":36100,"comprador":"Cristobal Mandujano Iter","hub":"Flow Webpay","rut":"","dte":"https://app2.bsale.cl/view/48940/a7fdfd2ee26c.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d484a41d5fea16816cb01","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10135","pais":"Chile","fecha_creacion":"2021-11-23 16:57:15","valor_shipping":"0","estado_pago":"","estado_oc":"completed","estado_delivery":"","precio_sin_shipping":29320,"comprador":"Claudio Urbina Aravena","hub":"Flow Webpay","rut":"","dte":"https://app2.bsale.cl/view/48940/d67439d6c518.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d484e2a3ab6507d6a3b7c","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10134","pais":"Chile","fecha_creacion":"2021-11-23 16:55:56","valor_shipping":"0","estado_pago":"","estado_oc":"cancelled","estado_delivery":"","precio_sin_shipping":31220,"comprador":"Claudio Urbina Aravena","hub":"Flow Webpay","rut":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"wo619d48525b3f92fa5f652685","canal_de_venta":"Woocommerce","tienda":"Mercado Carozzi","cliente":"Mercado Carozzi","order_id":"10133","pais":"Chile","fecha_creacion":"2021-11-23 16:54:21","valor_shipping":"0","estado_pago":"","estado_oc":"cancelled","estado_delivery":"","precio_sin_shipping":31220,"comprador":"Claudio Urbina Aravena","hub":"Flow Webpay","rut":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d4846e468bb01b8849d71","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240842096794,"pais":"Chile","fecha_creacion":"2021-11-23 16:50:15","shipping_id":3538289033370,"valor_shipping":3400,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"44900","comprador":"Denisse Ffrench-davis","hub":"mercado_pago","rut":"denisse.udd@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d44c14c1f786e7fe2dd29","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240802316442,"pais":"Chile","fecha_creacion":"2021-11-23 16:23:48","shipping_id":3538253643930,"valor_shipping":3130,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"49990","comprador":"guillermo  ojeda","hub":"mercado_pago","rut":"gaob.9245@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d28a0e2e3b101755f414b","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240629891226,"pais":"Chile","fecha_creacion":"2021-11-23 14:23:05","shipping_id":3538104713370,"valor_shipping":4502,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"21040","comprador":"Francisca Mancilla","hub":"mercado_pago","rut":"shiyto@icloud.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d28a2661505039e4328ee","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240594927770,"pais":"Chile","fecha_creacion":"2021-11-23 14:02:24","shipping_id":3538073813146,"valor_shipping":0,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"113391","comprador":"raimundo bravo","hub":"mercado_pago","rut":"rabravof@gmail.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619d1a8f478a4f80d3205b41","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240545874074,"pais":"Chile","fecha_creacion":"2021-11-23 13:27:48","shipping_id":3538031607962,"valor_shipping":4502,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"19990","comprador":"Israel Gutirrez","hub":"mercado_pago","rut":"igutierrez@live.cl","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"li619d2a2eb08d9c1625cd76ea","canal_de_venta":"Linio","tienda":"Softys Colombia","cliente":"Softys Colombia","order_id":"8799784","fecha_creacion":"2021-11-23 12:44:18","shipping_id":"","valor_shipping":0,"estado_pago":"","estado_oc":"shipped","estado_delivery":"","precio_sin_shipping":17200,"comprador":"bsbbsns jsbsmsbs","hub":"Quickpay_Lpay","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"sh619cfe6f945af8bdd64c4dda","canal_de_venta":"Shopify","tienda":"Faber Castell","cliente":"Faber Castell","order_id":4240361029786,"pais":"Chile","fecha_creacion":"2021-11-23 11:14:17","shipping_id":3537873207450,"valor_shipping":4502,"estado_pago":"","estado_oc":"paid","estado_delivery":"","precio_sin_shipping":"31506","comprador":"Tamara Ponce","hub":"mercado_pago","rut":"tamara_pomcem@outlook.com","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"ri1414704611630134404","canal_de_venta":"Ripley","tienda":"CAROZZI FS","cliente":"CAROZZI FS","order_id":"143136747OPL-A","pais":"Chile","fecha_creacion":"2021-11-23 01:55:48","shipping_id":"712469887334","valor_shipping":0,"estado_pago":"","estado_oc":"RECEIVED","estado_delivery":"","precio_sin_shipping":18895,"comprador":"Maria Teresa Benavides","hub":"TARJETA_RIPLEY_INST","rut":"","dte":"https://app2.bsale.cl/view/48940/d5532a2180f4.pdf?sfd=99","dte_exist":"","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""},
{"id_mtdi":"mv619c10be635232361","canal_de_venta":"Paris","tienda":"Paris","cliente":"Faber Castell","order_id":"247504856","pais":"CHILE","fecha_creacion":"2021-11-22 21:25:06","shipping_id":"","valor_shipping":0,"estado_pago":"completed","estado_oc":"created","estado_delivery":"pending","precio_sin_shipping":21990,"comprador":"Marjorie Boza","hub":"","dte":"","dte_exist":"disabled","official_store":"","tipo_envio":"","id_mpago":"","status_detail":""}];

const ClientTable = () => {
  // console.log(props.orderData);
  return (
    <div>
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Order Table</CardTitle>
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
                  {MOCKUP_DATA.map((item, index) => {
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
export default ClientTable;