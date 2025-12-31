// src/data/certificationsData.js
import mlsa from "../assets/images/certs/mlsa.jpg";
import aspire from "../assets/images/certs/aspire.jpg";
import nftp from "../assets/images/certs/nftp.jpg";
import googleData from "../assets/images/certs/googleData.jpg";
import meta from "../assets/images/certs/meta.jpg";
import python from "../assets/images/certs/python.jpg";
import google from "../assets/images/certs/googleessentials.jpg";
import aspireLetter from "../assets/images/certs/aspireLetter.jpg";
import CV from "../assets/images/certs/CV.jpg";

const certificationsData = [
    {
        title: "National Freelance Training Program (NFTP)",
        description:
            "Trained in professional freelancing skills and project delivery under the Punjab Information Technology Board (PITB) at Quaid-e-Awam University.",
        issuer: "Punjab IT Board (PITB)",
        year: "2024",
        image: nftp,
        verifyLink: "https://nftp.pitb.gov.pk/",
    },
     {
        title: "Introduction to Computer Vision",
        description:
            "Gained hands-on experience with Computer Vision, approaches to computer vision-pixel intensity histograms, CNN, digital images and pixels-analog to digital images, pixel neighborhood, different tasks in Computer Vision like classification, classification and localization, object detection, instance segmentation",
        issuer: "Great Learning",
        year: "2025",
        image: CV,
        verifyLink: "https://www.mygreatlearning.com/certificate/IWVBNVVE",
    },
    {
        title: "Google Data Analytics",
        description:
            "Professional training in data analysis covering data collection, cleaning, analysis, visualization, spreadsheets, SQL, Tableau, and R to extract insights and support data-driven decisions.",
        issuer: "Google",
        year: "2025",
        image: googleData,
        verifyLink: "https://coursera.org/verify/professional-cert/14SJCIWS0ECQ",
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        description:
            "Completed a 9-course specialization covering HTML, CSS, JavaScript, React, UX/UI Design, and Coding Interview Preparation.",
        issuer: "Meta (Coursera)",
        year: "2025",
        image: meta,
        verifyLink: "https://coursera.org/verify/professional-cert/I67CNA39XMA2",
    },
    {
        title: "Learn to Program: The Fundamentals (Python)",
        description:
            "Gained foundational programming knowledge and Python skills through structured exercises and projects.",
        issuer: "University of Toronto (Coursera)",
        year: "2023",
        image: python,
        verifyLink: "https://coursera.org/verify/Z2P2SURZSUDX",
    },
    {
        title: "Google AI Essentials",
        description:
            "Learned the fundamentals of AI, including machine learning, neural networks, and ethical AI practices.",
        issuer: "Google",
        year: "2025",
        image: google,
        verifyLink: "https://coursera.org/verify/specialization/3J3PM9E5GE7K",
    },
    {
        title: "Microsoft Student Ambassador (MSA)",
        description:
            "Engaged in global tech community initiatives, organized events, and promoted Microsoft technologies to empower student learning.",
        issuer: "Microsoft Student Program",
        year: "Ongoing",
        image: mlsa,
        verifyLink:
            "https://mvp.microsoft.com/en-US/studentambassadors/profile/cce452b6-52a6-48fd-bd5e-0ca27a0664b8",
    },
    {
        title: "Aspires Leadership Program Alumni",
        description:
            "Completed a selective leadership development program and mentored peers in innovation and personal growth.",
        issuer: "Aspire Institute",
        year: "2025",
        image: aspire,
        verifyLink:
            "https://www.aspireleaders.org/program/aspire-leaders-program/",
    },
    {
        title: "Aspire Institute Acknowledgement Letter",
        description:
            "Learned the fundamentals of AI, including machine learning, neural networks, and ethical AI practices.",
        issuer: "Aspire Institute",
        year: "2025",
        image: aspireLetter,
        verifyLink: "https://www.aspireleaders.org/program/aspire-leaders-program/",
    }
];

export default certificationsData;
