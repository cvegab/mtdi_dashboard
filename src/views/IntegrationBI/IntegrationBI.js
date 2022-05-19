import React from 'react';
import { Container } from 'reactstrap';
import DataStudioTable from 'components/dataStudioTable/data-studio-table';

const IntegrationBI = () => {
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
             Integración BI
          </p>

          <Container>

        <DataStudioTable/>
     

          </Container>




    </div>
  )
}


export default IntegrationBI