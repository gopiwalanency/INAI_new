import React from 'react';
import './WhyDataStructuringCarousel.css';

// 3D SVG Icon Components
const Icon3D_Lightning = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="lightning-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <filter id="lightning-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.5" />
      </filter>
    </defs>
    <path 
      d="M32 8 L20 32 L28 32 L24 56 L44 28 L36 28 L40 8 Z" 
      fill="url(#lightning-grad)" 
      filter="url(#lightning-shadow)" 
      stroke="#FF8C00" 
      strokeWidth="1.5"
    />
  </svg>
);

const Icon3D_Shield = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <filter id="shield-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#667eea" floodOpacity="0.5" />
      </filter>
    </defs>
    <path 
      d="M32 8 C32 8, 16 12, 16 20 C16 36, 20 48, 32 56 C44 48, 48 36, 48 20 C48 12, 32 8, 32 8 Z" 
      fill="url(#shield-grad)" 
      filter="url(#shield-shadow)" 
      stroke="#5a67d8" 
      strokeWidth="1.5"
    />
    <path 
      d="M26 30 L30 34 L38 24" 
      fill="none" 
      stroke="#fff" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Icon3D_Bulb = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="bulb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
      <radialGradient id="bulb-glow" cx="50%" cy="30%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#f093fb" stopOpacity="0" />
      </radialGradient>
      <filter id="bulb-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f093fb" floodOpacity="0.5" />
      </filter>
    </defs>
    <ellipse cx="32" cy="22" rx="12" ry="16" fill="url(#bulb-grad)" filter="url(#bulb-shadow)" stroke="#e84393" strokeWidth="1.5" />
    <ellipse cx="32" cy="18" rx="6" ry="8" fill="url(#bulb-glow)" />
    <rect x="28" y="38" width="8" height="4" rx="1" fill="#e84393" />
    <rect x="26" y="42" width="12" height="6" rx="2" fill="#c0392b" />
    <line x1="32" y1="48" x2="32" y2="52" stroke="#e84393" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const carouselData = [
  {
    icon: <Icon3D_Lightning />,
    text: "Reduces model errors and misclassifications"
  },
  {
    icon: <Icon3D_Shield />,
    text: "Enables faster machine learning model training"
  },
  {
    icon: <Icon3D_Bulb />,
    text: "Enables strong performance for AI and predictive models."
  }
];

const WhyDataStructuringCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Duplicate items for infinite scroll effect */}
        {[...carouselData, ...carouselData, ...carouselData].map((item, index) => (
          <div className="carousel-card" key={index}>
            <div className="carousel-card-icon">
              {item.icon}
            </div>
            <strong className="carousel-card-text">{item.text}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyDataStructuringCarousel;
