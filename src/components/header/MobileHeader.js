import React from "react";
import { useState } from "react";


function MobileHeader() {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="main-row">
          <div className="logo">Postura</div>
          <button className="menu" onClick={handleMenu}>
            {menuStatus ? "Close" : "Menu"}
          </button>
        </div>
        <nav>
          <ul  className={menuStatus ? "show" : 'hide'}id='sliding-nav'>
          {/* <ul id='sliding-nav'> */}
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
            <li className="list-item">Sitting</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileHeader;
