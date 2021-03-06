import Modal from "../UI/Modal";
import Chips from "./chips";
import { Form, FormGroup, Label } from "reactstrap";
import SendReportChips from "./sendReportChips";
const SendReport = (props) => {
  console.log(props);
  return (
    <Modal onhideModal={props.onhideModal}>
     
      <SendReportChips
      onhideModal={props.onhideModal}
      totalIncome={props.totalIncome}
                dispatchCost={props.dispatchCost}
                gm={props.gm}
                conversion={props.conversion}
                totalOrders={props.totalOrders}
                totalCancelledOrders={props.totalCancelledOrders}
                totalDte={props.totalDte}
                inProcess={props.inProcess}
                inPreparation={props.inPreparation}
                readyToShip={props.readyToShip}
                onTheWay={props.onTheWay}
                reviews={props.reviews}
                totalNps={props.totalNps}
                totalClaims={props.totalClaims}
                //MIXED CHART DATA
                mixedChartData={props.mixedChartData}
                //PIE CHART DATA
                channel={props.channel}
                linioPie = {props.linioPie} vtexPie={props.vtexPie} shopifyPie={props.shopifyPie} ripleyPie={props.ripleyPie} magentoPie={props.magentoPie} wooPie={props.wooPie}  chambasPie={props.chambasPie} mercadoPie={props.mercadoPie} exitoPie={props.exitoPie} parisPie={props.parisPie} listaPie={props.listaPie}
               //STACKED SALES GRAPH
               stackedDateLabel={props.stackedDateLabel}
                      
               newlinioSalesMonthly={props.newlinioSalesMonthly}
               newVtexSalesMonthly={props.newVtexSalesMonthly}
               newRipleySalesMonthly={props.newRipleySalesMonthly}
               newChambasSalesMonthly={props.newChambasSalesMonthly}
               newMagentoSalesMonthly={props.newMagentoSalesMonthly}
               newWooCommerceSalesMonthly={props.newWooCommerceSalesMonthly}
               newShopifySalesMonthly={props.newShopifySalesMonthly}
               newMercadoSalesMonthly={props.newMercadoSalesMonthly}
               newParisSales={props.newParisSales}
               newExitoSalesMonthly={props.newExitoSalesMonthly}
               newListaSales={props.newListaSales}
               //STACKED ORDER GRAPH
               newlinioMonthly={props.newlinioMonthly}
          newVtexMonthly={props.newVtexMonthly}
          newRipleyMonthly={props.newRipleyMonthly}
          newChambasMonthly={props.newChambasMonthly}
          newMagentoMonthly={props.newMagentoMonthly}
          newWooCommerceMonthly={props.newWooCommerceMonthly}
          newShopifyMonthly={props.newShopifyMonthly}
          newMercadoOrdersMonthly={props.newMercadoOrdersMonthly}
          newParisOrders={props.newParisOrders}
          newExtitoOrders={props.newExtitoOrders}
          newListaOrders={props.newListaOrders}
          //ORDER CARD
          vtex={props.vtex}
          linio={props.linio}
          magento={props.magento}
          mercadoLibre={props.mercadoLibre}
          exito={props.exito}
          ripley={props.ripley}
          shopify={props.shopify}
          paris={props.paris}
          wooCommerce={props.wooCommerce}
          chambas={props.chambas}
          listaTienda={props.listaTienda}
                >
      </SendReportChips>
      {/* <SendReportChips
        totalIncomeformatted={props.totalIncomeformatted}
        dispatchCost={props.dispatchCost}
        gm={props.gm}
        inProcess={props.inProcess}
        onhideModal={props.onhideModal}
        inPreparation={props.inPreparation}
        readyToShip={props.readyToShip}
        onTheWay={props.onTheWay}
        totalOrders={props.totalOrders}
        totalCancelledOrders={props.totalCancelledOrders}
        totalDte={props.totalDte}
        totalNps={props.totalNps}
        reviews={props.reviews}
        totalClaims={props.totalClaims}
        vtexPie={props.vtexPie}
        linioPie={props.linioPie}
        mercadoPie={props.mercadoPie}
        exitoPie={props.exitoPie}
        ripleyPie={props.ripleyPie}
        shopifyPie={props.shopifyPie}
        parisPie={props.parisPie}
        magentoPie={props.magentoPie}
        wooPie={props.wooPie}
        chambasPie={props.chambasPie}
        listaPie={props.listaPie}
        pieChartData={props.pieChartData}
        pieChartOptions={props.pieChartData.options}
        barChartData={props.barChartData}
        barChartOptions={props.barChartOptions}
        SalesChart={props.SalesChart}
        SalesChartOptions={props.SalesChartOptions}
        newRipleySalesMonthly={props.newRipleySalesMonthly}
        newVtexSalesMonthly={props.newVtexSalesMonthly}
        newlinioSalesMonthly={props.newlinioSalesMonthly}
        newMercadoSalesMonthly={props.newMercadoSalesMonthly}
        newExitoSalesMonthly={props.newExitoSalesMonthly}
        newParisSales={props.newParisSales}
        newShopifySalesMonthly={props.newShopifySalesMonthly}
        newWooCommerceSalesMonthly={props.newWooCommerceSalesMonthly}
        newMagentoSalesMonthly={props.newMagentoSalesMonthly}
        newChambasSalesMonthly={props.newChambasSalesMonthly}
        newListaSales={props.newListaSales}
        newRipleyMonthly={props.newRipleyMonthly}
        newVtexMonthly={props.newVtexMonthly}
        newlinioMonthly={props.newlinioMonthly}
        newMercadoOrdersMonthly={props.newMercadoOrdersMonthly}
        newExtitoOrders={props.newExtitoOrders}
        newParisOrders={props.newParisOrders}
        newShopifyMonthly={props.newShopifyMonthly}
        newMagentoMonthly={props.newMagentoMonthly}
        newChambasMonthly={props.newChambasMonthly}
        newListaOrders={props.newListaOrders}
        newWooCommerceMonthly={props.newWooCommerceMonthly}
        ripley={props.ripley}
        vtex={props.vtex}
        linio={props.linio}
        mercadoLibre={props.mercadoLibre}
        exito={props.exito}
        paris={props.paris}
        shopify={props.shopify}
        wooCommerce={props.wooCommerce}
        magento={props.magento}
        chambas={props.chambas}
        listaTienda={props.listaTienda}
        stackedDateLabel={props.stackedDateLabel}
        ripleyOrders={props.ripleyOrders}
              vtexOrders={props.vtexOrders}
            linioOrders={props.linioOrders}
            mercadoLibreOrders={props.mercadoLibreOrders}
            exitoOrders={props.exitoOrders}
            parisOrders={props.parisOrders}
            shopifyOrders={props.shopifyOrders}
            magentoOrders={props.magentoOrders}
            chambasOrders={props.chambasOrders}
            listaTiendaOrders={props.listaTiendaOrders}
      ></SendReportChips> */}
    </Modal>
  );
};
export default SendReport;
