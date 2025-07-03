import React, { useState, useEffect } from 'react';
import './DashboardWidget.css';

const DashboardWidget = () => {
  const [patients, setPatients] = useState(2847);
  const [appointments, setAppointments] = useState(15632);
  const [satisfaction, setSatisfaction] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatients(p => p + Math.floor(Math.random() * 3));
      setAppointments(a => a + Math.floor(Math.random() * 5));
      setSatisfaction(s => Math.min(100, Math.max(90, s + (Math.random() > 0.5 ? 1 : -1))));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-widget">
      <div className="dashboard-header">
        <h3>Live Dashboard</h3>
        <span className="live-indicator">● Live</span>
      </div>

      <div className="metrics-grid">
        <div className="card gradient-blue">
          <h2>{patients.toLocaleString()}</h2>
          <p>Active Patients</p>
        </div>
        <div className="card gradient-pink">
          <h2>{appointments.toLocaleString()}</h2>
          <p>Appointments</p>
        </div>
        <div className="card gradient-green">
          <h2>{satisfaction}%</h2>
          <p>Satisfaction</p>
        </div>
        <div className="card gradient-orange">
          <h2>$127,000</h2>
          <p>Revenue Saved</p>
        </div>
      </div>

      <div className="utilization-bar">
        <div className="label-row">
          <p>Chair Utilization</p>
          <p className="percent">94%</p>
        </div>
        <div className="bar-track">
          <div className="bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;

