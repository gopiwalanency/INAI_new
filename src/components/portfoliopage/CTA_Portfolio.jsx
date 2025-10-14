import React from 'react';
import '../HomePage/CTA.css';

const CTA_Portfolio = () => {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">  Want to Be Part of This Journey?</h2>
                <div className="cta-subtitle">Transform messy data into smarter AI.</div>
                <div className="cta-desc">
                    We’re creating the future of AI. Explore our modules and see how real-world AI works created by passionate engineers and future innovators.
                </div>
                <a href="/contact" className="cta-button">Apply for Internship</a>
            </div>
        </section>
    );
};

export default CTA_Portfolio; 