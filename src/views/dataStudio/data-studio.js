import React, { useEffect, useState } from "react";
import { Select, MenuItem, unstable_createMuiStrictModeTheme } from "@material-ui/core";
import {
  Button,
  Col,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
let iarray = [
  {
    _id: "627ab773f059a53c78f193e0",
    id: 1,
    tienda: "Softys Colombia",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/bc57bfbf-2ee5-4183-8ab0-75a1d8f5d4b1/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e1",
    id: 2,
    tienda: "Demaria",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/206e8151-91f8-4aa8-ab1c-648dac4f837f/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e2",
    id: 3,
    tienda: "Unilever",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/6caf6c50-7e30-4d78-86aa-f88eb122cb4d/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e3",
    id: 4,
    tienda: "Faber Castell",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/5da12396-be3f-42c3-9e39-2f4f01d13a4c/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e4",
    id: 5,
    tienda: "Mercado Carozzi",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/77c06292-af34-45d8-a020-9b5f269e338f/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e5",
    id: 6,
    tienda: "SC Johnson",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/9d9624cd-7e07-44be-af50-0597adecd6fc/page/p_1kci15aouc",
  },
  {
    _id: "627ab773f059a53c78f193e6",
    id: 7,
    tienda: "Softys Televenta",
    habilitado: true,
  },
  {
    _id: "627ab773f059a53c78f193e7",
    id: 8,
    tienda: "CCU",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/83a443b8-3415-4d88-bf5a-2d15072d9124/page/p_du95zjtwpc",
  },
  {
    _id: "627ab773f059a53c78f193e8",
    id: 9,
    tienda: "Softys",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/ee93fc08-f2df-488a-80a8-25043c599576/page/RkYTC",
  },
  {
    _id: "627ab773f059a53c78f193e9",
    id: 10,
    tienda: "Enex",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/c24a68f5-79cd-4016-9bef-a98221b0f1a0/page/RkYTC",
  },
  {
    _id: "627ab774f059a53c78f193ea",
    id: 11,
    tienda: "Carozzi Fs",
    habilitado: true,
    datastudio_iframe:
      "https://datastudio.google.com/embed/reporting/ec50d167-be9f-41cb-a735-062876c1d08e/page/RkYTC",
  },
];
const DataStudio = () => {
  const [country, setcountry] = useState("");
  const [store, setstore] = useState("");
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const [storeId, setstoreId] = useState(0);
  const [iframeArray, setiframeArray] = useState([]);
  const [iframeUrl, setiframeUrl] =
    useState();
    // "https://datastudio.google.com/embed/reporting/206e8151-91f8-4aa8-ab1c-648dac4f837f/page/RkYTC"
  useEffect(() => {
    fetchFilterData();
    fetchIframes();
  }, []);
  const handleCountryChange = (event) => {
    setcountry(event.target.value);

    const val = filteredCountryData.filter(function (item) {
      if (item.country === event.target.value) {
        return item;
      }
    });
    console.log(val[0]);
    if (localStorage.getItem("ut") === "2" || localStorage.getItem("ut") === "3") {
      const kamstore = localStorage.getItem("st");
      console.log(kamstore);
      var b = kamstore.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      console.log(b);
      let finalKamStore = [];
      for (let i = 0; i <= b.length - 1; i++) {
        let x = val[0].stores.filter((item) => {
          return item.value === b[i];
        });
        finalKamStore.push(x);
      }
      var flattened = [].concat.apply([], finalKamStore);
      console.log(flattened);
      setfilteredStoreData(flattened);
      console.log(finalKamStore);
    }
    if (localStorage.getItem("ut") === "1") {
      setfilteredStoreData(val[0].stores);
    }
    //setfilteredStoreData(val[0].stores);
  };
  const handleStoreChange = (event) => {
    setstore(event.target.value);

    const val = filteredStoreData.filter(function (item) {
      if (item.store === event.target.value) {
        return item;
      }
    });
    console.log(val[0].value);
    setstoreId(val[0].value);
  };
  const applyIframes = () => {
    console.log(storeId);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store?id=${storeId}`;

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let ob = JSON.parse(result);
        console.log(ob.datastudio_iframe);
        setiframeUrl(ob.datastudio_iframe);
        // console.log(JSON.parse(result[0].datastudio_iframe));
        //setiframeArray(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
    // const selectedIframe = iframeArray.filter((item) => {
    //   return storeId === item.id;
    // });
    // console.log(selectedIframe[0].datastudio_iframe);
    // setiframeUrl(selectedIframe[0].datastudio_iframe);
  };
  const fetchIframes = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let url = "";
    if (localStorage.getItem("ut") === "1") {
      console.log('HI USER')
      const ID= 2;
      url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store?id=${ID}`;
    }
    if (localStorage.getItem("ut") === "2") {
      console.log("oh noo");
      let userStoreId = localStorage.getItem("st");
      var b = userStoreId.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      let parseduserStoreId = b[0];
      console.log(parseduserStoreId);
      url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store?id=${parseduserStoreId}`;
    }
    if (localStorage.getItem("ut") === "3") {
      console.log("oh noo");
      let userStoreId = localStorage.getItem("st");
      var b = userStoreId.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      let parseduserStoreId = b[0];
      console.log(parseduserStoreId);
      url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store?id=${parseduserStoreId}`;
    }
    console.log(url);
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let ob = JSON.parse(result);
        console.log(ob.datastudio_iframe);
        setiframeUrl(ob.datastudio_iframe);
        // console.log(JSON.parse(result[0].datastudio_iframe));
        //setiframeArray(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  };
  const fetchFilterData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(obj);
        if (localStorage.getItem("ut") === "2" || localStorage.getItem("ut") === "3") {
          let kamCountryArray = localStorage.getItem("ct");
           
          var b = kamCountryArray.split(",").map(function (item) {
            return parseInt(item, 10);
          });
          console.log(b);
          let finalKamCountry = [];
          for (let i = 0; i <= b.length - 1; i++) {
            let x = obj.filter((item) => {
              return item.value === b[i];
            });
            finalKamCountry.push(x);
          }
          var flattened = [].concat.apply([], finalKamCountry);
          console.log(flattened);
          setfilteredCountryData(flattened);
          // console.log(kamCountryArray);
          // const kamCountry = obj.filter((item) => {
          //   return item.value === Number(kamCountryArray);
          // });
          // console.log(kamCountry);
          // setfilteredCountryData(kamCountry);
        }
        if (localStorage.getItem("ut") === "1") {
          setfilteredCountryData(obj);
        }

        // setfilteredStoreData(y[0].stores);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <React.Fragment>
      <div style={{ width: "100%", height: "100px", marginLeft: "100px" }}>
        <label htmlFor="select-country">
          <h5
            style={{
              color: "black",
              width: "30px",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
            }}
          >
            Pa??s
          </h5>
          <Select
            labelId="select-country"
            id="select-country"
            style={{
              width: "193px",
              height: "46px",
              marginLeft: "1em",
              backgroundColor: "white",
              borderRadius: "17px",
              marginBottom: "1em",
              fontSize: "10px",
              marginTop: "1em",
            }}
            value={country}
            label="Country"
            placeholder="&nbsp;&nbsp; Seleccione un pa??s"
            onChange={handleCountryChange}
          >
            {Array.from(new Set(filteredCountryData.map((obj) => obj))).map(
              (period) => {
                return (
                  <MenuItem
                    style={{
                      width: "193px",
                      height: "46px",
                      backgroundColor: "white",
                    }}
                    value={period.country}
                  >
                    {period.country}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </label>
        <label htmlFor="select-tienda">
          <h5
            style={{
              color: "black",
              fontSize: "12px",
              fontWeight: "800",
              marginLeft: "1em",
              marginBottom: "0px",
              marginTop: "1em",
            }}
          >
            Tienda
          </h5>
          <Select
            labelId="select-tienda"
            id="select-tienda"
            style={{
              width: "193px",
              height: "46px",
              marginLeft: "1em",
              backgroundColor: "white",
              borderRadius: "17px",
              fontSize: "10px",
              marginLeft: "1em",
              marginTop: "1em",
            }}
            value={store}
            // label="select-canal"
            placeholder="&nbsp;&nbsp; Seleccione una tienda"
            onChange={handleStoreChange}
          >
            {Array.from(new Set(filteredStoreData.map((obj) => obj.store))).map(
              (period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              }
            )}
          </Select>
        </label>
        <Button
          color="primary"
          style={{
            borderRadius: "22px",
            color: "#FFFFFF",
            marginLeft: "1em",
            textTransform: "none",
            letterSpacing: "1px",
            width: "120px",
            height: "46px",
            fontWeight: "600",
          }}
          // className="thirdStepTour"
          onClick={applyIframes}
        >
          Aplicar
        </Button>
      </div>
      <div style={{ backgroundColor: "white", width: "100%", height: "100vh" }}>
        <iframe
          src={iframeUrl}
          style={{
            position: "relative",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            width: "95%",
            height: "100%",
            marginLeft: "50px",
            border: "none",
            padding: "0",
            overflow: "hidden",
            // zIndex: "999999",
          }}
        ></iframe>
      </div>
    </React.Fragment>
  );
};
export default DataStudio;
// marginLeft:'250px',
