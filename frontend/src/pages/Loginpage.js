import React, { useState } from 'react';  
import axios from 'axios';  
import './Loginpage.css';  
import Img from '../Asset/Images/log in.png';  
import { API_URL } from '../util'; 
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {  
  const [mob, setMob] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  const [success, setSuccess] = useState('');  
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {  
    e.preventDefault();  

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { mob, password });
      console.log('Login successful:', response.data);
      setSuccess('Login successful!');
      setError('');

      // Navigate to the landing page after successful login
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Failed to log in. Please try again.');
      setSuccess('');
    }
  };  

  return (  
    <div className="login-container">  
      <div className="login-form">  
        <h1>Welcome back!</h1>  
        <p>Log in to your Linktree.</p>  
        <form onSubmit={handleSubmit}>  
          <input  
            type="text"  
            placeholder="Phone number"  
            value={mob}  
            onChange={(e) => setMob(e.target.value)}  
            required  
          />  
          <input  
            type="password"  
            placeholder="Password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            required  
          />  
          <button type="submit">Log in</button>  
        </form>  
        {error && <p className="error-message">{error}</p>}  
        {success && <p className="success-message">{success}</p>}  
        <p className="phone-login">Log in with email</p>  
      </div>  
      <div className="image-container">  
        <img src={Img} alt="Profile" /> 
      </div>  
    </div>  
  );  
};  

export default LoginPage;
