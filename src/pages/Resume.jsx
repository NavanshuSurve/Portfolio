import React from 'react';
import './Resume.css'

export default function Resume() {
    // Data extracted from the attached resume file
    const resumeData = {
        name: "NAVANSHU SURVE",
        contact: "navanshu.surve1111@gmail.com | LinkedIn | GitHub | LeetCode",
        education: {
            school: "University Of Petroleum And Energy Studies",
            degree: "B.Tech in Computer Science, Specialization in AI/ML",
            dates: "September 2023 - March 2027",
            location: "Dehradun, India",
        },
        experience: [
            {
                role: "Summer Intern",
                company: "CRMLabs",
                dates: "June 2025 - July2025",
                location: "Pune",
                details: [
                    "Completed a structured, multi-module Salesforce training program covering data modeling, security, Lightning components, validation rules, and deployment.",
                    "Gained hands-on experience with Salesforce as a cloud-based CRM platform, working with cloud-hosted data models, automation tools, and multi-environment deployments using Sandboxes.",
                    "Earned 17+ Trailhead Badges on Salesforce Trailblazer, demonstrating continuous learning and platform expertise.",
                ],
            },
            {
                role: "Summer Intern",
                company: "Child Help Foundation",
                dates: "June 2024 - July 2024",
                location: "Mumbai",
                details: [
                    "Conducted weekly interactive learning sessions for children, focusing on foundational subjects, digital literacy, and creative expression.",
                    "Collaborated with the NGO's core team to revamp their website using the MERN stack (MongoDB, Express.js, React, Node.js), improving user experience and mobile responsiveness.",
                    "Implemented dynamic content sections and donation form integrations, helping streamline outreach and engagement through the web platform.",
                ],
            },
        ],
        projects: [
            {
                title: "Inventory Prediction using Linear Regression and Feature Engineering",
                tools: "numpy, pandas, scikitlearn",
                date: "June 2025",
                details: [
                    "Developed a machine learning model to forecast inventory demand using Linear Regression, improving stock planning accuracy.",
                    "Applied feature engineering techniques to extract key predictors like sales velocity, seasonality, and historical demand trends.",
                    "Utilized Pandas, NumPy, and Scikit-learn for data preprocessing, training, and visualization.",
                ],
            },
            {
                title: "Library Management System",
                tools: "Java, Swing, MySQL",
                date: "May 2025",
                details: [
                    "Designed and implemented a full-featured Library Management System using Java Swing for GUI and MySQL for persistent storage.",
                    "Applied core Object-Oriented Programming (OOP) principles to structure classes for books, users, and transactions.",
                    "Enabled functionalities like book issuance, return tracking, member registration, and fine calculation with live database updates.",
                ],
            },
            {
                title: "File Organization System through Machine Learning",
                tools: "Python, NumPy, Ollama, Watchdog",
                date: "March 2025",
                details: [
                    "Built an intelligent file organization tool using Python, capable of auto-sorting files into folders based on filename similarity.",
                    "Embedded file names and used cosine similarity with Pandas and OS module for smart classification.",
                    "Leveraged Watchdog, Requests, Llama 3.2, and event tracking to monitor and auto-organize files in real time.",
                ],
            },
        ],
        skills: {
            languages: "Python, Java, JavaScript, CSS",
            frameworks: "React.js, Node.js, OpenCV, Streamlit",
            tools: "Git, GitHub, MySQL, MongoDB, VS Code, Postman",
            coursework: "Data Structures and Algorithms (Java), Object Oriented Programming, Artificial Intelligence and Machine Learning, Operating Systems, Data Base Management System",
        }
    };

    const renderDetails = (items) => (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );

    return (
        <div className="resume-page-container">
            <header className="resume-header">
                <h1 className="name-heading">{resumeData.name}</h1>
                <p className="contact-info">{resumeData.contact}</p>
            </header>

            <main className="resume-body">
                
                {/* EDUCATION */}
                <section className="section-block">
                    <h2>EDUCATION</h2>
                    <div className="content-item">
                        <h3 className="item-title">{resumeData.education.school}</h3>
                        <p className="item-subtitle">{resumeData.education.degree}</p>
                        <p className="item-dates">{resumeData.education.dates} | {resumeData.education.location}</p>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="section-block">
                    <h2>EXPERIENCE</h2>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="content-item">
                            <h3 className="item-title">{exp.company}</h3>
                            <p className="item-subtitle">{exp.role} ({exp.dates})</p>
                            {renderDetails(exp.details)}
                        </div>
                    ))}
                </section>

                {/* PROJECTS */}
                <section className="section-block">
                    <h2>PROJECTS</h2>
                    {resumeData.projects.map((proj, index) => (
                        <div key={index} className="content-item project-item">
                            <h3 className="item-title">{proj.title} <span className="project-date">({proj.date})</span></h3>
                            <p className="item-subtitle">Tools: {proj.tools}</p>
                            {renderDetails(proj.details)}
                        </div>
                    ))}
                </section>

                {/* SKILLS */}
                <section className="section-block">
                    <h2>SKILLS</h2>
                    <div className="skills-grid">
                        <p><strong>Languages:</strong> {resumeData.skills.languages}</p>
                        <p><strong>Frameworks & Libraries:</strong> {resumeData.skills.frameworks}</p>
                        <p><strong>Tools & Platforms:</strong> {resumeData.skills.tools}</p>
                        <p><strong>Coursework:</strong> {resumeData.skills.coursework}</p>
                    </div>
                </section>

            </main>
        </div>
    );
}