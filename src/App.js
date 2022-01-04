import ClientTable from "components/client-table";
import OrderTable from "components/order-table";

// import React, { useEffect, useState } from "react";
import ExtendedTables from "views/tables/ExtendedTables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link,} from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  // const query = new URLSearchParams(useLocation().search);
  // console.log(query);
  let search = window.location.search;
  console.log(search);
let params = new URLSearchParams(search);
let Name = search.split('?')[1];
console.log(Name);
let password = search.split('&pass=')[1];
console.log(password);
var mySubString = search.substring(
  search.indexOf("?") + 1, 
  search.lastIndexOf("&")
);

let userName = mySubString.split('=')[1];
console.log('userName is' + userName);

console.log(params.name);


  // const [orderData, setorderData] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   try {
  //     console.log("hello");
  //     // const response = await fetch(
  //     //   "https://api.instancelatam.com:3001/api/ordersmv?qty=10"
  //     // );
  //     // if (!response.ok) {
  //     //   throw new Error("wrong");
  //     // }
  //     // const data = await response.json();
  //     // console.log(data[0],data[1]);
  //     setorderData(MOCKUP_DATA);
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.message);
  //   }
  // };
  return (
    <BrowserRouter>
      <Switch>
        {!isAuthenticated && (
          <Route
            component={() => {
              window.location.href = "https://dev.instancelatam.com/login";
              return null;
            }}
          />
        )}
        {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
        {isAuthenticated && (
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        )}
        {/* <Redirect to="/admin/dashboard" /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
