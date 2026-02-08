// src/data/activitiesData.js
// Placeholder data - user can replace these import paths and content
import pythonBootcamp from "../assets/images/pythonBootcamp.jpeg";
import microsoft365 from "../assets/images/microsoft365.jpeg";
import cloudSkills from "../assets/images/cloudSkills.png";
import csetConference from "../assets/images/csetConference.jpeg";
import mlsa from "../assets/images/certs/mlsa.jpg";
import aspireLeader from "../assets/images/aspireLeader.jpg";
import socialHead from "../assets/images/socialHead.jpeg";
import Rec_cert from "../assets/images/Rec_cert.jpeg";
import wealthflow from "../assets/images/wealthflow.jpg"

// Extra images for gallery demo
import aspireCert from "../assets/images/certs/aspire.jpg";
import aspireLetter from "../assets/images/certs/aspireLetter.jpg";
import profile_mlsa from "../assets/images/profile_mlsa.JPG";
import pythonCert from "../assets/images/certs/python.jpg";
import Abdullah from "../assets/images/certs/Abdullah.jpg";

const activitiesData = [
    {
        title: "Microsoft Student Ambassador",
        role: "Gold Ambassador",
        organization: "Microsoft, USA",
        year: "2024 - Present",
        description: "Recognized as a Gold Microsoft Student Ambassador for demonstrating leadership, technical expertise, and community impact. Actively contributed to developer and student communities by organizing technical workshops, hosting learning initiatives, mentoring peers, and promoting Microsoft technologies aligned with industry standards.",
        images: [profile_mlsa, mlsa],
        location: "Online",
        link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/cce452b6-52a6-48fd-bd5e-0ca27a0664b8"
    },
    {
        title: "Aspire Leader Program",
        role: "Alumnus",
        organization: "Harvard University, USA",
        year: "2025",
        description: "Selected for the Aspire Leaders Program, a global leadership initiative focused on developing leadership, communication, and problem-solving skills among high-potential students. Engaged in structured learning modules, peer collaboration, and leadership development activities designed to foster ethical leadership and social impact.",
        images: [aspireCert, aspireLetter],
        location: "Online",
        link: "https://www.aspireleaders.org/"
    },
    {
        title: "Web Exhibition",
        role: "Web Developer",
        organization: "Quaid-e-Awam University of Engineering Science and Technology",
        year: " 15 Jan 2026",
        description: "Participated in the Web Exhibition organized by the Department of Computer Science at Quaid-e-Awam University of Engineering Science and Technology.",
        images: [Rec_cert, wealthflow],
        location: "Quaid-e-Awam University of Engineering Science and Technology",
        link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/cce452b6-52a6-48fd-bd5e-0ca27a0664b8"
    },
    {
        title: "Cloud Skills Challenge",
        role: "Event Host",
        organization: "Microsoft Student Ambassadors",
        year: "2024",
        description: "Hosted and facilitated a Cloud Skills Challenge aimed at empowering students with practical cloud computing knowledge. The event focused on developing hands-on skills in Microsoft Azure through guided learning paths, real-world scenarios, and structured challenges.",
        images: [cloudSkills],
        location: "Online",
        link: "https://www.credly.com/badges/b1dcc65b-b886-46b3-acee-d53ee53b2695/public_url"
    },
    {
        title: "Python Bootcamp",
        role: "Speaker",
        organization: "Society of Coders",
        year: "2024",
        description: "Organized and hosted a three-day Python bootcamp focused on building strong programming fundamentals. The bootcamp covered core Python concepts, problem-solving techniques, and hands-on coding exercises. This was a great success with many students attending and receiving certificates.",
        images: [pythonBootcamp], // Updated with actual python cert
        location: "Sindh, Pakistan",
        link: "https://mvp.microsoft.com/en-US/activities/255596"
    },
    {
        title: "Microsoft 365: Empowering Productivity",
        role: "Speaker",
        organization: "Microsoft Student Ambassador",
        year: "2024",
        description: "Led a technology awareness session showcasing how Microsoft 365 tools enable efficient collaboration and automation. Provided hands-on insights into modern productivity workflows aligned with industry and academic needs.",
        images: [microsoft365],
        location: "Online",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7243682415657840641/"
    },
    {
        title: "National Conference on Computing Sciences and Emerging Trends (CSET' 25)",
        role: "Participant",
        organization: "Department of Computer Science",
        year: "2025",
        description: "Participated in and supported the organization of a national-level CSET conference hosted at the Quaid-e- Awam University of Engineering Science and Technology.",
        images: [csetConference],
        location: "Quaid-e-Awam University of Engineering Science and Technology",
        link: "https://drive.google.com/file/d/18DPlxEWt4p7Jf21VmWWq5Qczsh-bsECf/view?usp=sharing"
    },
    {
        title: "Society of Coders",
        role: "Team Head",
        organization: "Department of Computer Science",
        year: "2025",
        description: "Responsible for managing digital communication, promoting academic and technical activities, and enhancing student engagement through strategic content planning.",
        images: [socialHead, Abdullah],
        location: "Quaid-e-Awam University of Engineering Science and Technology",
        link: "https://www.linkedin.com/posts/society-of-coder-s_introducing-the-team-of-society-of-coders-activity-7260365100358770688-wFRK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEIMBa0BgghCpTgM0V8ndhkZMcz-0qPc-PE"
    }
];
export default activitiesData;
