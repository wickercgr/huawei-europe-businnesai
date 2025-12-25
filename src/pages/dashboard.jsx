import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';

const menuItems = [
  { key: 'whatsapp', label: 'WhatsApp API', active: true },
  { key: 'instagram', label: 'Instagram Chat', active: false },
  { key: 'telegram', label: 'Telegram Bot', active: false },
  { key: 'widget', label: 'Web Site Widget', active: false },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const activeUser = JSON.parse(localStorage.getItem('business_ai_current_user'));
  const [activeMenu, setActiveMenu] = useState('whatsapp');
  const [form, setForm] = useState({ phone: '', token: '', prompt: '' });

  useEffect(() => {
    if (!activeUser) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeUser, navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('WhatsApp API connection request sent!');
  };

  if (!activeUser) {
    return (
      <div className="login-page-bg">
        <div className="login-card" style={{maxWidth: 400, textAlign: 'center'}}>
          <h2 style={{color: 'var(--danger-color)'}}>You cannot access this page as a guest</h2>
          <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>Please log in to continue.</p>
          <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>You will be redirected to the login page in 3 seconds.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page-bg">
      <div className="dashboard-flex">
        <div className="dashboard-menu-card">
          <div className="footer-logo" style={{fontSize: '1.5rem', marginBottom: '2rem'}}><b>Business</b> <span style={{color: "var(--accent-color)"}}>Ai</span></div>
          {menuItems.map(item => (
            <div
              key={item.key}
              className={`dashboard-menu-item${activeMenu === item.key ? ' active' : ''}${!item.active ? ' disabled' : ''}`}
              onClick={() => item.active && setActiveMenu(item.key)}
              style={{ cursor: item.active ? 'pointer' : 'not-allowed', opacity: item.active ? 1 : 0.6 }}
            >
              {item.label}
              {!item.active && <span className="dashboard-coming-soon-label">Coming Soon</span>}
            </div>
          ))}
        </div>
        <div className="dashboard-content">
          {activeMenu === 'whatsapp' && (
            <div className="login-card" style={{maxWidth: 600}}>
              <div className="login-header">
                <span className="footer-logo" style={{fontSize: '2rem'}}><b>Business</b> <span style={{color: "var(--accent-color)"}}>Ai</span></span>
                <h2>WhatsApp API Integration</h2>
                <p className="login-desc">Connect your WhatsApp Business account and start AI-powered customer communication.</p>
              </div>
              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="phone">Phone Number ID</label>
                <input type="text" id="phone" name="phone" placeholder="e.g. 105934..." value={form.phone} onChange={handleChange} required />
                <label htmlFor="token">Access Token (Permanent)</label>
                <input type="text" id="token" name="token" placeholder="Paste your token..." value={form.token} onChange={handleChange} required />
                <label htmlFor="prompt">WhatsApp AI Prompt</label>
                <textarea id="prompt" name="prompt" placeholder="How should the AI respond to messages received via WhatsApp?" rows={4} value={form.prompt} onChange={handleChange} required />
                <button className="btn btn-primary" type="submit">CONNECT TO WHATSAPP</button>
              </form>
              <div className="login-footer" style={{marginTop: '2rem', background: 'var(--surface)', borderRadius: 10, padding: '1rem'}}>
                <h4 style={{color: 'var(--accent-color)', marginBottom: 8}}>AI-Powered Business Management</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '1rem'}}>
                  With Business Ai, you can provide 24/7 smart customer support, sales, and automation solutions via WhatsApp, Instagram, Telegram, and Web.
                </p>
              </div>
            </div>
          )}
          {activeMenu !== 'whatsapp' && (
            <div className="login-card" style={{maxWidth: 600, textAlign: 'center', padding: '3rem 2rem'}}>
              <h2 style={{color: 'var(--accent-color)'}}>Coming Soon</h2>
              <p style={{color: 'var(--text-secondary)', fontSize: '1.1rem'}}>This integration will be available soon. Smart communication across all platforms with Business Ai is coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;