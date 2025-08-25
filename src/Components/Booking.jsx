import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user.id : null;

    if (!userId) {
      alert("אנא התחבר כדי לקבוע תור");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: form.date + "T" + form.time,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("התור נקבע בהצלחה!");
        setForm({ name: "", phone: "", service: "", date: "", time: "" });
      } else {
        alert(data.message || "שגיאה בשמירת התור");
      }
    } catch (error) {
      alert("שגיאה בשרת");
      console.error(error);
    }
  };

  return (
    <div className="booking-page">
      {/* ❌ Navbar הוסר מהעמוד הזה */}

      <div className="popup-container d-flex justify-content-center align-items-center">
        <div className="popup-card">
          <button className="popup-close" onClick={() => navigate("/")}>
            ✕
          </button>
          <h2 className="text-center mb-4">קביעת תור</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">שם מלא</label>
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

            <div className="mb-3">
              <label className="form-label">מספר טלפון</label>
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

            <div className="mb-3">
              <label className="form-label">שירות</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">בחר שירות</option>
                <option value="תספורת גברים">תספורת גברים</option>
                <option value="עיצוב זקן">עיצוב זקן</option>
                <option value="גילוח קלאסי">גילוח קלאסי</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">תאריך</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">שעה</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100 fw-bold">
              הזמן עכשיו
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
