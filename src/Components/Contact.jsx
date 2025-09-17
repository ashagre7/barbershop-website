import React, { useState } from 'react';
import './Contact.css'; // נוסיף סטיילינג לפופאפ

const Contact = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('הפרטים נשלחו בהצלחה!');
    setForm({ name: '', email: '', phone: '' });
    if (onClose) onClose(); // נסגור פופאפ אחרי שליחה
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* כפתור סגירה */}
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>

        <h2 className="text-center mb-4 text-white">צור קשר</h2>
        <form onSubmit={handleSubmit}>
          {/* שם מלא */}
          <div className="mb-3">
            <label className="form-label text-white">שם מלא</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="הכנס את שמך"
              required
            />
          </div>

          {/* אימייל */}
          <div className="mb-3">
            <label className="form-label text-white">אימייל</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* טלפון */}
          <div className="mb-3">
            <label className="form-label text-white">טלפון</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="050-0000000"
              required
            />
          </div>

          {/* כפתור שליחה */}
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              backgroundColor: '#d4af37',
              color: '#000',
              borderRadius: '8px',
              fontSize: '16px',
              padding: '10px'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#b5942f')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#d4af37')}
          >
            שלח
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
