import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  let search = window.location.search;
  console.log(search);
  let params = new URLSearchParams(search);
  let Name = search.split("?")[1];
  console.log(Name);
  let password = search.split("&pass=")[1];
  console.log(password);
  var mySubString = search.substring(
    search.indexOf("?") + 1,
    search.lastIndexOf("&")
  );

  let userName = mySubString.split("=")[1];
  console.log("userName is" + userName);

  console.log(params.name);
  useEffect(() => {
    console.log("hello");
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: userName,
      // password: "SXB8TbidQGv4Z/CuvvLWhbfFQxiHVQcb0BEZ7NTEhuQ=",
      password: password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result === `"Autorizado"`) {
          setisAuthenticated(true);
        } else {
          setisAuthenticated(false);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

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
