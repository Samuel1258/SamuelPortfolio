import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack Web App', 'Algorithms & Tools', 'Backend & API'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category?.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="section-wrapper case-studies-editorial">
      <div className="section-header-row">
        <div>
          <h2 className="section-main-title">Case Studies & Projects</h2>
          <span className="section-tagline">Curated academic and personal engineering builds</span>
        </div>

        {/* Filter Pills */}
        <div className="filter-pill-strip">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-text-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Case Study Cards Grid */}
      <div className="case-studies-grid">
        {filtered.map((proj, idx) => (
          <article key={proj._id || idx} className="case-study-card">
            {/* Visual Cover / Header Frame */}
            <div className="case-study-media-box">
              <div className="case-study-badge-tag">
                {proj.badge || proj.category || 'Academic Project'}
              </div>
              <div className="case-study-links-overlay">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="case-icon-btn"
                    title="GitHub Code Repository"
                  >
                    <Github size={16} />
                  </a>
                )}
                {proj.liveDemoUrl && (
                  <a
                    href={proj.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="case-icon-btn"
                    title="Live Demo"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </div>

            {/* Text & Content Block */}
            <div className="case-study-content">
              <div className="case-meta-top">
                <span className="case-category-label">{proj.category}</span>
                <span className="placeholder-pill">[Placeholders]</span>
              </div>

              <h3 className="case-study-title">{proj.title}</h3>
              <p className="case-study-desc">{proj.description}</p>

              {/* Highlights */}
              {proj.highlights && proj.highlights.length > 0 && (
                <ul className="case-highlights-list">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>&bull; {h}</li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Pills */}
              <div className="case-tech-strip">
                {proj.technologies && proj.technologies.map((t, tIdx) => (
                  <span key={tIdx} className="tech-pill-micro">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .filter-pill-strip {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .filter-text-btn {
          background: transparent;
          border: 1px solid var(--border-pill);
          color: var(--text-secondary);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.84rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .filter-text-btn:hover {
          color: var(--text-main);
          border-color: var(--border-strong);
        }
        .filter-text-btn.active {
          background: var(--text-main);
          color: var(--bg-surface);
          border-color: var(--text-main);
        }
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.25rem;
        }
        .case-study-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .case-study-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-float);
          border-color: var(--border-pill);
        }
        .case-study-media-box {
          height: 140px;
          background: linear-gradient(135deg, var(--bg-subtle) 0%, var(--bg-tag) 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }
        .case-study-badge-tag {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          background: var(--bg-surface);
          color: var(--text-main);
          border: 1px solid var(--border-subtle);
        }
        .case-study-links-overlay {
          display: flex;
          gap: 0.45rem;
        }
        .case-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        .case-icon-btn:hover {
          background: var(--text-main);
          color: var(--bg-surface);
        }
        .case-study-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .case-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .case-category-label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .case-study-title {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-main);
          margin-bottom: 0.65rem;
          line-height: 1.35;
        }
        .case-study-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .case-highlights-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          padding: 0.75rem;
          border-radius: 10px;
          background: var(--bg-subtle);
        }
        .case-tech-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }
        .tech-pill-micro {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          background: var(--bg-tag);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
        }
      `}</style>
    </section>
  );
}
