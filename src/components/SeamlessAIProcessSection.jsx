import React from 'react';
import processImg from '../assets/grid-image-2.jpg';
import './SeamlessAIProcessSection.css';

const steps = [
  {
    number: 1,
    title: 'Ethical Web Scraping',
    desc: 'Collect clean, verified, public data',
  },
  {
    number: 2,
    title: 'Data Structuring',
    desc: 'Format, clean, and align datasets for training',
  },
  {
    number: 3,
    title: 'Model Training',
    desc: 'Use TensorFlow, Hugging Face & others to build scalable AI',
  },
];

const SeamlessAIProcessSection = () => (
  <section className="ai-process-section">
 <div className="ai-process-hero">
      <h2 className="ai-process-heading-hero">Our Seamless AI Development Process</h2>
      <div className="ai-process-sub-hero">As a top AI company, we follow a structured model-building journey:</div>
    </div>
    <div className="ai-process-stack-container">
      <div className="ai-process-img-col">
        <img src={processImg} alt="AI Process" className="ai-process-img" />
      </div>
      <div className="ai-process-steps-col center">
        <div className="ai-process-steps">
          {steps.map((step) => (
            <div className="ai-process-step" key={step.number}>
              <div className="ai-process-step-number">{step.number}</div>
              <div className="ai-process-step-content">
                <div className="ai-process-step-title">{step.title}</div>
                <div className="ai-process-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SeamlessAIProcessSection; 