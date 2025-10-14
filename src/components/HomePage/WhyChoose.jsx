import React from 'react';
import './whyChoose.css';
import { FaLightbulb, FaBrain, FaDatabase, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const reasons = [
  {
    title: 'Innovative AI Solutions',
    desc: 'From machine learning to deep learning, we design future-ready products.',
    icon: <FaLightbulb style={{ color: '#A78BFA', fontSize: '2.5rem' }} />
  },
  {
    title: 'Generative AI Expertise',
    desc: 'Harnessing AI to create smarter, adaptive platforms.',
    icon: <FaBrain style={{ color: '#A78BFA', fontSize: '2.5rem' }} />
  },
  {
    title: 'Data-Driven Development',
    desc: 'Every solution is built on structured, high-quality data.',
    icon: <FaDatabase style={{ color: '#A78BFA', fontSize: '2.5rem' }} />
  },
  {
    title: 'Global Vision',
    desc: 'Designed for users worldwide, not just one market.',
    icon: <FaGlobe style={{ color: '#A78BFA', fontSize: '2.5rem' }} />
  },
  {
    title: 'Trust & Security',
    desc: 'Reliable, ethical, and transparent AI development.',
    icon: <FaShieldAlt style={{ color: '#A78BFA', fontSize: '2.5rem' }} />
  }
];

const WhyChoose = () => {
  const trackRef = React.useRef(null);
  const slideRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Determine current slide by scroll position
  const syncIndex = React.useCallback(() => {
    const track = trackRef.current;
    const slide = slideRef.current;
    if (!track || !slide) return;
    const slideWidth = slide.getBoundingClientRect().width + 16; // include gap approx
    const i = Math.round(track.scrollLeft / slideWidth);
    if (i !== index) setIndex(Math.max(0, Math.min(reasons.length - 1, i)));
  }, [index]);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      // throttle via rAF
      if (onScroll._rAF) return;
      onScroll._rAF = requestAnimationFrame(() => {
        onScroll._rAF = null;
        syncIndex();
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [syncIndex]);

  const scrollTo = (i) => {
    const track = trackRef.current;
    const slide = slideRef.current;
    if (!track || !slide) return;
    const slideWidth = slide.getBoundingClientRect().width + 16; // include gap approx
    track.scrollTo({ left: i * slideWidth, behavior: 'smooth' });
    setIndex(i);
  };

  const prev = () => scrollTo(Math.max(0, index - 1));
  const next = () => scrollTo(Math.min(reasons.length - 1, index + 1));

  const onCardMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--mx', `${x}%`);
    target.style.setProperty('--my', `${y}%`);
    // 3D tilt: map cursor to small rotations
    const cx = (x / 100) - 0.5; // -0.5 .. 0.5
    const cy = (y / 100) - 0.5;
    const maxTilt = 6; // degrees
    const ry = (-cx * maxTilt).toFixed(2);
    const rx = (cy * maxTilt).toFixed(2);
    target.style.setProperty('--rx', `${rx}deg`);
    target.style.setProperty('--ry', `${ry}deg`);
  };

  const onCardMouseLeave = (e) => {
    const target = e.currentTarget;
    target.style.setProperty('--rx', `0deg`);
    target.style.setProperty('--ry', `0deg`);
    target.style.setProperty('--mx', `50%`);
    target.style.setProperty('--my', `40%`);
  };

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-board" role="region" aria-label="Why Choose INAI Worlds">
          <div className="why-board-title">Why Choose <span className="highlight-text1">INAI Worlds?</span></div>
       
          <div 
            className="why-marquee"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`why-marquee-track ${isPaused ? 'paused' : ''}`}
              style={{ ['--why-marquee-state']: isPaused ? 'paused' : 'running' }}
            >
              {[...reasons, ...reasons].map((r, i) => (
                <article
                  key={i}
                  className={`why-card`}
                  onMouseMove={onCardMouseMove}
                  onMouseLeave={onCardMouseLeave}
                >
                  <div className="why-card-glow" aria-hidden="true" />
                  <div className="why-card-icon" aria-hidden="true">
                    {r.icon}
                  </div>
                  <header className="why-card-head">
                    <div className="why-card-badge" aria-hidden="true">{(i % reasons.length) + 1}</div>
                    <h3 className="why-card-title">{r.title}</h3>
                  </header>
                  <p className="why-card-desc">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
