const StackedGraphSalesCard = (props)=>{
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
          <p className="card-category">
            {(() => {
              let number = ripley;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = listTienda;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = magento;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = shopify;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = mercadoLibre;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = chambas;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = linio;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = vtex;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = wooCommerce;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = 109090;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
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
          <p className="card-category">
            {(() => {
              let number = 109090;
              let formatted = new Intl.NumberFormat(
                "es-CL",
                {
                  style: "currency",
                  currency: "CLP",
                }
              ).format(number);
              return <div> {formatted}</div>;
            })()}
          </p>
        </p>
      </div>
    </div>
  </div>
   ) 
}   
export default StackedGraphSalesCard