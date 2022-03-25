import Modal from "../UI/Modal";
import Chips from "./chips";
import { Form, FormGroup, Label } from "reactstrap";
import SendReportChips from "./sendReportChips";
const SendReport = (props)=>{
    return (
        
        <Modal onhideModal={props.onhideModal}>
             
        <SendReportChips 
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
          >
          </SendReportChips>
        </Modal>
      );
}
export default SendReport;