import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Freelance from './pages/Freelance';
import Events from './pages/Events';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 