import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Services from "./Services";
import About from "./About";

const Home = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <main className="homepage">

      {/* Hero Section */}
      <section className="hero-section text-center">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/videos/barbershop.mp4" type="video/mp4" />
          הדפדפן שלך לא תומך בווידאו.
        </video>
        <div className="video-overlay"></div>

        <div className="hero-content">
          <h1 className="text-white mt-3">ברוכים הבאים</h1>
          <h2 className="display-4 fw-bold text-white">FRESH CUT</h2>
          <button
            onClick={handleBookingClick}
            className="btn-white px-4 py-2 mt-4 shadow-sm"
          >
            הזמן תור
          </button>
          <i className="bi bi-scissors button-icon animated-scissors"></i>
        </div>
      </section>

      {/* Info Section (בסגנון Elementor) */}
<section className="info-elementor">
  <div className="info-container">
    {/* שעות פעילות */}
    <div className="info-box">
      <i className="bi bi-calendar-week info-icon"></i>
      <p>
        א׳-ד׳: 10:00-20:00<br />
        ה׳: 09:00-20:00<br />
        ו׳: 08:00-14:00
      </p>
    </div>

    {/* כתובת */}
    <div className="info-box">
      <i className="bi bi-geo-alt-fill info-icon"></i>
      <p>עזרא ונחמיה 2, תפתח תקווה </p>
    </div>

    {/* טלפון */}
    <div className="info-box">
      <i className="bi bi-telephone-fill info-icon"></i>
      <p>03-5375553</p>
    </div>
  </div>
</section>


      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

    </main>
  );
};

export default Home;
