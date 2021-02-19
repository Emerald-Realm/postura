import React from "react";

function DesktopHeader() {
  return (
    <div className="desktop-header">
      <nav className="left-nav">
        <ul className="left-list">
          <li className="list-item">
            <a href='#sitting-id'>sitting link</a>
          </li>
          <li className="list-item">
            <a href='#sitting-id'>sitting link</a>
            {/* <a herf='#walking-id'>walking</a> */}
          </li>
          <li className="list-item">Sitting</li>
          <li className="list-item">Sitting</li>
        </ul>
      </nav>
      <div className="logo">Postura</div>
      <nav className="right-nav">
        <ul className="right-list">
          <li className="list-item">Sitting</li>
          <li className="list-item">Sitting</li>
          <li className="list-item">Sitting</li>
          <li className="list-item">Sitting</li>
        </ul>
      </nav>
    </div>
  );
}

export default DesktopHeader;
