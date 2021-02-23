import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
function DesktopHeader() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="desktop-header">
      {/* <nav className="left-nav"> */}
        <ul className="left-list">
          <li className="list-item">
            <Link
              activeClass="active"
              to="sitting id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className='sitting-link'
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
        </ul>
      {/* </nav> */}
      <div className="logo header-two list-item" onClick={scrollToTop}>Postura</div>
      {/* <nav className="right-nav"> */}
        <ul className="right-list">
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
  );
}
export default DesktopHeader;
