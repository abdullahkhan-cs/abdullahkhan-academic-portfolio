// src/assets/components/AllProjects.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";


export default function AllProjects() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-projects-page">
      <Projects showAll={true} />
      
      <div className="view-all-container fade-in" style={{ paddingBottom: "50px" }}>
        <Link to="/" className="btn-view-all">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
