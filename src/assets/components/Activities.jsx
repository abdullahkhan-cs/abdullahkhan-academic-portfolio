// src/assets/components/Activities.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./activities.css";
import activitiesData from "../../data/activitiesData";

export default function Activities({ showAll = false }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const displayedActivities = showAll ? activitiesData : activitiesData.slice(0, 3);

    const openModal = (img) => {
        setSelectedImage(img);
        document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

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
                                    onClick={() => openModal(activity.images[0])}
                                />
                                {activity.images.length > 1 && (
                                    <div className="thumbnail-grid">
                                        {activity.images.slice(1).map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`${activity.title} - ${i + 2}`}
                                                className="activity-thumbnail"
                                                onClick={() => openModal(img)}
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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>&times;</button>
                        <img src={selectedImage} alt="Certificate / Activity" />
                    </div>
                </div>
            )}
        </section>
    );
}
