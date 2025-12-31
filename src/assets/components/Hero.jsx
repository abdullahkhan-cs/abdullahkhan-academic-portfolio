// src/assets/components/Hero.jsx
import React from "react";
import "./hero.css";
import profileImg from "../images/1760274157199.png";
import resume from "../docs/resume.pdf"; // Import resume

export default function Hero() {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background Blobs */}
      {/* Background Blobs Removed for Classic Theme */}

      <div className="hero-container">
        {/* Hero Text */}
        <div className="hero-text">
          <h1 className="fade-in">
            Hi, I’m <span>Abdullah</span>
          </h1>
          <h2 className="slide-up">
            Software Developer | Aspire Leaders Alumnus | Researcher | Microsoft Student Ambassador
          </h2>
          <p className="fade-in-delay">
            I am highly motivated Computer Science undergraduate with a strong focus on Artificial Intelligence, Machine Learning, Computer Vision. Passionate about research and technology, I strive to combine academic knowledge with practical skills to develop solutions that make a meaningful impact.
          </p>
          <div className="hero-buttons fade-in-delay-2">
            <button className="btn primary" onClick={() => scrollToSection("projects")}>
              View Projects
            </button>
            <button className="btn secondary" onClick={() => scrollToSection("contact")}>
              Contact Me
            </button>
            <a href={resume} download="Abdullah_Resume.pdf" className="btn secondary">
              Download CV
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <div className="profile-card">
            <img src={profileImg} alt="Abdullah portrait" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
