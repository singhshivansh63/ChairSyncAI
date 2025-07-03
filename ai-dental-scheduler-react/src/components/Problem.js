import React from 'react';
import './Problem.css';

const Problem = () => (
  <section id="problem" className="section-card">
    <h2>The Problem</h2>
    <p>
      Hygiene chairs sitting empty = lost revenue. AI helps fill that gap.
    </p>
    <iframe
      title="Tooth 3D"
      src= "https://sketchfab.com/models/87e96731ca904fa98b7d29794b0f792a/embed"
      frameBorder="0"
      autostart="1"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowFullScreen
      className="problem-embed"
    />
  </section>
);

export default Problem;


