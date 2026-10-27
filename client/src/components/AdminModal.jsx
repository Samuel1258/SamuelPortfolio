import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Mail, 
  Clock, 
  LogOut, 
  CheckCircle, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [credentials, setCredentials] = useState({
    username: 'admin',
    password: ''
  });
  const [token, setToken] = useState(localStorage.getItem('portfolio_admin_token') || '');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setToken(data.token);
        localStorage.setItem('portfolio_admin_token', data.token);
        fetchMessages(data.token);
      } else {
        setError(data.message || 'Login failed. Invalid credentials.');
      }
    } catch (err) {
      setError('Connection failed. Please ensure the backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (authToken) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/messages', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessages(data.data || []);
      } else {
        setError(data.message || 'Failed to fetch messages.');
      }
    } catch (err) {
      setError('Error retrieving messages from backend.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('portfolio_admin_token');
    setMessages([]);
  };

  return (
    <div className="admin-modal-overlay">
      <div className="glass-card admin-modal-card">
        <div className="modal-header">
          <div className="modal-title-box">
            <Lock size={18} className="modal-lock-icon" />
            <h3>Portfolio Admin & Message Dashboard</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!token ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="admin-login-form">
              <p className="login-desc">
                Log in to securely review contact form inquiries sent to Samuel L.
              </p>
              
              <div className="credentials-tip">
                <strong>Default Local Credentials:</strong>
                <div>Username: <code>admin</code></div>
                <div>Password: <code>Admin@1234</code></div>
              </div>

              {error && <div className="admin-error-box">{error}</div>}

              <div className="form-group">
                <label>Admin Username</label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter admin password..."
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="form-input"
                />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                {loading ? <Loader2 size={16} className="spinner" /> : 'Authenticate Admin'}
              </button>
            </form>
          ) : (
            /* Logged in Messages View */
            <div className="admin-inbox-view">
              <div className="inbox-controls">
                <span className="inbox-count">
                  {messages.length} Contact Inquiries Received
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={() => fetchMessages(token)} 
                    className="btn btn-secondary" 
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                  >
                    Refresh
                  </button>
                  <button 
                    onClick={handleLogout} 
                    className="btn btn-secondary" 
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                  >
                    <LogOut size={14} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>

              {loading && <div style={{ textAlign: 'center', padding: '2rem' }}><Loader2 size={24} className="spinner" /></div>}

              {!loading && messages.length === 0 && (
                <div className="no-messages-box">
                  <Mail size={32} style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }} />
                  <p>No messages submitted yet. Submit a message via the Contact section to test the live backend.</p>
                </div>
              )}

              <div className="messages-stream">
                {messages.map((msg, i) => (
                  <div key={msg._id || i} className="message-item-card">
                    <div className="msg-header">
                      <div>
                        <strong className="msg-sender">{msg.name}</strong>{' '}
                        <span className="msg-email">&lt;{msg.email}&gt;</span>
                      </div>
                      <span className="msg-time">
                        <Clock size={12} />
                        {new Date(msg.createdAt).toLocaleDateString()} {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="msg-subject">
                      <strong>Subject:</strong> {msg.subject}
                    </div>

                    <p className="msg-content">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .admin-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .admin-modal-card {
          width: 100%;
          max-width: 650px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-hover);
          overflow: hidden;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }
        .modal-title-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .modal-lock-icon {
          color: var(--accent-cyan);
        }
        .modal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .modal-close-btn:hover {
          color: var(--text-primary);
        }
        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
        }
        .admin-login-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .login-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .credentials-tip {
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #bae6fd;
        }
        .credentials-tip code {
          background: rgba(0, 0, 0, 0.3);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          color: #facc15;
        }
        .admin-error-box {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          padding: 0.7rem;
          border-radius: 8px;
          font-size: 0.88rem;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .inbox-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
        }
        .inbox-count {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }
        .no-messages-box {
          text-align: center;
          padding: 2.5rem 1rem;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .messages-stream {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .message-item-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 1.1rem;
        }
        .msg-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .msg-sender {
          color: var(--text-primary);
        }
        .msg-email {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-family: var(--font-mono);
        }
        .msg-time {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .msg-subject {
          font-size: 0.88rem;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
        }
        .msg-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
