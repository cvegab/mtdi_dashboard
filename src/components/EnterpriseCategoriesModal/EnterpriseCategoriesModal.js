import CheckboxDropdown from 'components/CheckboxDropdown/CheckboxDropdown'
import React, { useState} from 'react'
import {  ModalBody } from 'react-bootstrap'
import { Form } from 'reactstrap'

const EnterpriseCategoriesModal = (props) => {

  // const [editMode, setEditMode] = useState(false);
  
  return (
    <div>
    <ModalBody>
        <p 
          style={{
            fontSize:"24px", 
            fontWeight:"bold", 
            display:"flex", 
            justifyContent:"center", 
            marginBottom:"2em"
          }}
        >
            Categorías del negocio
        </p>
        <Form >
          
          <div>
            <CheckboxDropdown /> 
            <br/><br/>
          </div>

         
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
        //  onClick={(e) => e.preventDefault(setEditMode(true))}
      >
        Guardar cambios
        
      </button>
    </div>



  </Form>
</ModalBody>
</div>
  )
}

export default EnterpriseCategoriesModal