import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('קישור לשחזור סיסמה נשלח למייל שלך');
        setEmail('');
      } else {
        setError(data.message || 'שגיאה בשליחת הבקשה');
      }
    } catch (err) {
      setError('שגיאת שרת, נסה שוב מאוחר יותר');
    }
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-gold px-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-gold fs-4">BarberPro</Link>
        </div>
      </nav>

      {/* Form */}
      <div className="d-flex justify-content-center align-items-center py-5">
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#111',
            padding: '30px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 0 15px rgba(200, 169, 81, 0.7)',
          }}
        >
          <h2 className="text-center mb-4 text-gold">שחזור סיסמה</h2>

          <label className="text-light fw-bold">אימייל</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control mb-3 bg-dark text-light border-gold"
            placeholder="example@mail.com"
          />

          <button
            type="submit"
            className="btn btn-gold w-100 fw-bold"
          >
            שלח קישור לאיפוס
          </button>

          {message && <p className="text-success mt-3 text-center">{message}</p>}
          {error && <p className="text-danger mt-3 text-center">{error}</p>}

          <div className="text-center mt-3">
            <Link to="/login" className="text-gold small">חזור להתחברות</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
