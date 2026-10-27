import React from 'react';
import { Download, Printer, ExternalLink, CheckCircle } from 'lucide-react';

export default function ResumeSection({ profile }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-wrapper resume-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">Resume</h2>
          <span className="section-tagline">Academic summary & verified qualifications</span>
        </div>
        <div className="resume-controls">
          <button onClick={handlePrint} className="btn btn-dark" style={{ padding: '0.45rem 1.1rem', fontSize: '0.86rem' }}>
            <Download size={14} />
            <span>Save as PDF</span>
          </button>
        </div>
      </div>

      <div className="resume-editorial-sheet">
        <div className="resume-sheet-header">
          <div>
            <h3 className="resume-sheet-name">{profile?.name || 'Samuel L.'}</h3>
            <p className="resume-sheet-sub">
              Engineering Student &bull; B.E. Computer Science and Engineering &bull; Easwari Engineering College
            </p>
            <p className="resume-sheet-goal">
              <strong>Objective:</strong> {profile?.careerGoal || 'Become a skilled software developer and build real-world applications.'}
            </p>
          </div>
          <div className="resume-sheet-badges">
            <span className="placeholder-pill">[Contact: Placeholder]</span>
            <span className="placeholder-pill">[Marks: Placeholder]</span>
          </div>
        </div>

        <div className="resume-sheet-body">
          <div className="resume-section-block">
            <h4 className="resume-block-title">Education</h4>
            <div className="resume-item-row">
              <div className="row-left">
                <strong>Easwari Engineering College</strong>
                <span className="row-sub">B.E. Computer Science and Engineering</span>
              </div>
              <span className="row-date">Present / Engineering Student</span>
            </div>
          </div>

          <div className="resume-section-block">
            <h4 className="resume-block-title">Technical Skills</h4>
            <p className="resume-tech-line">
              <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Vite, Responsive Design
            </p>
            <p className="resume-tech-line">
              <strong>Backend & DB:</strong> Node.js, Express.js, REST API Architecture, MongoDB, Mongoose, JWT
            </p>
            <p className="resume-tech-line">
              <strong>Tools & Fundamentals:</strong> Git, GitHub, VS Code, Postman, Data Structures & Algorithms
            </p>
          </div>

          <div className="resume-section-block">
            <h4 className="resume-block-title">Key Projects</h4>
            <div className="resume-item-row">
              <div className="row-left">
                <strong>Student Grade & Attendance Management System</strong>
                <span className="row-sub">React.js, Node.js, Express, MongoDB</span>
              </div>
              <span className="row-date">Academic Project</span>
            </div>
            <div className="resume-item-row" style={{ marginTop: '0.5rem' }}>
              <div className="row-left">
                <strong>Algorithm & Data Structure Visualizer</strong>
                <span className="row-sub">JavaScript ES6+, Vite, Canvas</span>
              </div>
              <span className="row-date">Core CS Project</span>
            </div>
          </div>

          <div className="resume-section-block">
            <h4 className="resume-block-title">Certifications & Experience</h4>
            <p className="row-sub">
              Professional work experience and formal certifications are reserved as editable placeholders to ensure honest student representation.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <span className="placeholder-pill">[Certifications & Internships: Editable Placeholders]</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .resume-editorial-sheet {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2.5rem;
        }
        .resume-sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .resume-sheet-name {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }
        .resume-sheet-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        .resume-sheet-goal {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          max-width: 620px;
        }
        .resume-sheet-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .resume-sheet-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .resume-section-block {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .resume-block-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 0.35rem;
          margin-bottom: 0.5rem;
        }
        .resume-item-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .row-left {
          display: flex;
          flex-direction: column;
        }
        .row-left strong {
          color: var(--text-main);
          font-size: 0.98rem;
        }
        .row-sub {
          color: var(--text-secondary);
          font-size: 0.88rem;
        }
        .row-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .resume-tech-line {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .resume-tech-line strong {
          color: var(--text-main);
        }
        @media (max-width: 640px) {
          .resume-editorial-sheet {
            padding: 1.5rem;
          }
          .resume-item-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
