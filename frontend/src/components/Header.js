import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">  
      <h1>Linktree*</h1>
      <div className="nav-links">  
        <a href="#templates">Templates</a>  
        <a href="#marketplace">Marketplace</a>  
        <a href="#discover">Discover</a>  
        <a href="#pricing">Pricing</a>  
        <a href="#learn">Learn</a>  
      </div>  
      <div className="auth-buttons">  
        <button className="login" onClick={() => navigate('/login')}>Log in</button>  
        <button className="signup" onClick={() => navigate('/signup')}>Sign up free</button>  
      </div>  
    </div>  
  );
}

export default Header;
