import React from "react";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
  <nav className="nav navbar-light bg-light">
    <div>
      <h1>Employee Directory</h1><br/>
      <p>Click on carrots to filter by heading or use the search box to narrow your results. </p>
    </div>
  </nav>
  );
}

export default Navbar;
