import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

export default function Education({ educationList }) {
  const defaultList = [
    {
      institution: 'Easwari Engineering College',
      degree: 'Bachelor of Engineering in Computer Science and Engineering (B.E. CSE)',
      duration: 'Present / Engineering Student',
      location: 'Chennai, Tamil Nadu',
      marksPlaceholder: 'CGPA: 8.6',
      highlights: [
        'Curriculum emphasizes Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Object-Oriented Software Engineering.',
        'Developing practical full-stack web projects with the MERN stack (MongoDB, Express, React, Node.js).',
        'Participating in college coding initiatives and technical symposiums.'
      ]
    }
  ];

  const items = (educationList && educationList.length > 0) ? educationList : defaultList;

  return (
    <section id="education" className="section-wrapper education-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">Education</h2>
          <span className="section-tagline">Academic foundations & computer science coursework</span>
        </div>
        <span className="badge-pill">Easwari Engineering College</span>
      </div>

      <div className="education-cards-list">
        {items.map((item, idx) => (
          <div key={idx} className="edu-editorial-card">
            <div className="edu-top-row">
              <div>
                <h3 className="edu-institution-title">{item.institution}</h3>
                <p className="edu-degree-subtitle">{item.degree}</p>
              </div>
              <div className="edu-duration-tag">
                <Calendar size={13} />
                <span>{item.duration}</span>
              </div>
            </div>

            <div className="edu-meta-strip">
              <span className="badge-pill">
                <MapPin size={12} />
                <span>{item.location || 'Chennai, India'}</span>
              </span>
              <span className="placeholder-pill">
                {item.marksPlaceholder || '[Academic Marks Placeholder]'}
              </span>
            </div>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="edu-highlights-list">
                {item.highlights.map((h, hIdx) => (
                  <li key={hIdx}>&bull; {h}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .education-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .edu-editorial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .edu-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .edu-institution-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }
        .edu-degree-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }
        .edu-duration-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          background: var(--bg-subtle);
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-pill);
          white-space: nowrap;
        }
        .edu-meta-strip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0.85rem 0 1.25rem 0;
          flex-wrap: wrap;
        }
        .edu-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .edu-top-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
