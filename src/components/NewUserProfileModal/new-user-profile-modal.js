import React, { useState, useRef, useEffect } from "react";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Form,
  Label,
  Col,
  Row,
  Input,
} from "reactstrap";
import { FormCheck, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import CheckboxDropdown from "components/CheckboxDropdown/CheckboxDropdown";
const NewUserProfileModal = (props) => {
  useEffect(() => {
    fetchFilterData();
  }, []);

  console.log(props.profileInfo);
  const fetchFilterData = async () => {
   
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
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
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/dashboard/filtersorders",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        var obj = JSON.parse(result);
        console.log(obj);
        let countriesArray =  obj.filter((item) => {
        return item.value!==0;
        });
        console.log(countriesArray);
        let selectedCountry = countriesArray.map((item) => {
          return [{ id: item.value, name: item.country }];
        });
        let allSelectedCountry = [].concat.apply([], selectedCountry);
        console.log(allSelectedCountry);
        setcountryOptions(allSelectedCountry);
        console.log(selectedCountry);
        let allChannelsArray = obj[4].stores.map((item) => {
          return [{ id: item.value, name: item.store }];
        });
      
        var flattened = [].concat.apply([], allChannelsArray);
       
        setclientOptions(flattened);
       
      })
      .catch((error) => console.log("error", error));
  };
 
  const [showModal, setShowModal] = useState(false);
  const [profileDetails, setprofileDetails] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
  const [name, setName] = useState(props.profileInfo.first_name);
  const [clientOptions, setclientOptions] = useState([]);
  const [countryOptions, setcountryOptions] = useState([]);
  // const [stores, setstores] = useState(props.profileInfo.stores);
  const [stores, setstores] = useState([]);
  const [country, setCountry] = useState('');

  const nameRef = useRef("");
  const emailRef = useRef("");
  const userType = useRef(1);
  const [selfServiceType, setselfServiceType] = useState(
    props.profileInfo.enabled
  );

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const handleSelectChange = (event) => {
   
    let selectedStore = event;
    const selectedStoreId = selectedStore.map((item) => {
      return item.id;
    });
    console.log(selectedStoreId);
    setstores(selectedStoreId);
  };
  const editProfileHandler = () => {
    const profile = {
      first_name: name,
      last_name: " ",
      email: emailRef.current.value,
      profile: userType.current.value,
      stores: stores,
      countries: country,
      enabled: selfServiceType,
    };
    console.log(profile);
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "text/plain");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(profile),
      redirect: "follow",
    };
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/user?user=${props.profileInfo.email}`;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result === '"Success!"') {
          window.location.reload();
        }
        if (result === '"Invalid user"') {
          seterrorMessage("the email cannot be changed");
          setShowModal(false);
        }
        if (
          result ===
          '"Elevation of privileges not possible, contact an administrator"'
        ) {
          seterrorMessage(
            "Elevation of privileges not possible, contact an administrator"
          );
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleSelectCountryChange = (event) => {
    let selectedCountry = event;
    const selectedCountryId = selectedCountry.map((item) => {
      return item.id;
    });
   
    setCountry(selectedCountryId);
  };
  const addProfileHandler = async () => {
    const profile = {
      first_name: name,
      last_name: " ",
      email: emailRef.current.value,
      profile: userType.current.value,
      stores: stores,
      countries: country,
      enabled: selfServiceType,
    };
    console.log(profile);
    setprofileDetails(profile);

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "3pTvuFxcs79dzls8IFteY5JWySgfvswL9DgqUyP8");
    myHeaders.append(
      "Authorization",
      "Bearer 75b430ce008e4f5b82fa742772e531b71bb11aeb53788098ec769aeb5f58b2298c8d65fa2e4a4a04e3fbf6fb7b0401e6eada7b8782aeca5b259b38fa8b419ac6"
    );
    myHeaders.append("Content-Type", "text/plain");

    var raw = profile;

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(profile),
      redirect: "follow",
    };

    fetch(
      "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/user?user=test@test.cl",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>{
        console.log(result);
        if (result === '"Success!"') {
          window.location.reload();
        }
       
      } )
      .catch((error) => console.log("error", error));
  };

  return (
    <ModalBody>
      {props.flag === 0 && (
        <h3
          style={{
            fontWeight: "700",
            size: "24px",
            textAlign: "center",
          }}
        >
          Crear nuevo usuario
        </h3>
      )}
      {props.flag === 1 && (
        <h3
          style={{
            fontWeight: "700",
            size: "24px",
            textAlign: "center",
          }}
        >
          Edit User
        </h3>
      )}

      <Form>
        <FormGroup>
          <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
            Nombre:
          </Label>
          <input
            className="input"
            type="name"
            name="email"
            id="exampleEmail"
            style={{ fontSize: "12px" }}
            // value={editedName}
            defaultValue={props.profileInfo.first_name}
            onChange={nameChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
            Correo Electronico:
          </Label>

          <input
            className="input"
            ref={emailRef}
            type="email"
            defaultValue={props.profileInfo.email}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                Usuario
              </Label>
              <select
                class="form-select"
                aria-label="Default select example"
                style={{ borderRadius: "10px" }}
                ref={userType}
                defaultValue={props.profileInfo.profile}
              >
                <option selected>Selcciona un tipo de usuario</option>
                <option value={1}>Administrador</option>
                <option value={2}>KAM</option>
                <option value={3}>Cliente</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                Pais
              </Label>
              <CheckboxDropdown
                placeholder="Selccione un pais"
                options={countryOptions}
                handleSelectChange={handleSelectCountryChange}
                // defaultValue={props.profileInfo.stores}
                defaultValue={props.profileInfo.countries}
              ></CheckboxDropdown>
           
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="cliente" style={{ fontWeight: "600", size: "14px" }}>
                Cliente
              </Label>
              <CheckboxDropdown
                placeholder="Selccione un cliente"
                options={clientOptions}
                handleSelectChange={handleSelectChange}
                // defaultValue={props.profileInfo.stores}
                defaultValue={props.profileInfo.stores}
              ></CheckboxDropdown>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
            Activado:
          </Label>

          <FormCheck
            style={{ width: "5em", height: "3em" }}
            type="switch"
            id="custom-switch"
            // ref={selfServiceType}
            // checked={true}
            // value={selfServiceType}
            // onChange={(event)=>{setselfServiceType(!selfServiceType)}}
            // checked={handleSwitchChange}
            defaultChecked={selfServiceType}
            onChange={() => setselfServiceType(!selfServiceType)}
          />
        </FormGroup>
        {props.flag === 0 && (
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
              }}
              onClick={addProfileHandler}
            >
              Crear Usuario &nbsp;
            </button>
          </div>
        )}
        {props.flag === 1 && (
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
              }}
              onClick={editProfileHandler}
            >
              Edit Usuario &nbsp;
            </button>
          </div>
        )}
      </Form>
    </ModalBody>
  );
};
export default NewUserProfileModal;