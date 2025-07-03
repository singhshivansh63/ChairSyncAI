import React from 'react';
import './Features.css';

const features = [
  {
    title: "AI-Powered Scheduling",
    description: "Predict no-shows, reduce last-minute cancellations, and auto-fill your calendar using intelligent models.",
    icon: "⚡"
  },
  {
    title: "Last-Minute Gap Filling",
    description: "Automatically identify and fill empty slots with real-time outreach.",
    icon: "🕒"
  },
  {
    title: "Patient Retention",
    description: "Re-engage lapsed patients with timely, automated appointment reminders.",
    icon: "💡"
  },
  {
    title: "Revenue Optimization",
    description: "Maximize chair utilization and increase practice revenue without extra admin effort.",
    icon: "📈"
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">
        Intelligent Features That <span className="gradient-text">Drive Results</span>
      </h2>
      <p className="features-subtitle">Every feature is designed to maximize your practice efficiency and patient satisfaction.</p>

      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
