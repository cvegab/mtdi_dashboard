import React, { useState, useRef, useEffect } from "react";
import {
  ModalBody,
  FormGroup,
  Form,
  Label,
  Col,
  Row,
  Spinner
} from "reactstrap";
import { FormCheck} from "react-bootstrap";
import CheckboxDropdown from "components/CheckboxDropdown/CheckboxDropdown";

const NewUserProfileModal = (props) => {

  //States
  const [filter, setFilter] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [profileDetails, setprofileDetails] = useState([]);
  const [name, setName] = useState(props.profileInfo.first_name);
  const [clientOptions, setclientOptions] = useState([]);
  const [countryOptions, setcountryOptions] = useState([]);
  const [stores, setstores] = useState([]);
  const [country, setCountry] = useState([]);
  const [userType, setUserType] = useState(props.profileInfo.profile);
  const [selfServiceType, setselfServiceType] = useState(
    props.profileInfo.enabled
  );

  let editStoreId = [];
  let editCountryId = [];
  const emailRef = useRef("");

  //Effects 
  // Effect to get the filter options
  useEffect(() => {
    fetchFilterData();
  }, []);

  //Effect when change the filter state
  useEffect(() => {
    let filterCountry = [];

        if(props.flag === 1){
          editStoreId = props.profileInfo.stores.map((item)=>{
           return item.id;
             });
       
        editCountryId = props.profileInfo.countries.map((item)=>{
          return item.id;
            });

        //Select the user's countries
        let userCountries = [];
        props.profileInfo.countries.forEach(element => {
          userCountries.push(element.id);
        });
        setCountry(userCountries);

        //Select the user's stores
        let userStores = [];
        props.profileInfo.stores.forEach(element => {
          userStores.push(element.id);
        });
        setstores(userStores);

        }
        // Select the countries from the filter
        let countriesArray = filter.filter(getCountries);
        let selectedCountry = countriesArray.map((item) => {
          return [{ id: item.value, name: item.country }];
        });
        let allSelectedCountry = [].concat.apply([], selectedCountry);
        console.log(allSelectedCountry);
        setcountryOptions(allSelectedCountry);

        // Set the countries options state
       countriesArray.forEach((element) => {
         filterCountry.push({
           id: element.value, 
          name: element.country
        });
     });
       setcountryOptions(filterCountry);
  }, [filter]);

  //Effect when you change the countries selected
  useEffect(() => {
    let filterStore = [];
    let storesArray =  filter.filter(getStores);
        // Set the stores options state when you change the countries
        storesArray.forEach(element => {
          element.stores.forEach(store => {
            filterStore.push({
            id: store.value,
            name: store.store
            })
          }
          )
        })
      const filterUniqueStore = [...new Map(filterStore.map((item) => [item["name"], item])).values(),];
      setclientOptions(filterUniqueStore);
  }, [country])

  //Effect when you change the user type
  useEffect(() => {
    if(userType === "1"){
      const storeIds = clientOptions.map(store => store.id);
      setstores(storeIds);
    }
    else{
      setstores([]);
    }
  }, [userType]);

  //Funtions
  // Function to get stores with country filter
  function getStores(elemento){
    return country.includes(elemento.value)
  }
  // Function to get all countries 
  function getCountries(elemento){
    return elemento.value !== 0
  }

  // Function to get filter data
  const fetchFilterData = async () => {
    // setisLoading(true);
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
        //Put the data in the state
        setFilter(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  };
 
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const handleSelectChange = (event) => {
    let selectedStore = event;
    const selectedStoreId = selectedStore.map((item) => {
      return item.id;
    });
    setstores(selectedStoreId);
  };
  const editProfileHandler = (event) => {
    setisLoading(true);
    const email=localStorage.getItem("name");

    event.preventDefault();
    const profile = {
      first_name: name,
      last_name: " ",
      email: emailRef.current.value,
      profile: userType,
      stores: stores,
      countries: country,
      enabled: selfServiceType,
    };

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
    
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/user?user=${email}`;

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
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
        setisLoading(false);
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

  const handleSelectUserTypeChange = (event) => {
    setUserType(event.target.value);
  }

  const addProfileHandler = async (event) => {
    setisLoading(true);
    event.preventDefault();
    const profile = {
      first_name: name,
      last_name: " ",
      email: emailRef.current.value,
      profile: userType,
      stores: stores,
      countries: country,
      enabled: selfServiceType,
    };
    setprofileDetails(profile);
    const userEmail = localStorage.getItem("dtm");
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
      `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/user?user=sofiavatar@chambas.cl`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>{
        if (result === '"Success!"') {
          window.location.reload();
        }
        setisLoading(false);
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
          Crear nuevo perfil
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
         Editar perfil
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
            name="name"
            id="exampleEmail"
            style={{ fontSize: "12px" }}
            // value={editedName}
            defaultValue={props.profileInfo.first_name}
            onChange={nameChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail" style={{ fontWeight: "600", size: "14px" }}>
            Correo Electrónico:
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
                //ref={userType}
                defaultValue={userType}
                onChange={handleSelectUserTypeChange}
              >
                <option selected>Selccione tipo de usuario</option>
                <option value={1}>Administrador</option>
                <option value={2}>KAM</option>
                <option value={3}>Cliente</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Name" style={{ fontWeight: "600", size: "14px" }}>
                País
              </Label>
              <CheckboxDropdown
                placeholder="Selccione un país"
                options={countryOptions}
                handleSelectChange={handleSelectCountryChange}
                // defaultValue={props.profileInfo.stores}
                defaultValue={props.profileInfo.countries}
              ></CheckboxDropdown>
           
            </FormGroup>
          </Col>
        </Row>
        {
          userType != "1"  && 
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="cliente" style={{ fontWeight: "600", size: "14px" }}>
                Cliente
              </Label>
              <CheckboxDropdown
                placeholder="Seleccione un cliente"
                options={clientOptions}
                handleSelectChange={handleSelectChange}
                // defaultValue={props.profileInfo.stores}
                defaultValue={props.profileInfo.stores}
              ></CheckboxDropdown>

            </FormGroup>
          </Col>
        </Row>
        }
        <br/>
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
          {!isLoading && (
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
              Crear perfil &nbsp;
            </button>
          )}
         
          {isLoading && (
            <button
              id="bttnSubmit"
              type="submit"
              style={{
                backgroundColor: "#51cbce",
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
              disabled
            >
                 <Spinner
                    style={{ width: "0.7rem", height: "0.7rem" }}
                    type="grow"
                    color="light"
                  />
                  &nbsp; Cargando...
                
            </button>
          )}
          </div>
        )}

        {props.flag === 1 && (
          <div class="text-center">
          {!isLoading && (
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
              Editar perfil &nbsp;
            </button>
          )}
         
          {isLoading && (
            <button
              id="bttnSubmit"
              type="submit"
              style={{
                backgroundColor: "#51cbce",
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
              disabled
            >
                 <Spinner
                    style={{ width: "0.7rem", height: "0.7rem" }}
                    type="grow"
                    color="light"
                  />
                  &nbsp; Cargando...
                
            </button>
          )}
          </div>
        )}
      </Form>
    </ModalBody>
  );
};
export default NewUserProfileModal;
