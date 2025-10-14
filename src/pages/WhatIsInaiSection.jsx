import React from 'react';
import './WhatIsInaiSection.css';
import inaiImg from '../assets/02.png'; // Adjust extension if needed

const WhatIsInaiSection = () => (
    <section className="what-is-inai-section">
        <h2 className="main-heading">
            <br></br><span className="highlight-text">What is INAI Worlds</span>
        </h2>
        <p className="what-is-inai-subtitle">
            In now days we are working on AI which is connected to Gen-AI but INAI is a tech idea which is work on GI (Generational Intelligence) model..
        </p>
        <div className="what-is-inai-content">
            <img src={inaiImg} alt="INAI Illustration" className="what-is-inai-img" />
            <div className="what-is-inai-text">
                <h2 className="main-heading" style={{textAlign:'start'}}>
                    Influence Artificial Intelligence
                </h2>
                <p>
                    <i>In AI field Everything is work in data. Modification and train your model is main component of AI. So INAI is a GI (Generative Intelligence) model which is work on new tech, directly connected to CGI making with python language. We use our personal library to build CGI environment.</i>
                </p>
                <ul>
                    <li>✔ Comprehend.</li>
                    <li>✔ Plan.</li>
                    <li>✔ Learn with human-like levels of intelligence.</li>
                </ul>
                <p>
                    Fundamentally, AI systems perceive environments, recognize objects, contribute to decision making, solve complex problems, learn from past experiences, and imitate patterns.
                </p>
            </div>
        </div>
    </section>
);

export default WhatIsInaiSection;
