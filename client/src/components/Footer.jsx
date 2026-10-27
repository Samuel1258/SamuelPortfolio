import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-editorial">
      <div className="footer-editorial-divider"></div>

      <div className="footer-editorial-inner">
        <div className="footer-left">
          <span className="footer-brand-text">Samuel L.</span>
          <span className="footer-role-text">
            B.E. Computer Science and Engineering &bull; Easwari Engineering College
          </span>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Samuel L. Honesty guaranteed: all unprovided details are kept as transparent placeholders.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links-row">
            <a href="#hero">Home</a>
            <a href="#projects">Case Studies</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <button onClick={scrollToTop} className="btn-top" title="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-editorial {
          margin-top: 5rem;
          padding-top: 2rem;
        }
        .footer-editorial-divider {
          width: 100%;
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 2rem;
        }
        .footer-editorial-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .footer-brand-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }
        .footer-role-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }
        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.25rem;
        }
        .footer-links-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-links-row a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .footer-links-row a:hover {
          color: var(--text-main);
        }
        .btn-top {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: transparent;
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          color: var(--text-secondary);
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .btn-top:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        @media (max-width: 640px) {
          .footer-editorial-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-right {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
