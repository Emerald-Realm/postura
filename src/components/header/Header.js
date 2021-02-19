import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {

  return (
    <div>
      <MobileHeader className='mobile-header'/>
      <DesktopHeader className='Desktop-header'/>
    </div>
  );
}

export default Header;
