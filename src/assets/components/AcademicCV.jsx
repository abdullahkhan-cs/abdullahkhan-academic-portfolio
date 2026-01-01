import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./academicCV.css";

export default function AcademicCV() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="academic-cv-container">
            <h1 className="cv-title">
                Academic CV
                <Link to="/all-certifications" className="cv-nav-link">View Certifications</Link>
            </h1>

            <div className="cv-main-grid">
                <div className="cv-column">
                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Education</h2>
                        <div className="tree-content">
                            <div className="cv-item tree-item">
                                <h3>Quaid-e-Awam University of Engineering, Science and Technology</h3>
                                <p>Bachelor of Science in Computer Science</p>
                                <p>2023 - 2027</p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Research Interests</h2>
                        <div className="tree-content">
                            <ul className="cv-list tree-list">
                                <li>Machine Learning</li>
                                <li>Deep Learning</li>
                                <li>Computer Vision</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Research Experience</h2>
                        <div className="tree-content">
                            <div className="cv-item tree-item">
                                <h3>Automata-Based Software Vulnerability Detection</h3>
                                <p><strong>Role:</strong> Lead Researcher | <strong>Year:</strong> 2024</p>
                                <p>Developed a lightweight static analysis method identifying SQL injection and hardcoded credentials using deterministic finite automata over Python AST tokens.</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Academic Project Title</h3>
                                <p><strong>Role:</strong> Developer | <strong>Year:</strong> 2023</p>
                                <p>Description of the academic project. Highlight key technologies used, the problem solved, and the outcome of the project.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Honors and Awards</h2>
                        <div className="tree-content">
                            <ul className="cv-list tree-list">
                                <li>Award Name - Year</li>
                                <li>Award Name - Year</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="cv-column">
                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Professional Development</h2>
                        <div className="tree-content">
                            <div className="cv-item tree-item">
                                <h3>Introduction to Computer Vision</h3>
                                <p>Great Learning | 2025</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Google Data Analytics</h3>
                                <p>Google (Coursera) | 2025</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Learn to Program: The Fundamentals (Python)</h3>
                                <p>University of Toronto (Coursera) | 2023</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Google AI Essentials</h3>
                                <p>Google (Coursera) | 2025</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Meta Front-End Developer Professional Certificate</h3>
                                <p>Meta (Coursera) | 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="cv-section tree-section">
                        <h2 className="tree-node-header">Leadership / Activities</h2>
                        <div className="tree-content">
                            <div className="cv-item tree-item">
                                <h3>Microsoft Learn Student Ambassador (MLSA)</h3>
                                <p>Microsoft | 2024 - Ongoing</p>
                                <p>Engaged in global tech community initiatives and promoted Microsoft technologies.</p>
                            </div>
                            <div className="cv-item tree-item">
                                <h3>Aspire Leader Program</h3>
                                <p>Harvard University | 2025 - Ongoing</p>
                                <p>Completed a selective leadership development program and mentored peers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
