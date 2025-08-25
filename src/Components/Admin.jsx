import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!user || !user.isAdmin) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:5000/api/admin/appointments', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error(err));
  }, [navigate]);

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-gold mb-4">רשימת הזמנות</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped border border-gold">
          <thead>
            <tr>
              <th>שם</th>
              <th>טלפון</th>
              <th>שירות</th>
              <th>תאריך ושעה</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, i) => (
              <tr key={i}>
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>{app.service}</td>
                <td>{new Date(app.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
