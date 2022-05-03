import { LaptopWindows } from "@material-ui/icons";
import Modal from "components/UI/Modal";
import { useState } from "react";

const DeleteProfileModal = (props)=>{
    console.log(props.profileInfo.id);
const [showDeleteSuccessModal, setshowDeleteSuccessModal] = useState(false);
const [hideBothModal, sethideBothModal] = useState(false);
    const deleteProfileHandler = async()=>{
        let url = `https://profile-table-default-rtdb.firebaseio.com/profile/${props.profileInfo.id}.json`;
        try {
            const response = await fetch(url,{
                method: 'DELETE',
            } 
        );
           
            if (!response.ok) {
              throw new Error();
            }
            const data = await response;
            console.log(data.status);
            if(data.status === 200){
          setshowDeleteSuccessModal(true);
       
            }
            // console.log(profileDetails);
          // window.location.reload();
          } catch (error) {
            console.log(error);
          }
        console.log('deleting'+ props.profileInfo.id);
    }
const hideDeleteSuccessfulHandler = ()=>{
    props.onhideModal();
    window.location.reload();
}

return (
    <>
   
    {showDeleteSuccessModal && <Modal onhideModal={hideDeleteSuccessfulHandler}>
       <h3    style={{
              fontWeight: "700",
              size: "22px",
              textAlign: "center",
            }}>Cuenta eliminada exitosamente</h3>
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
                   onClick={hideDeleteSuccessfulHandler}
              >
              Entendido &nbsp;
              
              </button>
            </div>
   </Modal>}

  { !showDeleteSuccessModal && <Modal onhideModal={props.onhideModal}>
       <h3    style={{
              fontWeight: "700",
              size: "22px",
              textAlign: "center",
            }}>¿Está seguro que desea eliminar esta cuenta?</h3>
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
                  onClick={deleteProfileHandler}
              >
               Eliminar Cuenta &nbsp;
              
              </button>
            </div>
   </Modal> }
 
   </>
)
}
export default DeleteProfileModal;