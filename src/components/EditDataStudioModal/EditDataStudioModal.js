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
import { Select } from "@material-ui/core";
const NewDataStudioModal = (props) => {
  useEffect(() => {
    fetchFilterData();
  }, []);

  console.log('Hola soy el props', props.dataTiendaInfo);
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

    try {
      const response = await fetch(
        "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store?id=0",
        requestOptions
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      
      let storesArray = data.filter((item) => {
        return item.value!==0;
      });
      console.log(storesArray);
      let selectedStore = storesArray.map((item) => {
        return [{ id: item.id, name: item.tienda }];
      });
      let allSelectedStore = [].concat.apply([], selectedStore);
      console.log(allSelectedStore);
      setItems(allSelectedStore);
      let linksArray = items.map((item) => {
        return [{ id: item.id, name: item.datastudio_iframe}];
      });
      let allSelectedLinks = [].concat.apply([], linksArray);
      console.log(allSelectedLinks);
  
    } catch (error) {
      console.log(error);
    }
  };
      

  
 
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  const [profileDetails, setprofileDetails] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");
 
  const [store, setStore] = useState('');
  const [datalink, setDataLink] = useState('');


  const editProfileHandler = () => {
    const profile = {   
      id: id,
      tienda: store,
      datastudio_iframe: datalink,
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
    let url = `https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store?id=${props.dataTiendaInfo.id}`;
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        if (result === '"Success!"') {
          window.location.reload();
        }
        if (result === '"Invalid user"') {
          seterrorMessage("No se puede efectuar el cambio");
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

  const handleSelectStoreChange = (event) => {
    let selectedStore = event;
    const selectedStoreId = selectedStore.map((item) => {
      return item.id
    });

    setStore(selectedStoreId);
    console.log(selectedStoreId);
  };



  return (
    <ModalBody>
   
        <h3
          style={{
            fontWeight: "700",
            size: "24px",
            textAlign: "center",
          }}
        >
          Editar Data Studio
        </h3>
      

      <Form>

        <Row>
          <Col >
            
              <FormGroup>


              <Label for="tienda" style={{ fontWeight: "600", size: "14px" }}>
                Tienda
              </Label>


              {/* <Select
                    id="select-checkbox-enterprise"
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.name}
                    closeMenuOnSelect={true}
                    defaultValue={props.dataTiendaInfo.tienda}    
                    isMulti
                    options={items}
                    placeholder="Selectiona tu tienda"
                  /> */}
                  <p> 
                  {props.dataTiendaInfo.tienda}
                  </p>

            </FormGroup>
            <br/>
            <FormGroup>
              <Label for="link" style={{ fontWeight: "600", size: "14px" }}>
                Link
              </Label>
              <input
                className="input"
                type="link"
                name="link"
                defaultValue={props.dataTiendaInfo.datastudio_iframe}
               
              />
            </FormGroup>
          </Col>
        </Row>
        <br/>

  
   
          <div class="text-center">
            <button
              id="bttnSubmit"
              type="submit"
              style={{
                backgroundColor: "#1D308E",
                textAlign: "center",
                color: "white",
                width: "300px",
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
              Editar DataStudio
            </button>
          </div>
        
      </Form>
    </ModalBody>
  );
};
export default NewDataStudioModal;
