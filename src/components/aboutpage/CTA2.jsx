import React from 'react';
import './CTA2.css';
import ctaBg from '../../assets/CTA2.webp';

const CTA2 = () => {
  return (
    <section className="cta2-section" style={{ backgroundImage: `url(${ctaBg})` }}>
      <div className="cta2-content">
        <h2 className="cta2-title">Experience the power of AI with INAI Worlds.</h2><br />
        <div className="cta2-subtitle">
          {/* Start your journey today with INAI Worlds. Whether you’re dreaming of a career in AI/ML, we’re here to make it real. */}

        </div>
        <a href="/contact" className="cta2-button">Contact Us Now</a>
      </div>
    </section>
  );
};

export default CTA2; 