import React, { useState} from 'react';
import '../ClientsTable/ClientsTable.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data =[
    { id: 1, name: "Pedro Vidal", mail: "pedrovidal@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 2, name: "Rosario Garcia", mail: "rgarcia@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 3, name: "Raimundo Silva", mail: "rsl@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Desactivado"},
    { id: 4, name: "Camila Gonzalez", mail: "cammigonza@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 5, name: "Valeria Jimenez", mail: "vvjimenezl@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Desactivado"},
    { id: 6, name: "Claudio Figueroa", mail: "cefigueroa@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
    { id: 7, name: "Camilo Vasquez", mail: "ca.vasquez@gmail.com", store:"Mercadolibre", country: "Chile", selfservice:"Activado"},
  ] 



const ClientsTable = () => {
  
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [store, setStore] = useState('');
  const [country, setCountry] = useState('');
  const [selfservice, setSelfservice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  const editClient = () => {
    setName('Pedro')
    setMail('pedrovidal@gmail.com')
    setStore('Mercadolibre')
    setCountry('Chile')
    setSelfservice('Activado')
    setShowModal(true)
    setIsNewUser(false)
    }

    const addClient = () => {

    setShowModal(true)
    setName('')
    setMail('')
    setStore('')
    setCountry('')
    setSelfservice('')
    setIsNewUser(true)

    }

    return (
    <>
    <Container>
      <br/>
        <Button color="primary" onClick={addClient}> Crear nuevo Perfil  </Button>
       
      <br/><br/>

      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Tienda</th>
            <th>Pais</th>
            <th>Selfservice</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element)=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.mail}</td>
              <td>{element.store}</td>
              <td>{element.country}</td>
              <td>{element.selfservice}</td>
              <td>
                <Button color="primary" onClick={editClient}> Editar </Button>{" "}
                <Button color="danger"> Eliminar </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
      
      <Modal isOpen={showModal}>
        <ModalHeader>
          <div style={{display:"flex", justifyContent:"end"}}> 
              <button 
                style={{
                  background:"none",
                  position: "relative", 
                  marginLeft:"14em", 
                  color:"black", 
                  border:"none" 
                }} 
               onClick={()=>setShowModal(false)}
              >
                x
              </button> 
          </div>
        </ModalHeader>

        <ModalBody>
          <h3 
            style={{ 
              fontWeight: "700", 
              size: "24px", 
              textAlign: "center" 
            }}
          >
            Crear nuevo usuario
          </h3>
                
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="name" type="text" value={name} onChange={e=>setName(e.target.value)} />
            <label>{name}</label>
          </FormGroup>

          <FormGroup>
            <label>Correo electronico:</label>
            <input className="form-control" name="mail" type="text" value={mail} onChange={e=>setMail(e.target.value)}  />
          </FormGroup>
          
          <FormGroup>
            <label>Tienda:</label>
            <input className="form-control" name="store" type="text" value={store} onChange={e=>setStore(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <label>Pais:</label>
            <input className="form-control" name="country" type="text" value={country} onChange={e=>setCountry(e.target.value)}  />
          </FormGroup>

          <FormGroup>
            <label>Selfservice:</label>
            <input className="form-control" name="selfservice" type="text" value={selfservice} onChange={e=>setSelfservice(e.target.value)}  />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        { 
            isNewUser ? (<Button color="primary">Crear usuario</Button>) : (<Button color="primary">Actualizar usuario </Button>)
        }
         
        </ModalFooter>
      </Modal>

      
    </>
  )
}

export default ClientsTable