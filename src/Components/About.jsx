import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
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
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* טקסט */}
        <div className="about-text">
          <h2 className="mb-3 about-title">קצת עלינו</h2>
          <p>
            בעידן בו גברים מתקשים לטפח את השיער והזקן, מספרות גברים הן מצרך נדרש.
            והנה מספרה ייעודית לגברים הממוקמת בפתח תקווה, מובילה את סצנת הברברינג
            בישראל.
          </p>
          <p>
            מתמחים בכל סוגי התספורות ועיצוב הזקנים, גילוחים עם תער, טיפולי פנים
            ושעווה. כאן מתחילה החוויה שלך.
          </p>
          <ul className="about-list">
            <li>אווירה משפחתית</li>
            <li>מוזיקת בלוז וראפ</li>
            <li>צוות מקצועי </li>
          </ul>

          {/* כפתור */}
          <div className="about-button-wrapper">
            <a href="/booking" className="btn-booking">
              הזמן תור
            </a>
          </div>
        </div>

        {/* ✅ גלריה בצד */}
        <div className="gallery-slider">
          <img
            src={galleryImages[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="gallery-slide"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
