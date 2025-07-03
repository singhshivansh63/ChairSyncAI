import React, { useEffect, useState } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/patients')
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        console.log(data); // ✅ You’ll see patient data in the browser console
      })
      .catch(err => console.error('Failed to fetch patients:', err));
  }, []);

  return (
    <div>
      <h2>📋 Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            <strong>{patient.name}</strong> — {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
