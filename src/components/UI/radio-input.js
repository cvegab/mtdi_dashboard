import React from "react";
import classes from './radio-input.module.css';
const RadioInput = ()=>{
    const [renca, setRenca] = React.useState();
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
  setRenca(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(renca);
  };
return(
    <React.Fragment>
          <form onSubmit={handleSubmit}>
      <div className={classes.configure}>
      <h3>Renca</h3>
         {/* <label>
          <input type="radio" value="renca" checked={renca == 'renca'} onChange={handleChange} />
          <span>Alcantara</span>
        </label> */}
      </div>
       <div className={classes.configure}>
      <div style={{top: '20px',position:'absolute',
                bottom: '45%',
                left: '1%',width:'100%'}}>
      
         </div>
      </div> 
    </form>
    </React.Fragment>
)
}
export default RadioInput;