import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ ייבוא הלוגו מתוך src/assets
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar-block">
      <div className="navbar-container">

        {/* צד שמאל */}
        <div className="navbar-links navbar-links-left">
          <Link to="/" className="nav-link">ראשי</Link>
          <a href="#about" className="nav-link">עלינו</a>
        </div>

        {/* לוגו באמצע */}
        <div className="navbar-logo-custom">
          <img 
            src={logo}
            alt="Fresh Cut Logo"
            className="navbar-logo-img"
          />
        </div>

        {/* צד ימין */}
        <div className="navbar-links navbar-links-right">
          <a
            href="#!"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              if (onContactClick) onContactClick();
            }}
          >
            צור קשר
          </a>
          <Link to="/auth" className="nav-link">הרשמה / התחברות</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
