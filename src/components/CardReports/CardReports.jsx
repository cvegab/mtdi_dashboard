import React from 'react';
import './CardReports.css';

const CardReports = (props) => {
  return (
    <div className="card-report">
      <h1 style={{textAlign:"initial"}}> {props.title} </h1>
      <label>{props.subtitle1}</label>
      <label>{props.value1}</label>
      <label>{props.subtitle2}</label>
      <label>{props.value2}</label>
      <label>{props.subtitle3}</label>
      <label>{props.value3}</label>
      <label>{props.subtitle4}</label>
      <label>{props.value4}</label>

    </div>
  )
}

export default CardReports