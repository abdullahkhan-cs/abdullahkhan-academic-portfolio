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

            <div className="cv-section">
                <h2>Education</h2>
                <div className="cv-item">
                    <h3>Quaid-e-Awam University of Engineering, Science and Technology</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>2023 - 2027</p>
                </div>
            </div>

            <div className="cv-section">
                <h2>Research Interests</h2>
                <ul className="cv-list">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Computer Vision</li>
                </ul>
            </div>

            <div className="cv-section">
                <h2>Research Experience</h2>
                <div className="cv-item">
                    <h3>Automata-Based Software Vulnerability Detection</h3>
                    <p><strong>Role:</strong> Lead Researcher | <strong>Year:</strong> 2024</p>
                    <p>Developed a lightweight static analysis method identifying SQL injection and hardcoded credentials using deterministic finite automata over Python AST tokens. Focused on reducing false positives in security scanning tools.</p>
                </div>
                <div className="cv-item">
                    <h3>Academic Project Title</h3>
                    <p><strong>Role:</strong> Developer | <strong>Year:</strong> 2023</p>
                    <p>Description of the academic project. Highlight key technologies used, the problem solved, and the outcome of the project. Designed to showcase practical application of theoretical concepts.</p>
                </div>
            </div>

            <div className="cv-section">
                <h2>Professional Development and Certifications</h2>
                <div className="cv-item">
                    <h3>Introduction to Computer Vision</h3>
                    <p>Great Learning</p>
                    <p>2025</p>
                    <p>Hands-on experience with Computer Vision, approaches to computer vision-pixel intensity histograms, CNN, digital images and pixels-analog to digital images, pixel neighborhood, different tasks in Computer Vision like classification, classification and localization, object detection, instance segmentation</p>
                </div>
                <div className="cv-item">
                    <h3>Google Data Analytics</h3>
                    <p>Google (Coursera)</p>
                    <p>2025</p>
                    <p>Professional training in data analysis covering data collection, cleaning, analysis, visualization, spreadsheets, SQL, Tableau, and R to extract insights and support data-driven decisions.</p>
                </div>
                <div className="cv-item">
                    <h3>Learn to Program: The Fundamentals (Python)</h3>
                    <p>University of Toronto (Coursera)</p>
                    <p>2023</p>
                    <p>Gained foundational programming knowledge and Python skills through structured exercises and projects.</p>
                </div>
                <div className="cv-item">
                    <h3>Google AI Essentials</h3>
                    <p>Google (Coursera)</p>
                    <p>2025</p>
                    <p>Learned the fundamentals of AI, including machine learning, neural networks, and ethical AI practices.</p>
                </div>
                <div className="cv-item">
                    <h3>Meta Front-End Developer Professional Certificate</h3>
                    <p>Meta (Coursera)</p>
                    <p>2025</p>
                    <p>Completed a 9-course specialization covering HTML, CSS, JavaScript, React, UX/UI Design, and Coding Interview Preparation.</p>
                </div>
            </div>
            <div className="cv-section">
                <h2>Honors and Awards</h2>
                <ul className="cv-list">
                    <li>Award Name - Year</li>
                    <li>Award Name - Year</li>
                </ul>
            </div>

            <div className="cv-section">
                <h2>Leadership Experience / Activities</h2>
                <div className="cv-item">
                    <h3>Microsoft Learn Student Ambassador (MLSA)</h3>
                    <p>Microsoft</p>
                    <p>2024 - Ongoing</p>
                    <p>Engaged in global tech community initiatives, organized events, and promoted Microsoft technologies to empower student learning.</p>
                </div>
                <div className="cv-item">
                    <h3>Aspire Leader Program</h3>
                    <p>Harvard University</p>
                    <p>2025 - Ongoing</p>
                    <p>Completed a selective leadership development program and mentored peers in innovation and personal growth.</p>
                </div>
            </div>
        </div>
    );
}
