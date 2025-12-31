import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import Research from "./assets/components/Research";
import Contact from "./assets/components/Contact";
import AutomataProject from "./assets/components/AutomataProject";
import CUMSProject from "./assets/components/CUMSProject";
import Certifications from "./assets/components/Certifications";
import Activities from "./assets/components/Activities"; // ✅ Import Activities
import AllProjects from "./assets/components/AllProjects";
import AllCertifications from "./assets/components/AllCertifications";
import AllResearch from "./assets/components/AllResearch";
import AllActivities from "./assets/components/AllActivities"; // ✅ Import AllActivities
import AcademicCV from "./assets/components/AcademicCV";
import ProfessionalCV from "./assets/components/ProfessionalCV";
import Footer from "./assets/components/Footer";


import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Research />
                <Certifications />
                <Activities /> {/* ✅ Added Activities Section */}
                <Contact />
              </>
            }
          />

          {/* Project detail pages */}
          <Route path="/automata-project" element={<AutomataProject />} />
          <Route path="/cums-project" element={<CUMSProject />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/all-certifications" element={<AllCertifications />} />
          <Route path="/all-research" element={<AllResearch />} />
          <Route path="/all-activities" element={<AllActivities />} /> {/* ✅ All Activities route */}
          <Route path="/academic-cv" element={<AcademicCV />} />
          <Route path="/professional-cv" element={<ProfessionalCV />} />
        </Routes>
      </main>

      {/* ✅ Footer displayed on all pages */}
      <Footer />
    </div>
  );
}


