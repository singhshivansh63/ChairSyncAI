import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      quote: "Our no-show rate dropped by 60% and revenue increased 40% since using ChairSyncAI. Game changer!",
      name: "Dr. Michael Chen",
      role: "Dental Practice Owner",
    },
    {
      quote: "ChairSyncAI helped us reduce appointment gaps — very smooth and reliable AI scheduling.",
      name: "Dr. Sarah Lee",
      role: "Pediatric Dentist",
    },
    {
      quote: "We've seen a 3x improvement in patient retention. Highly recommend this AI solution.",
      name: "Dr. James Patel",
      role: "Orthodontist",
    }
  ];

  return (
    <div className="testimonial-container">
      <h2>
        Loved by <span className="gradient-text">Patients & Practices</span>
      </h2>
      <p className="subtitle">See what our users are saying about Dental Scheduler AI</p>

      <div className="carousel">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="quote">"{review.quote}"</p>
            <div className="reviewer">
              <div className="profile-pic" />
              <div>
                <strong>{review.name}</strong>
                <div className="role">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
        <div className="dots">
          {reviews.map((_, i) => (
            <div key={i} className={`dot ${i === 0 ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
