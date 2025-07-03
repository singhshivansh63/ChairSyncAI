import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h1>Choose Your Plan</h1>
      <p className="subtitle">Simple pricing for growing dental practices.</p>

      <div className="pricing-cards">
        <div className="card basic">
          <h2>Starter</h2>
          <p className="price">$49<span>/mo</span></p>
          <ul>
            <li>AI Recall Automation</li>
            <li>Up to 500 Patients</li>
            <li>Email Notifications</li>
            <li>Basic Dashboard</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="card pro">
          <h2>Professional</h2>
          <p className="price">$79<span>/mo</span></p>
          <ul>
            <li>Everything in Starter</li>
            <li>Unlimited Patients</li>
            <li>SMS Reminders</li>
            <li>Advanced Analytics</li>
            <li>Priority Support</li>
          </ul>
          <button className="highlighted">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
