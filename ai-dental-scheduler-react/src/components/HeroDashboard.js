import React from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ For navigation
import DashboardWidget from './DashboardWidget';
import VoiceAssistantRobot from './VoiceAssistantRobot';
import './HeroDashboard.css';

const HeroDashboard = () => {
  const navigate = useNavigate(); // ⬅️ Hook to navigate programmatically

  const handleBookClick = () => {
    alert('Booking process started!'); // Replace with actual booking logic
    // navigate('/book-cleaning'); // Uncomment this if using a dedicated route
  };

  const handleDashboardClick = () => {
    navigate('#dashboard'); // ⬅️ Redirect to the dashboard page
  };

  return (
    <div className="hero-dashboard-wrapper">
      <div className="hero-dashboard-container">

        {/* Left Section */}
        <div className="hero-left">
          <span className="badge">⚡ AI-Powered Scheduling</span>
          <h1 className="hero-title">
            Fill Every <span className="highlight">Chair</span><br />Every Hour
          </h1>
          <p className="hero-subtitle">
            ChairSyncAI uses machine learning to predict no-shows, fill last-minute gaps,
            and maximize your dental practice revenue with intelligent patient outreach.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleBookClick}>
              Book Cleaning – $79
            </button>
            <button className="btn-outline" onClick={handleDashboardClick}>
              View Dashboard
            </button>
          </div>
          <div className="hero-stats">
            <p>✅ HIPAA Compliant</p>
            <p>✅ Real-time Delivery</p>
            <p>✅ 84.2% ML Accuracy</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <DashboardWidget />
          <VoiceAssistantRobot />
          
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;



