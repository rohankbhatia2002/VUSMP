import React, { useState } from 'react';
import './LoginPage.css'; // Make sure to create this CSS file

const LoginPage = () => {
  const [vuNetId, setVuNetId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('VuNet ID:', vuNetId);
    console.log('Password:', password);
    // Here you would handle the login logic, potentially sending the data to a backend service
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin} className="login-form">
        <img src="/path-to-your-logo/VUSMP_logo.webp" alt="Vanderbilt University Student Meal Planner Logo" className="logo" />
        <div>
          <label htmlFor="vunet-id">VuNet ID</label>
          <input 
            id="vunet-id" 
            type="text" 
            value={vuNetId} 
            onChange={(e) => setVuNetId(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
