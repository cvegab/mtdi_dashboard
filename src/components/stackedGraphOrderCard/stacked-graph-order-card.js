const StackedGraphOrderCard = (props) => {
  let channel = props.channel.map(item=>{
    return item.channel;
  })
  console.log(channel);
  let vtex = props.vtex;
  let linio = props.linio;
  let magento = props.magento;
  let mercadoLibre = props.mercadoLibre;
  let exito = props.exito;
  let ripley = props.ripley;
  let shopify = props.shopify;
  let paris = props.paris;
  let wooCommerce = props.wooCommerce;
  let chambas = props.chambas;
  let listTienda = props.listaTienda;
  return (
    <div className="legend">
      <div className="infoLegend">
        <div>
        {channel.includes('Ripley') &&   <p className="titleTextLegend">
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
              {ripley} órdenes
            </p>
          </p>}
        </div>
        <div>
        {channel.includes('ListaTienda') && <p className="titleTextLegend">
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
              {listTienda} órdenes
            </p>
          </p>}
        </div>
        <div>
        {channel.includes('Magento') && <p className="titleTextLegend">
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
              {magento} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Shopify') && <p className="titleTextLegend">
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
              {shopify} órdenes
            </p>
          </p>}
        </div>
        <div>
        {channel.includes('MercadoLibre') &&  <p className="titleTextLegend">
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
              {mercadoLibre} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Chambas') && <p className="titleTextLegend">
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
              {chambas} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Linio')&& <p className="titleTextLegend">
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
              {linio} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Vtex')&& <p className="titleTextLegend">
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
              {vtex} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Woocommerce')&&  <p className="titleTextLegend">
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
              {wooCommerce} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Paris')&&  <p className="titleTextLegend">
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
              {paris} órdenes
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Exito')&&  <p className="titleTextLegend">
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
              {exito} órdenes
            </p>
          </p>}
        </div>
      </div>
    </div>
  );
};
export default StackedGraphOrderCard;
