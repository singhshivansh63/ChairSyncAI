import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>🦷 ChairSyncAI </h1>
    <nav>
      <a href="#hero">Dashboard</a>
      <a href="#features">Features</a>
      <a href="#tool">Scheduler</a>
      <a href="#pricing">Pricing</a>
      <a href="#testimonials">Reviews</a>
      <Link to="/book-appointment">
        <button className="dashboard-btn">Book Appointment</button>
      </Link>
    </nav>
  </header>
);

export default Header;




