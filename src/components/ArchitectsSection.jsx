import React from 'react';
import './ArchitectsSection.css';
import aniImage from '../assets/ani.png';

const ArchitectsSection = () => {
  const text = "Best AI Tool";
  return (
    <section className="architects-section-container">
      <div className="architects-marquee-wrapper">
        <div className="architects-marquee">
          <span className="architects-text">{text}</span>
          <img src={aniImage} alt="rotating element" className="architects-rotating-image" />
          <span className="architects-text">{text}</span>
          <img src={aniImage} alt="rotating element" className="architects-rotating-image" />
        </div>
        <div className="architects-marquee" aria-hidden="true">
          <span className="architects-text">{text}</span>
          <img src={aniImage} alt="rotating element" className="architects-rotating-image" />
          <span className="architects-text">{text}</span>
          <img src={aniImage} alt="rotating element" className="architects-rotating-image" />
        </div>
      </div>
    </section>
  );
};

export default ArchitectsSection; 