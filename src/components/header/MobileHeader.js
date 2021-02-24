import React from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function MobileHeader() {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="main-row">
          <div className="logo " onClick={scrollToTop}>Postura</div>
          <button className="menu" onClick={handleMenu}>
            {menuStatus ? "Close" : "Menu"}
          </button>
        </div>
        {/* <nav> */}
          <ul className={menuStatus ? "show" : 'hide'} id='sliding-nav'>
            <li className="list-item">
              <Link
                activeClass="active"
                to="sitting id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Sitting
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="standing id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Standing
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="walking id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Walking
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="sleeping id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Sleeping
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="mistakes id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Mistakes
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="exercise id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Exercises
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="disadvantages id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Disadvantages
            </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                to="advantages id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Advantages
            </Link>
            </li>
          </ul>
        {/* </nav> */}
      </div>
    </div>
  );
}

export default MobileHeader;
