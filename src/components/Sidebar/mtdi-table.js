import React, { useState, useEffect } from "react";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import MaterialTable from "material-table";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import RoomIcon from "@material-ui/icons/Room";
import { Select, MenuItem } from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";
import calendarIcon from "../../assets/img/DatePickerIcon.png";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/global.css";
import "../../assets/css/global.css";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import { Button, Col, Spinner } from "reactstrap";
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "./mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";
import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard";
import CustomLoader from "./custom-filter-row";

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <RoomIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),

  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

registerLocale("es", es);

const MtdiTable = (props) => {
  const [data, setData] = useState([]);

  const [country, setcountry] = useState("");
  const [buyer, setbuyer] = useState("");
  const [salesChannel, setsalesChannel] = useState("");
  const [store, setstore] = useState("");
  const [client, setclient] = useState("");
  const [officialStore, setofficialStore] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const [filteredChannelArray, setfilteredChannelArray] = useState([]);
  const [filteredOfficialStore, setfilteredOfficialStore] = useState([]);
  useEffect(() => {
    fetchOrderData();
    fetchFilterData();
  }, []);
  const fetchFilterData = async () => {
    console.log("fetching filetr data");
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
        console.log(result);
        var obj = JSON.parse(result);
        let countryArray = [];
        console.log(obj.stores);
        let st = "Faber Castel";
        let Y = obj.stores.filter((a) => a.stores === st);
        console.log(Y);
        // setcountry(obj.countries);
        setfilteredCountryData(obj.countries);
        setfilteredStoreData(obj.stores);
        //   countryArray.push(obj.countries);
        //   console.log(countryArray);

        // const X =  obj.countries.forEach((element,i) => {
        //    return element[i].country
        //   });
        //   console.log(X);
        // setcountry(countryArray);
        // console.log(obj.countries);
        // console.log(obj.tiendas);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    // if (country !== "") {
    //   const x = data.filter((item) => item.pais === country);

    //   setData(x);
    // }
    if (country === "Chile") {
      console.log("i am called" + country);
    }
  }, [country]);

  useEffect(() => {
    // if (salesChannel !== "") {
    //   const x = data.filter((item) =>
    //     item.canal_de_venta.includes(salesChannel)
    //   );
    //   setData(x);
    // }
    // const x =  filteredChannelArray.filter((item)=>{
    //     if(item.channel === salesChannel) return item.officialStores;
    //   })
    //   console.log(x);
    const filteredOfficialStoreArray = filteredChannelArray.map((item) => {
      if (item.channel === salesChannel) return item.officialStores;
    });
    console.log(filteredOfficialStoreArray);
    const x = filteredOfficialStoreArray.filter((item) => {
      return item !== undefined;
    });
    console.log(x);
    let y = [];

    console.log(typeof y);
    // let y = [...x];
    // console.log(typeof y);
    // console.log(y.0);

    setfilteredOfficialStore(x);
  }, [salesChannel]);

  useEffect(() => {
    // if (store !== "") {
    //   const x = data.filter((item) => item.tienda.includes(store));
    //   setData(x);
    // }
    let selectedChannelsArray;
    let selectedChannels;
    let selectedOfficialStoresArray;
    if (store === "Faber Castell") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });

      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Linio Softys Colombia") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Softys") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      console.log(selectedChannelsArray);

      const x = selectedChannelsArray.map((item) => {
        return item.officialStores; //this returns array of official stores
      });
      console.log(x);
      // selectedOfficialStoresArray = selectedStoreData[0].channels.officialStores;
      // console.log(selectedOfficialStoresArray);
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item; //this was item.channel first
      });
      console.log(selectedChannels); //this gives you only the name of array['Linio','Mercado Libre']
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "ELITE PROFESSIONAL") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "UNILEVER TOUCH") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Schneider Electric") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "ENEX CHILE") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Mercado Carozzi") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "I Am Not Plastic") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Smart Deal") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "CAROZZI FS") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Afe") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Paris") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Unilever") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Demaria") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "SOFTYSCOLOMBIA") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "RedLemon") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "INSTANCE SAS") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "EMEM5173547") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "SC Johnson") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Softys Televenta") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Tribu") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Softys Colombia") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
    if (store === "Clorox") {
      const selectedStoreData = filteredStoreData.filter((selectedStore) => {
        return selectedStore.store === store;
      });
      selectedChannelsArray = selectedStoreData[0].channels;
      const selectedChannels = selectedChannelsArray.map((item) => {
        return item;
      });
      setfilteredChannelArray(selectedChannels);
    }
  }, [store]);
  useEffect(() => {
    if (client !== "") {
      const x = data.filter((item) => item.cliente.includes(client));
      setData(x);
    }
  }, [client]);
  useEffect(() => {
    if (officialStore !== "") {
      const x = data.filter((item) =>
        item.official_store.includes(officialStore)
      );
      setData(x);
    }
  }, [officialStore]);
  useEffect(() => {
    if (startDate !== null) {
      const x = data.filter((item) =>
        item.fecha_creacion.includes(
          startDate.getFullYear() +
            "-" +
            (startDate.getMonth() + 1) +
            "-" +
            startDate.getDate()
        )
      );
    }
  }, [startDate]);

  //  let qty = 0;

  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  //      qty = "5"
  //    } else {
  //      qty = "20"
  //    };

  const fetchOrderData = async () => {
    let countryValue = 3;
    setisLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "mbHqRHonVS4HrcTZPIjhd5tHYkgzgpm38pH8gPpj");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      const response = await fetch(
        "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=20&user=admin&store=0&page=1&country=1&dateFrom=2021-12-01&dateTo=2021-12-03",

        requestOptions
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      // console.log(data);

      setData(data.message);

      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showModalHandler = (row) => {
    setshowModal(true);
  };
  const hideModalHandler = () => {
    setshowModal(false);
  };
  const showPdfHandler = () => {
    window.open(buyer.dte);
  };
  const columns = [
    {
      title: "OpsId",
      field: "order_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
        borderRadius: "20px 0px 0px 20px",
      },
    },
    {
      title: "Fecha de Orden",
      field: "fecha_creacion",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Canal de Venta",
      field: "canal_de_venta",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tienda",
      field: "tienda",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Cliente",
      field: "cliente",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tienda Oficial",
      field: "official_store",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Orden de Compra",
      field: "order_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "País",
      field: "pais",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Estado de Pedido",
    //   field: "order_status",

    //   render: (rowData) => {
    //     if (rowData.order_status === "Cancelado") {
    //       return <div className={classes.cancelado}>Cancelado</div>;
    //     }
    //     if (rowData.order_status === "Despachado") {
    //       return <div className={classes.despachado}>Despachado</div>;
    //     }
    //     if (rowData.order_status === "Confirmado") {
    //       return <div className={classes.confirmado}>Confirmado</div>;
    //     }
    //   },

    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "DTE",
      field: "dte",

      render: (rowData) => {
        if (rowData.dte === "") {
          return  <div> No &nbsp;  <span
                  style={{ marginLeft: "4px" }}
                  className={classes.noIcon}
                >
                  <img src={noIcon} />
                </span>
                &nbsp;
                <span className={classes.greyIcon}>
                  <img src={greyIcon} />
                </span>
              </div>;
        }
        if (rowData.dte === "-") {
          return   <div>
              No &nbsp;
              <span
              style={{ marginLeft: "4px" }}
              className={classes.noIcon}
            >
              <img src={noIcon} />
            </span>
            &nbsp;
            <span className={classes.greyIcon}>
              <img src={greyIcon} />
            </span>
          </div>;
        }
        
        if (rowData.dte.substring(0,4) === "http") {
          return  <div>
                 Si &nbsp;
                 <span
                  style={{ marginLeft: "14px", cursor: "pointer" }}
                  className={classes.si}
                >
                  <img src={SiIcon} onClick={showModalHandler.bind(this, data)} />
                </span>
                &nbsp;
                <span style={{ cursor: "pointer" }} className={classes.showPdf}>
                  <a href={rowData.dte} target="_blank" >
                    <img src={showPdf}/>
                  </a>
                </span>
              </div>;
        }
      },
      // lookup: {
      //   "https://app2.bsale.cl/view/48940/f4064a57a40f.pdf?sfd=99": (
      //     <div>
      //       Si &nbsp;
      //       <span
      //         style={{ marginLeft: "10px", cursor: "pointer" }}
      //         className={classes.si}
      //       >
      //         <img src={SiIcon} onClick={showModalHandler.bind(this, data)} />
      //       </span>
      //       &nbsp;
      //       <span style={{ cursor: "pointer" }} className={classes.showPdf}>
      //         <img src={showPdf} onClick={showPdfHandler} />
      //       </span>
      //     </div>
      //   ),
      //  "-": (
      //     <div>
      //       No &nbsp;
      //       <span
      //         style={{ marginLeft: "4px" }}
      //         className={classes.noIcon}
      //       >
      //         <img src={noIcon} />
      //       </span>
      //       &nbsp;
      //       <span className={classes.greyIcon}>
      //         <img src={greyIcon} />
      //       </span>
      //     </div>
      //   ),
      //   "": (
      //     <div>
      //       No &nbsp;
      //       <span
      //         style={{ marginLeft: "4px" }}
      //         className={classes.noIcon}
      //       >
      //         <img src={noIcon} />
      //       </span>
      //       &nbsp;
      //       <span className={classes.greyIcon}>
      //         <img src={greyIcon} />
      //       </span>
      //     </div>
      //   ),
      // },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Respuesta OMS",
    //   field: "role",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Estado WMS",
      field: "estado_wms",

      render: (rowData) => {
        if (rowData.estado_wms === "Enviado") {
          return <div className={classes.enviado}> &nbsp;&nbsp;Enviado</div>;
        }
        if (rowData.estado_wms === "Pendiente") {
          return <div className={classes.pendiente}>Pendiente</div>;
        }
        if (rowData.estado_wms === "No Aplica") {
          return <div className={classes.cancelado}>No Aplica</div>;
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Hub de pago",
    //   field: "estado_pago",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Total",
    //   field: "role",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Shipping",
    //   field: "",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Estado fulfillment",
      field: "estado_oc",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Pickeador",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Jefe OPS",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Hub fulfillment",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Courier",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Shipping ID",
      field: "shipping_id",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Bultos/Etiquetas",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Estado courier",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Comprador",
      field: "comprador",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "NPS",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    // {
    //   title: "Reviews",
    //   field: "comprador",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     borderRadius: "0px 20px 20px 0px",
    //     fontSize: "12px",
    //   },
    // },
  ];

  const handleCountryChange = (event) => {
    console.log(event.target.value);

    setcountry(event.target.value);
    console.log(country);
  };

  const handleSalesChannelChange = (event) => {
    setsalesChannel(event.target.value);
    console.log(event.target.value);
  };

  const handleStoreChange = (event) => {
    setstore(event.target.value);
    console.log(store);
  };
  const handleClientChange = (event) => {
    setclient(event.target.value);
  };
  const handleOfficialStoreChange = (event) => {
    setofficialStore(event.target.value);
  };
  const reloadTableHandler = () => {
    fetchOrderData();
    setclient(null);
    setcountry(null);
    setofficialStore(null);
    setsalesChannel(null);
    setstore(null);
    setStartDate(null);
  };

  return (
    <React.Fragment>
      {showModal && (
        <SendMail
          onhideModal={hideModalHandler}
          data={data}
          purchaser={buyer}
        ></SendMail>
      )}

      <div className="content">
        <h5
          className="titleTable"
          style={{
            color: "#C4C4C4",
            width: "450px",
            fontSize: "10px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "0px",
          }}
        >
          Transacciones digitales: Vista Administrador
        </h5>
        <p
          classname="textNameTable"
          style={{
            color: "black",
            width: "450px",
            fontSize: "20px",
            fontWeight: "800",
            marginLeft: "1em",
            marginBottom: "2em",
          }}
        >
          Camilo Vega
        </p>

        <Col md="12">
          <label htmlFor="select-country">
            <h5
              style={{
                color: "black",
                width: "30px",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "2em",
                marginBottom: "0px",
              }}
            >
              País
            </h5>
            <Select
              labelId="select-country"
              id="select-country"
              style={{
                width: 150,
                marginLeft: "1em",
                borderRadius: "17px",
                marginBottom: "1em",
                fontSize: "10px",
              }}
              value={country}
              label="Country"
              placeholder="&nbsp; Seleccione un país"
              onChange={handleCountryChange}
            >
              {/* {Array.from(new Set(data.map((obj) => obj.pais))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )} */}
              {Array.from(new Set(filteredCountryData.map((obj) => obj))).map(
                (period) => {
                  return (
                    <MenuItem value={period.country}>{period.country}</MenuItem>
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
              style={{ width: 160, fontSize: "10px", marginLeft: "1em" }}
              value={store}
              label="select-canal"
              placeholder="&nbsp; Seleccione una tienda"
              onChange={handleStoreChange}
            >
              {Array.from(
                new Set(filteredStoreData.map((obj) => obj.store))
              ).map((period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              })}
            </Select>
          </label>
          <label htmlFor="select-canal">
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
              Canal De Venta
            </h5>

            <Select
              labelId="select-canal"
              id="select-canal"
              placeholder="&nbsp; Seleccione un canal"
              style={{ width: 150, marginLeft: "1em", fontSize: "10px" }}
              value={salesChannel}
              label="select-canal"
              onChange={handleSalesChannelChange}
            >
              {Array.from(
                new Set(filteredChannelArray.map((obj) => obj.channel))
              ).map((period) => {
                return <MenuItem value={period}>{period}</MenuItem>;
              })}
              {/* {filteredChannelArray.map((channelItem) => {
                return <MenuItem value={channelItem}>{channelItem}</MenuItem>;
              })} */}
            </Select>
          </label>

          <label htmlFor="select-tienda-official">
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginRight: "1em",
                marginBottom: "0px",
                marginTop: "1em",
              }}
            >
              Tienda Oficial
            </h5>
            <Select
              labelId="select-tienda-official"
              id="select-tienda-official"
              placeholder="&nbsp; Seleccione una tienda oficial"
              style={{ width: 150, fontSize: "10px", marginLeft: "1em" }}
              value={officialStore}
              label="select-tienda-official"
              onChange={handleOfficialStoreChange}
            >
              {/* {Array.from(new Set(data.map((obj) => obj.official_store))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )} */}
              {/* {filteredOfficialStore.map((channelItem) => {
                return <MenuItem value={channelItem}>{[channelItem]}</MenuItem>
              })} */}
              {/* {filteredOfficialStore.forEach((channelItem,index) => {
                return <MenuItem value={channelItem}>{channelItem}</MenuItem>;
              })} */}
            </Select>
          </label>

          <label>
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginBottom: "11px",
                marginTop: "4px",
              }}
            >
              Fecha
            </h5>

            <DatePicker
              id="datepickerCalendar"
              type="number"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ width: 200, marginLeft: "1em" }}
              placeholderText="dd/mm/yy"
              locale="es"
            />
          </label>

          {/* <label htmlFor="select-client">
            <h5
              style={{
                color: "black",
                fontSize: "12px",
                fontWeight: "800",
                marginLeft: "1em",
                marginTop: "1em",
                marginBottom: "0px",
              }}
            >
              Cliente
            </h5>
            <Select
              labelId="select-client"
              id="select-client"
              style={{ width: 150, marginLeft: "1em", fontSize: "10px" }}
              value={client}
              label="select-tienda-official"
              placeholder="&nbsp; Seleccione un cliente"
              onChange={handleClientChange}
            >
              {Array.from(new Set(data.map((obj) => obj.cliente))).map(
                (period) => {
                  return <MenuItem value={period}>{period}</MenuItem>;
                }
              )}
            </Select>
          </label> */}

          <Button
            className="btn-round btn-icon"
            color="primary"
            onClick={reloadTableHandler}
          >
            <i className="nc-icon nc-refresh-69" style={{ color: "#ffffff" }} />
          </Button>
        </Col>

        {/* MOBILE VERSION */}
        <div id="OrderMobileCard">
          <br />
          {/* <Spinner 
        animation="border"
        style={{ color: "#51cbce", marginLeft: "10em", alignItems: "center" }} 
        /> */}
          {data.map((order) => (
            <OrderMobileCard
              opsId={order.order_id}
              date={order.fecha_creacion}
              channelStore={order.canal_de_venta}
              store={order.tienda}
              client={order.tienda}
              officialStore={order.official_store}
              orderId={order.order_id}
              country={order.pais}
              dte={order.dte}
              wmsState={order.estado_wms}
              ocState={order.estado_oc}
              shippingId={order.shipping_id}
              consumer={order.comprador}
            />
          ))}
        </div>

        {/* DESKTOP VERSION */}

        <div id="OrderDesktopTable">
          {isLoading && (
            <MaterialTable
              title=""
              options={{
                search: false,
              }}
              icons={tableIcons}
              columns={columns}
              data={[]}
              components={{
                Body: (props) => (
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    <Spinner
                      animation="border"
                      style={{ color: "#1D308E", alignItems: "center" }}
                    ></Spinner>
                  </div>
                ),
                emptyDataSourceMessage: (
                  <h1>No se encuentra la información.</h1>
                ),
              }}
            ></MaterialTable>
          )}

          {data.length === 0 && !isLoading && (
            <MaterialTable
              title=""
              icons={tableIcons}
              columns={columns}
              data={[]}
              components={{
                Row: (props) => <CustomLoader {...props} />,
              }}
            ></MaterialTable>
          )}
          {data.length !== 0 && (
            <MaterialTable
              onRowClick={(evt, selectedRow) => setbuyer(selectedRow)}
              localization={{
                body: {
                  emptyDataSourceMessage: (
                    <div>
                      <span>No hay información disponible</span>
                      <Spinner
                        animation="border"
                        style={{ color: "#1D308E", marginLeft: "1em" }}
                      />
                    </div>
                  ),
                },
              }}
              key={data.id_mtdi}
              title="Instance Table"
              icons={tableIcons}
              title=""
              data={data}
              columns={columns}
              options={{ columnsButton: true, sorting: true, search: false }}
              style={{ marginLeft: "1em", marginTop: "2em" }}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MtdiTable;
