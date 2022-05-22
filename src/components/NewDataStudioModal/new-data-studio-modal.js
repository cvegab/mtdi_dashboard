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
import CheckboxDropdown from "components/CheckboxDropdown/CheckboxDropdown";
const NewDataStudioModal = () => {
  useEffect(() => {
    fetchFilterData();
  }, []);


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
      console.log('Hola soy el array de tiendas', allSelectedStore);
      setItems(allSelectedStore);

  
    } catch (error) {
      console.log(error);
    }
  };

const [items, setItems] = useState([]);
const [store, setStore] = useState('');
const [link, setLink] = useState('');
const [profile, setProfile] = useState('');



const handleSelectStoreChange = (event) => {
  let selectedStore = event;
  const selectedStoreId = selectedStore.map((item) => {
    return item.id
  });
  setStore(selectedStoreId);
  console.log('Hola, soy la tienda elegida', selectedStoreId);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Hola, soy los datos', store, link);

  const profile = {
    id: store,
    datastudio_iframe: link
 
  };
  console.log(profile);
  setProfile(profile);

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
    "https://32q0xdsl4b.execute-api.sa-east-1.amazonaws.com/develop/store?id=0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) =>{
      console.log(result);
      if (result === '"Success!"') {
        window.location.reload();
      }
     
    } )
    .catch((error) => console.log('error', error));
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
          Integrar Nuevo BI
        </h3>
      
 

      <Form onSubmit={handleSubmit}>

        <Row>
          <Col >
            
              <FormGroup>

              <Label for="tienda" style={{ fontWeight: "600", size: "14px" }}>
                Tienda
              </Label>
              <CheckboxDropdown
                placeholder="Selccione una tienda"
                options={items}
                name="store"
                handleSelectChange={handleSelectStoreChange}
              ></CheckboxDropdown>
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
      
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
             
            >
              Crear DataStudio &nbsp;
            </button>
          </div>
        

      </Form>
    </ModalBody>
  );
};
export default NewDataStudioModal;
