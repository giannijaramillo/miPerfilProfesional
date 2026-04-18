import React, { useState } from 'react';
import './Contact.css';

const Contactme = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(form);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const data = await fetch('/api/server', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        subject: form.subject,
      }),
    });

    const res = await data.json();
    console.log(res);

    if (data.ok) {
      setSuccessMessage('¡Correo enviado exitosamente!');
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      
      {successMessage && <p className="success-message">{successMessage}</p>}
      
      <form className="contact-form" onSubmit={handleSendEmail}>
        <div className="form-row">
          <div className="form-group">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleOnchange}
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleOnchange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleOnchange}
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleOnchange}
          />
        </div>

        <button type="submit" className="btn-submit-group">
          <span className="btn-text">Contact Me</span>
          <div className="btn-arrow-circle">
            <span className="mail-icon">✉</span>
          </div>
        </button>
      </form>

      <div className="social-links">
        <a href="https://github.com/giannijaramillo" target="_blank" rel="noopener noreferrer" className="social-link github">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/giannijaramillo/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.633h3.554v1.362c-.009.015-.021.03-.033.045h.033v-.045c.425-.653 1.186-1.582 2.882-1.582 2.105 0 3.685 1.377 3.685 4.338v5.515zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.954-1.71 1.182 0 1.915.755 1.938 1.71 0 .951-.756 1.71-1.977 1.71zm1.581 11.597H3.712V9.819h3.206v10.633zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contactme;