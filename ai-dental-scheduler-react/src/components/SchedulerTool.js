import React, { useState } from 'react';
import './SchedulerTool.css';

const SchedulerTool = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastVisit, setLastVisit] = useState('');
  const [lapsed, setLapsed] = useState([]);

  const handleSave = async () => {
    if (!name || !email || !lastVisit) return alert('Please fill in all fields!');
    await fetch('http://localhost:5000/api/patients/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, appointmentDate: lastVisit, procedure: 'Hygiene Cleaning' }),
    });
    alert('Patient saved!');
    setName(''); setEmail(''); setLastVisit('');
  };

  const fetchLapsed = async () => {
    const res = await fetch('http://localhost:5000/api/patients/lapsed');
    const data = await res.json();
    setLapsed(data);
  };

  return (
    <section id="tool" className="section-card">
      <h2>🧠 AI Scheduler Tool</h2>
      <div className="form-group">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="date" value={lastVisit} onChange={e => setLastVisit(e.target.value)} />
      </div>
      <div className="btn-group">
        <button onClick={handleSave}>Save Patient</button>
        <button onClick={fetchLapsed}>Check Lapsed</button>
      </div>

      {lapsed.length > 0 && (
        <div className="results">
          <h3>⏳ Lapsed Patients</h3>
          {lapsed.map((p, i) => (
            <div key={i} className="card">
              <strong>{p.name}</strong>
              <p>Last Visit: {new Date(p.appointmentDate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SchedulerTool;


