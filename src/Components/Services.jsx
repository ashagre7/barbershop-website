import React from "react";
import "./Services.css";

const services = [
  { name: "תספורת גבר", price: "₪80" },
  { name: "גילוח זקן", price: "₪50" },
  { name: "צבע לשיער", price: "₪120" },
  { name: "עיצוב זקן ושיער", price: "₪100" },
  { name: "פן / עיצוב מיוחד", price: "₪70" },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container services-container">
        {/* תפריט שירותים */}
        <div className="services-menu">
          <h2 className="services-title">השירותים שלנו</h2>
          <ul className="services-list">
            {services.map((service, idx) => (
              <li key={idx} className="service-item">
                <span className="service-name">{service.name}</span>
                <span className="dots"></span>
                <span className="service-price">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* כפתור הזמנה מתחת לכל הרשימה */}
        <div className="services-action-bottom">
          <a href="/booking" className="btn-service">
            הזמן תור
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
