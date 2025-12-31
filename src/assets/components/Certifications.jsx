import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./certifications.css";
import certificationsData from "../../data/certificationsData";

export default function Certifications({ showAll = false }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const displayedCerts = showAll ? certificationsData : certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="fade-in">Certifications & Programs</h2>
        <div className={`cert-grid ${showAll ? "list-view" : ""}`}>
          {displayedCerts.map((cert, index) => (
            <div className="cert-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-image"
                onClick={() => setSelectedImage(cert.image)}
              />
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className="cert-footer">
                <span className="issuer">{cert.issuer}</span>
                <span className="year">{cert.year}</span>
              </div>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="verify-btn"
              >
                Verify
              </a>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="view-all-container fade-in">
            <Link to="/all-certifications" className="btn-view-all">
              View All Certifications →
            </Link>
          </div>
        )}

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Certificate Preview" />
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
