import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Navbar from "./Navbar"; // 👈 לשמור את ה־Navbar שלך

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login"); // login או signup
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // שליחה לשרת
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      if (activeTab === "login") {
        // התחברות
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });
        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          if (data.user.isAdmin) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          setError(data.message || "פרטי התחברות שגויים");
        }
      } else {
        // הרשמה
        const res = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
          }),
        });
        const data = await res.json();

        if (res.ok) {
          setMessage("נרשמת בהצלחה! מעביר לעמוד התחברות...");
          setTimeout(() => setActiveTab("login"), 2000);
        } else {
          setError(data.message || "שגיאה בהרשמה");
        }
      }
    } catch (err) {
      setError("שגיאת שרת, נסה שוב מאוחר יותר");
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-container">
        <h2 className="auth-title">
          {activeTab === "login" ? "התחברות" : "הרשמה"}
        </h2>

        {/* טאבים */}
        <div className="auth-tabs">
          <div
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            התחברות
          </div>
          <div
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            הרשמה
          </div>
        </div>

        {/* טופס */}
        <form onSubmit={handleSubmit} className="auth-form">
          {activeTab === "signup" && (
            <div className="mb-3">
              <label className="form-label">שם מלא</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">אימייל</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">סיסמה</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn-auth">
            {activeTab === "login" ? "התחבר" : "צור חשבון"}
          </button>
        </form>

        {/* הודעות */}
        {message && <p className="auth-message success">{message}</p>}
        {error && <p className="auth-message error">{error}</p>}

        {/* שכחתי סיסמה */}
        {activeTab === "login" && (
          <div className="auth-extra">
            <a href="/forgot-password">שכחתי סיסמה?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
