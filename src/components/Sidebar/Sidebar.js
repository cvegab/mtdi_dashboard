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
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse, Button } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import avatar from "assets/img/faces/CamiloVega.jpg";
import logo1 from "assets/img/logo-instance-white.png";
import logo2 from "assets/img/favicon.png";
import UserProfile from "views/pages/UserProfile.js";
// import LogoutIcon from "assets/img/logout-icon.png"
import "../../assets/css/global.css";

var ps;

function Sidebar(props) {
  const [openAvatar, setOpenAvatar] = React.useState(false);
  const [collapseStates, setCollapseStates] = React.useState({});
  const [firstName, setfirstName] = useState("");

  const sidebar = React.useRef();
  // this creates the intial state of this component based on the collapse routes
  // that it gets through props.routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !collapseStates[prop.state];
        return (
          <li
            className={getCollapseInitialState(prop.views) ? "active" : ""}
            key={key}
          >
            <a
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={collapseStates[prop.state]}
              onClick={(e) => {
                e.preventDefault();
                setCollapseStates(st);
              }}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <p>
                    {prop.name}
                    <b className="caret" />
                  </p>
                </>
              ) : (
                <>
                  <span className="sidebar-mini-icon">{prop.mini}</span>
                  <span className="sidebar-normal">
                    {prop.name}
                    <b className="caret" />
                  </span>
                </>
              )}
            </a>
            <Collapse isOpen={collapseStates[prop.state]}>
              <ul className="nav">{createLinks(prop.views)}</ul>
            </Collapse>
          </li>
        );
      }
      return (
        <li className={activeRoute(prop.layout + prop.path)} key={key}>
          <NavLink to={prop.layout + prop.path} activeClassName="">
            {prop.icon !== undefined ? (
              <>
                <i className={prop.icon} />
                <p>{prop.name}</p>
              </>
            ) : (
              <>
                <span className="sidebar-mini-icon">{prop.mini}</span>
                <span className="sidebar-normal">{prop.name}</span>
              </>
            )}
          </NavLink>
        </li>
      );
    });
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    console.log(localStorage.getItem("first"));
    // if you are using a Windows Machine, the scrollbars will have a Mac look
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      // we need to destroy the false scrollbar when we navigate
      // to a page that doesn't have this component rendered
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  React.useEffect(() => {
    setCollapseStates(getCollapseStates(props.routes));
    console.log("hello");
    console.log(localStorage.getItem("first"));
    // setTimeout(() => {
    //   console.log(localStorage.getItem("first"));
    //   setfirstName(localStorage.getItem("first"));
    // }, 500);
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("first");
    localStorage.removeItem("last");
    window.location.replace("https://dev.instancelatam.com/login");
    // http://localhost:3000/admin/dashboard?name=sofiavatar@chambas.cl&pass=SXB8TbidQGv4Z/CuvvLWhbfFQxiHVQcb0BEZ7NTEhuQ=
  };
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          // href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo2} alt="Instance-logo" />
          </div>
        </a>
        <a
          // href="https://www.creative-tim.com"
          className="textCompany logo-normal"
        >
          <img src={logo1} alt="Instance-logo" width="50%" />
        </a>
      </div>

      <div className="sidebar-wrapper" ref={sidebar}>
        <div className="user">
          <div className="photo">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="info">
            <a
              href="#profile"
              data-toggle="collapse"
              aria-expanded={openAvatar}
              onClick={() => setOpenAvatar(!openAvatar)}
            >
              <a onClick={UserProfile} className="textProfile">
                {localStorage.getItem("first")} {localStorage.getItem("last")}
                {/* <b className="caret" /> */}
              </a>
            </a>
            {/* <Collapse isOpen={openAvatar}>
              <ul className="nav">
                <li>
                  <NavLink to="/admin/user-profile" activeClassName="">
                    <span className="sidebar-mini-icon">MP</span>
                    <span className="sidebar-normal">My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/user-profile" activeClassName="">
                    <span className="sidebar-mini-icon">EP</span>
                    <span className="sidebar-normal">Editar Perfil</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/user-profile" activeClassName="">
                    <span className="sidebar-mini-icon">O</span>
                    <span className="sidebar-normal">Opciones</span>
                  </NavLink>
                </li>
              </ul>
            </Collapse> */}
          </div>
        </div>

        <Nav>{createLinks(props.routes)}</Nav>

        <div className="logo">
          <a
            // href="https://www.creative-tim.com"
            className="logo-mini "
          >
            {/* <button className="logoutButtonMini">
            <img src={LogoutIcon} alt="logoutMini" />
          </button> */}
            <Button
              className="btn-round btn-icon"
              color="primary"
              style={{ color: "#ffffff" }}
            >
              <i className="nc-icon nc-user-run" />
            </Button>
          </a>
          <a
            // href="https://www.creative-tim.com"
            className="logo-normal"
          >
            <Button
              onClick={logoutHandler}
              color="primary"
              style={{
                borderRadius: "22px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                letterSpacing: "1px",
                width: "200px",
                height: "60px",
              }}
            >
              <span className="btn-label">
                <i className="nc-icon nc-user-run" />
              </span>
              Cerrar Sesión
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
