import React, { useState, useEffect } from 'react';
import FAQ from '../components/faqpage/FAQ.jsx';
import './Services.css';
import './Data_Collection.css';
import '../components/CTA3.css';
import webscraping from "../assets/3D/webscraping.png";
import dataSourcesSecurity from "../assets/data-sources-security.webp";
import aiMlCollecting from "../assets/data-collection-dashboard.webp";
import dataPreparation from "../assets/data-preparation-analytics.webp";
import FAQ_Service from '../components/faqpage/FAQ_Service.jsx';
import CTA_WEB from '../components/HomePage/CTA_WEB.jsx';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO.jsx';
import BestPractices from '../components/footer/BestPractices.jsx';

// Data arrays for stepper (keep as before)
const stepper = [
  ' Identifying Data Sources',
  'Collecting Data for AI & ML Models',
  ' Data Preparation for AI & ML',
  // 'Extract & clean turn messy HTML into structured tables or CSV files',
  // 'Use in AI load data into ML models, test, improve and analyze',
];
const BoostYourCareer = [
  {
    title: "Define Clear Objectives",
    desc: "Define clear objectives – Align datasets with the AI model's purpose.",
    accentColor: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Collect Relevant Data",
    desc: "Collect relevant and diverse data – Ensure data improves robustness and accuracy.",
    accentColor: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Ensure Data Quality",
    desc: "Ensure data quality – High-quality data directly impacts model performance.",
    accentColor: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Maintain Ethical Standards",
    desc: "Maintain ethical standards – Follow privacy laws, copyright rules, and anonymization best practices.",
    accentColor: "#43e97b",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  },
  {
    title: "Document Data Sources",
    desc: "Document data sources and methods – Guarantees transparency, reproducibility, and trustworthiness.",
    accentColor: "#fa709a",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  }
];

const standoutFeatures = [
  {
    icon: "lightning",
    text: "Reduces model errors and biases"
  },
  {
    icon: "shield",
    text: "Enhances algorithm performance."
  },
  {
    icon: "bulb",
    text: "Builds a solid base for AI systems"
  }
];

const WebScraping = () => {
  const [topRowItems, setTopRowItems] = useState([]);
  const [bottomRowItems, setBottomRowItems] = useState([]);
  const [hoveredStep, setHoveredStep] = useState(null);

  // 3D icons for standout features
  const render3DIcon = (iconType) => {
    if (iconType === 'lightning') {
      return (
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
          <path d="M32 8 L20 32 L28 32 L24 56 L44 28 L36 28 L40 8 Z" 
                fill="url(#lightning-grad)" 
                filter="url(#lightning-shadow)" 
                stroke="#FF8C00" 
                strokeWidth="1.5" />
        </svg>
      );
    }
    if (iconType === 'shield') {
      return (
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
          <path d="M32 8 C32 8, 16 12, 16 20 C16 36, 20 48, 32 56 C44 48, 48 36, 48 20 C48 12, 32 8, 32 8 Z" 
                fill="url(#shield-grad)" 
                filter="url(#shield-shadow)" 
                stroke="#5a67d8" 
                strokeWidth="1.5" />
          <path d="M26 30 L30 34 L38 24" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" />
        </svg>
      );
    }
    if (iconType === 'bulb') {
      return (
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
          <ellipse cx="32" cy="22" rx="12" ry="16" 
                   fill="url(#bulb-grad)" 
                   filter="url(#bulb-shadow)" 
                   stroke="#e84393" 
                   strokeWidth="1.5" />
          <ellipse cx="32" cy="18" rx="6" ry="8" fill="url(#bulb-glow)" />
          <rect x="28" y="38" width="8" height="4" rx="1" fill="#e84393" />
          <rect x="26" y="42" width="12" height="6" rx="2" fill="#c0392b" />
          <line x1="32" y1="48" x2="32" y2="52" stroke="#e84393" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
  };

  // 3D icons for the three top items
  const renderDataIcon = (i) => {
    // 0: Structured & Unstructured (database), 1: Quality & Diversity (overlap), 2: Preparation (checklist)
    if (i % 3 === 0) {
      // Database cylinder
      return (
        <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
          <defs>
            <radialGradient id={`ciGlow-db-${i}`} cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#EEE6FF"/>
              <stop offset="60%" stopColor="#E6DDFF"/>
              <stop offset="100%" stopColor="#F3EDFF"/>
            </radialGradient>
            <linearGradient id={`ciCore-db-${i}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#BFA2FF"/>
              <stop offset="100%" stopColor="#FFB0E1"/>
            </linearGradient>
          </defs>
          <rect x="6" y="10" width="52" height="40" rx="12" fill={`url(#ciGlow-db-${i})`} />
          <ellipse cx="32" cy="18" rx="18" ry="6" fill={`url(#ciCore-db-${i})`} />
          <path d="M14 18v12c0 4 8 7 18 7s18-3 18-7V18" fill="none" stroke="#8E79FF" strokeWidth="2"/>
          <path d="M14 30v12c0 4 8 7 18 7s18-3 18-7V30" fill="none" stroke="#8E79FF" strokeWidth="2"/>
        </svg>
      );
    }
    if (i % 3 === 1) {
      // Overlapping circles for diversity
      return (
        <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
          <defs>
            <radialGradient id={`ciGlow-qd-${i}`} cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#EEE6FF"/>
              <stop offset="60%" stopColor="#E6DDFF"/>
              <stop offset="100%" stopColor="#F3EDFF"/>
            </radialGradient>
            <linearGradient id={`ciCore-qd-${i}`} x1="0" x2="1">
              <stop offset="0%" stopColor="#C9B6FF"/>
              <stop offset="100%" stopColor="#A786FF"/>
            </linearGradient>
          </defs>
          <circle cx="26" cy="32" r="12" fill={`url(#ciCore-qd-${i})`} />
          <circle cx="38" cy="32" r="12" fill={`url(#ciGlow-qd-${i})`} stroke="#8E79FF" strokeWidth="2" />
          <path d="M20 32h24" stroke="#8E79FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    }
    // Checklist/toggle for preparation
    return (
      <svg viewBox="0 0 64 64" className="ci-svg" aria-hidden>
        <defs>
          <radialGradient id={`ciGlow-prep-${i}`} cx="30%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#EEE6FF"/>
            <stop offset="60%" stopColor="#E6DDFF"/>
            <stop offset="100%" stopColor="#F3EDFF"/>
          </radialGradient>
          <linearGradient id={`ciCore-prep-${i}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#FFB0E1"/>
            <stop offset="100%" stopColor="#BFA2FF"/>
          </linearGradient>
        </defs>
        <rect x="10" y="12" width="44" height="40" rx="12" fill={`url(#ciGlow-prep-${i})`} />
        <path d="M18 24h20M18 32h26M18 40h22" stroke="#8E79FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 30l4 4 6-8" fill="none" stroke={`url(#ciCore-prep-${i})`} strokeWidth="3" strokeLinecap="round"/>
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
        <div className="hero-section-enhanced">
          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              {/* <div className="hero-badge">
                <span className="hero-badge-icon">✨</span>
                <span className="hero-badge-text">AI-Powered Data Solutions</span>
              </div> */}
              <h1 className="hero-main-title">
                <span className="hero-title-line1">Reliable Data</span>
                <span className="hero-title-line2">Collection for AI/ML</span>
              </h1>
              <p className="hero-description">
              High-quality data is the foundation of every AI and machine learning product. Reliable
               data ensures AI models perform accurately, make informed decisions, and remain
               unbiased. Our structured approach to data collection for AI & ML guarantees that
               every product is built on a foundation of accuracy, diversity, and ethical compliance.
              </p>
              {/* <div className="hero-stats">
                <div className="hero-stat-item">
                  <div className="hero-stat-number">99.9%</div>
                  <div className="hero-stat-label">Data Accuracy</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">500K+</div>
                  <div className="hero-stat-label">Data Points</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-number">24/7</div>
                  <div className="hero-stat-label">Collection</div>
                </div>
              </div> */}
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 hero-image-container">
              <div className="hero-image-wrapper">
                <div className="hero-image-glow"></div>
                <img
                  src={webscraping}
                  alt="Web Scraping for AI/ML Data Collection"
                  className="w-full h-auto max-h-[900px] md:max-h-[1000px] object-contain rounded-2xl shadow-md web_img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What is Data Collection Section */}
        <div className="sec_com data-collection-section">
          <div className="data-collection-container">
            <div className="mb-6">
              <h2 className="data-collection-title">
                <span className="title-highlight">What is Data Collection?</span>
              </h2>
            </div>
            <p className="scrap_text leading-relaxed mb-4">
              Data Collection for AI & ML is the process of gathering structured and unstructured information<br />from multiple sources to train AI and machine learning models.
            </p>
            <p className="scrap_text leading-relaxed mb-4 font-semibold text-left">Key elements include:</p>
            <ul className="dc-points mb-4">
              <li>
                <span className="dc-emoji" aria-hidden></span>
                <strong>Structured and unstructured data</strong> – databases, text, images, video, and audio.
              </li>
              <li>
                <span className="dc-emoji" aria-hidden></span>
                <strong>Quality and diversity</strong> – ensuring datasets are representative and unbiased.
              </li>
              <li>
                <span className="dc-emoji" aria-hidden></span>
                <strong>Preparation for model training</strong> – cleaning, labeling, and organizing data for downstream AI processes.
              </li>
            </ul>
            <p className="scrap_text">
              Proper machine learning data collection reduces errors, enhances performance, and<br />allows AI models to function reliably in real-world scenarios.
            </p>
          </div>
        </div>
        {/* <p className="scrap_text">
              Proper machine learning data collection reduces errors, enhances performance, and<br />allows AI models to function reliably in real-world scenarios.
            </p> */}

        {/* Step-by-Step Process with Sticky Scroll */}
        <div className="sticky-scroll-section">
          <div className="sticky-scroll-header">
            <h2 className="gradient-heading">Our Data Collection Process</h2>
            <p>At INAI Worlds, we follow a systematic, step-by-step approach for collecting and preparing datasets for AI & ML products.</p>
          </div>
          <div className="sticky-cards-container">
            {stepper.map((step, i) => {
              // Define images for each step
              const stepImages = [
                dataSourcesSecurity, // Step 1: Identifying Data Sources
                aiMlCollecting, // Step 2: Collecting Data for AI & ML
                dataPreparation // Step 3: Data Preparation
              ];
              
              return (
                <div
                  className="sticky-card"
                  key={i}
                  style={{ '--card-index': i }}
                >
                  <div className="sticky-card-grid">
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
                      {i === 1 && (
                        <div className="sticky-card-details">
                          <p>After identifying sources, we collect raw data efficiently while maintaining high standards:</p>
                          <ul>
                            <li>Quality assurance</li>
                            <li>Diversity and representation</li>
                            <li>Ethical compliance</li>
                          </ul>
                          <p>This step ensures datasets are trustworthy, actionable, and suitable for model training.</p>
                        </div>
                      )}
                      {i === 2 && (
                        <div className="sticky-card-details">
                          <p>Collected data is then processed for AI model training:</p>
                          <ul>
                            <li>Cleaning</li>
                            <li>Structuring</li>
                            <li>Labeling</li>
                          </ul>
                          <p>Proper data preparation for AI & ML ensures faster model training, higher accuracy, and better predictions for generative AI, predictive analytics, and intelligent systems.</p><br /> <br /> <br />
                        </div>
                      )}
                    </div>
                    <div className="sticky-card-image">
                      <img
                        src={stepImages[i] || webscraping}
                        alt={`Step ${i + 1}: ${step}`}
                        className="sticky-img"
                        onError={(e) => { e.currentTarget.src = webscraping; }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            <p>Once the data is collected, the next crucial step is Data Structuring for AI & ML, where raw information is organized into machine-readable formats to ensure seamless model training.</p>
          </div>
        </div>
        {/* Intern Cards Section */}

        <div className="scrolling-section">
          <h2 className="gradient-heading">Why Effective Data Collection is Critical</h2>
          <div className="carousel-container">
            <div className="carousel-track">
              {[...standoutFeatures, ...standoutFeatures, ...standoutFeatures].map((f, i) => (
                <div className="carousel-card" key={i}>
                  <div className="carousel-card-icon">{render3DIcon(f.icon)}</div>
                  <strong className="carousel-card-text">{f.text}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BestPractices />

      </div>
      {/* <CTA_WEB /> */}

      <div className="faq-full-width">
        <FAQ_Service />
      </div>
    </>
  );
};

export default WebScraping;
