import React from 'react';
import '../css/style.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  // Kullanıcı login mi kontrol et
  const currentUser = JSON.parse(localStorage.getItem('business_ai_current_user'));

  const handleLogout = () => {
    localStorage.removeItem('business_ai_current_user');
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <span className="footer-logo"><b>Business</b><span style={{color: "var(--ai-color)"}}>AI</span></span>
        </div>
        <div className="header-right">
          {currentUser ? (
            <>
              <span style={{fontWeight:'600', marginRight:'1rem'}}>{currentUser.name}</span>
              <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Dashboard</button>
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
              <button className="btn btn-primary" onClick={() => navigate('/register')}>Register</button>
            </>
          )}
        </div>
      </header>

      <section className="section-hero">
        <div className="hero-content">
          <h1>Empower Your Business with  <span className="highlight">AI</span></h1>
          <p>
            Our AI isn't just a script; it's a learner. It understands natural language (NLP), chats just like a human, and gets smarter with every conversation.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/register')}>Get Started</button>
            <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>Dashboard</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/chatbot.png" alt="AI Illustration" />
        </div>
      </section>

      <section className="section-features">
        <h2>Features ✨</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Natural Language Understanding 👩🏻‍💻</h3>
            <p>Understands and processes human language with advanced NLP.</p>
          </div>
          <div className="feature-card">
            <h3>Human-like Chat 🗣️</h3>
            <p>Engages in conversations just like a real support agent.</p>
          </div>
          <div className="feature-card">
            <h3>Continuous Learning 🤯</h3>
            <p>Gets smarter and more efficient with every interaction.</p>
          </div>
        </div>
      </section>

          <section className="section-hero-chatbot">
        <div className="chatbot-cards">
          {/* WHY A CHATBOT? Kartı */}
          <div className="chatbot-card chatbot-card-info">
            <h2>WHY A CHATBOT?</h2>
            <h4 className="chatbot-subtitle">Your 24/7 Digital Employee.</h4>
            <p>
              Our AI isn't just a script; it's a learner. It understands natural language (NLP), chats just like a human, and gets smarter with every conversation.
            </p>
            <ul className="chatbot-benefits">
              <li>
                <span className="benefit-icon">⚡</span>
                <strong>Instant Reply</strong>: Zero waiting time for customers.
              </li>
              <li>
                <span className="benefit-icon">🌐</span>
                <strong>Global Reach</strong>: Fluent in 50+ languages.
              </li>
              <li>
                <span className="benefit-icon">💰</span>
                <strong>Cost Effective</strong>: Reduce support costs by up to 60%.
              </li>
            </ul>
          </div>
          {/* Business AI Assistant Kartı */}
          <div className="chatbot-card chatbot-card-chat">
            <div className="chatbot-chat-header">Business AI Assistant</div>
            <div className="chatbot-chat-window">
              <div className="chatbot-chat-bubble user">Hey, where is my order?</div>
              <div className="chatbot-chat-bubble ai">Hello! 👋 I can help with that. What's your order number?</div>
              <div className="chatbot-chat-bubble user">It's #TR-90210</div>
              <div className="chatbot-chat-bubble ai">Checking... 📦 Your package is out for delivery! Expect it by 2:00 PM tomorrow.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" />
            <h4>Baris Ozcan</h4>
            <p>Back-End Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" />
            <h4>Serdar Cigir</h4>
            <p>Jr. Front-End Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team Member" />
            <h4>Ervis Dardha</h4>
            <p>Front-End Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" />
            <h4>Ege Demirkaya</h4>
            <p>Data Scientist</p>
          </div>
        </div>
      </section>

      <section className="section-contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo"><b>Business</b><span style={{color: "var(--ai-color)"}}>AI</span></span>
            <p>Empowering your business with smart AI solutions.</p>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <strong>Address:</strong> Trakya University, Engineering Faculty, Edirne, Turkey
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:info@businessai.com">info@businessai.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+902121234567">+902121234567</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="footer-social-links">
              <a href="#" aria-label="LinkedIn" className="footer-social-icon">in</a>
              <a href="#" aria-label="Twitter" className="footer-social-icon">X</a>
              <a href="#" aria-label="Facebook" className="footer-social-icon">f</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} <span className="footer-logo"><b>Business</b><span style={{color: "var(--ai-color)"}}>AI</span></span>.  Innovating the future.
        </div>
      </footer>
    </>
  );
};

export default MainPage;