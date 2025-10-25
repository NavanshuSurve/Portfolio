import React from 'react';
// Assuming the card components are correctly imported:
import ProfileCard from '../Cards/ProfileCard';
import ProfilePic from '../assets/ProfilePic.jpg';
import './About.css'

function About() {
    // Extracted key info from your resume for the intro text
    const introText = "I am a B.Tech student at UPES, specializing in Artificial Intelligence and Machine Learning. With hands-on experience in the MERN stack and Salesforce, my passion lies in developing intelligent systems and solving complex problems, from predicting inventory demand using Linear Regression to building full-stack applications. I thrive on continuous learning and applying core Computer Science principles in real-world scenarios.";

    return (
        <main className="about-page-container">
            {/* --- Left Side: Profile Card (UNCHANGED as requested) --- */}
            <div className="card-wrapper">
                <ProfileCard
                    name="Navanshu Surve"
                    title="AI/ML Developer | Student"
                    handle="navanshoe"
                    status="Online"
                    contactText="Instagram"
                    avatarUrl={ProfilePic}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                />
            </div>

            {/* --- Right Side: Introduction Text --- */}
            <div className="about-content">
                <h1 className="about-heading">About Me</h1>
                <p className="about-description">{introText}</p>

                <div className="about-details">
                    <h3>Key Focus</h3>
                    <ul>
                        <li><span className="bullet-point"></span> AI/ML (Inventory Prediction, File Organization Systems)</li>
                        <li><span className="bullet-point"></span> Full-Stack Development (MERN stack, Web Revamping)</li>
                        <li><span className="bullet-point"></span> Core CS Principles (DSA, OOP in Java)</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default About;