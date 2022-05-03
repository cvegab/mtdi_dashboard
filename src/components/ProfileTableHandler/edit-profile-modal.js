import VerticalModal from "components/UI/vertical-modal";

const EditProfileModal = (props)=>{
    console.log(props.profileInfo);
return(
   <VerticalModal onhideModal={props.onhideModal}>
<h1>{props.profileInfo.country}</h1>
<h1>{props.profileInfo.name}</h1>
   </VerticalModal>
)
}
export default EditProfileModal;