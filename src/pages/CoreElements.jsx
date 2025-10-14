import React from 'react';
import '../components/corefeaturespage/Core.css';
import icon1 from '../assets/High-Quality Data.png'
import icon2 from '../assets/workflow.png'
import icon3 from '../assets/Ethical Web Scraping 2.png'


const topics = [
  {
    img: icon1,
    title: "High-Quality Data",
    content: (
      <>
        Like the heartbeat of a living system, good data keeps AI alive and growing. At INAI Worlds:
      </>
    ),
  },
  {
    img: icon2,
    title: "Structured AI Workflows",
    content: (
      <>
        Raw data is messy. We teach interns and build models using structured, labeled datasets:
      </>
    ),
  },
  {
    img: icon3,
    title: "Ethical Web Scraping",
    content: (
      <>
        Not all useful data is downloadable. That’s why we train AI systems using ethically scraped public data:
      </>
    ),
  },
];

const ANIMATION_TIME = 9;
const ITEM_COUNT = topics.length;

const CoreElementsCarousel = () => {
  return (
    <div className="coreelements-section-bg">
      <div className="coreelements-container">
        <div className="coreelements-heading-box">
          <div className="coreelements-label">
            <span role="img" aria-label="sparkles">✨</span> CORE ELEMENTS
          </div>
          <h2 className="coreelements-heading">
            Core Elements Behind Every <br /><span className="highlight-text">AI Solution We Build</span>
          </h2>
        </div>
        <div className="coreelements-cards-row">
          {topics.map((topic, i) => (
            <div className="coreelements-card-box" key={i}>
              <div className="coreelements-carousel-item horizontal">
                <div className="coreelements-carousel-item-head horizontal">
                  <div className="coreelements-icon-bg">
                    <img src={topic.img} alt={topic.title} className="coreelements-icon-img" />
                  </div>
                  <div className="coreelements-step-indicator">
                    <span className="coreelements-step-line"></span>
                    <span className="coreelements-step-circle">{i + 1}</span>
                    <span className="coreelements-step-line"></span>
                  </div>
                </div>
                <div className="coreelements-carousel-item-body horizontal">
                  <div className="coreelements-carousel-title">{topic.title}</div>
                  <div className="coreelements-carousel-content">{topic.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreElementsCarousel; 