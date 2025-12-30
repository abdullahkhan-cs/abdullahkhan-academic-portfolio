// src/assets/components/Activities.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./activities.css";
import activitiesData from "../../data/activitiesData";

export default function Activities({ showAll = false }) {
    const displayedActivities = showAll ? activitiesData : activitiesData.slice(0, 3);

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
                            <img
                                src={activity.image}
                                alt={activity.title}
                                className="activity-image"
                            />
                            <div className="activity-content">
                                <h3>{activity.title}</h3>
                                <div className="activity-meta">
                                    <span>{activity.role}</span>
                                    <span>{activity.organization}</span>
                                    <span>{activity.year}</span>
                                </div>
                                <p className="activity-description">{activity.description}</p>
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
        </section>
    );
}
