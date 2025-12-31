// src/data/projectsData.js
import portfolioImg from "../assets/images/portfolio.JPG";

const projectsData = [
  {
    title: "Automata-Based Software Vulnerability Detection",
    image: "https://placehold.co/600x400?text=Project+Diagram",
    description:
      "Developed a Python-based tool to detect SQL injection and hardcoded credentials using finite automata. Visualized vulnerabilities using Graphviz, demonstrating advanced code analysis techniques.",
    tools: ["Python", "AST", "Graphviz", "Automata"],
    link: "https://github.com/Abdullah22588/automata-based-software-vuln-detection",
    isInternal: true,
  },
  {
    title: "Weather App",
    image: "../assets/images/weatherApp.png",
    description:
      "A stunning, modern weather application built with React and Vite, featuring a premium Glassmorphism UI, dynamic Dark/Light themes, and real-time weather data.",
    tools: ["React.js", "Vite", "Tailwind CSS (Layouts)", "Custom CSS (Glassmorphism & Animations)", "React Context API (Theming)"],
    link: "https://github.com/Abdullah22588/premium-weather-app",
    isInternal: true,
  },
  {
    title: "Personal Portfolio Website (This Site)",
    image: portfolioImg,
    description:
      "Created a responsive portfolio website using React with modern UI design and custom CSS.",
    tools: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/Abdullah22588/my_portfolio",
    isInternal: false,
  },

];

export default projectsData;
