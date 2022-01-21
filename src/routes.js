import Calendar from "views/Calendar.js";
import Logysto from "views/FormLogysto.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";



import LockScreen from "views/pages/LockScreen.js";
import Login from "views/pages/Login.js";



import Register from "views/pages/Register.js";


import Timeline from "views/pages/Timeline.js";

import UserProfile from "views/pages/UserProfile.js";

import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard.js";

import MtdiTable from "components/Sidebar/mtdi-table";
import iconOrdenes from "assets/img/icons-ordenes.png";
import iconReportes from "assets/img/icons-reportes.png";

const routes = [
  {
    path: "/dashboard",
    name: "Órdenes de compra",
    // mini: "RT",
    icon: "nc-icon nc-single-copy-04",
    component: MtdiTable,
    layout: "/admin",
  },

  // {
  //   path: "/panels",
  //   name: "Mobile Version",
  //   icon: "nc-icon nc-support-17",
  //   component: OrderMobileCard,
  //   layout: "/admin",

  // },

  // {
  //   path: "/charts",
  //   name: "Reportes",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: Charts,
  //   layout: "/admin",

  // },

  // {
  //   path: "/logysto",
  //   name: "Ingreso manual OC",
  //   icon: "nc-icon nc-laptop",
  //   component: Logysto,
  //   layout: "/admin",
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Extended Tables",
  //   mini: "ET",
  //   component: ExtendedTables,
  //   layout: "/admin",
  // },
  //   collapse: true,
  //   name: "Pages",
  //   icon: "nc-icon nc-book-bookmark",
  //   state: "pagesCollapse",
  //   views: [
  //     {
  //       path: "/timeline",
  //       name: "Timeline",
  //       mini: "T",
  //       component: Timeline,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/login",
  //       name: "Login",
  //       mini: "L",
  //       component: Login,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/register",
  //       name: "Register",
  //       mini: "R",
  //       component: Register,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/lock-screen",
  //       name: "LockScreen",
  //       mini: "LS",
  //       component: LockScreen,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/user-profile",
  //       name: "UserProfile",
  //       mini: "UP",
  //       component: UserProfile,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Components",
  //   icon: "nc-icon nc-layout-11",
  //   state: "componentsCollapse",
  //   views: [
  //     {
  //       path: "/buttons",
  //       name: "Buttons",
  //       mini: "B",
  //       component: Buttons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/grid-system",
  //       name: "Grid System",
  //       mini: "GS",
  //       component: GridSystem,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/panels",
  //       name: "Panels",
  //       mini: "P",
  //       component: Panels,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/sweet-alert",
  //       name: "Sweet Alert",
  //       mini: "SA",
  //       component: SweetAlert,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/notifications",
  //       name: "Notifications",
  //       mini: "N",
  //       component: Notifications,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/icons",
  //       name: "Icons",
  //       mini: "I",
  //       component: Icons,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/typography",
  //       name: "Typography",
  //       mini: "T",
  //       component: Typography,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // // {
  //   collapse: true,
  //   name: "Forms",
  //   icon: "nc-icon nc-ruler-pencil",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       mini: "RF",
  //       component: RegularForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       mini: "EF",
  //       component: ExtendedForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       mini: "VF",
  //       component: ValidationForms,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       mini: "W",
  //       component: Wizard,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Tables",
  //   icon: "nc-icon nc-single-copy-04",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/regular-tables",
  //       name: "Regular Tables",
  //       mini: "RT",
  //       component: RegularTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/react-tables",
  //       name: "React Tables",
  //       mini: "RT",
  //       component: ReactTables,
  //       layout: "/admin",
  //     },
  //   ],
  // },

  // {
  //   collapse: true,
  //   name: "Órdenes",
  //   icon: "nc-icon nc-single-copy-04",
  //   state: "tablesCollapse",
  //   views: [
  //     {
  //       path: "/order-tables",
  //       name: "Order Tables",
  //       mini: "RT",
  //       component: ClientTable,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/mtdi-tables",
  //       name: "Órdenes de compra",
  //       mini: "RT",
  //       component: MtdiTable,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-tables",
  //       name: "Extended Tables",
  //       mini: "ET",
  //       component: ExtendedTables,
  //       layout: "/admin",
  //     },
  //     {
  //             path: "/react-tables",
  //             name: "React Tables",
  //             mini: "RT",
  //             component: ReactTables,
  //             layout: "/admin",
  //           },

  //   ],
  // },
  // {
  //   collapse: true,
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   state: "mapsCollapse",
  //   views: [
  //     {
  //       path: "/google-maps",
  //       name: "Google Maps",
  //       mini: "GM",
  //       component: GoogleMaps,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/full-screen-map",
  //       name: "Full Screen Map",
  //       mini: "FSM",
  //       component: FullScreenMap,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/vector-map",
  //       name: "Vector Map",
  //       mini: "VM",
  //       component: VectorMap,
  //       layout: "/admin",
  //     },
  //   ],
  // },

  // {
  //   path: "/widgets",
  //   name: "Estados de OC",
  //   icon: "nc-icon nc-support-17",
  //   component: Widgets,
  //   layout: "/admin",
  // },

  // {
  // path: "/mtdi-table",
  // name: "Maestro de productos",
  // icon: "nc-icon nc-box",
  // component: Dashboard,
  // layout: "/admin",
  // },

  // {
  //   path: "/logout",
  //   icon: "nc-icon nc-calendar-60",
  //   name: "Cerrar Sesión",
  //   layout: "/logout"
  // }
];

export default routes;
