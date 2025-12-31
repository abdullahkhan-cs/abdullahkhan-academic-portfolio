import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking & Route handling
  useEffect(() => {
    if (location.pathname === "/all-projects") {
      setActive("projects");
    } else if (location.pathname === "/all-certifications") {
      setActive("certifications");
    } else if (location.pathname === "/all-research") {
      setActive("research");
    } else if (location.pathname === "/all-activities") {
      setActive("activities");
    } else if (location.pathname === "/academic-cv") {
      setActive("academic-cv");
    } else if (location.pathname === "/professional-cv") {
      setActive("professional-cv");
    } else if (location.pathname === "/") {
      // Only track sections on home page
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
    } else {
      setActive(""); // Reset active state on other pages
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActive(id);
        }
      }, 300); // Wait for navigation
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  const goHome = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("hero");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <motion.header
      className={`nav-header ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Brand */}
        <div className="brand-wrapper">
          <span className="brand" onClick={goHome}>
            Abdullah Khan
          </span>
        </div>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`nav-links ${open ? "open" : ""}`}
        >
          {[
            { id: "home", label: "Home", type: "section" },
            { id: "projects", label: "Projects", type: "section" },
            { id: "research", label: "Research", type: "section" },
            { id: "all-certifications", label: "Certifications", type: "page", path: "/all-certifications" },
            { id: "activities", label: "Activities", type: "section" },
            { id: "academic-cv", label: "Academic CV", type: "page", path: "/academic-cv" },
            { id: "professional-cv", label: "Professional CV", type: "page", path: "/professional-cv" },
            { id: "contact", label: "Contact", type: "section" },
          ].map((item) => (
            <span
              key={item.id}
              onClick={() => {
                if (item.type === "page") {
                  navigate(item.path);
                  setOpen(false);
                  setActive(item.id);
                } else {
                  scrollToSection(item.id);
                }
              }}
              className={active === item.id ? "active-link" : ""}
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className={`hamburger ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </motion.header>
  );
}
