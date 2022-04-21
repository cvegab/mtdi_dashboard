import ProfileTableHandler from 'components/ProfileTableHandler/profile-table-handler';
import React from 'react';
// import ClientsTable from 'components/ClientsTable/ClientsTable';
import { Container } from 'reactstrap';



const CustomerMaintainer = () => {
  return (
    <div>

          <br/>
          <br/>
          <br/>
            <h5
            className="titleTable"
            style={{
              color: "#C4C4C4",
              width: "450px",
              fontSize: "10px",
              fontWeight: "800",
              marginLeft: "4em",
              marginBottom: "0px",
            }}
          >
            Dashboard: Vista Administrador
          </h5>
          <p
            id="textNameTable"
            style={{
              color: "black",
              width: "450px",
              fontSize: "30px",
              fontWeight: "800",
              marginLeft: "2em",
              marginTop:"1em"
            }}
          >
            Administración de usuarios
          </p>

          <Container>

        
      <ProfileTableHandler/>

          </Container>




    </div>
  )
}

export default CustomerMaintainer;