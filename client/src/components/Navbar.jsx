import React, { useState } from 'react';
import { Moon, Sun, Lock, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Case Studies', href: '#projects' },
    { label: 'About Me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="minimal-navbar">
      {/* Brand: Logo badge + Name */}
      <a href="#hero" className="brand-group">
        <div className="brand-logo-badge">
          <span>SL</span>
        </div>
        <span className="brand-title">Samuel L.</span>
      </a>

      {/* Desktop Links (Exactly matching: Home | Case Studies | About Me | Resume) */}
      <div className="nav-links-desktop">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="nav-item-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Controls: Theme & Admin */}
      <div className="nav-controls">
        <button
          onClick={toggleTheme}
          className="icon-control-btn"
          title={theme === 'dark' ? 'Switch to warm light' : 'Switch to dark mode'}
          aria-label="Toggle visual theme"
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button
          onClick={onOpenAdmin}
          className="admin-link-btn"
          title="Admin dashboard"
        >
          <Lock size={13} />
          <span>Admin</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-item-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .minimal-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0 2rem 0;
          position: relative;
        }
        .brand-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .brand-logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #18181b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: -0.02em;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        }
        [data-theme='dark'] .brand-logo-badge {
          background: #f3f4f6;
          color: #111827;
        }
        .brand-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }
        .nav-item-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .nav-item-link:hover {
          color: var(--text-main);
        }
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .icon-control-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          background: transparent;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .icon-control-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .admin-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .admin-link-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .mobile-hamburger-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .mobile-nav-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-float);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 50;
        }
        .mobile-item-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-main);
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
        }
        .mobile-item-link:hover {
          background: var(--bg-subtle);
        }
        @media (max-width: 860px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-hamburger-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
