import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar-block">
      <div className="navbar-container">

        {/* צד שמאל – תמיד מוצג בדסקטופ */}
        <div className="navbar-links navbar-links-left">
          <Link to="/" className="nav-link">ראשי</Link>
          <a href="#about" className="nav-link">עלינו</a>
        </div>

        {/* לוגו באמצע */}
        <div className="navbar-logo-custom">
          <Link to="/">
            <img 
              src={logo}
              alt="Fresh Cut Logo"
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* צד ימין – כולל המבורגר + קישורים בדסקטופ */}
        <div className="navbar-links navbar-links-right">
          <a
            href="#!"
            className="nav-link desktop-only"
            onClick={(e) => {
              e.preventDefault();
              if (onContactClick) onContactClick();
            }}
          >
            צור קשר
          </a>
          <Link to="/auth" className="nav-link desktop-only">הרשמה / התחברות</Link>

          {/* עוטף המבורגר + Dropdown במובייל */}
          <div className="hamburger-wrapper">
            <div className="navbar-hamburger" onClick={toggleMenu}>
              <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
            </div>

            <div className={`mobile-dropdown ${isOpen ? "open" : ""}`}>
              <Link to="/" className="nav-link" onClick={toggleMenu}>ראשי</Link>
              <a href="#about" className="nav-link" onClick={toggleMenu}>עלינו</a>
              <a
                href="#!"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (onContactClick) onContactClick();
                  toggleMenu();
                }}
              >
                צור קשר
              </a>
              <Link to="/auth" className="nav-link" onClick={toggleMenu}>הרשמה / התחברות</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
