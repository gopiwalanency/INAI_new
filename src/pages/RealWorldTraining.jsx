import React from 'react';
import '../components/corefeaturespage/CoreFeatures.css';
import "./RealWorldTraining.css";
import { FaCheckCircle } from 'react-icons/fa';
import inaiImg from '../assets/realworldimg.png';

const cardContent = [
  'Work on real machine learning projects',
  'Mentorship by industry AI engineers',
  'Tools: Python, TensorFlow, Hugging Face, AWS',
  'Deploy models using Flask, FastAPI, Docker',
  'Earn a professional project portfolio',
  'Career support & job placement assistance',
];

const RealWorldTraining = () => {
  return (
    <section className="what-is-inai-section">
      <h2 className="main-heading">
        <br></br><span className="highlight-text">Real-World AI/ML Training</span> <br /> and Internship Provider
      </h2>
      <p className="what-is-inai-subtitle">
        Here’s what makes us stand out as a top AI/ML internship provider in Surat:
      </p>
      <div className="realworld-content">
        <img src={inaiImg} alt="INAI Illustration" className="realworldimg" />
        <div className="what-is-inai-text">
          <div className="realworld-cards-marquee-outer">
            <div className="realworld-cards-marquee">
              {cardContent.map((content, idx) => (
                <div className="realworld-card dark" key={idx}>
                  <FaCheckCircle className="realworld-card-icon" />
                  <span>{content}</span>
                </div>
              ))}
              {/* Duplicate for seamless marquee loop */}
              {cardContent.map((content, idx) => (
                <div className="realworld-card dark" key={idx + 100}>
                  <FaCheckCircle className="realworld-card-icon" />
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default RealWorldTraining; 