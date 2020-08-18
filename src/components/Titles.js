import React from "react";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Titles() {
  return (
    <div className="row">
      <div className="col-2">
      <strong>Image</strong>
      </div>
      <div className="col-2">
      <strong>Name</strong>
      </div>
      <div className="col-2">
      <strong>Phone</strong>
      </div>
      <div className="col-2">
      <strong>Email</strong>
      </div>
      <div className="col-2">
      <strong>DOB</strong>
      </div>
    </div>
  );
}

export default Titles;
