import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contactme = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  
  const navigate = useNavigate();

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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </button>
      </form>

      <button className="btn-nav" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default Contactme;