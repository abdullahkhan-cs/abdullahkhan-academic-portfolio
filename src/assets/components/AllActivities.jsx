// src/assets/components/AllActivities.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Activities from "./Activities";
import "./allActivities.css";

export default function AllActivities() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-activities-page">
            <div className="page-header">
                <h1>All Experience & Activities</h1>
                <p>A complete timeline of my professional journey, community involvement, and events.</p>
            </div>

            {/* Reusing the component with showAll={true} */}
            <Activities showAll={true} />

            <div className="view-all-container fade-in" style={{ paddingBottom: "50px" }}>
                <Link to="/" className="btn-view-all">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
