import React from "react";
import { Link } from "react-router-dom";
import "./research.css";
import researchData from "../../data/researchData";

export default function Research({ showAll = false }) {
  const displayedPapers = showAll ? researchData : researchData.slice(0, 3);

  return (
    <section id="research" className="research-section">
      {/* Background Blobs Removed for Classic Theme */}

      <div className="research-container">
        <h2 className="fade-in">Research Publications</h2>
        <div className={`research-grid ${showAll ? "list-view" : ""}`}>
          {displayedPapers.map((paper, index) => (
            <div className="research-card fade-in" key={index}>
              <div className="research-image-container">
                <img src={paper.image} alt={paper.title} className="research-image" loading="lazy" />
              </div>
              <div className="research-content">
                <h3>{paper.title}</h3>
                <p className="supervisor"><strong>Supervisor:</strong> {paper.supervisor}</p>
                <p className="abstract">{paper.abstract}</p>
                <div className="keywords">
                  {paper.keywords.map((key, i) => (
                    <span key={i} className="keyword-tag">{key}</span>
                  ))}
                </div>
                <div className="research-links">
                  <a href={paper.paperLink} className="btn-research" target="_blank" rel="noreferrer">
                    View Paper
                  </a>
                  <a href={paper.githubLink} className="btn-research btn-github" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="view-all-container fade-in">
            <Link to="/all-research" className="btn-view-all">
              View All Research →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
