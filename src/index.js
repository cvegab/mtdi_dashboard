import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import App from "App";




ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
  //     <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
  //     <Redirect to="/admin/dashboard" />
  //   </Switch>
  // </BrowserRouter>,
     <App />,


  document.getElementById("root")
);
