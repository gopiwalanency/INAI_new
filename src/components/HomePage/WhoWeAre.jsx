import React from 'react';
import './WhoWeAre.css';
import { FaCube, FaDatabase, FaGlobe, FaChartLine, FaShieldAlt } from 'react-icons/fa';


const WhoWeAre = ({
  tag =  '✨WHY INAI WORLDS',
  heading = (
    <>
      We are Generating <span className="highlight-text2"> AI for Shaping the Future</span>
    </>
  ),
  description = (
    <>
      INAI Worlds is a Product-Based AI Company dedicated to building next-generation AI products. <br />
      We focus on creating intelligent platforms powered by machine learning, deep learning, and generative AI solutions that solve real-world problems.
    </>
  ),
  items = [
    {
      title: 'Building Proprietary AI Products',
      desc: 'We don’t outsource ideas—we design and develop our own AI platforms from the ground up.',
    },
    {
      title: 'Transforming Data into Intelligence',
      desc: 'From data collection to structuring, every product is powered by organized, meaningful datasets.',
    },
    {
      title: 'AI Across Industries',
      desc: 'Our solutions address communication, marketing, productivity, and content creation—helping businesses and individuals alike.',
    },
    {
      title: 'Scalable, Global Platforms',
      desc: 'Products built to scale seamlessly for global users, not restricted to one region or sector.',
    },
    {
      title: 'Responsible AI Development',
      desc: 'Every product follows ethical, transparent, and user-focused practices.',
    },
  ],
}) => {
  const [index, setIndex] = React.useState(0);
  const [flash, setFlash] = React.useState(false);

  const triggerFlash = () => {
    setFlash(true);
    window.setTimeout(() => setFlash(false), 280);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length);
    triggerFlash();
  };
  const next = () => {
    setIndex((i) => (i + 1) % items.length);
    triggerFlash();
  };

  // Icons with vibrant colors matching each content item
  const iconMap = [
    // 1. Building Proprietary AI Products - Cube (Product Building)
    <div style={{ 
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <FaCube style={{ fontSize: '3.2rem' }} />
    </div>,
    // 2. Transforming Data into Intelligence - Database
    <div style={{ 
      background: 'linear-gradient(135deg, #00D9FF 0%, #0099CC 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <FaDatabase style={{ fontSize: '3.2rem' }} />
    </div>,
    // 3. AI Across Industries - Network/Connections
    <div style={{ 
      background: 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <FaGlobe style={{ fontSize: '3.2rem' }} />
    </div>,
    // 4. Scalable Global Platforms - Trending Up (Growth)
    <div style={{ 
      background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <FaChartLine style={{ fontSize: '3.2rem' }} />
    </div>,
    // 5. Responsible AI Development - Shield with Check
    <div style={{ 
      background: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <FaShieldAlt style={{ fontSize: '3.2rem' }} />
    </div>,
  ];

  const active = items[index] || {};

  // Autoplay: change slide every 2 seconds
  React.useEffect(() => {
    if (!items?.length) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 2000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="who-section">
      <div className="who-container">
        <div className="who-hero-tag">{tag}</div>
        {/* <h2 className="who-title">
          🔹 Who We Are
        </h2> */}
        <h2 className="main-heading">{heading}</h2>
        <p className='features-description'>
          {description}
        </p>

        {/* Infinite Sliding Layout */}
        <div className="who-slider-container">
          <div className="who-slider-track">
            {/* Duplicate items for infinite loop effect */}
            {[...items, ...items, ...items].map((item, i) => {
              const actualIndex = i % items.length;
              return (
                <div
                  key={i}
                  className={`who-modern-card ${actualIndex === index ? 'active' : ''}`}
                  onClick={() => setIndex(actualIndex)}
                >
                  <div className="who-modern-card-inner">
                    <div className="who-modern-icon-wrapper">
                      <div className="who-modern-icon">
                        {iconMap[actualIndex % iconMap.length]}
                      </div>
                      <div className="who-modern-glow"></div>
                    </div>
                    <div className="who-modern-content">
                      <h3 className="who-modern-title">{item.title}</h3>
                      <p className="who-modern-desc">{item.desc}</p>
                    </div>
                    <div className="who-modern-number">{String(actualIndex + 1).padStart(2, '0')}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="who-progress-bar">
          <div 
            className="who-progress-fill" 
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;



