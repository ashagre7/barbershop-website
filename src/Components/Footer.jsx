import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ onContactClick }) => {
  return (
    <footer className="footer text-white mt-auto">
      <div className="container text-center">
        <div className="row">
          {/* עמודת יצירת קשר */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">יצירת קשר</h5>
            <p className="mb-1">📍 פתח תקווה, ישראל</p>
            <p className="mb-1">📞 058-6560425</p>
            <p className="mb-0">✉️ info@freshcut.co.il</p>
          </div>

          {/* עמודת קישורים */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">קישורים</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">עלינו</a></li>
              <li>
                <a
                  href="#!"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onContactClick) onContactClick();
                  }}
                >
                  צור קשר
                </a>
              </li>
              <li><Link to="/auth" className="footer-link">הרשמה</Link></li>
              <li><Link to="/auth" className="footer-link">התחברות</Link></li>
            </ul>
          </div>

          {/* עמודת רשתות חברתיות */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">עקבו אחרינו</h5>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/972586560425"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white my-4" />
        <p className="mb-0 small">
          © {new Date().getFullYear()} FRESH CUT | עיצוב ופיתוח - אשגרה נגאש
        </p>
      </div>
    </footer>
  );
};

export default Footer;
