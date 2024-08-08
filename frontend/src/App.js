import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Loginpage'; 
import SignupPage from './pages/signup'; 
import Header from './components/Header'; 
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderWithConditionalRendering />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function HeaderWithConditionalRendering() {
  const location = useLocation();
  const hideHeaderPaths = ['/dashboard']; // List paths where you want to hide the header

  return !hideHeaderPaths.includes(location.pathname) ? <Header /> : null;
}

export default App;
