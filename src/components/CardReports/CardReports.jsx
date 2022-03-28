import React from 'react';
import './CardReports.css';
import { Col, Row } from 'reactstrap';
import { DriveEta } from '@material-ui/icons';


const CardReports = (props) => {
  return (
    <div className="card-report">
     
      <h1 className="title-cardReport"> {props.title} </h1>
        <div className="row">
        <div className="col-6">
          <label className="subtitle-cardReport">{props.subtitle1}</label>
          <label className="value-cardReport">{props.value1}</label>
        </div>
        <div className="col-6">
          <label className="subtitle-cardReport">{props.subtitle2}</label>
          <label className="value-cardReport">{props.value2}</label>    
        </div>
        <div className="col-6">
          <label className="subtitle-cardReport">{props.subtitle3}</label>
          <label className="value-cardReport">{props.value3}</label>
        </div>
        <div className="col-6">
          <label className="subtitle-cardReport">{props.subtitle4}</label>
          <label className="value-cardReport">{props.value4}</label>
        </div>
        </div>
      
    </div>
  )
}

export default CardReports