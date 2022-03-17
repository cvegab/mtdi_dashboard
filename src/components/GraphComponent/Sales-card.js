const SalesCard = (props)=>{
  let channel = props.channel.map(item=>{
    return item.channel;
  })
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
    return(
        <div className="infoLegendPieChart">
        <div>
         {channel.includes('Vtex') && <p className="titleTextLegend">
            <i
              className="fa fa-circle"
              style={{
                color: "#F10096",
                backgroundColor: "#F10096",
                borderRadius: "3px",
              }}
            />
            &nbsp;Vtex
            {/* ["#344FD5", "#06CBC1","#F10096","#FF6059","#FFD88C","#00B6CB","#00B6CC","#97D456","#FF6059",'yellow','red'], */}
            <p className="card-category">
              {(() => {
                let number =vtex;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
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
            &nbsp;Linio
            <p className="card-category">
              {(() => {
                let number =linio;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>
        <div>
         {channel.includes('MercadoLibre')&& <p className="titleTextLegend">
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
                let number =mercadoLibre;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Exito')&& <p className="titleTextLegend">
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
                let number = exito;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>
        <div>
        {channel.includes('Ripley')&&<p className="titleTextLegend">
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
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p> }
        </div>

        <div>
        {channel.includes('Shopify')&&  <p className="titleTextLegend">
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
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Paris')&& <p className="titleTextLegend">
            <i
              className="fa fa-circle"
              style={{
                color: "#00B6CB",
                backgroundColor: "#00B6CB",
                borderRadius: "3px",
              }}
            />
            &nbsp; Paris
            <p className="card-category">
              {(() => {
                let number = paris;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
       
        {channel.includes('Magento')&&<p className="titleTextLegend">
            <i
              className="fa fa-circle"
              style={{
                color: "#FF6059",
                backgroundColor: "#FF6059",
                borderRadius: "3px",
              }}
            />
            &nbsp; Magento
            <p className="card-category">
              {(() => {
                let number = magento;
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Woocommerce') &&<p className="titleTextLegend">
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
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
        {channel.includes('Chambas')&&<p className="titleTextLegend">
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
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {" "}
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>

        <div>
         {channel.includes('ListaTienda')&& <p className="titleTextLegend">
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
                let formatted = new Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(number);
                return (
                  <p className="numberTextLegend">
                    {formatted}
                  </p>
                );
              })()}
            </p>
          </p>}
        </div>
      </div>
    )
}
export default SalesCard;