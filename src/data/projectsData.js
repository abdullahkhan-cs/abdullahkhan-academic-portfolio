// src/data/projectsData.js
import portfolioImg from "../assets/images/portfolio.JPG";
import weatherApp from "../assets/images/weatherApp.JPG"
import SV from "../assets/images/SV.JPG"
import plantguardnet from "../assets/images/plantguardnet.png";

const projectsData = [
  {
    title: "PlantGuardNet: Edge AI for Crop Disease Detection",
    image: plantguardnet,
    description:
      "Developed an AI-powered plant disease detection system using MobileNetV3-Small with CBAM Attention Module for real-time leaf image classification. Achieved 97.4% training accuracy and 90.7% validation accuracy through transfer learning and advanced data augmentation. Built a Flask-based web application with image upload and live camera support for desktop and mobile devices.",
    tools: ["MobileNetV3", "CBAM Attention", "Flask", "Python", "Transfer Learning"],
    link: "https://github.com/abdullahkhan-cs/PlantGaurdNet",
    isInternal: false,
  },
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
