import React, { useEffect } from "react";
import "./professionalCV.css";

export default function ProfessionalCV() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="professional-cv-container">
            <h1 className="cv-title">Professional CV</h1>

            <div className="cv-section">
                <h2>Work Experience</h2>
                <div className="cv-item">
                    <h3>PHP intern</h3>
                    <p>iCreatives Technology</p>
                    <p>Dates: May 2024 Sep 2024</p>
                    <ul className="cv-list">
                    </ul>
                </div>
                {/* <div className="cv-item">
                    <h3>Previous Job Title</h3>
                    <p>Company Name</p>
                    <p>Dates</p>
                    <ul className="cv-list">
                        <li>Responsibility / Achievement 1</li>
                        <li>Responsibility / Achievement 2</li>
                    </ul>
                </div> */}
            </div>

            <div className="cv-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Technical Skills</h3>
                        <p>JavaScript, React, Node.js, Python, PHP, MySQL</p>
                    </div>
                    <div className="skill-category">
                        <h3>Soft Skills</h3>
                        <p>Communication, Leadership, Problem Solving</p>
                    </div>
                    <div className="skill-category">
                        <h3>Tools</h3>
                        <p>Git, VS Code, Jira</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
