import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Booking from './Components/Booking';
import Contact from './Components/Contact';
import Auth from './Components/Auth';
import ForgotPassword from './Components/ForgotPassword';
import Admin from './Components/Admin';
import About from './Components/About';
import Footer from './Components/Footer';  

function Layout() {
  const [showContact, setShowContact] = useState(false);
  const location = useLocation();

  // הגדרת דפים שבהם לא מוצג navbar/footer
  const hideNavbar = location.pathname === "/booking" || location.pathname === "/admin";
  const hideFooter = location.pathname === "/admin";

  return (
    <>
      {/* Navbar */}
      {!hideNavbar && (
        <Navbar onContactClick={() => setShowContact(true)} />
      )}

      {/* פופאפ צור קשר */}
      {showContact && (
        <Contact onClose={() => setShowContact(false)} />
      )}

      {/* ניהול הראוטים */}
      <Routes>
        <Route path="/" element={<Home onContactClick={() => setShowContact(true)} />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
