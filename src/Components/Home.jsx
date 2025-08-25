import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Services from './Services';

const Home = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className="homepage">

      {/* Hero */}
      <section className="hero-section text-center">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/videos/barbershop.mp4" type="video/mp4" />
          הדפדפן שלך לא תומך בווידאו.
        </video>
        <div className="video-overlay"></div>

        <div className="hero-content">
          <h1 className="text-white mt-3">ברוכים הבאים</h1>
          <h2 className="display-4 fw-bold text-white">לפרייש קאט</h2>
          <button
            onClick={handleBookingClick}
            className="btn-white px-4 py-2 mt-4 shadow-sm"
          >
            הזמן תור
          </button>
          <i className="bi bi-scissors button-icon animated-scissors"></i>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section d-flex align-items-center justify-content-center flex-wrap">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-5">
          <div className="about-text text-left">
            <h2 className="mb-3 about-title">קצת עלינו</h2>
            <p className="lead mb-3">
              בעידן בו גברים מתקשים לטפח את השיער והזקן, מספרות גברים הן מצרך נדרש.
              והנה מספרה ייעודית לגברים הממוקמת בפתח תקווה, מובילה את סצנת הברברינג בישראל.
            </p>
            <p className="lead mb-3">
              מתמחים בכל סוגי התספורות ועיצוב הזקנים, גילוחים עם תער, טיפולי פנים ושעווה.
              כאן מתחילה החוויה שלך.
            </p>
            <ul className="about-list">
              <li>אווירה משפחתית</li>
              <li>מוזיקת בלוז וראפ</li>
              <li>צוות מקצועי ושירות</li>
            </ul>
            <div className="gallery-slider mt-4">
              <img
                src={galleryImages[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="gallery-slide"
              />
            </div>
          </div>
          <div className="about-image">
            <img src="/images/about.jpg" alt="הסלון שלנו" />
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Footer */}
      <footer className="footer text-white mt-auto">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">יצירת קשר</h5>
              <p className="mb-1">📍 פתח תקווה, ישראל</p>
              <p className="mb-1">📞 058-6560425</p>
              <p className="mb-0">✉️ info@freshcut.co.il</p>
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">קישורים</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="footer-link">עלינו</a></li>
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

            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">עקבו אחרינו</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://wa.me/972586560425" target="_blank" rel="noopener noreferrer" className="footer-icon">
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
    </div>
  );
};

export default Home;
