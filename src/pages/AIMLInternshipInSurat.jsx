import React, { useState } from 'react';
import './INAIWorldsBestAICompany.css';
import '../components/aboutpage/CTA2.css';
import CTA_Inda from '../components/CTA_Inda';
import '../components/Hero.css';
import FAQ_India from '../components/faqpage/FAQ_India';
import CTA_AIML_SURAT from '../components/aboutpage/CTA_AIML_SURAT.jsx';
import FAQ_AIML_SURAT from '../components/faqpage/FAQ_AIML_SURAT';
import UpcomingProjectsSection1 from '../components/projects/UpcomingProjectsSection1';
import { Helmet } from 'react-helmet-async';

const AIMLInternshipInSurat = () => {

    const whatYouGet = [
        "Work directly on deployed AI systems",
        "Collaborate with AI engineers, not just trainers",
        "Build portfolios that lead to jobs",
        "From PyTorch to Hugging Face to Streamlit",
        "Interns contribute to core product releases"
    ];

    const projects = [
        "India’s first AI virtual model built for real-time, emotion-aware conversations",
        "AI-powered platform that helps creators spot trends, generate content",
        "Smart real estate platform for listing, renting, or selling commercial office spaces",
        "Turn your scripts into video using generative AI"
    ];

    const deployment = [
        "FastAPI, Streamlit, ONNX, Docker",
        "TensorBoard, Weights & Biases",
        "Model evaluation and optimization"
    ];

    const mentorship = [
        "Weekly code reviews",
        "Project-based goals and deliverables",
        "AI design thinking sessions",
        "Team collaborations with product leads"
    ];

    const techStack = [
        "Hugging Face Transformers (BERT, GPT, T5)",
        "spaCy, NLTK",
        "scikit-learn, XGBoost"
    ];

    const careerBenefits = [
        "Students of B.Tech, BCA, MCA, BE, MSc-IT students",
        "Freshers with Python + ML knowledge",
        "Self-taught AI learners and bootcamp graduates",
        "Developers transitioning to AI/ML"
    ];

    const BoostYourCareer = [
        "Product-Focused : Work directly on deployed AI systems",
        "Real Mentorship : Collaborate with AI engineers, not just trainers",
        "Career Growth : Build portfolios that lead to jobs",
        "Tech Stack Exposure : From PyTorch to Hugging Face to Streamlit",
        "Contribution, Not Observation : Interns contribute to core product releases"
    ];

    const BoostYourCareer1 = [
        "Students of B.Tech, BCA, MCA, BE, MSc-IT students",
        "Freshers with Python + ML knowledge",
        "Self-taught AI learners and bootcamp graduates",
        "Developers transitioning to AI/ML"
    ];

    return (
        <>
            <Helmet>
                <title>Best AI/ML Internship in Surat | INAI Worlds</title>
                <meta
                    name="description"
                    content="Join the Best AI ML Internship in Surat with INAI Worlds. Gain hands-on training in AI, machine learning, and real-world projects to boost your career.”"
                />

            </Helmet>
            <div className="container">
                {/* Hero Section with Banner Image OUTSIDE the container */}
                <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
                    <div className="features-content">
                        <h2 className="main-heading">
                            <span className="highlight-text"> Best AI/ML Internship in Surat</span>
                        </h2>
                        <p className="features-description">
                            If you're a student, fresher, or tech enthusiast searching for the best AI/ML internship <br />in Surat, your  search ends here. INAI Worlds offers a unique opportunity to  work on real-world AI products,<br /> not textbook  demos. We're a product-first artificial  intelligence company building scalable AI<br /> solutions used across industries like healthcare, media, real estate, and education.

                        </p>
                        <div className="inaiwbc1-hero-buttons">
                            <a href="/portfolio"><button className="btn btn-primary-hero" style={{ marginRight: '1rem', marginTop: '1rem' }}>View Our projects</button></a>
                        </div>
                    </div>
                </div>

                <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
                    <div className="features-content">
                        <h2 className="main-heading">
                            Why AI/ML Internships Matter Now More Than Ever
                        </h2>
                        <div className="section-container">
                            <div className="analogy-container">
                                <div className="analogy-card">
                                    <div className="analogy-header">
                                        <span className="analogy-emoji" role="img" aria-label="brain">✅</span>
                                        <h3>Key AI Industry Trends:</h3>
                                    </div>
                                    <div className="analogy-content">
                                        <div className="analogy-item">
                                            <div className="analogy-text">97% of businesses use AI to boost productivity</div>
                                        </div>
                                        <div className="analogy-item">
                                            <div className="analogy-text">AI jobs value projects over certificates.</div>
                                        </div>
                                        <div className="analogy-item">
                                            <div className="analogy-text">Real-world internships are 3x more valuable than theory</div>
                                        </div>
                                    </div>
                                    <div className="analogy-footer">
                                        <p>As a best AI company in Gujarat, INAI Worlds is empowering industries and talent through scalable innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
                    <div className="features-content">
                        <h2 className="main-heading">
                            What Makes INAI Worlds the <br /> Best AI/ML Internship in Surat?
                        </h2>
                        <p className="features-description">
                            At INAI Worlds, your internship isn’t just about learning. It’s about building AI that matters.
                        </p>
                    </div>
                </div>
                <div className="scrolling-section">
                    {/* Right Column - Who Should Join */}
                    <div className="audience-column">
                        <h2 className="section-heading">What You Get</h2>
                        <div className="audience-grid">
                            {BoostYourCareer.map((item, index) => (
                                <div className="contribution-card" key={index}>
                                    <div className="audience-text">{item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
                    <div className="features-content">
                        <h2 className="main-heading">
                            What You’ll Work On
                        </h2>
                        <h2 className="main-heading">
                            Core Products You May Contribute To:
                        </h2>
                        <UpcomingProjectsSection1 />
                    </div>

                </div>
                <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
                    <div className="features-content">
                        <h2 className="main-heading">
                            Technologies, Libraries & Tools You’ll Use
                        </h2>
                        <br />
                        <p className="features-description" style={{ fontSize: '1.3rem' }}>
                            You won’t just learn AI, you'll use the industry-standard stack that powers production models.
                        </p>
                        <div className="combined-container">
                            {/* Left Column - What You'll Use & Master */}
                            <div className="tech-stack-column">
                                <h2 className="section-heading"> Core Development</h2>
                                <div className="tech-category">
                                    <ul className="tech-list">
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Python, Pandas, NumPy</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> PyTorch, TensorFlow</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Git + GitHub, VSCode, Jupyter Notebooks</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Matplotlib</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Pyglet</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> Pybrain</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Who Should Join */}
                            <div className="audience-column">
                                <h2 className="section-heading"> AI/ML & NLP</h2>
                                <div className="audience-grid">
                                    {techStack.map((item, index) => (
                                        <div className="contribution-card" key={index}>
                                            {/* <div className="audience-bullet">●</div> */}
                                            <div className="audience-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="combined-container">
                            {/* Left Column - What You'll Use & Master */}
                            <div className="tech-stack-column">
                                <h2 className="section-heading">Computer Vision</h2>
                                <div className="tech-category">
                                    <ul className="tech-list">
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> OpenCV</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> MediaPipe</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span> YOLOv8, DINOv2</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Who Should Join */}
                            <div className="audience-column">
                                <h2 className="section-heading">Deployment & MLOps</h2>
                                <div className="audience-grid">
                                    {deployment.map((item, index) => (
                                        <div className="contribution-card" key={index}>
                                            {/* <div className="audience-bullet">●</div> */}
                                            <div className="audience-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="combined-container">
                            {/* Left Column - What You'll Use & Master */}
                            <div className="tech-stack-column">
                                <h2 className="section-heading">Internship Outcomes That Actually Matter</h2>
                                <div className="tech-category">
                                    <ul className="tech-list">
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span>  Live project contributionsl</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span>  A strong GitHub profile with PRs on production code</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span>  Deployment & MLOps exposure</li>
                                        <li className="contribution-card" style={{ margin: '15px 0px' }}><span></span>  Priority consideration for full-time roles at INAI Worldst</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - Who Should Join */}
                            <div className="audience-column">
                                <h2 className="section-heading">From Intern to Innovator: Our Mentorship Model</h2>
                                <div className="audience-grid">
                                    {mentorship.map((item, index) => (
                                        <div className="contribution-card" key={index}>
                                            {/* <div className="audience-bullet">●</div> */}
                                            <div className="audience-text">{item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="features-description">You don’t just learn AI. You learn how AI gets built, shipped, and scaled.</p>
                        <p className="features-description">Interns work directly with teams from our best AI company in Surat, gaining exposure to real product pipelines.</p>
                    </div>
                    {/* Career Benefits */}

                    <div className="scrolling-section">
                        {/* Right Column - Who Should Join */}
                        <div className="audience-column">
                            <h2 className="section-heading">Why Model Training is the Career Game-Changer ?
                            </h2>
                            <div className="audience-grid">
                                {BoostYourCareer1.map((item, index) => (
                                    <div className="contribution-card" key={index}>
                                        <div className="audience-text">{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>

            </div>

            <CTA_AIML_SURAT />
            <FAQ_AIML_SURAT />
        </>
    );
};

export default AIMLInternshipInSurat;