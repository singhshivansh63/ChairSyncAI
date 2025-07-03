// src/components/VoiceAppointment.js
import React, { useState } from 'react';

const VoiceAppointment = () => {
  const [message, setMessage] = useState('Click mic and say: "Book appointment at 5 PM for John"');

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setMessage('Listening...');

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log('Voice input:', transcript);

      if (transcript.includes('book')) {
        // Example command: "Book appointment at 5 PM for John"
        setMessage(`✅ Appointment confirmed: ${transcript}`);
        // You can extend this to store in database or show confirmation popup
      } else {
        setMessage("⚠️ Couldn't recognize appointment intent.");
      }
    };

    recognition.onerror = (event) => {
      setMessage('⚠️ Error recognizing speech: ' + event.error);
    };

    recognition.start();
  };

  return (
    <div className="voice-booking-box">
      <h3>🎤 Voice Command Booking</h3>
      <p>{message}</p>
      <button onClick={startListening} className="mic-button">🎙️ Start Speaking</button>
    </div>
  );
};

export default VoiceAppointment;
