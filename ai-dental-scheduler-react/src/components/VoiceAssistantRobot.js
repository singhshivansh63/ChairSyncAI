// src/components/VoiceAssistantRobot.js
import React, { useState } from 'react';
import './VoiceAssistantRobot.css';

const VoiceAssistantRobot = () => {
  const [listening, setListening] = useState(false);
  const [response, setResponse] = useState('🤖 Click the robot to speak');

  const handleVoiceCommand = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);
    setResponse('🎙️ Listening...');

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Heard:', command);

      if (command.includes('book')) {
        setResponse('✅ Booking confirmed: ' + command);
        // Add navigation or API call here
      } else {
        setResponse("⚠️ Didn't understand. Try saying: 'Book appointment at 4 PM'");
      }

      setListening(false);
    };

    recognition.onerror = (event) => {
      setResponse('⚠️ Error: ' + event.error);
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="robot-assistant-wrapper">
      <img
        src="public/icons/icons8-robot-50.png"  // ✅ Loads from public/icons
        alt="AI Robot 🤖"
        className={`robot-icon ${listening ? 'pulse' : ''}`}
        onClick={handleVoiceCommand}
      />
      <p className="robot-response">{response}</p>
    </div>
  );
};

export default VoiceAssistantRobot;






