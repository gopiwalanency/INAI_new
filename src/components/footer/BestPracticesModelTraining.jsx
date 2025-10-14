import React from 'react';
import './BestPractices.css';

// 3D Icon Components
const Icon3D_Compass = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="compass-grad-model" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#C06C84', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="compass-glow-model" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#FF6B9D', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="compass-shadow-model">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(255,107,157,0.25)" />
    <circle cx="32" cy="32" r="24" fill="url(#compass-glow-model)" opacity="0.3"/>
    <circle cx="32" cy="32" r="20" fill="url(#compass-grad-model)" stroke="#8B4C5C" strokeWidth="2" filter="url(#compass-shadow-model)"/>
    <circle cx="32" cy="32" r="16" fill="rgba(255,255,255,0.15)"/>
    <path d="M32 16 L28 28 L32 32 L36 20 Z" fill="#FF8FA3" opacity="0.9"/>
    <path d="M32 48 L36 36 L32 32 L28 44 Z" fill="#C06C84" opacity="0.9"/>
    <circle cx="32" cy="32" r="3" fill="#FFF"/>
    <text x="32" y="14" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">N</text>
  </svg>
);

const Icon3D_Database = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="database-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#667EEA', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4C63D2', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="database-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="20" ry="3" fill="rgba(102,126,234,0.25)" />
    <ellipse cx="32" cy="20" rx="16" ry="6" fill="url(#database-grad)" stroke="#3A4DB8" strokeWidth="2" filter="url(#database-shadow)"/>
    <rect x="16" y="20" width="32" height="16" fill="url(#database-grad)" stroke="#3A4DB8" strokeWidth="2"/>
    <ellipse cx="32" cy="36" rx="16" ry="6" fill="url(#database-grad)" stroke="#3A4DB8" strokeWidth="2"/>
  </svg>
);

const Icon3D_Chart = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="chart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD93D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F6C23E', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="chart-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(255,217,61,0.25)" />
    <rect x="12" y="36" width="8" height="16" rx="2" fill="url(#chart-grad)" filter="url(#chart-shadow)" stroke="#D4A017" strokeWidth="2"/>
    <rect x="24" y="28" width="8" height="24" rx="2" fill="url(#chart-grad)" filter="url(#chart-shadow)" stroke="#D4A017" strokeWidth="2"/>
    <rect x="36" y="20" width="8" height="32" rx="2" fill="url(#chart-grad)" filter="url(#chart-shadow)" stroke="#D4A017" strokeWidth="2"/>
    <path d="M14 34 L28 26 L40 18" stroke="#FFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const Icon3D_Gear = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="gear-grad-model" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F093FB', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F5576C', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="gear-shadow-model">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(240,147,251,0.25)" />
    <circle cx="32" cy="32" r="20" fill="url(#gear-grad-model)" stroke="#E84393" strokeWidth="2" filter="url(#gear-shadow-model)"/>
    <circle cx="32" cy="32" r="12" fill="rgba(255,255,255,0.2)"/>
    <circle cx="32" cy="32" r="6" fill="#FFF"/>
    <rect x="30" y="12" width="4" height="8" rx="2" fill="url(#gear-grad-model)"/>
    <rect x="30" y="44" width="4" height="8" rx="2" fill="url(#gear-grad-model)"/>
    <rect x="12" y="30" width="8" height="4" rx="2" fill="url(#gear-grad-model)"/>
    <rect x="44" y="30" width="8" height="4" rx="2" fill="url(#gear-grad-model)"/>
  </svg>
);

const Icon3D_Lock = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="lock-grad-model" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#11998E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#38EF7D', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="lock-shadow-model">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="16" ry="3" fill="rgba(17,153,142,0.25)" />
    <rect x="18" y="28" width="28" height="22" rx="4" fill="url(#lock-grad-model)" stroke="#0D7A6F" strokeWidth="2" filter="url(#lock-shadow-model)"/>
    <rect x="20" y="30" width="24" height="18" rx="3" fill="rgba(255,255,255,0.15)"/>
    <path d="M22 28 L22 20 C22 14, 26 10, 32 10 C38 10, 42 14, 42 20 L42 28" 
          fill="none" stroke="url(#lock-grad-model)" strokeWidth="4" strokeLinecap="round" filter="url(#lock-shadow-model)"/>
    <path d="M24 28 L24 20 C24 15, 27 12, 32 12 C37 12, 40 15, 40 20 L40 28" 
          fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
    <circle cx="32" cy="38" r="3" fill="#FFF"/>
    <rect x="31" y="38" width="2" height="6" rx="1" fill="#FFF"/>
  </svg>
);

const bestPracticesData = [
  {
    title: "Define clear project objectives before training",
    desc: "Align model goals with business outcomes.",
    icon: <Icon3D_Compass />
  },
  {
    title: "Use diverse and unbiased datasets",
    desc: "Ensure fairness and accuracy across all use cases.",
    icon: <Icon3D_Database />
  },
  {
    title: "Monitor training with real-time evaluation metrics",
    desc: "Track performance and adjust parameters dynamically.",
    icon: <Icon3D_Chart />
  },
  {
    title: "Regularly fine-tune models for continuous improvement",
    desc: "Adapt to new data and evolving requirements.",
    icon: <Icon3D_Gear />
  },
  {
    title: "Ensure ethical and transparent model development",
    desc: "Follow best practices for responsible AI.",
    icon: <Icon3D_Lock />
  }
];

const BestPracticesModelTraining = () => {
  return (
    <div className="best-practices-container">
      <div className="best-practices-header">
        <h2 className="best-practices-title">Best Practices<br /> for Training AI Models</h2>
      </div>
      <div className="best-practices-grid">
        {bestPracticesData.map((practice, index) => (
          <div key={index} className="practice-card-modern">
            <div className="card-icon-3d">{practice.icon}</div>
            <div className="card-accent-line"></div>
            <div className="card-content">
              <h3 className="card-title">{practice.title}</h3>
              <p className="card-description">{practice.desc}</p>
            </div>
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPracticesModelTraining;
