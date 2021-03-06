import React, { useState, useEffect, useContext } from "react";
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
import iconFilterButton from "../../assets/img/icons/Reports/iconFilters.png";
import DatePicker, { registerLocale } from "react-datepicker";
// import calendarIcon from "../../assets/img/DatePickerIcon.png";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/global.css";
import SiIcon from "../../assets/img/si.png";
import noIcon from "../../assets/img/no.png";
import showPdf from "../../assets/img/showPdf.png";
import Etiqueta from "../../assets/img/Etiqueta.png";
import Estado from "../../assets/img/Estado.png";
import chileExpress from "../../assets/img/chile-express.png";
import CorreosChile from "../../assets/img/correos-chile.png";
import CourierStatus from "../../assets/img/courierStatus.png";
import wmsError from "../../assets/img/errorwms.png";
import { checkRut, prettifyRut, formatRut } from "react-rut-formatter";
const XLSX = require("xlsx");
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
import greyIcon from "../../assets/img/greyIcon.png";
import classes from "./mtdi-table.module.css";
import SendMail from "components/modalComponents/sendMail";
import OrderMobileCard from "components/OrderMobileCard/OrderMobileCard";
import spinnerGif from "../../assets/img/spinnerLogos.gif";
import noDataImage from "../../assets/img/noDataImageBlue.png";
import endTour from "../../assets/img/endTour.png";
import startTour from "../../assets/img/startTour.png";
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import SplashScreen from "components/UI/splash-screen";
import SaveAlt from "@material-ui/icons/SaveAlt";
// import WmsModal from "components/modalComponents/wms-modal";
import VerticalModal from "components/UI/vertical-modal.js";
import WmsModal from "components/modalComponents/wms-modal";
import ClientModal from "components/ClientModal/client-modal";
import CourierStatusModal from "components/courierStatusModal/courier-status-modal";
import BallotDetailModal from "components/BallotDetailModal/BallotDetailModal";
import { NavigateBeforeSharp } from "@material-ui/icons";

const tableIcons = {
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <RoomIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
};

registerLocale("es", es);

const MtdiTable = (props) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isMobileSizes, setIsMobileSized] = useState(false);
  const [filtersClass, setfiltersClass] = useState("FiltersInDesktop");
  const [showFilter, setshowFilter] = useState(false);
  const [filtersApplied, setfiltersApplied] = useState(false);
  const [userEmailApi, setuserEmailApi] = useState("");
  const [data, setData] = useState([]);
  const [pageCount, setpageCount] = useState(2);
  const [country, setcountry] = useState("");
  const [countryId, setcountryId] = useState(0);
  const [store, setstore] = useState("");
  const [storeId, setstoreId] = useState(0);
  const [salesChannel, setsalesChannel] = useState("");
  const [channelId, setchannelId] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(true);
  const accentColor = "#5cb7b7";
  const toggle = () => setIsTourOpen(!isTourOpen);
  const [modalBallotDetails, setModalBallotDetails] = useState(false);
  const [modalLabels, setModalLabels] = useState(false);
  const toggle2 = () => setModalBallotDetails(!modalBallotDetails);
  const toggle3 = () => setModalLabels(!modalLabels);
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  const [selectedDateFrom, setselectedDateFrom] = useState(
    d.toISOString().slice(0, 10)
  );
  const [selectedDateTo, setselectedDateTo] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [buyer, setbuyer] = useState("");
  const [client, setclient] = useState("");
  const [officialStore, setofficialStore] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [showWMSModal, setshowWMSModal] = useState(false);
  const [showCourierModal, setshowCourierModal] = useState(false);
  const [clientModal, setclientModal] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isLoadingIncrementPage, setisLoadingIncrementPage] = useState(false);
  const [filteredCountryData, setfilteredCountryData] = useState([]);
  const [filteredStoreData, setfilteredStoreData] = useState([]);
  const [filteredChannelArray, setfilteredChannelArray] = useState([]);
  const [filteredOfficialStore, setfilteredOfficialStore] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [urlState, seturlState] = useState("");
  const [userStore, setuserStore] = useState("");
  const [searchOrderId, setsearchOrderId] = useState("");
  const [userType, setuserType] = useState("");
  const [kamCountries, setkamCountries] = useState("");

  var stepsDesk = [];
  var a = navigator.userAgent;
  var agents = new Array(
    "iPhone",
    "iPad",
    "Android",
    "SymbianOS",
    "Windows Phone",
    "iPod"
  );
  var flag = true;
  for (var i = 0; i < agents.length; i++) {
    if (a.indexOf(agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    stepsDesk = [
      {
        selector: ".tenthStepTour",
        content: (
          <div>
            <br />
            <p
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginBottom: "2em",
              }}
            >
              ??Bienvenido al MTD de Instance!
            </p>
            <img src={startTour} alt="startTour" />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2em",
                fontWeight: "600",
              }}
            >
              Te invitamos a hacer el tour inicial
            </p>
          </div>
        ),
      },
      {
        selector: ".firstStepTour",
        content: (
          <div>
            ??sta es tu <strong>tabla de ??rdenes.</strong>
            <br />
            <p>
              Aqu?? encontrar??s de manera autom??tica la informaci??n detallada y
              actualizada de las ??ltimas ??rdenes emitidas en todos tus canales
              de venta.
            </p>
          </div>
        ),
      },
      {
        selector: ".secondStepTour",
        content: (
          <div>
            Si necesitas ver ??rdenes espec??ficas, puedes utilizar estos{" "}
            <strong>filtros</strong> para hacer m??s f??cil la b??squeda.
          </div>
        ),
      },
      {
        selector: ".thirdStepTour",
        content: (
          <div>
            Una vez que escojas el filtro que necesitas presiona este bot??n para
            poder <strong> iniciar tu b??squeda</strong>.
          </div>
        ),
      },
      {
        selector: ".fourthStepTour",
        content: (
          <div>
            Si te equivocas con los filtros no te preocupes, siempre puedes
            presionar este bot??n que{" "}
            <strong>limpiar?? los filtros de tu b??squeda.</strong>
          </div>
        ),
      },
      {
        selector: ".MuiTableSortLabel-iconDirectionAsc",
        content: (
          <div>
            Cada t??tulo tiene una <strong>flecha</strong> que al presionarla te
            permitir?? clasificar la informaci??n de menor a mayor ?? de la A a la
            Z y visceversa.
          </div>
        ),
      },
      {
        selector: ".MuiIconButton-colorInherit",
        content: (
          <div>
            Y con esta opci??n tendr??s la posibilidad de personalizar tu espacio
            y decidir{" "}
            <strong> qu?? columnas quieres ver o quitar de tu tablero. </strong>
          </div>
        ),
      },
      {
        selector: ".seventhStepTour",
        content: (
          <div>
            ??Ojo!
            <br />
            Si est??s buscando ??rdenes con fechas espec??ficas te recomendamos
            filtrar con este <strong> calendario </strong> para mejorar la
            precisi??n.
          </div>
        ),
      },
      {
        selector: ".eighthStepTour",
        content: (
          <div>
            Si necesitas <strong>cargar m??s ??rdenes</strong> en tu tablero
            presiona este bot??n.
          </div>
        ),
      },
      {
        selector: ".MuiTablePagination-select",
        content: (
          <div>
            En esta parte tienes la posibilidad de desplegar un mayor{" "}
            <strong>n??mero de vistas</strong> de tus ??rdenes.
          </div>
        ),
      },
      {
        selector: ".MTablePaginationInner-root-14",
        content: (
          <div>
            Y de llegar hasta el <strong>final de la lista</strong>.
          </div>
        ),
      },
      {
        selector: ".ninthStepTour",
        content: (
          <div>
            Finalmente, si hay algo que no te queda claro, presionando ac?? con
            gusto volveremos a <strong> comenzar este tutorial. </strong>
          </div>
        ),
      },
      {
        selector: ".tenthStepTour",
        content: (
          <div>
            <br />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                marginBottom: "2em",
                marginTop: "1em",
              }}
            >
              ??Que tengas una grata experiencia!
            </p>

            <img src={endTour} alt="endTour" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                color="primary"
                className="ninthStepTour"
                style={{
                  borderRadius: "22px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  letterSpacing: "1px",
                  width: "150px",
                  height: "38px",
                  fontWeight: "600",
                }}
                onClick={toggle}
              >
                ir al MTD
              </Button>
            </div>
          </div>
        ),
      },
    ];
  } else {
    stepsDesk = [
      {
        selector: ".tenthStepTour",
        content: (
          <div>
            <br />
            <p
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginBottom: "2em",
              }}
            >
              ??Bienvenido al MTD de Instance!
            </p>
            <img src={startTour} alt="startTour" />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2em",
                fontWeight: "600",
              }}
            >
              Te invitamos a hacer el tour inicial
            </p>
          </div>
        ),
      },
      {
        selector: ".firstStepTour",
        content: (
          <div>
            ??sta es tu <strong>tabla de ??rdenes.</strong>
            <br />
            <p>
              Aqu?? encontrar??s de manera autom??tica la informaci??n detallada y
              actualizada de las ??ltimas ??rdenes emitidas en todos tus canales
              de venta.
            </p>
          </div>
        ),
      },
      {
        selector: ".secondStepTour",
        content: (
          <div>
            Si necesitas ver ??rdenes espec??ficas, puedes utilizar estos{" "}
            <strong>filtros</strong> para hacer m??s f??cil la b??squeda.
          </div>
        ),
      },
      {
        selector: ".thirdStepTour",
        content: (
          <div>
            Una vez que escojas el filtro que necesitas presiona este bot??n para
            poder <strong> iniciar tu b??squeda</strong>.
          </div>
        ),
      },
      {
        selector: ".fourthStepTour",
        content: (
          <div>
            Si te equivocas con los filtros no te preocupes, siempre puedes
            presionar este bot??n que{" "}
            <strong>limpiar?? los filtros de tu b??squeda.</strong>
          </div>
        ),
      },

      {
        selector: ".seventhStepTour",
        content: (
          <div>
            ??Ojo!
            <br />
            Si est??s buscando ??rdenes con fechas espec??ficas te recomendamos
            filtrar con este <strong> calendario </strong> para mejorar la
            precisi??n.
          </div>
        ),
      },
      {
        selector: ".eighthStepTour",
        content: (
          <div>
            Si necesitas <strong>cargar m??s ??rdenes</strong> en tu tablero
            presiona este bot??n.
          </div>
        ),
      },

      {
        selector: ".tenthStepTour",
        content: (
          <div>
            <br />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "800",
                marginBottom: "2em",
                marginTop: "1em",
              }}
            >
              ??Que tengas una grata experiencia!
            </p>

            <img src={endTour} alt="endTour" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                color="primary"
                className="ninthStepTour"
                style={{
                  borderRadius: "22px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  letterSpacing: "1px",
                  width: "150px",
                  height: "38px",
                  fontWeight: "600",
                }}
                onClick={toggle}
              >
                ir al MTD
              </Button>
            </div>
          </div>
        ),
      },
    ];
  }
  const fetchUserEmail = () => {
    const userEmail = localStorage.getItem("dtm");
    console.log(userEmail);
    setuserEmailApi(userEmail);
  };
  const fetchUserStore = () => {
    const userStore = localStorage.getItem("st");
    console.log(userStore);
    // setuserEmailApi(userEmail);
  };
  useEffect(() => {
    fetchUserEmail();
    fetchUserStore();
    // setfirstName(localStorage.getItem("first"));
    console.log(localStorage.getItem("ut"));
    if (localStorage.getItem("ut") === "1") {
      setstoreId(0);
    }
    // if(localStorage.getItem("ut")==='3'){
    //   const kamstore = localStorage.getItem("st");
    //   console.log(kamstore);
    //   var b = kamstore.split(",").map(function (item) {
    //     return parseInt(item, 10);
    //   });
    //   console.log(b);
    //  setstoreId(b);
    // }
    fetchOrderData();

    fetchFilterData();

    //fetchFilterData();
  }, []);
  const fetchFilterData = async () => {
    const userEmail = localStorage.getItem("dtm");

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

        let countryArray = [];
        console.log(obj);
        if (localStorage.getItem("ut") === "2") {
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
        if (localStorage.getItem("ut") === "3") {
          let clientCountryArray = localStorage.getItem("ct");
          console.log(clientCountryArray);
          var b = clientCountryArray.split(",").map(function (item) {
            return parseInt(item, 10);
          });
          console.log(b);
          let finalClientCountry = [];
          for (let i = 0; i <= b.length - 1; i++) {
            let x = obj.filter((item) => {
              return item.value === b[i];
            });
            finalClientCountry.push(x);
          }
          var flattened = [].concat.apply([], finalClientCountry);
          console.log(flattened);
          setfilteredCountryData(flattened);
          // const clientCountry = obj.filter((item) => {
          //   return item.value === Number(clientCountryArray);
          // });
          // console.log(clientCountry);
          // setfilteredCountryData(clientCountry);
        }
        if (localStorage.getItem("ut") === "1") {
          setfilteredCountryData(obj);
        }
        // setfilteredCountryData(obj);
        // setfilteredStoreData(y[0].stores);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 767px)");
    setIsMobileSized(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  });

  useEffect(() => {
    if (isMobileSizes) {
      setfiltersClass("FiltersInMobile");
      setshowFilter(false);
    }
    if (!isMobileSizes) {
      setfiltersClass("FiltersInDesktop");
      setshowFilter(true);
    }
  }, [isMobileSizes]);

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
  }, [officialStore, storeId]);

  useEffect(() => {
    if (startDate !== null) {
      setselectedDateFrom(startDate.toISOString().slice(0, 10));
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate !== null) {
      setselectedDateTo(endDate.toISOString().slice(0, 10));
    }
  }, [endDate]);

  const fetchOrderData = async () => {
    console.log(userEmailApi);
    let userEmail = localStorage.getItem("dtm");
    console.log(userEmail);
    if (userEmail.includes("+")) {
      let updatedEmail = userEmail.replace("+", "%2B");
      userEmail = updatedEmail;

      console.log(userEmail);
    }
    let countryValue = 3;
    setisLoading(true);
    let url = "";
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
    let rolesUrl = "";
    if (localStorage.getItem("ut") === "1") {
      rolesUrl = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=100&user=${userEmail}&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;
    }
    if (localStorage.getItem("ut") === "2") {
      const kamstore = localStorage.getItem("st");
      console.log(kamstore);
      var b = kamstore.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      console.log(b);
      //let storeId=b;
      rolesUrl = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=100&user=${userEmail}&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;
    }
    if (localStorage.getItem("ut") === "3") {
      // const Clientstore = localStorage.getItem("st");
      // console.log(Clientstore);
      // var b = Clientstore.split(",").map(function (item) {
      //   return parseInt(item, 10);
      // });
      // console.log(b);
      //let storeId=b;
      rolesUrl = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=100&user=${userEmail}&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;
    }
    try {
      const response = await fetch((url = rolesUrl), requestOptions);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();

      setData(data);

      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const showFiltersHandler = () => {
    setshowFilter(!showFilter);
  };
  const wmsModalHandler = () => {
    setshowWMSModal(true);
  };
  const hideWMSModalHandler = () => {
    setshowWMSModal(false);
  };
  const clientModalHandler = () => {
    setclientModal(true);
  };
  const hideClientModalHandler = () => {
    setclientModal(false);
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
  const displayCourierModalHandler = () => {
    setshowCourierModal(true);
  };
  const hideCourierModalHandler = () => {
    setshowCourierModal(false);
  };
  const applyFiltersButtonhandler = async () => {
    let userEmail = localStorage.getItem("dtm");

    if (userEmail.includes("+")) {
      let updatedEmail = userEmail.replace("+", "%2B");
      userEmail = updatedEmail;

      console.log(userEmail);
    }

    let url = "";
    console.log(searchOrderId);
    if (searchOrderId !== "") {
      url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/order?orderNo=${searchOrderId}&user=${userEmail}`;
    } else {
      url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=100&user=${userEmail}&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;
    }
    setisLoading(true);
    setfiltersApplied(true);
    // let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=50&user=admin&channel=${channelId}&store=${storeId}&page=1&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${selectedDateTo}`;

    console.log(url);
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
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();

      //CONDITION FOR THE FILTER BY ORDER ID
      if (data.length === 0) {
        setData([]);
      } else {
        setData(data);
      }
      //CONDITION FOR FILTER THE ORDER BY PAIS,TIENDA
      if (data.length === 1 && data[0].total === 0) {
        setData([]);
      } else {
        setData(data);
      }
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementPageHandler = async () => {
    const userEmail = localStorage.getItem("dtm");
    setisLoadingIncrementPage(true);
    setpageCount(pageCount + 1);
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/prod/store/orders?qty=50&user=admin&channel=${channelId}&store=${storeId}&page=${pageCount}&country=${countryId}&dateFrom=${selectedDateFrom}&dateTo=${new Date()
      .toISOString()
      .slice(0, 10)}`;
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "2Rr4OFKHVL98TtlOCUnuNaA2v5w01Z11aI9vdQYJ");
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
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error();
      }
      const newData = await response.json();
      setData([...data, ...newData]);

      setisLoadingIncrementPage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "OpsId",
      field: "order_id",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
        borderRadius: "20px 0px 0px 20px",
      },
    },
    {
      title: "Detalle",
      field: "order_id",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
      render: (rowData) => {
        if (rowData.order_id !== undefined) {
          return (
            <div>
              <span
                style={{ cursor: "pointer" }}
                title="Mostrar Detalle compra"
                className={classes.showPdf}
              >
                {/* <a href={rowData.dte} target="_blank"> */}
                <img src={showPdf} onClick={toggle2} />
              </span>
            </div>
          );
        }
      },
    },
    {
      title: "Fecha de Orden",
      field: "fecha_creacion",
      width: "13%",

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Canal de Venta",
      field: "canal_de_venta",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Tienda",
    //   field: "tienda",
    //   width: "13%",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
    {
      title: "Cliente",
      field: "cliente",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Tienda Oficial",
      field: "official_store",
      width: "15%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Orden de Compra",
      field: "order_id",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Pa??s",
      field: "pais",
      width: "13%",
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
      width: "13%",
      render: (rowData) => {
        console.log(rowData.dte);
        if (rowData.dte !== undefined) {
          if (rowData.dte === "") {
            return (
              <div>
                {" "}
                No &nbsp;{" "}
                <span style={{ marginLeft: "4px" }} className={classes.noIcon}>
                  <img src={noIcon} />
                </span>
                &nbsp;
                <span className={classes.greyIcon}>
                  <img src={greyIcon} />
                </span>
              </div>
            );
          }
          if (rowData.dte === "-") {
            return (
              <div>
                No &nbsp;
                <span style={{ marginLeft: "4px" }} className={classes.noIcon}>
                  <img title="No existe DTE" src={noIcon} />
                </span>
                &nbsp;
                <span
                  className={classes.greyIcon}
                  style={{ cursor: "pointer" }}
                >
                  <img src={greyIcon} title="No existe DTE" />
                </span>
              </div>
            );
          }
          if (rowData.dte.substring(0, 4) === "http") {
            return (
              <div>
                Si &nbsp;
                <span
                  style={{ marginLeft: "14px", cursor: "pointer" }}
                  className={classes.si}
                >
                  <img
                    src={SiIcon}
                    title="Enviar DTE"
                    onClick={showModalHandler.bind(this, data)}
                  />
                </span>
                &nbsp;
                <span
                  style={{ cursor: "pointer" }}
                  title="Mostrar DTE"
                  className={classes.showPdf}
                >
                  <a href={rowData.dte} target="_blank">
                    <img src={showPdf} />
                  </a>
                </span>
              </div>
            );
          }
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Bodega",
      field: "bodega",
      width: "13%",
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
      title: "Respuesta WMS",
      // field: "estado_wms",
      field: "respuesta_wms",
      width: "15%",
      render: (rowData) => {
        if (rowData.respuesta_wms != undefined) {
          if (rowData.respuesta_wms === "Error") {
            return (
              <div>
                <span className={classes.stockError}>Error De Stock </span>

                <span style={{ marginLeft: "14px", cursor: "pointer" }}>
                  {/* <img
                  src={wmsError}
                  title="Enviar DTE"
                  onClick={wmsModalHandler.bind(this, data)}
                /> */}
                </span>
              </div>
            );
          }
          if (rowData.respuesta_wms === "No enviado a WMS") {
            return (
              <div>
                <span className={classes.integrated}>No enviado a WMS </span>

                <span style={{ marginLeft: "14px", cursor: "pointer" }}>
                  {/* <img
              src={wmsError}
              title="Enviar DTE"
              onClick={wmsModalHandler.bind(this, data)}
            /> */}
                </span>
              </div>
            );
          }
          if (rowData.respuesta_wms.includes("XML cargado correctamente")) {
            return (
              <div>
                <span className={classes.confirmado}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enviado&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>

                <span style={{ marginLeft: "14px", cursor: "pointer" }}>
                  {/* <img
          src={wmsError}
          title="Enviar DTE"
          onClick={wmsModalHandler.bind(this, data)}
        /> */}
                </span>
              </div>
            );
          }
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado WMS",
      field: "estado_wms",
      width: "13%",
      render: (rowData) => {
        if (rowData.estado_wms === "Enviado") {
          return (
            <div className={classes.enviado}>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;Enviado
            </div>
          );
        }
        if (rowData.estado_wms === "Pendiente") {
          return <div className={classes.pendiente}>&nbsp;&nbsp;Pendiente</div>;
        }
        if (rowData.estado_wms === "No Aplica") {
          return <div className={classes.cancelado}>&nbsp;&nbsp;No Aplica</div>;
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Hub de pago",
      field: "hub",
      width: "15%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Total",
      field: "precio_sin_shipping",
      width: "13%",
      render: (rowData) => {
        if (rowData.precio_sin_shipping !== undefined) {
          let formatted = new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
          }).format(rowData.precio_sin_shipping);
          return (
            <div>
              {formatted}
              &nbsp;
            </div>
          );
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Shipping",
      field: "valor_shipping",
      width: "13%",
      render: (rowData) => {
        if (rowData.valor_shipping !== undefined) {
          let formatted = new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
          }).format(rowData.valor_shipping);
          return (
            <div>
              {formatted}
              &nbsp;
            </div>
          );
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Estado OC",
    //   field: "estado_oc",
    //   width: '3.5%',
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    // },
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
    {
      title: "Hub fulfillment",
      field: "hub_fulfillment,hub_logo",
      width: "15%",
      render: (rowData) => {
        if (rowData.hub_fulfillment != undefined) {
          return (
            <div>
              {rowData.hub_fulfillment !== "Por definir" && (
                <span style={{ whiteSpace: "nowrap" }}>
                  {rowData.hub_logo !== "No aplica" && (
                    <img
                      style={{ paddingRight: "8px" }}
                      src={rowData.hub_logo}
                      width="40px"
                      height="32px"
                    />
                  )}

                  {/* <img style={{ paddingRight: "8px" }} src={chileExpress} /> */}
                  {rowData.hub_fulfillment}
                </span>
              )}
              {rowData.hub_fulfillment === "Por definir" && (
                <span style={{ whiteSpace: "nowrap" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;<span> </span>
                  {/* <img style={{ paddingRight: "8px" }} src={chileExpress} /> */}
                  {rowData.hub_fulfillment}
                </span>
              )}
            </div>
          );
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Courier",
      field: "courier,courier_logo",
      width: "15%",
      render: (rowData) => {
        if (rowData.courier != undefined) {
          if (
            rowData.courier_logo === "No definido" ||
            rowData.courier_logo === "No aplica"
          )
            return (
              <div>
                <span style={{ whiteSpace: "nowrap" }}>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;&nbsp;&nbsp;</span>
                  {rowData.courier}
                </span>
              </div>
            );
          if (
            rowData.courier_logo !== "No definido" ||
            rowData.courier_logo !== "No aplica"
          )
            return (
              <div>
                <span style={{ whiteSpace: "nowrap" }}>
                  {rowData.courier_logo !== "No definido" &&
                    rowData.courier_logo !== "No aplica" && (
                      <img
                        style={{ paddingRight: "8px" }}
                        src={rowData.courier_logo}
                        width="40px"
                        height="32px"
                      />
                    )}

                  {rowData.courier}
                </span>
              </div>
            );
        }
      },

      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Estado Courier",
      field: "courier_status",
      width: "16%",
      render: (rowData) => {
        return (
          <div>
            {rowData.courier_status === "No aplica" && (
              <span style={{ whiteSpace: "nowrap" }}>No aplica</span>
            )}
            {rowData.courier_status === "Creado" && (
              <span style={{ whiteSpace: "nowrap" }}>
                Creado &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                <img
                  style={{ paddingRight: "10px" }}
                  src={CourierStatus}
                  onClick={displayCourierModalHandler}
                />
              </span>
            )}
            {rowData.courier_status === "Listo para despacho - Impreso" && (
              <span style={{ whiteSpace: "nowrap" }}>
                Listo para despacho &nbsp;
                <img
                  style={{ paddingRight: "10px" }}
                  src={CourierStatus}
                  onClick={displayCourierModalHandler}
                />
              </span>
            )}
            {rowData.courier_status === "En Reparto" && (
              <span style={{ whiteSpace: "nowrap" }}>
                En Reparto &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;
                <img
                  style={{ paddingRight: "10px" }}
                  src={CourierStatus}
                  onClick={displayCourierModalHandler}
                />
              </span>
            )}
            {rowData.courier_status === "En planta de origen" && (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                En planta de origen &nbsp;
                <img
                  style={{ paddingRight: "10px" }}
                  src={CourierStatus}
                  onClick={displayCourierModalHandler}
                />
              </span>
            )}
            {rowData.courier_status === "Entregado" && (
              <span style={{ whiteSpace: "nowrap" }}>
                {" "}
                Entregado &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;
                <img
                  style={{ paddingRight: "10px" }}
                  src={CourierStatus}
                  onClick={displayCourierModalHandler}
                />
              </span>
            )}
            {/* {rowData.estado_courier ==='Listo para despacho - Impreso' &&
             <span style={{ whiteSpace: "nowrap" }}>
              Listo para despacho{" "}
            {rowData.estado_courier !== 'No aplica' &&  <img
                style={{ paddingRight: "8px" }}
                src={CourierStatus}
                onClick={displayCourierModalHandler}
              />}
            </span> }
           {rowData.estado_courier !=='Listo para despacho - Impreso'&& <span style={{ whiteSpace: "nowrap" }}>
              {rowData.estado_courier}{" "}
            {rowData.estado_courier !== 'No aplica' &&  <img
                style={{ paddingRight: "8px" }}
                src={CourierStatus}
                onClick={displayCourierModalHandler}
              />}
            </span>} */}
          </div>
        );
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    {
      title: "Shipping ID",
      field: "shipping_id",
      width: "13%",
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },
    // {
    //   title: "Bultos/Etiquetas",
    //   field: "order_id",
    //   headerStyle: {
    //     backgroundColor: "#1D308E",
    //     color: "#FFF",
    //     fontSize: "12px",
    //   },
    //   render: (rowData) => {
    //     return (
    //       <div>
    //         <span
    //           style={{ cursor: "pointer" }}
    //           title="Mostrar Etiqueta"
    //         >

    //           {/* &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;<img src={Etiqueta} onClick={toggle3} /> */}
    //           &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;<img src={Etiqueta} />
    //         </span>
    //       </div>
    //     );
    //     },
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
      field: "comprador,rut",
      width: "20%",

      render: (rowData) => {
        if (rowData.comprador != undefined) {
          let FormattedRut = prettifyRut(rowData.rut);
          return (
            // <div

            <div>
              <span
                style={{
                  width: "0%",
                  float: "left",
                  whiteSpace: "nowrap",
                  fontSize: "12px",
                }}
              >
                {rowData.comprador}
              </span>
              <span
                style={{
                  width: "0%",
                  float: "left",
                  whiteSpace: "nowrap",
                  fontSize: "11px",
                  color: "#858F99",
                }}
              >
                <br />
                {FormattedRut}
              </span>
              <span
                style={{
                  width: "14%",
                  float: "right",
                  whiteSpace: "nowrap",
                  left: "80px",
                }}
              >
                &nbsp;
                <img
                  style={{ float: "left" }}
                  src={Estado}
                  title="Cliente Info"
                  onClick={clientModalHandler}
                />
              </span>
            </div>
            //   style={{
            //     overflow: "hidden",
            //     whiteSpace: "nowrap",
            //     fontSize: "10px",
            //   }}
            // >
            //   {rowData.comprador}
            //   <br />
            //   <span style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
            //     {rowData.rut}
            //   </span>

            //   <span
            //     style={{ marginLeft: "40%", cursor: "pointer", width: "20%" }}
            //   >
            //     <img
            //       style={{ float: "left" }}
            //       src={SiIcon}
            //       title="Enviar DTE"
            //       onClick={clientModalHandler}
            //     />
            //   </span>
            // </div>
          );
        }
      },
      headerStyle: {
        backgroundColor: "#1D308E",
        color: "#FFF",
        fontSize: "12px",
      },
    },

    // {
    //   title: "NPS",
    //   field: "comprador",
    //   width: "10%",
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
    setcountry(event.target.value);
    //Get countryId from filteredCountryData
    const val = filteredCountryData.filter(function (item) {
      if (item.country === event.target.value) {
        return item;
      }
    });
    setcountryId(val[0].value);
    if (localStorage.getItem("ut") === "2") {
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
    if (localStorage.getItem("ut") === "3") {
      const clientstore = localStorage.getItem("st");
      console.log(clientstore);
      var b = clientstore.split(",").map(function (item) {
        return parseInt(item, 10);
      });
      console.log(b);
      let finalclientStore = [];
      for (let i = 0; i <= b.length - 1; i++) {
        let x = val[0].stores.filter((item) => {
          return item.value === b[i];
        });
        finalclientStore.push(x);
      }
      var flattened = [].concat.apply([], finalclientStore);
      console.log(flattened);
      setfilteredStoreData(flattened);
      console.log(finalclientStore);
    }
  };

  const handleStoreChange = (event) => {
    setstore(event.target.value);
    //Get storeId from filteredStoreData
    const val = filteredStoreData.filter(function (item) {
      if (item.store === event.target.value) {
        return item;
      }
    });
    setstoreId(val[0].value);
    const selectedStoreData = filteredStoreData.filter((selectedStore) => {
      return selectedStore.store === event.target.value;
    });
    const selectedChannelsArray = selectedStoreData[0].channels;
    const selectedChannels = selectedChannelsArray.map((item) => {
      return item;
    });
    setfilteredChannelArray(selectedChannels);
  };

  const handleSalesChannelChange = (event) => {
    setsalesChannel(event.target.value);
    //Get ChannelId from filteredChannelArray
    const val = filteredChannelArray.filter(function (item) {
      if (item.channel === event.target.value) {
        return item;
      }
    });
    setchannelId(val[0].value);
  };

  const handleOfficialStoreChange = (event) => {
    setofficialStore(event.target.value);
  };
  const reloadTableHandler = () => {
    fetchOrderData();

    location.reload();
  };
  const searchOrderIdHandler = (event) => {
    console.log(event.target.value);
    setsearchOrderId(event.target.value);
  };
  const DownloadFileHandler = () => {
    let binary_univers = data;
    let binaryWS = XLSX.utils.json_to_sheet(binary_univers);
    // Create a new Workbook
    var wb = XLSX.utils.book_new();
    // Name your sheet
    XLSX.utils.book_append_sheet(wb, binaryWS, "Binary values");
    // export your excel
    XLSX.writeFile(wb, "instance_orders.xlsx");
  };
  return (
    <React.Fragment>
      {isLoading && <SplashScreen message="??rdenes" />}
      {showModal && (
        <SendMail
          onhideModal={hideModalHandler}
          data={data}
          purchaser={buyer}
        ></SendMail>
      )}
      {showWMSModal && (
        //  <WmsModal
        //       onhideModal={hideWMSModalHandler}

        //     />
        // <VerticalModal onhideModal={hideWMSModalHandler}></VerticalModal>
        <WmsModal onhideModal={hideWMSModalHandler}></WmsModal>
      )}
      {clientModal && (
        <ClientModal
          onhideModal={hideClientModalHandler}
          purchaser={buyer}
        ></ClientModal>
      )}
      {showCourierModal && (
        <CourierStatusModal
          onhideModal={hideCourierModalHandler}
          purchaser={buyer}
        ></CourierStatusModal>
      )}
      <div className="content .tenthStepTour">
        <div className="bttnTour">
          <Button
            color="primary"
            className="btn-round btn-icon ninthStepTour"
            onClick={() => setIsTourOpen(true)}
            // onClick={toggle}
          >
            <i
              className="nc-icon nc-alert-circle-i"
              style={{ color: "#ffffff" }}
            />
          </Button>
        </div>

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
          <span>{localStorage.getItem("first")}</span>&nbsp;
          <span>{localStorage.getItem("last")}</span>
        </p>

        {isMobileSizes && (
          <button
            style={{
              backgroundColor: "transparent",
              color: "black",
              width: "100%",
              padding: "20px",
              border: "none",
              fontSize: "12px",
            }}
            onClick={showFiltersHandler}
          >
            <img src={iconFilterButton} width="15" />
            &nbsp;{showFilter ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>
        )}
        {showFilter && (
          <div id={filtersClass}>
            <Col md="12">
              <div className="secondStepTour">
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
                    {Array.from(
                      new Set(filteredCountryData.map((obj) => obj))
                    ).map((period) => {
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
                    })}
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
                    label="select-canal"
                    placeholder="&nbsp;&nbsp; Seleccione una tienda"
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
                    placeholder="&nbsp;&nbsp; Seleccione un canal"
                    style={{
                      width: "193px",
                      height: "46px",
                      marginLeft: "1em",
                      backgroundColor: "white",
                      fontSize: "10px",
                      borderRadius: "17px",
                      marginLeft: "1em",
                      marginTop: "1em",
                    }}
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

                {/* <label htmlFor="select-tienda-official">
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
            > */}
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
                {/* </Select>
          </label> */}

                <label className="seventhStepTour">
                  <h5
                    id="fechaDesde"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "6px",
                      marginTop: "0px",
                    }}
                  >
                    Fecha Desde
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

                <label className="seventhStepTour">
                  <h5
                    id="fechaHasta"
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "6px",
                      marginTop: "0px",
                    }}
                  >
                    Fecha Hasta
                  </h5>

                  <DatePicker
                    id="datepickerCalendar"
                    type="number"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    style={{ width: 200, marginLeft: "1em" }}
                    placeholderText="dd/mm/yy"
                    locale="es"
                  />
                </label>

                <label>
                  <h5
                    style={{
                      color: "black",
                      fontSize: "12px",
                      fontWeight: "800",
                      marginLeft: "1em",
                      marginBottom: "6px",
                      marginTop: "0px",
                    }}
                  >
                    N??mero de orden
                  </h5>

                  <input
                  
                    id="quantity"
                    name="quantity"
                    min="1"
                    style={{
                      width: "193px",
                      height: "46px",
                      marginLeft: "1em",
                      backgroundColor: "white",
                      borderRadius: "17px",
                      fontSize: "10px",
                      marginLeft: "1em",
                      marginTop: "1em",
                      border: "none",
                      outline: "none",
                    }}
                    placeholder="&nbsp;&nbsp; Digite el n??mero de orden"
                    onChange={searchOrderIdHandler}
                  />
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
                  className="thirdStepTour"
                  onClick={applyFiltersButtonhandler}
                >
                  Aplicar
                </Button>
                {/* <input
        type="file"
        name="upload"
        id="upload"
        // onChange={readUploadFile}
    /> */}
                <Button
                  color="primary"
                  style={{
                    borderRadius: "22px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    letterSpacing: "1px",
                    // width: "120px",
                    height: "46px",
                    fontWeight: "600",
                  }}
                  className="thirdStepTour"
                  onClick={DownloadFileHandler}
                >
                  Descargar Excel
                </Button>
                <Button
                  className="btn-round btn-icon fourthStepTour"
                  color="primary"
                  onClick={reloadTableHandler}
                >
                  <i
                    className="nc-icon nc-refresh-69"
                    style={{ color: "#ffffff" }}
                  />
                </Button>
              </div>
            </Col>
          </div>
        )}

        <div className="firstStepTour">
          {/* MOBILE VERSION */}
          <div id="OrderMobileCard" className="first-step">
            <br />
            {!isLoading && (
              <div>
                <OrderMobileCard
                  data={data}
                  isLoading={isLoading}
                  purchaser={buyer}
                ></OrderMobileCard>
              </div>
            )}

            {/* <div>
                <img
                  src={spinnerGif}
                  style={{ marginTop: "2em" }}
                  width="200"
                  alt="Cargando..."
                />
                <br />
              
                <br />
              </div> */}
            {/* 
              <OrderMobileCard
                data={data}
                isLoading={isLoading}
              ></OrderMobileCard> */}
            <br />
          </div>

          {/* DESKTOP VERSION */}

          <div id="OrderDesktopTable">
            {isLoading && (
              <MaterialTable
                // title=""

                options={{
                  search: false,
                  exportButton: true,
                  tableLayout: "fixed",
                }}
                title=""
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
                      &nbsp; &nbsp;{" "}
                      {/* <Spinner

                      style={{
                        width: "0.7rem",
                        height: "0.7rem",
                        marginTop: "4em",
                        marginBottom: "2rem",
                      }}
                      type="grow"
                      color="info"
                    />
                    <Spinner
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginTop: "2em",
                        marginBottom: "2rem",
                      }}
                      type="grow"
                      color="info"

                    /> */}
                      <br />
                      <div>
                        {/* <img src={spinnerGif} style={{marginTop:"2em"}} width="220" alt="Cargando" />  */}

                        {/* <p style={{fontWeight: "bold", color: "#1D308E", marginLeft:"4.5em"}}>Cargando...</p>                   */}
                        <br />
                      </div>
                      <br />
                    </div>
                  ),
                  emptyDataSourceMessage: (
                    <h1>No se encuentra la informaci??n.</h1>
                  ),
                }}
              ></MaterialTable>
            )}
            {data.length === 0 && !isLoading && (
              <MaterialTable
                options={{
                  exportButton: true,
                  tableLayout: "fixed",
                }}
                localization={{
                  body: {
                    emptyDataSourceMessage: (
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "flex-start",
                          marginLeft: "20rem",
                          width: "100%",
                        }}
                      >
                        <img
                          src={noDataImage}
                          style={{ marginTop: "2em" }}
                          width="160"
                          alt="noData"
                        />
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#1D308E",
                          }}
                        >
                          {" "}
                          &nbsp;
                          <span> No hay informaci??n disponible.</span>
                        </p>
                      </div>
                    ),
                  },
                  toolbar: {
                    searchTooltip: "Buscar ??rdenes espec??ficas",
                    searchPlaceholder: "Buscar",
                    showColumnsTitle: "Mostrar opciones de columnas",
                    addRemoveColumns: "Agregar o Eliminar Columnas",
                  },
                  pagination: {
                    labelRowsSelect: "l??neas",
                    labelDisplayedRows: "{from}-{to} ??rdenes de {count}",
                    firstTooltip: "Ir a la primera p??gina",
                    previousTooltip: "P??gina anterior",
                    nextTooltip: "Pr??xima p??gina",
                    lastTooltip: "Ir a la ??ltima p??gina",
                  },
                }}
                title=""
                icons={tableIcons}
                columns={columns}
                data={[]}
              ></MaterialTable>
            )}
            {data.length !== 0 && !isLoading && (
              <MaterialTable
                onRowClick={(evt, selectedRow) => setbuyer(selectedRow)}
                localization={{
                  body: {
                    emptyDataSourceMessage: (
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "flex-start",
                          marginLeft: "20rem",
                          width: "100%",
                        }}
                      >
                        <img
                          src={noDataImage}
                          style={{ marginTop: "2em" }}
                          width="160"
                          alt="noData"
                        />
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "#1D308E",
                          }}
                        >
                          {" "}
                          &nbsp;
                          <span> No hay informaci??n disponible.</span>
                        </p>
                      </div>
                    ),
                  },
                  toolbar: {
                    searchTooltip: "Buscar ??rdenes espec??ficas",
                    searchPlaceholder: "Buscar",
                    showColumnsTitle: "Mostrar opciones de columnas",
                    addRemoveColumns: "Agregar o Eliminar Columnas",
                  },
                  pagination: {
                    labelRowsSelect: "l??neas",
                    labelDisplayedRows: "{from}-{to} ??rdenes de {count}",
                    firstTooltip: "Ir a la primera p??gina",
                    previousTooltip: "P??gina anterior",
                    nextTooltip: "Pr??xima p??gina",
                    lastTooltip: "Ir a la ??ltima p??gina",
                  },
                }}
                key={data.id_mtdi}
                icons={tableIcons}
                title=""
                data={data}
                columns={columns}
                options={{
                  columnsButton: true,
                  sorting: true,
                  search: true,
                  exportButton: true,
                  tableLayout: "fixed",
                }}
                style={{ marginLeft: "1em", marginTop: "2em" }}
              />
            )}
          </div>

          {!isLoading && (
            <div className="bttnSeeMore">
              {!isLoadingIncrementPage && (
                <Button
                  className="eighthStepTour"
                  color="primary"
                  style={{
                    borderRadius: "22px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    letterSpacing: "1px",
                    width: "200px",
                    height: "50px",
                    fontWeight: "600",
                  }}
                  onClick={incrementPageHandler}
                >
                  Ver m??s
                </Button>
              )}
              {isLoadingIncrementPage && (
                <Button
                  color="primary"
                  style={{
                    borderRadius: "22px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    letterSpacing: "1px",
                    width: "200px",
                    height: "50px",
                    fontWeight: "600",
                  }}
                  onClick={incrementPageHandler}
                  disabled
                >
                  <Spinner
                    style={{ width: "0.7rem", height: "0.7rem" }}
                    type="grow"
                    color="light"
                  />
                  &nbsp; Cargando...
                </Button>
              )}
            </div>
          )}
        </div>

        <Tour
          steps={stepsDesk}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
          accentColor={accentColor}
          className="helper"
          rounded={20}
          onAfterOpen={disableBody}
          onBeforeClose={enableBody}
        />

        {/* Ballot Detail Modal  */}

        <Modal isOpen={modalBallotDetails} toggle={toggle2} size="lg">
          <ModalHeader>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button
                style={{
                  background: "none",
                  position: "relative",
                  marginLeft: "14em",
                  color: "black",
                  border: "none",
                }}
                onClick={toggle2}
              >
                x
              </button>
            </div>
          </ModalHeader>
          <BallotDetailModal purchaser={buyer} />

          <div class="text-center">
            <button
              id="bttnSubmit"
              type="submit"
              style={{
                backgroundColor: "#1D308E",
                textAlign: "center",
                color: "white",
                width: "296px",
                height: "64px",
                padding: "22px 81px",
                borderRadius: "33px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                fontWeight: "bold",
                border: "0",
                marginTop: "1em",
              }}
              onClick={toggle2}
            >
              Cerrar
            </button>
          </div>
          <br />
        </Modal>

        {/* Label Detail Modal  */}

        <Modal isOpen={modalLabels} toggle={toggle3}>
          <ModalHeader>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button
                style={{
                  background: "none",
                  position: "relative",
                  marginLeft: "14em",
                  color: "black",
                  border: "none",
                }}
                onClick={toggle2}
              >
                x
              </button>
            </div>
          </ModalHeader>

          <div> Etiqueta </div>

          <div class="text-center">
            <button
              id="bttnSubmit"
              type="submit"
              style={{
                backgroundColor: "#1D308E",
                textAlign: "center",
                color: "white",
                width: "296px",
                height: "64px",
                padding: "22px 81px",
                borderRadius: "33px",
                color: "#FFFFFF",
                marginLeft: "1em",
                textTransform: "none",
                fontWeight: "bold",
                border: "0",
                marginTop: "1em",
              }}
              onClick={toggle2}
            >
              Cerrar
            </button>
          </div>
          <br />
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default MtdiTable;
