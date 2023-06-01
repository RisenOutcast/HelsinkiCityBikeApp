import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 1200);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1200) {
      setNavbarVisible(true);
    }
  }, [windowWidth]);

  const toggleNavbarVisibility = () => {
    if (windowWidth < 1200) {
      setNavbarVisible(!navbarVisible);
    }
  };

  const deactivate_button = (
    <div className="hamburger-button-container">
      <button
        type="button"
        className="deactivate-nav-button"
        onClick={toggleNavbarVisibility}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="deactivate-nav-button-icon"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );

  const activate_button = (
    <div className="hamburger-button-container">
      <button
        type="button"
        className="activate-nav-button"
        onClick={toggleNavbarVisibility}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="activate-nav-button-icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  );

  const hamburger_button =
    navbarVisible === true ? deactivate_button : activate_button;

  var bicycleImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
    >
      <path d="M194-160q-81 0-137.5-57T0-355q0-81 57.038-137.5Q114.075-549 195-549q71 0 124.5 45.5T384-388h51l-82-232h-73v-60h188v60h-52l26 71h222l-71-191H488v-60h99q24 0 40.5 11t24.5 33l76 207h38q80.51 0 137.255 56.234Q960-436.532 960-356.746 960-276 903.74-218 847.48-160 766-160q-71.602 0-125.801-48T574-328H384q-11 72-64.5 120T194-160Zm0-60q48 0 83.5-31t47.5-77H206v-60h119q-12-45-48-73t-82-28q-56 0-95.5 39T60-355q0 56.25 39 95.625T194-220Zm305-168h76q4-23 15.5-51t31.5-50H463l36 101Zm267 168q56 0 95-39.375T900-355q0-56-39-95t-95-39h-16l39 113-56 19-43-112q-29 17-43.5 48T632-355q0 56.25 39 95.625T766-220ZM193-355Zm573 0Z" />
    </svg>
  );

  var journeyImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
    >
      <path d="m122-240-42-42 219-219q32-32 78-32t78 32l46 46q15 15 35.5 15t35.5-15l205-205H660v-60h220v220h-60v-117L614-412q-32 32-78 32t-78-32l-47-47q-14-14-35-14t-35 14L122-240Z" />
    </svg>
  );
  var stopsImage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
    >
      <path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z" />
    </svg>
  );

  return (
    <header>
      {navbarVisible && (
        <div className="navbar">
          {
            <nav>
              <div className="navbarTitle">
                {bicycleImage}
                <h2>Helsinki City Bike App</h2>
              </div>
              <div className="navbarItems">
                <Link className="navElement" to="/">
                  {journeyImage}Matkat
                </Link>

                <Link className="navElement" to="/user">
                  {stopsImage}Pysäkit
                </Link>
              </div>
            </nav>
          }
        </div>
      )}

      {windowWidth < 1200 && hamburger_button}
    </header>
  );
};

export default Navbar;
