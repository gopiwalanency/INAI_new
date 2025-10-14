import React from 'react';
import './HomePage/CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Ready to start?</h2>
        <div className="cta-subtitle">Transform messy data into smarter AI.</div>
        <div className="cta-desc">
          Join our Data Manipulation in AI/ML Internship and build real skills in data manipulation for AI model building by working on live, real-world projects.<br />
          Enroll now and become AI-ready!
        </div>
        <a href="/contact" className="cta-button">Apply Now</a>
      </div>
    </section>
  );
};

export default CTA; 