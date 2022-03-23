import PDFReport from 'components/PDFReport/PDFReport'
import React from 'react'

const shareReports = () => {
  return <div>
            <button 
                 id="bttnSubmit"
                //  className="bttnCompartirReporte" 
                 style={{
                  backgroundColor: "#1D308E",
                  textAlign: "center",
                  width: "296px",
                  height: "64px",
                  padding: "22px 81px",
                  borderRadius: "33px",
                  color: "#FFFFFF",
                  marginLeft: "1em",
                  textTransform: "none",
                  fontWeight:"bold",
                  border:"0",
                  fontSize: "11px"
                }}
                onClick={toggle}
              > 
                <span className="btn-label">
                  <img src={iconShareReport} width="19px"/>
                </span>
                    &nbsp;Compartir Reporte &nbsp;               
              </button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                  <div style={{display:"flex", justifyContent:"end"}}> 
                    <button style={{background:"none",  position: "relative", marginLeft:"14em", color:"black", border:"none" }} onClick={toggle}>x</button> 
                  </div>
                </ModalHeader>
                <ModalBody>
                
                <p style={{fontSize:"24px", fontWeight:"bold", display:"flex", justifyContent:"center"}}>Compartir Reporte</p>
                <br/>
                <br/>
                <div style={{display:"grid", justifyContent:"center"}}>
                {/* <button
                  id="bttnSubmit"
                  style={{
                    backgroundColor: "#1D308E",
                    textAlign: "center",
                    width: "296px",
                    height: "64px",
                    padding: "22px 81px",
                    borderRadius: "33px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    fontWeight:"bold",
                    border:"0",
                    fontSize: "11px",
                    marginBottom:"2em"
                  }}>
                  Descargar Reporte
                </button> */}
                <PDFReport />
                <br/>
                <button
                  id="bttnSubmit"
                  style={{
                    backgroundColor: "#1D308E",
                    textAlign: "center",
                    width: "296px",
                    height: "64px",
                    padding: "22px 81px",
                    borderRadius: "33px",
                    color: "#FFFFFF",
                    marginLeft: "1em",
                    textTransform: "none",
                    fontWeight:"bold",
                    border:"0",
                    fontSize: "11px"
                  }}
                
                  >
                  <p style={{width:"150px"}}>Enviar por correo</p>
                </button>
                </div>
                </ModalBody>
               
              </Modal>
    </div>
  
};

export default shareReports;