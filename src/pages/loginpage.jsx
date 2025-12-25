import React, { useState } from 'react';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';
import { validateUser } from '../utils/account';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = validateUser({ email, password });
    if (result.success) {
      localStorage.setItem('business_ai_current_user', JSON.stringify(result.user));
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
  <div className="login-page-bg">
    <div className="login-card">
      <div className="login-header">
        <span className="footer-logo" style={{fontSize: '2rem'}}><b>Business</b><span style={{color: "var(--ai-color)"}}>AI</span></span>
        <h2>Welcome Back</h2>
        <p className="login-desc">Sign in to your account to access your dashboard.</p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
      {error && <div style={{color:'var(--danger-color)', marginTop:'0.7rem'}}>{error}</div>}
      <div className="login-footer">
        <span>Don't have an account?</span>
        
        <a className="login-signup-link" onClick={() => navigate('/register')} style={{cursor: 'pointer'}}>Sign Up</a>
      </div>
    </div>
  </div>
  );
};
export default LoginPage;