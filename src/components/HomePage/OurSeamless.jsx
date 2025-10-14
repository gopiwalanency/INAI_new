import React from 'react';
import '../HomePage/ourSeamless.css';
import icon1 from '../../assets/Ethical_Web.png'
import icon3 from '../../assets/Model Training.png'
import icon2 from '../../assets/Data Structuring+.png'
import { useNavigate } from 'react-router-dom';


const topics = [
    {
        img: icon1,
        title: "Data Collection",
        content: <>Collect clean, verified, public data</>,
        link: "/services/data-collection"
    },
    {
        img: icon2,
        title: "Data Structuring",
        content: <>Format, clean, and align datasets for training</>,
        link: "/services/data-structuring"
    },
    {
        img: icon3,
        title: "Model Training",
        content: <>Use TensorFlow, Hugging Face & others to build scalable</>,
        link: "/services/model-training"
    },
];

const ANIMATION_TIME = 9;
const ITEM_COUNT = topics.length;


const OurSeamless = () => {
    const navigate = useNavigate(); // hook from react-router-dom

    return (
        <div className="ourSeamless-section-bg">
            <div className="ourSeamless-container">
                <div className="ourSeamless-heading-box">
                    <div className="ourSeamless-label">
                        <span role="img" aria-label="sparkles">✨</span>Our Seamless Process
                    </div>
                    <h2 className="ourSeamless-heading">
                        Our Seamless <br /><span className="highlight-text1"> AI Development Process</span>
                    </h2>
                </div>
                <p className="ourSeamless-subtitle">
                    As a top AI company, we follow a structured model-building journey
                </p>
                <div className="ourSeamless-cards-row">
                    {topics.map((topic, i) => (
                        <div className="ourSeamless-card-box" key={i}>
                            <div className="ourSeamless-carousel-item horizontal">
                                <div className="ourSeamless-carousel-item-head horizontal">
                                    <div className="ourSeamless-icon-bg">
                                        <img src={topic.img} alt={topic.title} className="ourSeamless-icon-img" />
                                    </div>
                                    <div className="ourSeamless-step-indicator">
                                        <span className="ourSeamless-step-line"></span>
                                        <span className="ourSeamless-step-circle">{i + 1}</span>
                                        <span className="ourSeamless-step-line"></span>
                                    </div>
                                </div>
                                <div className="ourSeamless-carousel-item-body horizontal">
                                    <div className="ourSeamless-carousel-title">{topic.title}</div>
                                    <div className="ourSeamless-carousel-content">{topic.content}</div>
                                    <button 
                                        className="ourSeamless-button"
                                        onClick={() => navigate(topic.link)}
                                    >
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <p className="ourSeamless-bottom-subtitle">
                    Our interns are trained using the same structured pipeline.
                </p> */}
            </div>
        </div>
    );
};

export default OurSeamless; 