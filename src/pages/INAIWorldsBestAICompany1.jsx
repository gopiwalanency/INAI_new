import React, { useState } from 'react';
import './INAIWorldsBestAICompany.css';
import '../components/aboutpage/CTA2.css';
import CTA_Inda from '../components/CTA_Inda';
import '../components/Hero.css';
import FAQ_India from '../components/faqpage/FAQ_India';
import UpcomingProjectsSection from '../components/projects/UpcomingProjectsSection';
import { MdCastForEducation, MdOutlineHealthAndSafety, MdOutlineRealEstateAgent } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { BsMegaphone } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';

const INAIWorldsBestAICompany = () => {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const Powerhouse = [
    {
      text: "Deep Talent Reservoir",
      description: "Over 1.2 million professionals in AI and analytics",

    },
    {
      text: "Affordable, High-Impact Development",
      description: "50–70% savings compared to Western markets",

    },
    {
      text: "Innovation-First Ecosystem",
      description: "Home to 7 of the world’s top 100 AI startups",

    },
    {
      text: "Trusted by Global Enterprises",
      description: "AI solutions deployed in over 45+ countries",

    }
  ];

  const WhyCompany = [
    {
      text: "✅ In-house R&D, no third-party outsourcing",
      // description: "Over 1.2 million professionals in AI and analytics",

    },
    {
      text: "✅ Building scalable, generative AI frameworks",
      // description: "50–70% savings compared to Western markets",

    },
    {
      text: "✅ Ethical development principles",
      // description: "Home to 7 of the world’s top 100 AI startups",

    },
    {
      text: "✅ Seamless integration with existing tech systems",
      // description: "AI solutions deployed in over 45+ countries",

    }
  ];

  const whyFeatures = [
    {
      // icon: ethicalAI,
      title: 'Generative AI Systems',
      desc: 'Creating AI models that not only generate content but learn, adapt, and evolve. These systems power everything from intelligent assistants to data-driven decision tools.',
    },
    {
      // icon: modelDev,
      title: 'Natural Language Processing',
      desc: 'Our NLP modules help businesses understand, summarize, and respond to natural language enabling smarter search, voice assistants, and chatbots.',
    },
    {
      // icon: integration,
      title: 'Predictive Analytics',
      desc: 'We use structured and unstructured data to build models that can forecast demand, detect patterns, and assist in real-time business decisions',
    }
  ];

  const Industries = [
    {
      icon: <MdCastForEducation style={{ color: "white", fontSize: "2rem" }} />,
      text: " Education",

    },
    {
      icon: <MdOutlineHealthAndSafety style={{ color: "white", fontSize: "2rem" }} />,
      text: " Healthcare",

    },
    {
      icon: <TiShoppingCart style={{ color: "white", fontSize: "2rem" }} />,
      text: " E-commerce",

    },
    {
      icon: <MdOutlineRealEstateAgent style={{ color: "white", fontSize: "2rem" }} />,
      text: " Real Estate",

    },
    {
      icon: <MdCastForEducation style={{ color: "white", fontSize: "2rem" }} />,
      text: " Media",

    },
    {
      icon: <TfiLayoutMediaOverlay style={{ color: "white", fontSize: "2rem" }} />,
      text: " Entertainment",

    },
    {
      icon: <BsMegaphone style={{ color: "white", fontSize: "2rem" }} />,
      text: " Marketing",

    }
  ];

  const Tools = [
    {
      text: "Frameworks: PyTorch, TensorFlow, Hugging Face",

    },
    {
      text: "Languages: Python, JavaScript",

    },
    {
      text: "Deployment: Docker, FastAPI, REST APIs",

    },
    {
      text: "Libraries: NumPy, Pandas, Matplotlib, sklearn",

    }
  ];

  const WhyTrust = [
    {
      text: "Transparent, Ethical AI Vision",
      description: "We're building explainable, human-centric AI systems with future auditability and accountability in mind.",

    },
    {
      text: "In-House Frameworks Under Development",
      description: "Our proprietary frameworks — crafted from the ground up — are being designed to solve real-world business challenges at scale.",

    },
    {
      text: "Global Ambitions, Built in India",
      description: "While based in Surat, Gujarat, our AI products are being developed to serve global markets with local expertise and cultural intelligence.",
    },
    {
      text: "Smart Investment in Future-Ready AI",
      description: "Partner with us early and benefit from affordable innovation our AI modules are designed to deliver maximum long-term value once launched",
    }
  ];


  return (

    <>
      <Helmet >
        <title>Best AI Company in India | INAI Worlds </title>
        <meta
          name="description"
          content="INAI Worlds is the Best AI Company in India, drives innovation with cutting-edge AI solutions, empowering businesses through machine learning and generative AI."
        />
      </Helmet>
      <div className="container">
        {/* Hero Section with Banner Image OUTSIDE the container */}
        <div className="inaiwbc1-container" style={{ marginTop: '2rem' }}>
          <div className="features-content">
            <h2 className="main-heading">
              We are Generating AI for Shaping the <span className="inline-badge">Future</span>
            </h2>
            <p className="features-description">
              As a leading AI company in India, INAI Worlds is not a service outsourcing firm. We design and build
              <br />proprietary AI modules that are efficient, scalable, and built for real-world applications. Whether you're a startup or a <br /> tech enterprise, we offer intelligent solutions backed by research and technology leadership.

            </p>
            <div className="inaiwbc1-hero-buttons">
              <a href="/portfolio"><button className="btn btn-primary-hero" style={{ marginRight: '1rem', marginTop: '1rem' }}>View Our projects</button></a>
            </div>
          </div>
        </div>

        <div className="section-container" style={{ marginTop: '6rem' }}>
          <h2 className="main-heading">
            Why India is the <span className="highlight-text">Best Place for AI/ML Development</span>
          </h2>
          <p className="section-intro">
            India is steadily positioning itself as a top destination for AI development offering a dynamic mix of talent, innovation, and affordability. As global demand for AI-driven solutions increases, AI companies in India are leading the charge in delivering intelligent, scalable, and cost-efficient technologies.
          </p>
          <div className="contributions-grid">
            {Powerhouse.map((item, index) => (
              <div
                className="contribution-card"
                key={index}
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  className="contribution-content"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    gap: '0.75rem'
                  }}
                >
                  <p
                    className="contribution-text"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      color: '#fff',
                      margin: 0
                    }}
                  >
                    {item.text}
                  </p>
                  <p
                    className="contribution-description"
                    style={{
                      color: '#e0e0e0',
                      margin: 0,
                      lineHeight: '1.5',
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-container">
          <h2 className="main-heading">
            Why INAI Worlds is a Top <span className="highlight-text">AI Company in India</span>
          </h2>
          <p className="section-intro">
            As one of India’s top AI firms, INAI Worlds stands out with a product-led approach. We aren’t just solving business problems — we’re creating next-gen technologies for the future of digital interaction.
          </p>
          <div className="contributions-grid">
            {WhyCompany.map((item, index) => (
              <div className="contribution-card" key={index}>
                <div className="contribution-content">
                  <p className="contribution-text" style={{ fontWeight: 'bold' }}>{item.text}</p>
                </div>

              </div>
            ))}
          </div>
          <p className="section-intro">From our Surat headquarters, we’re building scalable AI solutions for the world. Explore what makes us the leading AI company in Surat.</p>
        </div>
        <div className="section-container">
          <h2 className="main-heading">
            Our Core AI Development Capabilities
          </h2>
          <div className="features-cards why-cap-grid">
            {whyFeatures.map((feature, index) => (
              <div
                className="why-feature-card grid-hover-effect rounded-xl shadow-md p-4 bg-white"
                key={index}
              >
                <h3 className="why-feature-title text-lg font-semibold mb-1">
                  {feature.title}
                </h3>
                <p className="why-feature-desc text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-container">
          <h2 className="main-heading">
            Industries We Empower
          </h2>
          <p className="section-intro">Our AI tools are built for real-world applications across high-impact sectors:</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '20px',
            width: '100%',
            margin: '30px 0'
          }}>
            {Industries.map((item, index) => (

              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(26, 26, 46, 0.8)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  aspectRatio: '1',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                {item.icon}
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '12px'
                }}>
                  {item.text.split(' ')[0]}
                </div>
                <p style={{
                  color: '#fff',
                  margin: 0,
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  lineHeight: '1.4'
                }}>
                  {item.text.split(' ').slice(1).join(' ').trim()}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-container">
          <h2 className="main-heading">
            Upcoming AI Products Built In-House
          </h2>
          <p className="section-intro">typical development firms, we create AI modules in-house that solve modern problems for Indian businesses and global users.</p>
          <UpcomingProjectsSection />
        </div>

        <p className="section-intro">Interested in gaining real-world AI experience? Check out our AI/ML internship in Surat and work directly on upcoming projects.</p>

        <div className="section-container">
          <h2 className="main-heading">
            Powering Our AI With Proven Tool
          </h2>
          <p className="section-intro">We use leading open-source and enterprise tools to ensure high performance:</p>
          <div className="contributions-grid">
            {Tools.map((item, index) => (
              <div className="contribution-card" key={index}>
                <div className="contribution-content">
                  <p className="contribution-text" style={{ fontWeight: 'bold' }}>{item.text}</p>
                  <p className="contribution-description" style={{ color: 'white' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <h2 className="main-heading">
            Why Tech Founders & Enterprises Trust INAI Worlds
          </h2>
          <div className="contributions-grid">
            {WhyTrust.map((item, index) => (
              <div
                className="contribution-card"
                key={index}
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  className="contribution-content"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    gap: '0.75rem'
                  }}
                >
                  <p
                    className="contribution-text"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      color: '#fff',
                      margin: 0
                    }}
                  >
                    {item.text}
                  </p>
                  <p
                    className="contribution-description"
                    style={{
                      color: '#e0e0e0',
                      margin: 0,
                      lineHeight: '1.5',
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="section-intro">We're proud to be headquartered in Gujarat, one of India’s fastest-growing tech regions. Learn more about our role as a top AI company in Gujarat.</p>
        </div>

      </div>
      <CTA_Inda />
      <FAQ_India />
    </>
  );
};

export default INAIWorldsBestAICompany;