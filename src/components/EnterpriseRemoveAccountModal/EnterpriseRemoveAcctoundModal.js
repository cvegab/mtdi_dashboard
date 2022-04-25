import React from 'react'
import { FormCheck, FormControl, FormLabel, FormInput, ModalBody, Row, FormSelect } from 'react-bootstrap'
import { Col, Form, FormGroup } from 'reactstrap'

const EnterpriseRemoveAccountModal = () => {
  return (
    <div>
    <ModalBody>
    <div className="text-center">
    <p 
          style={{
            fontSize:"18px", 
            fontWeight:"bold", 
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center",
            marginBottom:"2em"
          }}
        >
            ¿Está seguro que desea eliminar esta cuenta?
        </p>
    </div>



         
    <div className="text-center">
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
        Eliminar cuenta &nbsp;
        
      </button>
    </div>



</ModalBody>
</div>
  )
}

export default EnterpriseRemoveAccountModal