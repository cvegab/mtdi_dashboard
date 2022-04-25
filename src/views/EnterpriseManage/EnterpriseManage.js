import EnterpriseTable from 'components/EnterpriseTable/EnterpriseTable'
import React from 'react'

const EnterpriseManage = () => {
  return (
    <div className="content">
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
            fontSize: "30px",
            fontWeight: "800",
            marginLeft: "0.5em",
            marginBottom: "2em",
          }}
        >
          Administrar Empresas
        </p>

        <div>
            <EnterpriseTable />
        </div>
    </div>
  )
}

export default EnterpriseManage