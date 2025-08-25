import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { name: 'תספורת גבר', price: '₪80' },
  { name: 'גילוח זקן', price: '₪50' },
  { name: 'צבע לשיער', price: '₪120' },
  { name: 'עיצוב זקן ושיער', price: '₪100' },
  { name: 'פן / עיצוב מיוחד', price: '₪70' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-title">השירותים שלנו</h2>
        <table className="table services-table">
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx}>
                <td className="service-name">{service.name}</td>
                <td className="service-price">{service.price}</td>
                <td className="text-center">
                  <Link to="/booking" className="btn btn-sm btn-service">
                    הזמן עכשיו
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Services;
