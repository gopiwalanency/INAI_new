import React from 'react';
import RotatingImage from '../../assets/admin-ajax.png';

const Marquee = () => {
  const text = "Best AI Company";
  return (
    <section className="architects-section-container">
      <div className="architects-marquee-wrapper">
        <div className="architects-marquee">
          <span className="architects-text">{text}</span>
          <img src={RotatingImage} alt="rotating element" className="architects-rotating-image" />
          <span className="architects-text">{text}</span>
          <img src={RotatingImage} alt="rotating element" className="architects-rotating-image" />
        </div>
        <div className="architects-marquee" aria-hidden="true">
          <span className="architects-text">{text}</span>
          <img src={RotatingImage} alt="rotating element" className="architects-rotating-image" />
          <span className="architects-text">{text}</span>
          <img src={RotatingImage} alt="rotating element" className="architects-rotating-image" />
        </div>
      </div>
    </section>
  );
};

export default Marquee; 