import React from 'react';
import './BestPractices.css';

// 3D Icon Components
const Icon3D_Compass = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="compass-grad-struct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#C06C84', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="compass-glow-struct" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#FF6B9D', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="compass-shadow-struct">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(255,107,157,0.25)" />
    <circle cx="32" cy="32" r="24" fill="url(#compass-glow-struct)" opacity="0.3"/>
    <circle cx="32" cy="32" r="20" fill="url(#compass-grad-struct)" stroke="#8B4C5C" strokeWidth="2" filter="url(#compass-shadow-struct)"/>
    <circle cx="32" cy="32" r="16" fill="rgba(255,255,255,0.15)"/>
    <path d="M32 16 L28 28 L32 32 L36 20 Z" fill="#FF8FA3" opacity="0.9"/>
    <path d="M32 48 L36 36 L32 32 L28 44 Z" fill="#C06C84" opacity="0.9"/>
    <circle cx="32" cy="32" r="3" fill="#FFF"/>
    <text x="32" y="14" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">N</text>
  </svg>
);

const Icon3D_Star = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="star-grad-struct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD93D', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F6C23E', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="star-glow-struct" cx="50%" cy="50%">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#FFD93D', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="star-shadow-struct">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(255,217,61,0.25)" />
    <circle cx="32" cy="28" r="22" fill="url(#star-glow-struct)" opacity="0.4"/>
    <path d="M32 8 L36 22 L51 24 L41 34 L44 49 L32 42 L20 49 L23 34 L13 24 L28 22 Z" 
          fill="url(#star-grad-struct)" stroke="#D4A017" strokeWidth="2" filter="url(#star-shadow-struct)"/>
    <path d="M32 12 L35 22 L45 23 L38 30 L40 40 L32 35 L24 40 L26 30 L19 23 L29 22 Z" 
          fill="rgba(255,255,255,0.3)"/>
    <circle cx="32" cy="28" r="4" fill="rgba(255,255,255,0.6)"/>
  </svg>
);

const Icon3D_Folder = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="folder-grad-struct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FA709A', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FEE140', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="folder-shadow-struct">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="20" ry="3" fill="rgba(250,112,154,0.25)" />
    <path d="M8 20 L8 48 C8 50, 10 52, 12 52 L52 52 C54 52, 56 50, 56 48 L56 24 C56 22, 54 20, 52 20 Z" 
          fill="url(#folder-grad-struct)" stroke="#C85A7A" strokeWidth="2" filter="url(#folder-shadow-struct)"/>
    <path d="M8 20 L8 16 C8 14, 10 12, 12 12 L24 12 L28 20 Z" 
          fill="url(#folder-grad-struct)" stroke="#C85A7A" strokeWidth="2" filter="url(#folder-shadow-struct)"/>
    <rect x="12" y="24" width="40" height="24" rx="2" fill="rgba(255,255,255,0.15)"/>
    <line x1="20" y1="32" x2="44" y2="32" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <line x1="20" y1="38" x2="44" y2="38" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <line x1="20" y1="44" x2="36" y2="44" stroke="#FFF" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const Icon3D_Gear = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="gear-grad-struct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#667EEA', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4C63D2', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="gear-shadow-struct">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="18" ry="3" fill="rgba(102,126,234,0.25)" />
    <circle cx="32" cy="32" r="20" fill="url(#gear-grad-struct)" stroke="#3A4DB8" strokeWidth="2" filter="url(#gear-shadow-struct)"/>
    <circle cx="32" cy="32" r="12" fill="rgba(255,255,255,0.2)"/>
    <circle cx="32" cy="32" r="6" fill="#FFF"/>
    <rect x="30" y="12" width="4" height="8" rx="2" fill="url(#gear-grad-struct)"/>
    <rect x="30" y="44" width="4" height="8" rx="2" fill="url(#gear-grad-struct)"/>
    <rect x="12" y="30" width="8" height="4" rx="2" fill="url(#gear-grad-struct)"/>
    <rect x="44" y="30" width="8" height="4" rx="2" fill="url(#gear-grad-struct)"/>
  </svg>
);

const Icon3D_Lock = () => (
  <svg viewBox="0 0 64 64" className="practice-icon-3d" style={{ width: '50px', height: '50px' }}>
    <defs>
      <linearGradient id="lock-grad-struct" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#11998E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#38EF7D', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="lock-shadow-struct">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.3"/></feComponentTransfer>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="16" ry="3" fill="rgba(17,153,142,0.25)" />
    <rect x="18" y="28" width="28" height="22" rx="4" fill="url(#lock-grad-struct)" stroke="#0D7A6F" strokeWidth="2" filter="url(#lock-shadow-struct)"/>
    <rect x="20" y="30" width="24" height="18" rx="3" fill="rgba(255,255,255,0.15)"/>
    <path d="M22 28 L22 20 C22 14, 26 10, 32 10 C38 10, 42 14, 42 20 L42 28" 
          fill="none" stroke="url(#lock-grad-struct)" strokeWidth="4" strokeLinecap="round" filter="url(#lock-shadow-struct)"/>
    <path d="M24 28 L24 20 C24 15, 27 12, 32 12 C37 12, 40 15, 40 20 L40 28" 
          fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
    <circle cx="32" cy="38" r="3" fill="#FFF"/>
    <rect x="31" y="38" width="2" height="6" rx="1" fill="#FFF"/>
  </svg>
);

const bestPracticesData = [
  {
    title: "Standardize formats across datasets",
    desc: "Consistency reduces training errors.",
    icon: <Icon3D_Compass />
  },
  {
    title: "Ensure data quality and completeness",
    desc: "High-quality datasets produce better model outcomes.",
    icon: <Icon3D_Star />
  },
  {
    title: "Maintain traceability",
    desc: "Document all cleaning, annotation, and structuring steps.",
    icon: <Icon3D_Folder />
  },
  {
    title: "Prepare datasets for machine learning",
    desc: "Make datasets ready for both supervised and unsupervised learning.",
    icon: <Icon3D_Gear />
  },
  {
    title: "Prioritize ethical compliance",
    desc: "Respect privacy, copyright, and legal requirements when structuring data.",
    icon: <Icon3D_Lock />
  }
];

const BestPracticesStructuring = () => {
  return (
    <div className="best-practices-container">
      <div className="best-practices-header">
        <h2 className="best-practices-title">Best Practices in Structuring <br />
                                              Data for AI Models</h2>
      </div>
      <div className="best-practices-grid">
        {bestPracticesData.map((practice, index) => (
          <div key={index} className="practice-card-modern">
            <div className="card-icon-3d">{practice.icon}</div>
            <div className="card-content">
              <div className="card-accent-line"></div>
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

export default BestPracticesStructuring;
