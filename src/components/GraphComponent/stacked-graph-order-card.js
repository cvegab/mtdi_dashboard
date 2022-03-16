const StackedGraphOrderCard = ()=>{
    return (
<div className="legend">
                        <div className="infoLegend">
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#FFD88C",
                                  backgroundColor: "#FFD88C",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Ripley
                              <p id="ordersGraphText" className="card-category">
                                {ripleyOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "blue",
                                  backgroundColor: "blue",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;ListaTienda
                              <p id="ordersGraphText" className="card-category">
                                {listaTiendaOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#FF6059",
                                  backgroundColor: "#FF6059",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Magento
                              <p id="ordersGraphText" className="card-category">
                                {magentoOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#97D456",
                                  backgroundColor: "#97D456",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Shopify
                              <p id="ordersGraphText" className="card-category">
                                {shopifyOrders} órdenes
                              </p>
                            </p>
                          </div>
                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "yellow",
                                  backgroundColor: "yellow",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Mercadolibre
                              <p id="ordersGraphText" className="card-category">
                                {mercadoLibreOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#EDA4D1",
                                  backgroundColor: "#EDA4D1",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Chambas
                              <p id="ordersGraphText" className="card-category">
                                {chambasOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#F29A32",
                                  backgroundColor: "#F29A32",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp; Linio
                              <p id="ordersGraphText" className="card-category">
                                {linioOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#F10096",
                                  backgroundColor: "#F10096",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp; Vtex
                              <p id="ordersGraphText" className="card-category">
                                {vtexOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "purple",
                                  backgroundColor: "purple",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;WooCommerce
                              <p id="ordersGraphText" className="card-category">
                                {wooCommerceOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#00B6CB",
                                  backgroundColor: "#00B6CB",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Paris
                              <p id="ordersGraphText" className="card-category">
                                {parisOrders} órdenes
                              </p>
                            </p>
                          </div>

                          <div>
                            <p className="titleTextLegend">
                              <i
                                className="fa fa-circle"
                                style={{
                                  color: "#E4C41B",
                                  backgroundColor: "#E4C41B",
                                  borderRadius: "3px",
                                }}
                              />
                              &nbsp;Exito
                              <p id="ordersGraphText" className="card-category">
                                {exitoOrders} órdenes
                              </p>
                            </p>
                          </div>
                        </div>
                      </div>
    )
}
export default StackedGraphOrderCard;