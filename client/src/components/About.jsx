import React from 'react';
import { 
  GraduationCap, 
  Target, 
  MapPin, 
  Mail, 
  Phone, 
  Check, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

export default function About({ profile }) {
  return (
    <section id="about" className="section-wrapper about-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">About Me</h2>
          <span className="section-tagline">Academic journey & career aspirations</span>
        </div>
        <span className="badge-pill">Easwari Engineering College</span>
      </div>

      <div className="about-editorial-grid">
        {/* Left Column: Narrative */}
        <div className="about-text-column">
          <h3 className="about-lead">
            Engineering Student at Easwari Engineering College with a passion for software craftsmanship.
          </h3>

          <p className="editorial-p">
            I am an engineering student pursuing my <strong>B.E. in Computer Science and Engineering</strong> at <strong>Easwari Engineering College</strong>. My educational journey combines fundamental computer science principles — data structures, algorithms, database systems, and object-oriented software development — with hands-on full-stack development.
          </p>

          <p className="editorial-p">
            My primary career goal is to <strong>{profile?.careerGoal || 'become a skilled software developer and build real-world applications.'}</strong> I believe that the best way to master software engineering is to write clean, maintainable code, test thoroughly, and build practical projects that deliver real user value.
          </p>

          <div className="honesty-editorial-callout">
            <Sparkles size={16} className="callout-sparkle" />
            <p>
              <strong>Honest Student Profile:</strong> I am actively preparing for entry-level software engineering roles and internships. All credentials and contact details without confirmed data are marked as transparent placeholders.
            </p>
          </div>
        </div>

        {/* Right Column: Clean Fact Cards */}
        <div className="about-sidebar-column">
          <div className="fact-box">
            <span className="fact-box-label">Degree & Department</span>
            <span className="fact-box-val">B.E. Computer Science and Engineering</span>
            <span className="fact-box-sub">Easwari Engineering College</span>
          </div>

          <div className="fact-box">
            <span className="fact-box-label">Career Aspiration</span>
            <span className="fact-box-val">Software Developer / Full-Stack Engineer</span>
            <span className="fact-box-sub">Building real-world web applications</span>
          </div>

          <div className="fact-box">
            <span className="fact-box-label">Contact Details (Placeholders)</span>
            <div className="placeholder-row">
              <Mail size={13} />
              <span className="placeholder-pill">[your-email@example.com]</span>
            </div>
            <div className="placeholder-row" style={{ marginTop: '0.4rem' }}>
              <Phone size={13} />
              <span className="placeholder-pill">[+91-XXXXXXXXXX]</span>
            </div>
            <div className="placeholder-row" style={{ marginTop: '0.4rem' }}>
              <MapPin size={13} />
              <span className="placeholder-pill">[Chennai, Tamil Nadu, India]</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 3.5rem;
          align-items: start;
        }
        .about-lead {
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        .editorial-p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }
        .editorial-p strong {
          color: var(--text-main);
        }
        .honesty-editorial-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.25rem;
          margin-top: 2rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .callout-sparkle {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .about-sidebar-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .fact-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .fact-box-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .fact-box-val {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .fact-box-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }
        .placeholder-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-muted);
        }
        @media (max-width: 860px) {
          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
