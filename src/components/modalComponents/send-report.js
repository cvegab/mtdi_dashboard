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
          >
          </SendReportChips>
        </Modal>
      );
}
export default SendReport;