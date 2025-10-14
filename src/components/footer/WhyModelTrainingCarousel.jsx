import React from 'react';
import './WhyDataStructuringCarousel.css';

// 3D SVG Icon Components
const Icon3D_Target = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="target-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <filter id="target-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.5" />
      </filter>
    </defs>
    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#target-grad)" strokeWidth="2" filter="url(#target-shadow)" />
    <circle cx="32" cy="32" r="20" fill="none" stroke="url(#target-grad)" strokeWidth="2" />
    <circle cx="32" cy="32" r="12" fill="none" stroke="url(#target-grad)" strokeWidth="2" />
    <circle cx="32" cy="32" r="4" fill="url(#target-grad)" />
  </svg>
);

const Icon3D_Rocket = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#667eea" />
        <stop offset="100%" stopColor="#764ba2" />
      </linearGradient>
      <filter id="rocket-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#667eea" floodOpacity="0.5" />
      </filter>
    </defs>
    <path 
      d="M32 8 L38 28 L48 32 L38 36 L32 56 L26 36 L16 32 L26 28 Z" 
      fill="url(#rocket-grad)" 
      filter="url(#rocket-shadow)" 
      stroke="#5a67d8" 
      strokeWidth="1.5"
    />
    <circle cx="32" cy="28" r="4" fill="#fff" opacity="0.6" />
  </svg>
);

const Icon3D_Brain = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f093fb" />
        <stop offset="100%" stopColor="#f5576c" />
      </linearGradient>
      <filter id="brain-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f093fb" floodOpacity="0.5" />
      </filter>
    </defs>
    <path 
      d="M20 24 Q16 20, 16 16 Q16 12, 20 12 Q22 12, 24 14 Q26 10, 30 10 Q34 10, 36 14 Q38 12, 40 12 Q44 12, 44 16 Q44 20, 40 24 Q44 28, 44 32 Q44 36, 40 36 Q38 36, 36 34 Q34 38, 30 38 Q26 38, 24 34 Q22 36, 20 36 Q16 36, 16 32 Q16 28, 20 24 Z" 
      fill="url(#brain-grad)" 
      filter="url(#brain-shadow)" 
      stroke="#e84393" 
      strokeWidth="1.5"
    />
  </svg>
);

const Icon3D_Check = () => (
  <svg viewBox="0 0 64 64" className="feature-3d-icon" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="check-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#11998E" />
        <stop offset="100%" stopColor="#38EF7D" />
      </linearGradient>
      <filter id="check-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#11998E" floodOpacity="0.5" />
      </filter>
    </defs>
    <circle cx="32" cy="32" r="24" fill="url(#check-grad)" filter="url(#check-shadow)" stroke="#0D7A6F" strokeWidth="2" />
    <path 
      d="M20 32 L28 40 L44 24" 
      fill="none" 
      stroke="#fff" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const carouselData = [
  {
    icon: <Icon3D_Target />,
    text: "Accuracy – Reduces errors and improves predictions."
  },
  {
    icon: <Icon3D_Rocket />,
    text: "Scalability – Trains models to adapt to larger datasets and real-world demands."
  },
  {
    icon: <Icon3D_Brain />,
    text: "Generative capabilities – Enables AI to create text, images, and audio outputs."
  },
  {
    icon: <Icon3D_Check />,
    text: "Reliability – Ensures consistent outcomes across multiple use cases."
  }
];

const WhyModelTrainingCarousel = () => {
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

export default WhyModelTrainingCarousel;
