import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import BookAppointment from './components/BookAppiontment';

import './App.css';

import HeroDashboard from './components/HeroDashboard';
import AIDashboard from './components/AIDashboard';
import Features from './components/Features';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import SchedulerTool from './components/SchedulerTool';

function HomePage() {
  return (
    <>
      <Header />
      <div id="hero"><HeroDashboard /></div>
      <AIDashboard />
      <div id="features"><Features /></div>
      <div id="problem"><Problem /></div>
      <div id="solution"><Solution /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="tool"><SchedulerTool /></div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;



 







