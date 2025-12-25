import React, { useState } from 'react';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/account';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = addUser({ name, email, password });
    if (result.success) {
      navigate('/login');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-page-bg">
      <div className="login-card">
        <div className="login-header">
          <span className="footer-logo" style={{fontSize: '2rem'}}><b>Business</b><span style={{color: "var(--ai-color)"}}>AI</span></span>
          <h2>Create Account</h2>
          <p className="login-desc">Sign up to start using business-ai.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Enter your e-mail" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />
          <button className="btn btn-primary" type="submit">Register</button>
        </form>
        {error && <div style={{color:'var(--danger-color)', marginTop:'0.7rem'}}>{error}</div>}
        <div className="login-footer">
          <span>Already have an account?</span>
          <a className="login-signup-link" onClick={() => navigate('/login')} style={{cursor: 'pointer'}}>Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;