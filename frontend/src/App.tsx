import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        {/* TODO: Add routes for Booking, Payments, Reports, Document Generation, Project Admin */}
      </Routes>
    </Router>
  );
}

export default App;
