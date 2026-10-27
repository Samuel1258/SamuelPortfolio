import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          submitting: false,
          success: true,
          message: 'Thank you! Your message has been sent to Samuel.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: result.message || 'Error delivering message. Please verify all fields.'
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Could not connect to the backend API server.'
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">Get In Touch</h2>
          <span className="section-tagline">Open for internship opportunities and student collaborations</span>
        </div>
        <span className="badge-pill">Response via API</span>
      </div>

      <div className="contact-editorial-layout">
        {/* Left Side: Editorial Pitch */}
        <div className="contact-editorial-pitch">
          <h3 className="pitch-heading">Let's build something together.</h3>
          <p className="pitch-text">
            I'm currently seeking internship opportunities, mentorship, and junior developer roles where I can contribute enthusiasm, write clean full-stack code, and continue expanding practical skills.
          </p>

          <div className="pitch-contact-info">
            <div className="info-line">
              <span className="info-line-title">College</span>
              <span className="info-line-val">Easwari Engineering College</span>
            </div>
            <div className="info-line">
              <span className="info-line-title">Email</span>
              <span className="placeholder-pill">[your-email@example.com]</span>
            </div>
            <div className="info-line">
              <span className="info-line-title">Phone</span>
              <span className="placeholder-pill">[+91-XXXXXXXXXX]</span>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="editorial-form">
            <div className="form-field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Smith"
                value={formData.name}
                onChange={handleChange}
                className="minimal-input"
              />
            </div>

            <div className="form-field">
              <label>Your Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={handleChange}
                className="minimal-input"
              />
            </div>

            <div className="form-field">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Internship opportunity / Collaboration"
                value={formData.subject}
                onChange={handleChange}
                className="minimal-input"
              />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your note here..."
                value={formData.message}
                onChange={handleChange}
                className="minimal-textarea"
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-note ${status.success ? 'success' : 'error'}`}>
                {status.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="btn btn-dark"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              {status.submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-editorial-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .pitch-heading {
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 1rem;
        }
        .pitch-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .pitch-contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: var(--bg-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-card);
          border: 1px solid var(--border-subtle);
        }
        .info-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
        }
        .info-line-title {
          font-weight: 600;
          color: var(--text-muted);
        }
        .info-line-val {
          font-weight: 500;
          color: var(--text-main);
        }
        .contact-form-container {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2rem;
        }
        .editorial-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-field label {
          font-size: 0.82rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }
        .minimal-input, .minimal-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--border-pill);
          background: var(--bg-subtle);
          color: var(--text-main);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.15s ease;
        }
        .minimal-input:focus, .minimal-textarea:focus {
          border-color: var(--border-strong);
        }
        .status-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          padding: 0.75rem;
          border-radius: 8px;
        }
        .status-note.success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }
        .status-note.error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
        [data-theme='dark'] .status-note.success {
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          border-color: rgba(16, 185, 129, 0.3);
        }
        [data-theme='dark'] .status-note.error {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border-color: rgba(239, 68, 68, 0.3);
        }
        @media (max-width: 860px) {
          .contact-editorial-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
