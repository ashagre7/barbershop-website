import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !user.isAdmin) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/admin/appointments", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  // ✅ מחיקת תור
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("האם אתה בטוח שברצונך למחוק את ההזמנה?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/appointments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setAppointments(appointments.filter((app) => app._id !== id));
      } else {
        alert("שגיאה במחיקת ההזמנה");
      }
    } catch (err) {
      console.error(err);
      alert("שגיאת שרת");
    }
  };

  // ✅ אישור תור
  const handleApprove = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/admin/appointments/${id}/approve`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });

      if (res.ok) {
        setAppointments(
          appointments.map((app) =>
            app._id === id ? { ...app, status: "מאושר" } : app
          )
        );
      } else {
        alert("שגיאה באישור ההזמנה");
      }
    } catch (err) {
      console.error(err);
      alert("שגיאת שרת");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h2 className="admin-title">רשימת הזמנות</h2>
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>שם</th>
                <th>טלפון</th>
                <th>שירות</th>
                <th>תאריך ושעה</th>
                <th>סטטוס</th>
                <th>פעולות</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((app) => (
                  <tr key={app._id}>
                    <td>{app.name}</td>
                    <td>{app.phone}</td>
                    <td>{app.service}</td>
                    <td>{new Date(app.date).toLocaleString()}</td>
                    <td>{app.status || "ממתין"}</td>
                    <td>
                      <button
                        className="btn-approve"
                        onClick={() => handleApprove(app._id)}
                      >
                        אשר
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(app._id)}
                      >
                        מחק
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">אין הזמנות להצגה</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
