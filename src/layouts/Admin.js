/*!

=========================================================
* Paper Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";


import routes from "routes.js";
import kamRoutes from "kamRoutes";

var ps;

function Admin(props) {
  console.log(props.userType);
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const [sidebarMini, setSidebarMini] = React.useState(false);
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanel.current);
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
  
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const getRoutes = (routes) => {
    console.log(props.userType);
    if(props.userType === '2'){
      return kamRoutes.map((prop, key) => {
        if (prop.collapse) {
          return getRoutes(prop.views);
        }
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    }
    if(props.userType === '3'){
      return kamRoutes.map((prop, key) => {
        if (prop.collapse) {
          return getRoutes(prop.views);
        }
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    }
    if(props.userType === '1'){
      return routes.map((prop, key) => {
        if (prop.collapse) {
          return getRoutes(prop.views);
        }
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    }
   
  };
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    console.log(color);
    setBackgroundColor(color);
  };
  const handleMiniClick = () => {
    if (document.body.classList.contains("sidebar-mini")) {
      setSidebarMini(false);
    } else {
      setSidebarMini(true);
    }
    document.body.classList.toggle("sidebar-mini");
  };
  return (
    <div className="wrapper">
      {props.userType ==='2' &&    <Sidebar
        {...props}
        routes={kamRoutes}
        bgColor='white'
        activeColor='white'
      />}
       {props.userType ==='1' &&    <Sidebar
        {...props}
        routes={routes}
        bgColor='white'
        activeColor='white'
      />}
         {props.userType ==='3' &&    <Sidebar
        {...props}
        routes={kamRoutes}
        bgColor='white'
        activeColor='white'
      />}
   {/* <Sidebar
        {...props}
        routes={routes}
        bgColor='white'
        activeColor='white'
      /> */}
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar {...props} handleMiniClick={handleMiniClick} />
        {/* <Switch>{getRoutes(routes)}</Switch> */}
       {props.userType === '2' &&  <Switch>{getRoutes(kamRoutes)}</Switch>}
       {props.userType === '3' &&  <Switch>{getRoutes(kamRoutes)}</Switch>}
        {props.userType === '1' &&  <Switch>{getRoutes(routes)}</Switch>}
        {
          // we don't want the Footer to be rendered on full screen maps page
          props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
      {/* <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        sidebarMini={sidebarMini}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}
        handleMiniClick={handleMiniClick}
      /> */}
    </div>
  );
}

export default Admin;
