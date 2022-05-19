import Logysto from "views/manualOrders/FormLogysto.js";
// import Charts from "views/Charts.js";

import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard.js";
import MtdiTable from "views/Orders/mtdi-table.js";
import iconOrdenes from "assets/img/icons-ordenes.png";
import iconReportes from "assets/img/icons-reportes.png";
import MtdiReports from "views/Dashboard/mtdi_reports";
import CustomerMaintainer from "views/CustomerMaintainer/customer-maintainer";
import EnterpriseManage from "views/EnterpriseManage/EnterpriseManage"
import DataStudio from "views/dataStudio/data-studio";

const kamRoutes= [
    {
      path: "/orders",
      name: "Órdenes de compra",
      // mini: "RT",
      icon: "nc-icon nc-single-copy-04",
      component: MtdiTable,
      layout: "/admin",
    },
  
   
    {
      path: "/indicadores",
      name: "Indicadores",
      icon: "nc-icon nc-spaceship",
      component: DataStudio,
      layout: "/admin",
  
     },
     {
      path: "/dashboard",
      name: "Dashboard",
      icon: "nc-icon nc-chart-bar-32",
      component: MtdiReports,
      layout: "/admin",
  
     },
  ];
  export default kamRoutes;