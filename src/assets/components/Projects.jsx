// src/assets/components/Projects.jsx
import React, { useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";
import projectsData from "../../data/projectsData"; // ⬅ import data here

export default function Projects({ showAll = false }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      {/* Background Blobs */}
      {/* Background Blobs Removed for Classic Theme */}

      <div className="projects-container">
        <h2 className="fade-in">Featured Projects</h2>

        <div className={`projects-grid ${showAll ? "list-view" : ""}`}>
          {displayedProjects.map((project, index) => (
            <div
              className="project-card fade-in"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {showAll && (
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onClick={() => setSelectedImage(project.image)}
                  />
                </div>
              )}

              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="card-footer">
                  <div className="tools">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.isInternal ? (
                    <Link to={project.link} className="btn-view">
                      View Details →
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      className="btn-view"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code/Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="view-all-container fade-in">
            <Link to="/all-projects" className="btn-view-all">
              View All Projects →
            </Link>
          </div>
        )}

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Project Preview" />
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
