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

function Layout() {
  const [showContact, setShowContact] = useState(false);
  const location = useLocation();

  const hideNavbar = location.pathname === "/booking";

  return (
    <>
      {!hideNavbar && (
        <>
          <Navbar onContactClick={() => setShowContact(true)} />
          {showContact && (
            <div className="popup-overlay">
              <div className="popup-content">
                <button
                  className="popup-close"
                  onClick={() => setShowContact(false)}
                >
                  ✖
                </button>
                <Contact />
              </div>
            </div>
          )}
        </>
      )}

      <Routes>
        <Route path="/" element={<Home onContactClick={() => setShowContact(true)} />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
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
