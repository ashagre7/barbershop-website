import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar-floating">
      <div className="navbar-container">

        {/* צד שמאל */}
        <div className="navbar-links-left">
          <Link to="/" className="nav-link">ראשי</Link>
          <a href="#about" className="nav-link">עלינו</a>
        </div>

        {/* לוגו באמצע */}
        <div className="navbar-logo-custom">
          <div className="logo-mustache">︶</div>
          <h1 className="logo-title">BARBER SHOP</h1>
          <div className="logo-banner">FRESH CUT</div>
        </div>

        {/* צד ימין */}
        <div className="navbar-links-right">
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
