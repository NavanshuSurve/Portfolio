import React from 'react';

import './Projects.css'; 

export default function Projects() {
    // Demo data for projects
    const demoProjects = [
        {
            id: 1,
            title: "TaskMaster Pro",
            tag: "React, Firebase",
            description: "A comprehensive to-do list app with real-time syncing and user authentication. Built for efficient daily planning.",
            color: "var(--color-accent-1)", // Red/Black theme color 1
        },
        {
            id: 2,
            title: "WeatherWise API",
            tag: "HTML, CSS, API",
            description: "A minimalist weather dashboard that fetches real-time data using the OpenWeather API. Features dark/light mode.",
            color: "var(--color-accent-2)", // Red/Black theme color 2
        },
        {
            id: 3,
            title: "E-Commerce Mockup",
            tag: "Vue.js, State Management",
            description: "A single-page product gallery mock-up, demonstrating basic state management for cart functionality.",
            color: "var(--color-accent-3)", // Red/Black theme color 3
        },
        {
            id: 4,
            title: "Portfolio v1",
            tag: "Vanilla CSS, HTML5",
            description: "The first version of my personal portfolio, focusing heavily on responsive design and subtle CSS animations.",
            color: "var(--color-accent-4)", // Red/Black theme color 4
        },
    ];

    return (
        <div className="projects-container">
            <h1 className="projects-heading">🔥 My Projects Portfolio 🔥</h1>

            <section className="projects-grid">
                {demoProjects.map((project) => (
                    <article 
                        key={project.id} 
                        className="project-card"
                        style={{ 
                            // Using dynamic color variables from CSS for the top border flash
                            borderTop: `5px solid ${project.color}`, 
                        }}
                    >
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-tag">{project.tag}</p>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-actions">
                            <button className="btn-live">Live Demo</button>
                            <button className="btn-code">View Code</button>
                        </div>
                    </article>
                ))}
            </section>

            <p className="projects-footer">More projects coming soon!</p>
        </div>
    );
}