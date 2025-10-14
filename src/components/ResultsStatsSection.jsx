import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './ResultsStatsSection.css';

const stats = [
  { value: 100, suffix: '+', label: 'Developers' },
  { value: 5500, suffix: '+', label: 'Hours of support' },
  { value: 3, suffix: '', label: 'Our projects' },
  { value: 10, suffix: '+', label: 'Total projects for development' },
];

const ResultsStatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="results-stats-section" ref={ref}>
      <div className="results-stats-container">
        <div className="results-stats-label-hero">
          <span role="img" aria-label="sparkles">✨</span> WHY CHOOSE INAI WORLDS
        </div>
        <h2 className="results-stats-heading">
          Realistic Results to Choose <span className="highlight-text1">INAI Worlds</span>
        </h2>
        <div className="results-stats-sub">
        INAI Worlds – the Best AI Company, delivering innovative AI solutions with expertise,
        ethical practices, and scalable products shaping India’s future-ready AI.

        </div>
        <div className="results-stats-row">
          {stats.map((stat, i) => (
            <div className="results-stats-card" key={i}>
              <div className="results-stats-value">
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix} 
                    formattingFn={(value) => `${value}${stat.suffix}`}
                  />
                ) : (
                  '0'
                )}
              </div>
              <div className="results-stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsStatsSection;
