import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section id="hero" className="hero-editorial">
      <div className="hero-editorial-inner">
        {/* Main Headline with Embedded Rounded Avatar, exactly matching "Hi, [avatar] I'm Matt!" */}
        <h1 className="hero-greeting">
          <span className="greeting-word">Hi,</span>
          <span className="inline-avatar-frame">
            <img 
              src="/avatar.jpg" 
              alt="Samuel L." 
              className="inline-avatar-img"
              onError={(e) => {
                // Graceful fallback if image is loading
                e.target.style.display = 'none';
              }}
            />
          </span>
          <span className="greeting-name">I'm Samuel!</span>
        </h1>

        {/* Narrative bio styled precisely like the image */}
        <p className="hero-narrative">
          An aspiring full-stack developer and computer science engineering student at{' '}
          <strong className="text-highlight">Easwari Engineering College</strong> who is developing 
          practical programming skills and software architecture foundations — now building real-world, 
          responsive web applications that solve practical problems.
        </p>

        {/* Student metadata pills & links */}
        <div className="hero-status-row">
          <span className="badge-pill">
            <GraduationCap size={14} />
            <span>B.E. Computer Science and Engineering</span>
          </span>
          <span className="badge-pill">
            <span>Engineering Student &bull; Aspiring Developer</span>
          </span>
          <span className="placeholder-pill">
            <span>[Status: Actively Seeking Internships]</span>
          </span>
        </div>

        {/* Action triggers */}
        <div className="hero-action-row">
          <a href="#projects" className="btn btn-dark">
            <span>Explore Case Studies</span>
          </a>
          <a href="#about" className="btn btn-outline">
            <span>About My Journey</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Social link placeholders */}
        <div className="hero-social-strip">
          <span className="social-strip-label">Profiles & Channels:</span>
          <a
            href={profile?.github || 'https://github.com/samuel-placeholder'}
            target="_blank"
            rel="noreferrer"
            className="social-subtle-link"
          >
            <Github size={15} />
            <span>GitHub</span>
            <span className="placeholder-micro">[Placeholder]</span>
          </a>
          <a
            href={profile?.linkedin || 'https://linkedin.com/in/samuel-placeholder'}
            target="_blank"
            rel="noreferrer"
            className="social-subtle-link"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
            <span className="placeholder-micro">[Placeholder]</span>
          </a>
        </div>
      </div>

      <style>{`
        .hero-editorial {
          padding: 6.5rem 0 5rem 0;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .hero-editorial-inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        /* The signature headline layout from the provided image */
        .hero-greeting {
          font-size: 4.25rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          line-height: 1.1;
          margin-bottom: 2.25rem;
        }
        .inline-avatar-frame {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 18px;
          overflow: hidden;
          background: #e5e7eb;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          margin: 0 0.2rem;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .inline-avatar-frame:hover {
          transform: scale(1.06) rotate(-2deg);
        }
        .inline-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-narrative {
          font-size: 1.28rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 400;
          max-width: 660px;
        }
        .text-highlight {
          color: var(--text-main);
          font-weight: 600;
        }
        .hero-status-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.25rem;
        }
        .hero-action-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }
        .hero-social-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .social-strip-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .social-subtle-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color 0.15s ease;
        }
        .social-subtle-link:hover {
          color: var(--text-main);
        }
        .placeholder-micro {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          color: #d97706;
          background: #fef3c7;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
        }
        [data-theme='dark'] .placeholder-micro {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
        }
        @media (max-width: 768px) {
          .hero-editorial {
            padding: 3.5rem 0 3rem 0;
          }
          .hero-greeting {
            font-size: 2.75rem;
          }
          .inline-avatar-frame {
            width: 54px;
            height: 54px;
            border-radius: 14px;
          }
          .hero-narrative {
            font-size: 1.08rem;
          }
        }
      `}</style>
    </section>
  );
}
