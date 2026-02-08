import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./certifications.css";
import certificationsData from "../../data/certificationsData";

export default function Certifications({ showAll = false }) {
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    currentIndex: 0,
  });

  const displayedCerts = showAll ? certificationsData : certificationsData.slice(0, 3);

  const openSlideshow = (index) => {
    setGalleryState({
      isOpen: true,
      currentIndex: index,
    });
    document.body.style.overflow = "hidden";
  };

  const closeSlideshow = () => {
    setGalleryState((prev) => ({ ...prev, isOpen: false }));
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setGalleryState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % displayedCerts.length,
    }));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setGalleryState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + displayedCerts.length) % displayedCerts.length,
    }));
  };

  const goToImage = (index) => {
    setGalleryState((prev) => ({ ...prev, currentIndex: index }));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!galleryState.isOpen) return;
      if (e.key === "Escape") closeSlideshow();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryState.isOpen]);

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-container">
        <h2 className="fade-in">Certifications & Programs</h2>
        <div className={`cert-grid ${showAll ? "list-view" : ""}`}>
          {displayedCerts.map((cert, index) => (
            <div className="cert-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-image-wrapper" onClick={() => openSlideshow(index)}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />
                <div className="cert-overlay">
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-content">
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
                  Verify Credential
                </a>
              </div>
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

      </div>

      {/* World-Class Slideshow Modal */}
      {galleryState.isOpen && (
        <div className="slideshow-modal" onClick={closeSlideshow}>
          <div className="slideshow-counter">
            {galleryState.currentIndex + 1} / {displayedCerts.length}
          </div>

          <button className="slideshow-close-btn" onClick={closeSlideshow}>&times;</button>

          {displayedCerts.length > 1 && (
            <button className="slideshow-nav-btn nav-prev" onClick={prevImage}>
              &#10094;
            </button>
          )}

          <div className="slideshow-content" onClick={(e) => e.stopPropagation()}>
            <div className="slideshow-image-container">
              <img
                src={displayedCerts[galleryState.currentIndex].image}
                alt={`Certificate: ${displayedCerts[galleryState.currentIndex].title}`}
                className="slideshow-main-image"
              />
            </div>
            <div className="slideshow-caption">
              <h3>{displayedCerts[galleryState.currentIndex].title}</h3>
              <p>{displayedCerts[galleryState.currentIndex].issuer} • {displayedCerts[galleryState.currentIndex].year}</p>
            </div>
          </div>

          {displayedCerts.length > 1 && (
            <button className="slideshow-nav-btn nav-next" onClick={nextImage}>
              &#10095;
            </button>
          )}

          {/* Thumbnails Footer */}
          {displayedCerts.length > 1 && (
            <div className="slideshow-thumbnails" onClick={(e) => e.stopPropagation()}>
              {displayedCerts.map((cert, idx) => (
                <img
                  key={idx}
                  src={cert.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`slideshow-thumb ${idx === galleryState.currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(idx)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
