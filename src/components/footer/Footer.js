import React from "react";
import { useState } from "react";

function Footer() {
  const [disclaimerStatus, setDisclaimerStatus] = useState(false);

  const handleDisclaimer = () => {
    setDisclaimerStatus(!disclaimerStatus);
  };
  
  return (
    <div className='footer paragraph-two'>
      <div className="copyright">Postura &copy; 2021</div>
      <button className="disclaimer-evnt" onClick={handleDisclaimer}>
        {disclaimerStatus ? "Close Disclaimer" : "Click here to see disclaimer"}
      </button>
      <div className={disclaimerStatus ? "disclaimer" : "close"}>
        <p>This is a project of practice</p>
        <p>contact us : example@example.com</p>
      </div>
    </div>
  );
}

export default Footer;
