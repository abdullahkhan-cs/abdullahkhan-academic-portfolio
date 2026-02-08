import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

// Import Data for Global Search
import projectsData from "../../data/projectsData";
import researchData from "../../data/researchData";
import certificationsData from "../../data/certificationsData";
import activitiesData from "../../data/activitiesData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------------------------------------------------
  // 🔍 Global Search Logic
  // -----------------------------------------------------------------------
  const allData = useMemo(() => {
    const data = [];

    // Index Projects
    projectsData.forEach((p) => {
      data.push({
        type: "Project",
        title: p.title,
        desc: p.description,
        link: p.isInternal ? null : p.link, // External links
        internalLink: p.isInternal ? (p.title.includes("Automata") ? "/automata-project" : (p.title.includes("Weather") ? "/all-projects" : null)) : "/all-projects",
        // Logic to route specific projects if they have pages, else generic
        id: "projects"
      });
    });

    // Index Research
    researchData.forEach((r) => {
      data.push({
        type: "Research",
        title: r.title,
        desc: r.abstract,
        internalLink: "/all-research",
        id: "research"
      });
    });

    // Index Certifications
    certificationsData.forEach((c) => {
      data.push({
        type: "Certification",
        title: c.title,
        desc: c.issuer,
        internalLink: "/all-certifications",
        id: "certifications"
      });
    });

    // Index Activities
    activitiesData.forEach((a) => {
      data.push({
        type: "Activity",
        title: a.title,
        desc: a.role,
        internalLink: "/all-activities",
        id: "activities"
      });
    });

    return data;
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const results = allData.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.desc.toLowerCase().includes(lowerQuery) ||
        item.type.toLowerCase().includes(lowerQuery)
      );
    }).slice(0, 5); // Limit to 5 results for sleekness

    setSearchResults(results);
  }, [searchQuery, allData]);

  const handleSearchClick = (item) => {
    if (item.internalLink) {
      navigate(item.internalLink);
    } else if (item.link) {
      window.open(item.link, "_blank");
    } else {
      // Fallback to home section
      scrollToSection(item.id);
    }
    setSearchOpen(false);
    setSearchQuery("");
  };

  // -----------------------------------------------------------------------
  // Navigation Logic
  // -----------------------------------------------------------------------
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActive(id);
        }
      }, 300);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  // Active section tracking
  useEffect(() => {
    if (location.pathname !== "/") {
      // Simple mapping for pages
      if (location.pathname.includes("project")) setActive("projects");
      else if (location.pathname.includes("research")) setActive("research");
      else if (location.pathname.includes("certification")) setActive("all-certifications");
      else if (location.pathname.includes("activit")) setActive("activities");
      else if (location.pathname.includes("contact")) setActive("contact");
      else setActive("");
    } else {
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
    }
  }, [location.pathname]);

  const navItems = [
    { id: "home", label: "Home", type: "section" },
    { id: "projects", label: "Projects", type: "section" },
    { id: "research", label: "Research", type: "section" },
    { id: "all-certifications", label: "Certifications", type: "page", path: "/all-certifications" },
    { id: "activities", label: "Activities", type: "section" },
    { id: "contact", label: "Contact", type: "section" },
  ];

  return (
    <>
      <motion.nav
        className={`advanced-navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-content">
          {/* Logo / Brand */}
          <div className="nav-brand" onClick={() => scrollToSection("home")}>
            <span className="brand-dot"></span>
            A.K
          </div>

          {/* Desktop Links */}
          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${active === item.id ? "active" : ""}`}
                onClick={() => {
                  if (item.type === "page") {
                    navigate(item.path);
                    setActive(item.id);
                    window.scrollTo(0, 0);
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="active-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Actions: Search & Mobile Toggle */}
          <div className="nav-actions">
            {/* Search Icon */}
            <div className={`search-wrapper ${searchOpen ? "active" : ""}`}>
              <button
                className="search-btn"
                onClick={() => {
                  setSearchOpen(!searchOpen);
                  if (!searchOpen) setTimeout(() => document.getElementById("global-search-input")?.focus(), 100);
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <div className="search-container">
                <input
                  id="global-search-input"
                  type="text"
                  placeholder="Search projects, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery("")}>&times;</button>
                )}
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {searchOpen && searchQuery && (
                  <motion.div
                    className="search-results-dropdown"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {searchResults.length > 0 ? (
                      searchResults.map((result, idx) => (
                        <div
                          key={idx}
                          className="search-result-item"
                          onClick={() => handleSearchClick(result)}
                        >
                          <span className={`result-badge ${result.type.toLowerCase()}`}>{result.type}</span>
                          <div className="result-info">
                            <span className="result-title">{result.title}</span>
                            <span className="result-desc">{result.desc && result.desc.substring(0, 50)}...</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="no-results">No results found</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setOpen(!open)}>
              <span className={`bar ${open ? "open" : ""}`}></span>
              <span className={`bar ${open ? "open" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`mobile-link ${active === item.id ? "active" : ""}`}
                  onClick={() => {
                    if (item.type === "page") {
                      navigate(item.path);
                      setActive(item.id);
                      window.scrollTo(0, 0);
                    } else {
                      scrollToSection(item.id);
                    }
                    setOpen(false);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Overlay (closes search when clicking outside) */}
      {searchOpen && <div className="search-overlay-backdrop" onClick={() => setSearchOpen(false)} />}
    </>
  );
}
