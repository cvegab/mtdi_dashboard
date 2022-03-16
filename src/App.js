import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const [fn, setfn] = useState(localStorage.getItem('first'));
  const [ln, setln] = useState(localStorage.getItem('last'));
  const [dark, setDark] = React.useState(
    localStorage.getItem('first') !== null
  );
  let search = window.location.search;

  let params = new URLSearchParams(search);
  let Name = search.split("?")[1];

  let password = search.split("&zeek=")[1];

  let nameSubString = search.substring(
    search.indexOf("?") + 1,
    search.lastIndexOf("&")
  );

  let userName = nameSubString.split("=")[1];
  // React.useEffect(() => {
    
  //   window.addEventListener('storage', () => {
  //     const name = localStorage.getItem('first');
  //     console.log(name);
  //     setfn(name);
  //   });
    
       
  //   }, [])
 console.log(fn);
  useEffect(() => {
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
        const obj = JSON.parse(result);

        if (obj.first_name !== undefined) {
          localStorage.setItem("first", obj.first_name);
         setfn(localStorage.setItem("first", obj.first_name));
        }
        if (obj.last_name !== undefined) {
          localStorage.setItem("last", obj.last_name);
          setln(localStorage.setItem("last", obj.last_name));
         
        }
        if (
          obj.message === "Autorizado" ||
          localStorage.getItem("name") !== null
        ) {
          setisAuthenticated(true);
          localStorage.setItem("name", userName);
          localStorage.setItem(
            "password",
            "SXB8TbidQGv4Z/CuvvLWhbfFQxiHVQcb0BEZ7NTEhuQ="
          );
        } else {
          setisAuthenticated(false);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);
  if (userName === undefined && localStorage.getItem("name") === null) {
    return (window.location.href = "https://pre-production.d36thtl3fmh3ww.amplifyapp.com/");
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        {!isAuthenticated && localStorage.getItem("name") === null && (
          <Route
            component={() => {
              window.location.href = "https://pre-production.d36thtl3fmh3ww.amplifyapp.com/";
              return null;
            }}
          />
        )}
        {!isAuthenticated && localStorage.getItem("name") !== null && (
          <Route path="/admin" render={(props) => <AdminLayout {...props} name={fn} lastName={ln}/>} />
        )}
        {isAuthenticated && (
          <Route path="/admin" render={(props) => <AdminLayout {...props} name={fn} lastName={ln}/>} />
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
