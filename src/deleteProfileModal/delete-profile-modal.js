import Modal from "components/UI/Modal";

const DeleteProfileModal = ()=>{
return (
   <Modal>
       <h3>¿Está seguro que desea eliminar esta cuenta?</h3>
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
                 onClick={addProfileHandler}
              >
               Eliminar Cuenta &nbsp;
              
              </button>
            </div>
   </Modal> 
)
}
export default DeleteProfileModal;