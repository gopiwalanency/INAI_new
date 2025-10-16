import React, { useState } from 'react';
import serviceImg from '../assets/services/Model_Training.png';
import selectingAlgorithmImg from '../assets/services/Selecting the Right Algorithm.webp';
import feedingDatasetsImg from '../assets/services/Feeding Prepared Datasets.webp';
import trainingAIModelsImg from '../assets/Training_AI_Models.webp';
import validationEvaluationImg from '../assets/Validation_and_Evaluation.webp';
import './Model_training.css';
import './Data_Collection.css';
import './Data_manipulation.css';
import { Helmet } from 'react-helmet-async';
import UpcomingProjectsSection1 from '../components/projects/UpcomingProjectsSection1';
import FAQ_Ser3 from '../components/faqpage/FAQ_Ser3';
import WhyModelTrainingCarousel from '../components/footer/WhyModelTrainingCarousel.jsx';
import BestPracticesModelTraining from '../components/footer/BestPracticesModelTraining.jsx';
const Service3 = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Data for sections
  const whyMatters = [
    "Transform raw data into meaningful, structured knowledge",
    "Train AI models to recognize patterns and make decisions",
    "Test, refine, and improve models to work in the real world",
    " Avoid bias and make fair AI"
  ];

  const contributions = [
    "Generative AI chatbots that respond intelligently",
    "Recommendation systems that learn your preferences",
    "Predictive analytics tools for business decisions",
    "AI content generators that write and create"
  ];

  const internshipSteps = [
    {
      step: "You’ll scrape real data from the web using Python tools",
      // tools: "BeautifulSoup, Selenium, Scrapy",
      // desc: "Scrape real data from the web using Python tools"
    },
    {
      step: " Clean and prepare this data",
      // tools: "Pandas & NumPy",
      // desc: "Clean and prepare this data for model training"
    },
    {
      step: "Train models using TensorFlow, PyTorch, Kera",
      // tools: "TensorFlow, PyTorch, Keras",
      // desc: "Train models to generate text, predict outcomes, or see patterns"
    },
    {
      step: "Fine-tune models so they generate text, predict outcomes, or see patterns",
      // tools: "Hugging Face",
      // desc: "Fine-tune models for better performance"
    },
    {
      step: " Deploy your models into apps",
      // tools: "Streamlit, Gradio",
      // desc: "Deploy your models into real-world applications"
    }
  ];

  const projects = [
    {
      name: "INAI Virtual Model",
      desc: "AI avatars trained to interact naturally"
    },
    {
      name: "Influwket",
      desc: "Social AI that personalizes feeds using model predictions"
    },
    {
      name: "Offiket",
      desc: "AI predicting real estate trends and connecting buyers & sellers"
    },
    {
      name: "Veedket",
      desc: "AI-driven video recommendations and text generation"
    }
  ];

  const careerBenefits = [
    "Real skill employers want: 70% of AI teams say model training & data prep is the most important skill",
    "Better results: AI trained on clean, structured data performs 40–60% better",
    "Transferable skill: Once you master training, you can build anything chatbots, NLP models, or vision systems",
    "Proof you can build: Your portfolio shows not only you know AI you can create it."
  ];

  const whoShouldJoin = [
    "Students after 12th who want to start AI early",
    "Beginners in coding or Python who want real AI projects",
    "Data science enthusiasts wanting practical AI model building skills",
    "Career changers ready to build modern AI apps"
  ];

  const whyChoose = [
    "Project-first learning: Build real AI modules, not just theory",
    "Built by practitioners: Learn directly from AI engineers & data scientists",
    "Full-cycle: From data scraping to deployment understand the entire AI workflow",
  ];

  const faqs = [
    {
      q: "What will I actually build in the AI model training program?",
      a: "You'll build real AI modules and projects: chatbots, text generators, sentiment analyzers, image classifiers, and recommendation engines using live data, not just demo datasets."
    },
    {
      q: "Why is data cleaning so important before AI model training?",
      a: "Because clean, structured data is what makes AI models accurate and reliable. Poor data leads to unpredictable, biased, or low-performing AI systems. That's why our internship teaches data-driven AI training starting from data collection to cleaning."
    },
    {
      q: "What makes this different from online AI tutorials?",
      a: "We don't just teach concepts we teach how to build, train, and deploy real AI models. You'll work with real-world data, use production-level tools (TensorFlow, Hugging Face, Pandas), and get expert feedback from AI engineers."
    },
    {
      q: "Do I need to know advanced math or coding?",
      a: "No. We start from basics, and you learn through practical AI projects. Knowing basic Python helps, but we guide beginners step by step."
    },
    {
      q: "How does AI model training help my career?",
      a: "Employers want proof you can build AI not just certificates. By the end of the program, you'll have a portfolio of AI projects showing real skills in model training, deployment, and data manipulation exactly what hiring managers look for."
    },
    {
      q: "What tools and libraries will I learn?",
      a: "You'll learn industry-standard tools: Python, Pandas, NumPy, TensorFlow, Keras, PyTorch, Hugging Face, Scikit-learn, plus deployment tools like Streamlit and Gradio."
    },
    {
      q: "Can I join after 12th grade or as a beginner?",
      a: "Yes! Many of our interns join right after 12th, or as beginners in coding. Our step-by-step, project-focused training makes it beginner-friendly while still building expert-level practical skills."
    },
    {
      q: "Will I work with generative AI and LLMs?",
      a: "Yes you'll build generative AI projects: text generation, summarization, basic chatbots using libraries like Hugging Face and transformer models."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Model Training for Next-Gen</title>
        <meta
          name="description"
          content="AI model training at INAI Worlds focuses on generative AI and ML, building smarter, more powerful models to fuel real-world applications and innovations."
        />

        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "INAI Worlds",
      "url": "https://inaiworlds.com/",
      "logo": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
      "sameAs": [
        "https://x.com/Inai_Worlds",
        "https://www.instagram.com/inai_worlds/",
        "https://www.youtube.com/@INAIWorldsPVTLTD",
        "https://www.linkedin.com/company/inai-worlds-pvt-ltd",
        "https://in.pinterest.com/Inai_Worlds"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 70164 88265",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": {
            "@type": "WebPage",
            "@id": "https://inaiworlds.com/"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": {
            "@type": "WebPage",
            "@id": "https://inaiworlds.com/services"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "AI Model Training",
          "item": {
            "@type": "WebPage",
            "@id": "https://inaiworlds.com/services/model-training"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "AI Model Training",
      "description": "AI model training at INAI Worlds focuses on generative AI and ML, building smarter, more powerful models to fuel real-world applications and innovations.",
      "provider": {
        "@type": "Organization",
        "name": "INAI Worlds",
        "url": "https://inaiworlds.com/"
      },
      "serviceType": "AI Training Program",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "url": "https://inaiworlds.com/services/model-training"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What will I actually build in the AI model training program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll build real AI modules and projects: chatbots, text generators, sentiment analyzers, image classifiers, and recommendation engines using live data, not just demo datasets."
          }
        },
        {
          "@type": "Question",
          "name": "Why is data cleaning so important before AI model training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because clean, structured data is what makes AI models accurate and reliable. Poor data leads to unpredictable, biased, or low-performing AI systems. That’s why our internship teaches data-driven AI training starting from data collection to cleaning."
          }
        },
        {
          "@type": "Question",
          "name": "What makes this different from online AI tutorials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We don’t just teach concepts, we teach how to build, train, and deploy real AI models. You’ll work with real-world data, use production-level tools (TensorFlow, Hugging Face, Pandas), and get expert feedback from AI engineers."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI model training help my career?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employers want proof you can build AI not just certificates. By the end of the program, you’ll have a portfolio of AI projects showing real skills in model training, deployment, and data manipulation exactly what hiring managers look for."
          }
        }
      ]
    }
  ]
}

        `}</script>
      </Helmet>
      <div className="service-detail-page model-training-page">
        {/* Hero Section */}
        <div className="service-hero">
          <div className="flex flex-col md:flex-row items-center gap-8 sec_com" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              <h1 className="hero-title-gradient">
                AI Model Training for Next-Gen
              </h1>
              <p className="hero-description-light">
                AI model training is the process of teaching algorithms to recognize patterns, make
                predictions, and generate intelligent outcomes from structured datasets. At INAI Worlds,
                our approach to model training ensures that every AI system is accurate, efficient, and
                scalable for real-world applications.
              </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={serviceImg}
                alt="AI Model Training"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl shadow-md web_img"
                loading="eager"
                decoding="sync"
                fetchpriority="high"
                data-priority="high"
              />
            </div>
          </div>
        </div>

        {/* What is AI Model Training Section */}
        <div className="section-container">
          <div className="what-is-container">
            <div className="what-is-title-wrapper">
              <h2 className="what-is-title">What is AI Model Training?</h2>
            </div>
            <p className="what-is-description">
              AI model training involves feeding structured data into machine learning algorithms
              so they can learn relationships between inputs and outputs. This process allows models
              to adapt, improve, and deliver reliable results.
            </p>
            <h3 className="key-elements-heading">It covers various approaches, including:</h3>
            <div className="essentials-grid-styled">
              <div className="essentials-card-styled">
                <strong>Machine learning</strong>
                <span className="essentials-separator"> – </span>
                <span className="essentials-desc-styled">Algorithms trained with structured and unstructured datasets to identify patterns and make predictions.</span>
              </div>
              <div className="essentials-card-styled">
                <strong>Deep learning (neural networks)</strong>
                <span className="essentials-separator"> – </span>
                <span className="essentials-desc-styled">Multi-layered architectures trained with large-scale data to capture complex relationships with high accuracy.</span>
              </div>
              <div className="essentials-card-styled">
                <strong>Generative AI</strong>
                <span className="essentials-separator"> – </span>
                <span className="essentials-desc-styled">Models trained to create new content such as text, images, audio, or designs based on learned patterns.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Model Training Process Section */}
        <div className="sticky-scroll-section">
          <div className="sticky-scroll-header">
            <h2 className="gradient-heading">Our Model Training Process</h2>
            <p>At INAI Worlds, we follow a systematic training pipeline to ensure models deliver consistent and accurate performance:</p>
          </div>
          <div className="sticky-cards-container">
            <div className="sticky-card" style={{ '--card-index': 0 }}>
              <div className="sticky-card-grid">
                <div className="sticky-card-content">
                  <div className="sticky-card-number">1</div>
                  <h3 className="sticky-card-title">Selecting the Right Algorithm</h3>
                  <div className="sticky-card-details">
                    <ul>
                      <li>Choose between machine learning, deep learning, or generative models based on project needs.</li>
                      <li>Evaluate supervised, unsupervised, or reinforcement learning approaches.</li>
                    </ul>
                  </div>
                </div>
                <div className="sticky-card-image">
                  <img
                    src={selectingAlgorithmImg}
                    alt="Selecting the Right Algorithm"
                    className="sticky-img"
                  />
                </div>
              </div>
            </div>
            <div className="sticky-card" style={{ '--card-index': 1 }}>
              <div className="sticky-card-grid">
                <div className="sticky-card-content">
                  <div className="sticky-card-number">2</div>
                  <h3 className="sticky-card-title">Feeding Prepared Datasets</h3>
                  <div className="sticky-card-details">
                    <ul>
                      <li>Use structured and cleaned datasets from our data structuring process.</li>
                      <li>Balance diversity and representation to minimize bias.</li>
                      <li>Optimize dataset size to improve training speed and accuracy.</li>
                    </ul>
                  </div>
                </div>
                <div className="sticky-card-image">
                  <img
                    src={feedingDatasetsImg}
                    alt="Feeding Prepared Datasets"
                    className="sticky-img"
                  />
                </div>
              </div>
            </div>
            <div className="sticky-card" style={{ '--card-index': 2 }}>
              <div className="sticky-card-grid">
                <div className="sticky-card-content">
                  <div className="sticky-card-number">3</div>
                  <h3 className="sticky-card-title">Training AI Models</h3>
                  <div className="sticky-card-details">
                    <ul>
                      <li>Iteratively expose models to data for pattern recognition.</li>
                      <li>Apply neural network training for AI & ML when handling complex use cases.</li>
                      <li>Use checkpoints, fine-tuning, and optimization techniques for better performance.</li>
                    </ul>
                  </div>
                </div>
                <div className="sticky-card-image">
                  <img
                    src={trainingAIModelsImg}
                    alt="Training AI Models"
                    className="sticky-img"
                  />
                </div>
              </div>
            </div>
            <div className="sticky-card" style={{ '--card-index': 3 }}>
              <div className="sticky-card-grid">
                <div className="sticky-card-content">
                  <div className="sticky-card-number">4</div>
                  <h3 className="sticky-card-title">Validation and Evaluation</h3>
                  <div className="sticky-card-details">
                    <ul>
                      <li>Test models against validation datasets.</li>
                      <li>Measure accuracy, precision, recall, and bias levels.</li>
                      <li>Refine models until they meet project benchmarks.</li>
                    </ul>
                  </div>
                </div>
                <div className="sticky-card-image">
                  <img
                    src={validationEvaluationImg}
                    alt="Validation and Evaluation"
                    className="sticky-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: '#e2e8f0', marginTop: '2rem', fontSize: '1.05rem' }}>
            All training begins with Reliable <a href="/data-collection" className="line-link">Data Collection for AI & ML</a>, where diverse and accurate raw datasets are gathered before <a href="/data-structuring" className="line-link">structuring Data</a> and model training.
          </p>
        </div>

        {/* Why Effective AI Model Training Matters Section */}
        <div className="scrolling-section">
          <h2 className="gradient-heading">Why Effective AI Model Training Matters</h2>
          <p>The model training process in AI development directly determines how well AI solutions perform in production:</p>
        </div>

        <WhyModelTrainingCarousel />

        <BestPracticesModelTraining />

        <div className="faq-full-width">
          <FAQ_Ser3 className="container" />
        </div>
      </div>
    </>
  );
};

export default Service3;

{/* */ }