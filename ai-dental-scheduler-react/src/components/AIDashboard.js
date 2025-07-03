// src/components/AIDashboard.js
import React, { useState, useEffect } from 'react';
import './AIDashboard.css';

const AIDashboard = () => {
  const [metrics, setMetrics] = useState({
    noShowRate: 12,
    predictedRevenue: 125000,
    peakHour: '3–5 PM',
    fillRate: 87,
  });

  // Simulate dynamic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        noShowRate: (10 + Math.random() * 5).toFixed(1),
        fillRate: Math.floor(80 + Math.random() * 10),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ai-dashboard-section">
      <h2>🔍 AI-Powered Insights</h2>
      <div className="ai-dashboard-grid">
        <div className="ai-card">
          <h3>No-Show Prediction</h3>
          <p>{metrics.noShowRate}%</p>
        </div>
        <div className="ai-card">
          <h3>Predicted Revenue Boost</h3>
          <p>${metrics.predictedRevenue.toLocaleString()}</p>
        </div>
        <div className="ai-card">
          <h3>Peak Booking Hour</h3>
          <p>{metrics.peakHour}</p>
        </div>
        <div className="ai-card">
          <h3>Chair Fill Rate</h3>
          <p>{metrics.fillRate}%</p>
        </div>
      </div>
    </section>
  );
};

export default AIDashboard;
