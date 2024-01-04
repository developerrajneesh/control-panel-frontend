import React from "react";
import "./header.css";
function Header({component}) {
  console.log(component);
  return (
    <div className="Header-container d-flex justify-content-between align-items-center">
      <div className="">Header</div>
      <div>
        {component ? component : <input type="text" /> } </div>
    </div>
  );
}

export default Header;
