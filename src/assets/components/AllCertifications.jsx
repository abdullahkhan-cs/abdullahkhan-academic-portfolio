// src/assets/components/AllCertifications.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Certifications from "./Certifications";
import "./allCertifications.css";

export default function AllCertifications() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="all-certifications-page">
      <Certifications showAll={true} />

      <div className="view-all-container fade-in" style={{ paddingBottom: "50px", textAlign: "center", scrollSnapAlign: "start" }}>
        <Link to="/" className="btn-view-all">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
