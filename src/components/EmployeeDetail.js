import React from "react";
import Row from "./Row";
function EmployeeDetail(props) {
  return (
    <Row> 
      <div className="col-2">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="col-2">
        {props.name}
      </div>
      <div className="col-2">
        {props.phone}
      </div>
      <div className="col-2">
        {props.email}
      </div>
      <div className="col-2">
        {props.dob.substring(0,10)}
      </div>
    </Row>
  );
}

export default EmployeeDetail;
