import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    insurance: '',
    date: '',
    timeSlot: '',
    chair: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      name: form.fullName,
      phone: form.phone,
      email: form.email,
      date: form.date,
      timeSlot: form.time, // required field in backend
      provider: 'Default Dentist', // can be made dynamic later
      procedure: 'Cleaning',       // optional field
      confirmed: true
    };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Appointment Booked and Confirmation Sent!');
        console.log('📥 API Response:', result);
      } else {
        alert('❌ Failed to book appointment.');
        console.error('❌ API Error:', result);
      }
    } catch (error) {
      alert('🚫 Network error.');
      console.error('❌ Network error:', error);
    }
  };

  return (
    <div className="book-page">
      <header className="book-header">
        <h1>🦷 ChairSyncAI</h1>
        <h2>Professional Dental Cleaning</h2>
        <div className="tags">
          <span className="tag green">✅ REAL EMAIL DELIVERY</span>
          <span className="tag blue">✅ REAL SMS DELIVERY</span>
          <span className="tag yellow">🔐 Secure & Instant</span>
        </div>
        <div className="delivery-banner">
          <p>📢 <strong>REAL DELIVERY SYSTEM ACTIVE!</strong></p>
          <p>Email & SMS APIs: Configured and ready to deliver real confirmations!</p>
        </div>
      </header>

      <div className="booking-content">
        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>📅 Book Your Appointment</h3>
          <p>Real email & SMS confirmations powered by SendGrid & Twilio APIs!</p>

          <input type="text" name="fullName" placeholder="Full Name *" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number *" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} />

          <select name="insurance" onChange={handleChange}>
            <option value="">Select your insurance (optional)</option>
            <option value="Aetna">Aetna</option>
            <option value="Cigna">Cigna</option>
            <option value="Other">Other</option>
          </select>

          <input type="date" name="date" required onChange={handleChange} />
          <input type="timeSlot" name="timeSlot" required onChange={handleChange} />

          <select name="chair" onChange={handleChange}>
            <option value="">Chair Preference (optional)</option>
            <option value="Near window">Near Window</option>
            <option value="Quiet corner">Quiet Corner</option>
          </select>

          <button type="submit" className="submit-btn">✅ Confirm Appointment</button>
        </form>

        <div className="delivery-card">
          <h4>📦 Real Delivery System</h4>
          <div className="status-box green">
            <strong>Email Delivery</strong>
            <p>Professional emails via SendGrid API</p>
            <span className="api-tag active">ACTIVE & READY</span>
          </div>
          <div className="status-box blue">
            <strong>SMS Delivery</strong>
            <p>Instant SMS via Twilio API</p>
            <span className="api-tag active">ACTIVE & READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;








