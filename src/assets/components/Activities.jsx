// src/assets/components/Activities.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./activities.css";
import activitiesData from "../../data/activitiesData";

export default function Activities({ showAll = false }) {
    const [galleryState, setGalleryState] = useState({
        isOpen: false,
        images: [],
        currentIndex: 0
    });

    const displayedActivities = showAll ? activitiesData : activitiesData.slice(0, 3);

    const openSlideshow = (images, index = 0) => {
        setGalleryState({
            isOpen: true,
            images: images,
            currentIndex: index
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
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setGalleryState((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
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
        <section id="activities" className="activities-section">
            <div className="activities-container">
                <h2 className="fade-in">Experience & Activities</h2>

                <div className="activities-grid">
                    {displayedActivities.map((activity, index) => (
                        <div
                            className="activity-card fade-in"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="activity-gallery">
                                <img
                                    src={activity.images[0]}
                                    alt={activity.title}
                                    className="activity-image main-image"
                                    loading="lazy"
                                    onClick={() => openSlideshow(activity.images, 0)}
                                />
                                {activity.images.length > 1 && (
                                    <div className="thumbnail-grid">
                                        {activity.images.slice(1).map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`${activity.title} - ${i + 2}`}
                                                className="activity-thumbnail"
                                                loading="lazy"
                                                onClick={() => openSlideshow(activity.images, i + 1)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="activity-content">
                                <h3>{activity.title}</h3>
                                <div className="activity-meta">
                                    <span>{activity.role}</span>
                                    <span>{activity.organization}</span>
                                    <span>{activity.year}</span>
                                </div>
                                <p className="activity-description">{activity.description}</p>
                                <div className="activity-actions">
                                    {activity.link && (
                                        <a
                                            href={activity.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-view-activity"
                                        >
                                            View Activity
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="view-all-container fade-in">
                        <Link to="/all-activities" className="btn-view-all">
                            View All Activities →
                        </Link>
                    </div>
                )}
            </div>

            {/* World-Class Slideshow Modal */}
            {galleryState.isOpen && (
                <div className="slideshow-modal" onClick={closeSlideshow}>
                    <div className="slideshow-counter">
                        {galleryState.currentIndex + 1} / {galleryState.images.length}
                    </div>

                    <button className="slideshow-close-btn" onClick={closeSlideshow}>&times;</button>

                    {galleryState.images.length > 1 && (
                        <button className="slideshow-nav-btn nav-prev" onClick={prevImage}>
                            &#10094;
                        </button>
                    )}

                    <div className="slideshow-content" onClick={(e) => e.stopPropagation()}>
                        <div className="slideshow-image-container">
                            <img
                                src={galleryState.images[galleryState.currentIndex]}
                                alt="Activity Slide"
                                className="slideshow-main-image"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {galleryState.images.length > 1 && (
                        <button className="slideshow-nav-btn nav-next" onClick={nextImage}>
                            &#10095;
                        </button>
                    )}

                    {/* Thumbnails Footer */}
                    {galleryState.images.length > 1 && (
                        <div className="slideshow-thumbnails" onClick={(e) => e.stopPropagation()}>
                            {galleryState.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`slideshow-thumb ${idx === galleryState.currentIndex ? 'active' : ''}`}
                                    loading="lazy"
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
