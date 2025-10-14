/**
 * INAIWorldsBestAICompany2.jsx
 * Updated to use a modern two-column FAQ section with left heading/desc and right accordion, using inaiwbc1-faq2- classes.
 */
import React, { useState } from "react";
import "./INAIWorldsBestAICompany.css";

const stats = [
  { value: "1.2M+", label: "AI Professionals" },
  { value: "50-70%", label: "Cost Savings" },
  { value: "7", label: "Top 100 AI Startups" },
  { value: "45+", label: "Countries Served" },
];

const features = [
  {
    title: "Strategic Tech Hubs",
    desc: "Cities like Ahmedabad, Surat, and Vadodara are rapidly becoming centers for AI research and development, attracting top talent and investment.",
  },
  {
    title: "Government Support",
    desc: "Gujarat’s proactive policies and startup ecosystem foster innovation and make it easier for AI companies to thrive.",
  },
  {
    title: "Skilled Talent Pool",
    desc: "With leading engineering colleges and research institutes, Gujarat produces highly skilled AI engineers and data scientists.",
  },
  {
    title: "Industry Collaboration",
    desc: "Gujarat’s industries, from manufacturing to healthcare, are adopting AI at a fast pace, creating real-world impact.",
  },
];

const capabilities = [
  {
    title: "Generative AI Systems",
    desc: "Creating AI models that not only generate content but learn, adapt, and evolve. These systems power everything from intelligent assistants to data-driven decision tools.",
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: "Our NLP modules help businesses understand, summarize, and respond to natural language — enabling smarter search, voice assistants, and chatbots.",
  },
  {
    title: "Predictive Analytics",
    desc: "We use structured and unstructured data to build models that can forecast demand, detect patterns, and assist in real-time business decisions.",
  },
  {
    title: "Computer Vision",
    desc: "Advanced image and video analysis for object detection, facial recognition, and automated quality control systems.",
  },
];

const industries = [
  { icon: "🎓", title: "Education", desc: "Adaptive tutoring systems and auto-generated learning content" },
  { icon: "🏥", title: "Healthcare", desc: "AI-powered diagnosis support and patient modeling" },
  { icon: "🏭", title: "Manufacturing", desc: "Predictive maintenance and process automation" },
  { icon: "🏢", title: "Real Estate", desc: "Virtual AI agents and intelligent property matching" },
  { icon: "🛍️", title: "Retail & E-commerce", desc: "Predictive inventory, buyer insights" },
];

const products = [
  { icon: "🧠", title: "INAI Virtual Model", desc: "A CGI-powered virtual assistant built using generative AI and machine learning pipelines.", status: "In Development" },
  { icon: "🌐", title: "Influwket", desc: "A new-age AI-powered digital interaction platform for intelligent social communication.", status: "Beta Testing" },
  { icon: "🏙️", title: "Offiket", desc: "An AI-led real estate platform that simplifies commercial property exchanges with automation and trust.", status: "In Development" },
  { icon: "📹", title: "Veedket", desc: "A video-first knowledge and expression platform for creators, learners, and innovators.", status: "Concept Stage" },
];

const faqData = [
  {
    question: "Why is INAI Worlds considered one of the best AI companies in Gujarat?",
    answer:
      "INAI Worlds is a product-first AI company based in Gujarat, building intelligent, in-house AI modules rather than offering generic development services. Our focus is on creating scalable, future-ready AI products that deliver long-term business value across industries like education, healthcare, and manufacturing.",
  },
  {
    question: "Can businesses use INAI’s AI solutions?",
    answer:
      "Absolutely. Once launched, our AI products will be made available to startups, corporates, and enterprises through easy API access and documentation. These tools are being designed for fast implementation, high performance, and industry-specific use cases.",
  },
  {
    question: "Which industries can benefit from INAI’s AI modules?",
    answer: (
      <>
        Our modules are being developed for high-impact industries including:
        <ul style={{marginTop: 8}}>
          <li>Education</li>
          <li>Healthcare</li>
          <li>Manufacturing</li>
          <li>Real Estate</li>
          <li>Retail</li>
        </ul>
      </>
    ),
  },
  {
    question: "Are INAI Worlds' AI solutions available for global clients?",
    answer:
      "Yes. While we operate from Surat, Gujarat, INAI Worlds is building solutions for a global market. Our platforms will be available internationally through scalable deployments, secure APIs, and modular design.",
  },
  {
    question: "What makes INAI Worlds different from other AI companies in Gujarat?",
    answer: (
      <>
        At INAI Worlds, we don't just talk about innovation, we build it from the ground up. We focus on developing ready-to-use, in-house AI modules that are:
        <ul style={{marginTop: 8}}>
          <li>Tested on real-world data</li>
          <li>Designed with long-term scalability in mind</li>
          <li>Built using industry-standard tools like PyTorch, Hugging Face, and FastAPI</li>
        </ul>
        Our approach is centered on creating usable AI products, not just showcasing tech demos.
      </>
    ),
  },
];

const INAIWorldsBestAICompany2 = () => {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [openIndex, setOpenIndex] = useState(0);

  const handleFaqClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="inaiwbc-dark-theme">
      {/* Hero Section */}
      <section className="inaiwbc-hero">
        <div className="inaiwbc-container">
          <div className="inaiwbc-hero-content">
            <h1>
              <span className="inaiwbc-gradient-text">INAI Worlds</span>: Leading AI Innovation in Gujarat
            </h1>
            <p className="inaiwbc-subtitle">
              Building the future with ethical, scalable AI solutions for every industry.
            </p>
            <p className="inaiwbc-hero-desc">
              INAI Worlds is proud to be at the forefront of Gujarat's AI revolution. As a homegrown company, we design and build proprietary AI modules that are efficient, scalable, and built for real-world applications.
            </p>
            <div className="inaiwbc-hero-btns">
              <button className="inaiwbc-btn inaiwbc-primary">Get Started</button>
              <button className="inaiwbc-btn inaiwbc-secondary">Learn More</button>
            </div>
          </div>
          <div className="inaiwbc-hero-visual">
            <div className="inaiwbc-ai-visualization">
              <div className="inaiwbc-ai-node inaiwbc-center">AI</div>
              <div className="inaiwbc-connecting-line inaiwbc-line1"></div>
              <div className="inaiwbc-connecting-line inaiwbc-line2"></div>
              <div className="inaiwbc-connecting-line inaiwbc-line3"></div>
              <div className="inaiwbc-connecting-line inaiwbc-line4"></div>
              <div className="inaiwbc-ai-node inaiwbc-top">NLP</div>
              <div className="inaiwbc-ai-node inaiwbc-right">CV</div>
              <div className="inaiwbc-ai-node inaiwbc-bottom">GenAI</div>
              <div className="inaiwbc-ai-node inaiwbc-left">ML</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="inaiwbc-stats">
        <div className="inaiwbc-container">
          <div className="inaiwbc-stats-grid">
            {stats.map((stat, i) => (
              <div className="inaiwbc-stat-card" key={i}>
                <div className="inaiwbc-stat-value">{stat.value}</div>
                <div className="inaiwbc-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="inaiwbc-features">
        <div className="inaiwbc-container">
          <h2 className="inaiwbc-section-title">Why Gujarat Is Emerging as an AI Innovation Hub</h2>
          <div className="inaiwbc-features-grid">
            {features.map((f, i) => (
              <div className="inaiwbc-feature-card" key={i}>
                <div className="inaiwbc-feature-icon"></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="inaiwbc-capabilities">
        <div className="inaiwbc-container">
          <div className="inaiwbc-section-header">
            <h2 className="inaiwbc-section-title">Our Core AI Development Capabilities</h2>
            <div className="inaiwbc-tabs">
              <button 
                className={`inaiwbc-tab-btn ${activeTab === 'capabilities' ? 'active' : ''}`}
                onClick={() => setActiveTab('capabilities')}
              >
                Capabilities
              </button>
              <button 
                className={`inaiwbc-tab-btn ${activeTab === 'industries' ? 'active' : ''}`}
                onClick={() => setActiveTab('industries')}
              >
                Industries
              </button>
            </div>
          </div>
          
          {activeTab === 'capabilities' ? (
            <div className="inaiwbc-cards-grid">
              {capabilities.map((c, i) => (
                <div className="inaiwbc-card" key={i}>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="inaiwbc-industries-grid">
              {industries.map((ind, i) => (
                <div className="inaiwbc-industry-card" key={i}>
                  <div className="inaiwbc-industry-icon">{ind.icon}</div>
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section className="inaiwbc-products">
        <div className="inaiwbc-container">
          <h2 className="inaiwbc-section-title">Upcoming AI Products Built In-House</h2>
          <div className="inaiwbc-products-grid">
            {products.map((p, i) => (
              <div className="inaiwbc-product-card" key={i}>
                <div className="inaiwbc-product-header">
                  <div className="inaiwbc-product-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.desc}</p>
                <div className="inaiwbc-product-status">{p.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="inaiwbc-why-us">
        <div className="inaiwbc-container">
          <div className="inaiwbc-why-content">
            <h2>Why Choose INAI Worlds?</h2>
            <ul>
              <li>In-house R&D, no outsourcing</li>
              <li>Scalable, generative AI frameworks</li>
              <li>Ethical development principles</li>
              <li>Seamless integration with your tech</li>
            </ul>
          </div>
          <div className="inaiwbc-why-visual">
            <div className="inaiwbc-ai-visual-circle">
              <div className="inaiwbc-circle-layer inaiwbc-layer1"></div>
              <div className="inaiwbc-circle-layer inaiwbc-layer2"></div>
              <div className="inaiwbc-circle-layer inaiwbc-layer3"></div>
              <div className="inaiwbc-circle-core">AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="inaiwbc-faq">
        <div className="inaiwbc-container">
          <div className="inaiwbc-faq-header">
            <span className="inaiwbc-section-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="inaiwbc-section-title">Common Questions</h2>
            <p className="inaiwbc-section-desc">
              Answers to the most common questions about INAI Worlds
            </p>
          </div>
          <div className="inaiwbc-faq-grid">
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                className={`inaiwbc-faq-item ${openIndex === idx ? "expanded" : ""}`}
                onClick={() => handleFaqClick(idx)}
              >
                <div className="inaiwbc-faq-question">
                  <span>{item.question}</span>
                  <span className="inaiwbc-faq-toggle">{openIndex === idx ? "−" : "+"}</span>
                </div>
                {openIndex === idx && (
                  <div className="inaiwbc-faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="inaiwbc-cta">
        <div className="inaiwbc-container">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Join the revolution with Gujarat's leading AI innovation partner</p>
          <button className="inaiwbc-btn inaiwbc-primary">Schedule a Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default INAIWorldsBestAICompany2; 