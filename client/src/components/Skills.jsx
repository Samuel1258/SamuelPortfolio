import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Skills({ categories }) {
  const defaultCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Responsive Web Design']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication', 'Input Validation']
    },
    {
      title: 'Databases & Cloud',
      skills: ['MongoDB', 'Mongoose ODM', 'MongoDB Atlas', 'SQL Basics', 'Vercel & Render Deployment']
    },
    {
      title: 'Tools & Fundamentals',
      skills: ['Git & GitHub', 'VS Code', 'Postman API Testing', 'Data Structures', 'Algorithm Design']
    }
  ];

  const skillData = (categories && categories.length > 0) ? categories : defaultCategories;

  return (
    <section id="skills" className="section-wrapper skills-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">Technical Capabilities</h2>
          <span className="section-tagline">Programming languages, frameworks, and developer workflows</span>
        </div>
        <span className="badge-pill">MERN Stack</span>
      </div>

      <div className="skills-editorial-grid">
        {skillData.map((cat, idx) => (
          <div key={idx} className="skill-group-box">
            <h3 className="skill-group-title">{cat.title}</h3>
            <div className="skill-items-container">
              {cat.skills.map((skill, sIdx) => {
                const name = typeof skill === 'string' ? skill : skill.name;
                return (
                  <div key={sIdx} className="skill-pill-item">
                    <span className="bullet-dot"></span>
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-editorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .skill-group-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }
        .skill-group-title {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--text-main);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .skill-items-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .skill-pill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
}
