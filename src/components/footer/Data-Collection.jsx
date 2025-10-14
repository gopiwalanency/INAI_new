import React, { useState, useEffect } from 'react';
import FAQ from '../faqpage/FAQ.jsx';
import './Data-Collection.css';
import '../CTA3.css';
import webscraping from "../../assets/3D/webscraping.png";
import dataCollectionDashboard from "../../assets/data-collection-dashboard.webp";
import FAQ_Service from '../faqpage/FAQ_Service.jsx';
import CTA_WEB from '../HomePage/CTA_WEB.jsx';
import { Helmet } from 'react-helmet-async';
import SEO from '../SEO.jsx';
import BestPractices from './BestPractices.jsx';

// Data arrays for stepper (keep as before)
const stepper = [
  ' Identifying Data Sources',
  'Collecting Data for AI & ML Models',
  // ' Data Preparation for AI & ML',
  // 'Extract & clean turn messy HTML into structured tables or CSV files',
  // 'Use in AI load data into ML models, test, improve and analyze',
];
// const BoostYourCareer = [
//   "Define clear objectives – Align datasets with the AI model's purpose.",
//   " Collect relevant and diverse data – Ensure data improves robustness and accuracy.",
//   "Ensure data quality – High-quality data directly impacts model performance.",
//   " Maintain ethical standards – Follow privacy laws, copyright rules, and anonymization best practices.",
//   "Document data sources and methods – Guarantees transparency, reproducibility, and trustworthiness."
// ];

// 3D Icon Components for standout features
const Icon3D_ErrorReduction = () => (
  <svg viewBox="0 0 100 100" className="feature-icon-3d" style={{ width: '60px', height: '60px' }}>
    <defs>
      {/* Vibrant Gradients */}
      <linearGradient id="sphere-error" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FF6B9D', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#FE5196', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#C2185B', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="sphere-success" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00F5A0', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#00D9F5', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0099CC', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="sphere-light-error">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.9 }} />
        <stop offset="40%" style={{ stopColor: '#FFB3D9', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#FF6B9D', stopOpacity: 0 }} />
      </radialGradient>
      <radialGradient id="sphere-light-success">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.9 }} />
        <stop offset="40%" style={{ stopColor: '#B3FFF0', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#00F5A0', stopOpacity: 0 }} />
      </radialGradient>
      <radialGradient id="glow-pink">
        <stop offset="0%" style={{ stopColor: '#FF6B9D', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#FF6B9D', stopOpacity: 0 }} />
      </radialGradient>
      <radialGradient id="glow-cyan">
        <stop offset="0%" style={{ stopColor: '#00D9F5', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#00D9F5', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="glow-filter">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="shadow-3d">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="6" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Ground shadow */}
    <ellipse cx="50" cy="88" rx="35" ry="5" fill="rgba(0,0,0,0.2)" />

    {/* Ambient glow circles */}
    <circle cx="28" cy="40" r="25" fill="url(#glow-pink)" opacity="0.4" />
    <circle cx="72" cy="40" r="25" fill="url(#glow-cyan)" opacity="0.4" />

    {/* Left Sphere (Error) - 3D with lighting */}
    <g filter="url(#shadow-3d)">
      <circle cx="28" cy="40" r="18" fill="url(#sphere-error)" />
      <circle cx="28" cy="40" r="18" fill="url(#sphere-light-error)" opacity="0.6" />
      <circle cx="22" cy="34" r="6" fill="rgba(255,255,255,0.4)" />
      {/* X mark */}
      <g filter="url(#glow-filter)">
        <path d="M22 36 L34 44 M34 36 L22 44" stroke="#FFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      </g>
      {/* Orbital ring */}
      <ellipse cx="28" cy="40" rx="24" ry="8" fill="none" stroke="url(#ring-grad)" strokeWidth="2" opacity="0.6" transform="rotate(-20 28 40)" />
    </g>

    {/* Center Arrow - Glowing 3D */}
    <g filter="url(#glow-filter)">
      <defs>
        <linearGradient id="arrow-shine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Arrow body */}
      <path d="M42 38 L58 38 L58 42 L42 42 Z" fill="url(#arrow-shine)" stroke="#FF8C00" strokeWidth="1.5" />
      {/* Arrow head */}
      <path d="M58 34 L68 40 L58 46 Z" fill="url(#arrow-shine)" stroke="#FF8C00" strokeWidth="1.5" />
      {/* Shine effect */}
      <rect x="42" y="38" width="16" height="2" fill="rgba(255,255,255,0.6)" />
      {/* Sparkles */}
      <circle cx="50" cy="32" r="1.5" fill="#FFD700" opacity="0.8" />
      <circle cx="54" cy="48" r="1" fill="#FFA500" opacity="0.8" />
    </g>

    {/* Right Sphere (Success) - 3D with lighting */}
    <g filter="url(#shadow-3d)">
      <circle cx="72" cy="40" r="18" fill="url(#sphere-success)" />
      <circle cx="72" cy="40" r="18" fill="url(#sphere-light-success)" opacity="0.6" />
      <circle cx="66" cy="34" r="6" fill="rgba(255,255,255,0.5)" />
      {/* Checkmark */}
      <g filter="url(#glow-filter)">
        <path d="M65 40 L69 44 L79 34" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9" />
      </g>
      {/* Orbital ring */}
      <ellipse cx="72" cy="40" rx="24" ry="8" fill="none" stroke="url(#ring-grad)" strokeWidth="2" opacity="0.6" transform="rotate(20 72 40)" />
    </g>

    {/* Floating particles */}
    <circle cx="15" cy="25" r="2" fill="#FFD700" opacity="0.7">
      <animate attributeName="cy" values="25;20;25" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="85" cy="30" r="1.5" fill="#00D9F5" opacity="0.7">
      <animate attributeName="cy" values="30;25;30" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="50" cy="15" r="1.8" fill="#FFA500" opacity="0.6">
      <animate attributeName="cy" values="15;10;15" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Light rays from success sphere */}
    <g opacity="0.5">
      <path d="M72 22 L74 16" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M84 32 L90 30" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M82 46 L88 50" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

const Icon3D_Shield = () => (
  <svg viewBox="0 0 64 64" className="feature-icon-3d" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#357ABD', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shield-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="4" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="52" rx="18" ry="3" fill="rgba(74,144,226,0.2)" />
    <path d="M32 8 C20 12, 12 16, 12 16 L12 32 C12 45, 32 56, 32 56 C32 56, 52 45, 52 32 L52 16 C52 16, 44 12, 32 8 Z"
      fill="url(#shield-grad)"
      stroke="#2E5F8F"
      strokeWidth="1.5"
      filter="url(#shield-shadow)" />
    <path d="M32 12 C22 15, 16 18, 16 18 L16 32 C16 42, 32 50, 32 50 C32 50, 48 42, 48 32 L48 18 C48 18, 42 15, 32 12 Z"
      fill="rgba(255,255,255,0.2)"
      stroke="none" />
    <path d="M26 30 L30 34 L40 24"
      fill="none"
      stroke="#FFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
);

const Icon3D_Bulb = () => (
  <svg viewBox="0 0 64 64" className="feature-icon-3d" style={{ width: '60px', height: '60px' }}>
    <defs>
      <linearGradient id="bulb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#FDB813', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#F7931E', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="bulb-glow" cx="50%" cy="30%">
        <stop offset="0%" style={{ stopColor: '#FFF', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: '#FDB813', stopOpacity: 0 }} />
      </radialGradient>
      <filter id="bulb-shadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="4" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <ellipse cx="32" cy="54" rx="12" ry="3" fill="rgba(253,184,19,0.2)" />
    <circle cx="32" cy="24" r="18" fill="url(#bulb-glow)" opacity="0.4" />
    <path d="M32 8 C22 8, 16 14, 16 24 C16 30, 20 35, 24 38 L24 44 L40 44 L40 38 C44 35, 48 30, 48 24 C48 14, 42 8, 32 8 Z"
      fill="url(#bulb-grad)"
      stroke="#D97706"
      strokeWidth="1.5"
      filter="url(#bulb-shadow)" />
    <ellipse cx="28" cy="20" rx="6" ry="8" fill="rgba(255,255,255,0.4)" />
    <rect x="24" y="44" width="16" height="4" rx="2" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1" />
    <rect x="26" y="48" width="12" height="6" rx="2" fill="#6B7280" stroke="#4B5563" strokeWidth="1" />
  </svg>
);

const standoutFeatures = [
  {
    icon: <Icon3D_ErrorReduction />,
    text: "Reduces model errors and biases."
  },
  {
    icon: <Icon3D_Shield />,
    text: "Enhances algorithm performance."
  },
  {
    icon: <Icon3D_Bulb />,
    text: "Provides a strong foundation for generative AI, predictive models, and intelligent systems."
  },
  // {
  //   icon: "🎓",
  //   text: "Expert guidance from AI mentors with real-world experience"
  // },
  // {
  //   icon: "🏆",
  //   text: "One of India's most trusted real-world AI/ML internship programs"
  // }
];

const Service1 = () => {
  const [topRowItems, setTopRowItems] = useState([]);
  const [bottomRowItems, setBottomRowItems] = useState([]);
  const [hoveredStep, setHoveredStep] = useState(null);

  // 3D icons for the three top items
  const renderDataIcon = (i) => {
    // 0: Structured & Unstructured (database), 1: Quality & Diversity (overlap), 2: Preparation (checklist)
    if (i % 3 === 0) {
      // Database cylinder
      return (
        <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
          <defs>
            <radialGradient id={`ciGlow-db-${i}`} cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#EEE6FF" />
              <stop offset="60%" stopColor="#E6DDFF" />
              <stop offset="100%" stopColor="#F3EDFF" />
            </radialGradient>
            <linearGradient id={`ciCore-db-${i}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#BFA2FF" />
              <stop offset="100%" stopColor="#FFB0E1" />
            </linearGradient>
          </defs>
          <rect x="6" y="10" width="52" height="40" rx="12" fill={`url(#ciGlow-db-${i})`} />
          <ellipse cx="32" cy="18" rx="18" ry="6" fill={`url(#ciCore-db-${i})`} />
          <path d="M14 18v12c0 4 8 7 18 7s18-3 18-7V18" fill="none" stroke="#8E79FF" strokeWidth="2" />
          <path d="M14 30v12c0 4 8 7 18 7s18-3 18-7V30" fill="none" stroke="#8E79FF" strokeWidth="2" />
        </svg>
      );
    }
    if (i % 3 === 1) {
      // Overlapping circles for diversity
      return (
        <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
          <defs>
            <radialGradient id={`ciGlow-qd-${i}`} cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#EEE6FF" />
              <stop offset="60%" stopColor="#E6DDFF" />
              <stop offset="100%" stopColor="#F3EDFF" />
            </radialGradient>
            <linearGradient id={`ciCore-qd-${i}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#C9B6FF" />
              <stop offset="100%" stopColor="#A786FF" />
            </linearGradient>
          </defs>
          <circle cx="26" cy="32" r="12" fill={`url(#ciCore-qd-${i})`} />
          <circle cx="38" cy="32" r="12" fill={`url(#ciGlow-qd-${i})`} stroke="#8E79FF" strokeWidth="2" />
          <path d="M20 32h24" stroke="#8E79FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    // Checklist/toggle for preparation
    return (
      <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
        <defs>
          <radialGradient id={`ciGlow-prep-${i}`} cx="30%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#EEE6FF" />
            <stop offset="60%" stopColor="#E6DDFF" />
            <stop offset="100%" stopColor="#F3EDFF" />
          </radialGradient>
          <linearGradient id={`ciCore-prep-${i}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#FFB0E1" />
            <stop offset="100%" stopColor="#BFA2FF" />
          </linearGradient>
        </defs>
        <rect x="10" y="12" width="44" height="40" rx="12" fill={`url(#ciGlow-prep-${i})`} />
        <path d="M18 24h20M18 32h26M18 40h22" stroke="#8E79FF" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 30l4 4 6-8" fill="none" stroke={`url(#ciCore-prep-${i})`} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  };

  useEffect(() => {
    const topItems = [
      { title: 'Structured and unstructured data', desc: 'databases, text, images, video, and audio' },
      { title: 'Quality and diversity', desc: 'ensuring datasets are representative and unbiased' },
      { title: 'Preparation for model training', desc: 'cleaning, labeling, and organizing data for downstream AI processes.' },
      // { title: 'Feed AI models', desc: 'with updated market data' },
      // { title: 'Ethical scraping', desc: 'in live environments' }
    ];
    const bottomItems = [
      { title: 'Beautiful Soup', desc: 'Quick, efficient HTML parsing' },
      { title: 'Selenium', desc: 'Scrape dynamic and JS-heavy sites' },
      { title: 'Scrapy', desc: 'Scalable crawling & large pipelines' },
    ];
    setTopRowItems([...topItems, ...topItems]);
    setBottomRowItems([...bottomItems, ...bottomItems]);
  }, []);
  const internCards = [
    {
      icon: "🔎",
      title: "Evaluate and identify high-value data sources online",
    },
    {
      icon: "🐍",
      title: "Write Python web scraping projects using BeautifulSoup, Selenium & Scrapy",
    },
    {
      icon: "🧹",
      title: "Perform data extraction using Python and clean messy HTML into structured formats",
    },
    {
      icon: "🤖",
      title: "Integrate scraped data into ML workflows, boosting their practical knowledge",
    },
    {
      icon: "📁",
      title: "Build a verified portfolio with complete, working AI/ML pipelines",
    }
  ];

  return (
    <>
      <SEO
        title="What Is Web Scraping? Ultimate Beginner's Guide | INAI Worlds"
        description="Discover what web scraping is, how it works, and why it's essential for data collection. Learn beginner-friendly techniques in this INAI Worlds blog."
      />

      <script type="application/ld+json">
        {JSON.stringify(

          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "INAI Worlds",
                "url": "https://inaiworlds.com/",
                "logo": "https://www.inaiworlds.com/assets/INAI-BywOMVzP.png",
                "sameAs": [
                  "https://x.com/Inai_Worlds",
                  "https://www.instagram.com/inai_worlds/",
                  "https://www.youtube.com/@INAIWorldsPVTLTD",
                  "https://www.linkedin.com/company/inai-worlds-pvt-ltd",
                  "https://in.pinterest.com/Inai_Worlds"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 70164 88265",
                  "contactType": "Customer Service",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": {
                      "@type": "WebPage",
                      "@id": "https://inaiworlds.com/"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": {
                      "@type": "WebPage",
                      "@id": "https://inaiworlds.com/services"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Web Scraping",
                    "item": {
                      "@type": "WebPage",
                      "@id": "https://inaiworlds.com/services/web-scraping"
                    }
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Web Scraping",
                "description": "INAI Worlds uses web scraping in python to build AI modules and offers hands-on AI/ML internship for real-world learning and development.",
                "provider": {
                  "@type": "Organization",
                  "name": "INAI Worlds",
                  "url": "https://inaiworlds.com/"
                },
                "serviceType": "AI Training Program",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "url": "https://inaiworlds.com/services/web-scraping"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is web scraping legal?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, when done ethically. Our internship teaches legal, safe, and responsible scraping practices aligned with industry standards."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will I work on actual projects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Every intern writes real scripts, scrapes real data, and integrates it into machine learning models."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which tools will I learn?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You'll work with industry-standard scraping libraries: BeautifulSoup, Selenium, Scrapy, the best libraries for web scraping in Python."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Ready to Build Smarter AI with Real Data?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Don't just learn about AI, experience it. Join INAI Worlds for a truly hands-on internship in AI/ML with web scraping."
                    }
                  }
                ]
              }
            ]
          }
        )}
      </script>

      <div className="service-detail-page webscraping-page">
        <div>
          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow web_scrap_title">
                <p>Reliable Data </p>
                <span>Collection for AI/ML</span>
              </h1>
              <br />
              <p className="scrap_text leading-relaxed mb-4">
                High-quality data is the foundation of every AI and machine learning product. Reliable
                data ensures AI models perform accurately, make informed decisions, and remainunbiased.
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={webscraping}
                alt="Web Scraping"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl shadow-md web_img"
              />
            </div>
          </div>
        </div>



        <div className="scrolling-section">
          <section className="dc-hero error">
            <div className="dc-left">
              <h2 className="gradient-heading">What is Data Collection ?</h2>
              <p className="dc-sub">
                It's the disciplined practice of sourcing, validating, and preparing data so machine learning models
                can learn accurately and perform reliably. Strong datasets lead to smarter products and safer decisions.
              </p>
              <ul className="dc-points">
                <li>
                  <span className="dc-emoji" aria-hidden></span>
                  Structured and unstructured: tables, text, images, audio, video
                </li>
                <li>
                  <span className="dc-emoji" aria-hidden></span>
                  Quality & diversity: representative, unbiased, trustworthy sources
                </li>
                <li>
                  <span className="dc-emoji" aria-hidden></span>
                  Preparation: cleaning, labeling, organizing for ML pipelines
                </li>
              </ul> <br />
              <p>Proper machine learning data collection reduces errors, enhances performance, and allows AI models to function reliably in real-world scenarios.</p>
            </div>
            <div className="dc-right" aria-hidden>
              <div className="dc-illustration-card">
                <img
                  src={dataCollectionDashboard}
                  alt="Data Collection for AI & ML Illustration"
                  className="dc-illustration"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = webscraping; }}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
          {/* 
          <div className="scrolling-row top-row mt-6">
            {topRowItems.map((item, index) => (
              <div className="scrolling-card" key={index}>
                <div className="card-icon3d" aria-hidden>
                  {renderDataIcon(index)}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div> */}
        </div>




        {/* <div className="scrolling-section">
          <h2 className="gradient-heading">Learn by Doing: Real Projects, Real Impact</h2>
          <p>Our real-world AI/ML internship emphasizes hands-on data collection and implementation. </p>
          <div className="standout-features-grid">
            {internCards.map((card, idx) => (
              <div className="standout-feature-card" key={idx}>
                <div className="standout-feature-icon">{card.icon}</div>
                <div className="standout-feature-title">{card.title}</div>
                <div className="standout-feature-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        </div> */}


        {/* Bottom Scrolling Row (Left to Right) */}
        {/* <div className="scrolling-section">
          <h2 className="gradient-heading">Build Powerful Scraping <br /> Scripts with Python</h2>
          <p>Whether you're a beginner or intermediate Python user, our internship helps you become proficient in Python-based web scraping. You'll gain experience with the most widely used and best libraries for web scraping in Python:</p>
          <div className="scrolling-row bottom-row">
            {bottomRowItems.map((item, index) => (
              <div className="scrolling-card" key={index}>
                <div className="card-badge">{item.title}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Step-by-Step Process with Sticky Scroll */}
        <div className="sticky-scroll-section">
          <div className="sticky-scroll-header">
            {/* <h2 className="gradient-heading">Our Data Collection Process</h2>
            <p>At INAI Worlds, we follow a systematic, step-by-step approach for collecting and preparing datasets for AI & ML products.</p> */}
            <div className="sticky-cards-container">
              {stepper.map((step, i) => (
                <div
                  className="sticky-card"
                  key={i}
                  style={{ '--card-index': i }}
                >
                  <div className="sticky-card-content">
                    <div className="sticky-card-number">{i + 1}</div>
                    <h3 className="sticky-card-title">{step}</h3>
                    {i === 0 && (
                      <div className="sticky-card-details">
                        <p>We identify reliable sources for data gathering for AI and ML, including:</p>
                        <ul>
                          <li>Public datasets</li>
                          <li>APIs and online platforms</li>
                          <li>Web scraping from trusted sources</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Intern Cards Section */}

        <div className="scrolling-section">
          <h2 className="gradient-heading">Why Effective Data Collection is Critical</h2>
          <p>High-quality data gathering for AI and ML is essential for AI project success:</p>
          <div className="standout-features-grid">
            {standoutFeatures.map((f, i) => (
              <div className="standout-feature-card" key={i}>
                <div className="standout-feature-icon">{f.icon}</div>
                <span className="standout-feature-text">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <BestPractices />

        {/* <div className="real-data-section">
          <h2>
            Why Real Data &amp; Live Projects <span>Matter</span>
          </h2>
          <div className="real-data-stats-row">
            <div className="real-data-stat-v2">
              <div className="real-data-value">70%+</div>
              <div className="real-data-desc">of successful AI projects rely on updated datasets</div>
            </div>
            <div className="real-data-stat-v2">
              <div className="real-data-value">32%</div>
              <div className="real-data-desc">growth in web scraping skills demand in India</div>
            </div>
            <div className="real-data-stat-v2">
              <div className="real-data-value">50%+</div>
              <div className="real-data-desc">of future AI models will depend on third-party and scraped data</div>
            </div>

            <div className="real-data-stat-v2">
              <div className="real-data-value">28%</div>
              <div className="real-data-desc">rise in AI/Data Science job postings across India in 2024</div>
            </div>
          </div>
        </div> */}

        {/* <div className="cta-full-bg">
        <div className="cta-full-content">
          <h2 className="cta-heading">Ready to start?</h2>
          <h3 className="cta-subheading">Transform messy data into smarter AI.</h3>
          <p className="cta-supporting">
            Join our Data Manipulation in AI/ML Internship and build real skills in data manipulation for AI model building by working on live, real-world projects.
            Enroll now and become AI-ready!

          </p>
          <div className="cta-btn-row">
            <a href="#cta" className="cta-btn">Apply Now</a>
          </div>
        </div>
      </div> */}

      </div>
      <CTA_WEB />

      <div className="faq-full-width">
        <FAQ_Service />
      </div>
    </>
  );
};

export default Service1;
