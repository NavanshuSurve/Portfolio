import React from 'react';
import './Contact.css'

export default function Contact() {
    // Data extracted from the resume file for easy access
    const contactData = {
        email: "navanshu.surve1111@gmail.com",
        linkedin: "LinkedIn", // Placeholder for actual link
        github: "GitHub",     // Placeholder for actual link
        leetcode: "LeetCode"  // Placeholder for actual link
    };

    return (
        <div className="contact-page-container">
            <h1 className="contact-heading">📞 Get In Touch</h1>
            <p className="contact-subheading">I'm currently seeking internship opportunities and collaborations. Feel free to connect!</p>

            <section className="contact-details-section">
                <h2>Direct Contact</h2>
                <div className="details-grid">
                    <p>📧 **Email:** <a href={`mailto:${contactData.email}`} className="contact-link">{contactData.email}</a></p>
                    <p>🔗 **Connect:** <a href="#" className="contact-link">{contactData.linkedin}</a></p>
                    <p>💻 **Code:** <a href="#" className="contact-link">{contactData.github}</a> | <a href="#" className="contact-link">{contactData.leetcode}</a></p>
                </div>
            </section>

            <section className="contact-form-section">
                <h2>Send Me a Message</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required className="form-input" />
                    <input type="email" placeholder="Your Email" required className="form-input" />
                    <textarea placeholder="Your Message..." rows="5" required className="form-textarea"></textarea>
                    
                    <button type="submit" className="form-submit-btn">
                        SEND MESSAGE <span aria-hidden="true">→</span>
                    </button>
                </form>
            </section>
        </div>
    );
}