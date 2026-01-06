// src/data/projectsData.js
import portfolioImg from "../assets/images/portfolio.JPG";
import weatherApp from "../assets/images/weatherApp.JPG"
import SV from "../assets/images/SV.JPG"

const projectsData = [
  {
    title: "Automata-Based Software Vulnerability Detection",
    image: SV,
    description:
      "Developed a Python-based tool to detect SQL injection and hardcoded credentials using finite automata. Visualized vulnerabilities using Graphviz, demonstrating advanced code analysis techniques.",
    tools: ["Python", "AST", "Graphviz", "Automata"],
    link: "https://software-vuln-detection-a9bycya7hgcdd5bh.southeastasia-01.azurewebsites.net/",
    isInternal: true,
  },
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "A stunning, modern weather application built with React and Vite, featuring a premium Glassmorphism UI, dynamic Dark/Light themes, and real-time weather data.",
    tools: ["React.js", "Vite", "Tailwind CSS (Layouts)", "Custom CSS (Glassmorphism & Animations)", "React Context API (Theming)"],
    link: "https://weather-now-f9ereddsf4fxb4g7.southindia-01.azurewebsites.net/",
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
