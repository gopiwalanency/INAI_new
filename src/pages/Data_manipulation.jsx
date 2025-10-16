import React, { useState } from 'react';
import FAQ_Ser2 from '../components/faqpage/FAQ_Ser2.jsx';
import serviceImg from '../assets/Data_Manipulation_in_AI_Model_Building_&_AI-ML_Internships.png';
import cleaningPreprocessingImg from '../assets/Cleaning_Preprocessing_Data.webp';
import organizingDatasetsImg from '../assets/services/Organizing_Datasets.webp';
import annotationFeatureImg from '../assets/services/Annotation_Feature_Engineering.webp';
import './Data_manipulation.css';
import './Data_Collection.css';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import BestPracticesStructuring from '../components/footer/BestPracticesStructuring.jsx';
import WhyDataStructuringCarousel from '../components/footer/WhyDataStructuringCarousel.jsx';


const Service2 = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Icons for essentials
  const essentialIcons = {
    feature: '🔧',
    noise: '🧹',
    format: '📊',
    bias: '⚖️',
    automation: '🤖',
    Domain: '🧠'
  };

  // Data for sections
  const essentials = [
    {
      title: "Data cleaning for AI & ML",
      description: "Removing duplicates, correcting errors, and handling missing values."
    },
    {
      title: "Standardization",
      description: "Formatting text, numbers, dates, and categorical features consistently."
    },
    {
      title: "Annotation and labeling",
      description: "Assigning labels for supervised learning tasks."
    }
  ];

  const stepper = [
    ' Cleaning and Preprocessing Raw Data',
    ' Organizing Datasets',
    ' Annotation and Feature Engineering'
  ];

  const whyDataStructuringMatters = [
    {
      icon: "🎯",
      text: "Reduces model errors and biases."
    },
    {
      icon: "🛡️",
      text: "Enhances algorithm performance."
    },
    {
      icon: "💡",
      text: "Provides a strong foundation for generative AI, predictive models, and intelligent systems."
    }
  ];

  const learnByDoing = [
    "Work on raw real-world datasets, not just demos",
    "Learn Python data manipulation techniques with Pandas & NumPy",
    "Build practical data pipelines ",
    "Practice structured data prep for AI models",
    "Understand full AI workflows: from raw data to deployment"
  ];

  const toolIcons = {
    pandas: '🐼',
    numpy: '🧮',
    sklearn: '🔍',
    opencv: '📷',
    nlp: '🔤',
    sql: '☁️',

  };

  const tools = [
    {
      name: "Pandas",
      desc: "Filtering, reshaping, grouping, and merging data",
      icon: toolIcons.pandas
    },
    {
      name: "NumPy",
      desc: "Fast numerical operations and matrix handling",
      icon: toolIcons.numpy
    },
    {
      name: "Scikit-learn",
      desc: "Data scaling, encoding, and preprocessing",
      icon: toolIcons.sklearn
    },
    {
      name: "OpenCV",
      desc: "Preparing and cleaning image data",
      icon: toolIcons.opencv
    },
    {
      name: "Regex & NLP",
      desc: "Structuring and cleaning text data",
      icon: toolIcons.nlp
    },
    {
      name: "SQL",
      desc: "Querying and managing structured data from databases efficiently.",
      icon: toolIcons.sql
    }
  ];


  const contributions = [
    {
      text: "Create reusable, automated data pipelines & Design robust AI modules",
      icon: '⚙️'
    },
    {
      text: "Reduce errors caused by outliers, missing values, and duplicate records",
      icon: '📉'
    },
    {
      text: "Speed up retraining by keeping data well-organized",
      icon: '⚡'
    },
    {
      text: "Make models more explainable by selecting relevant features",
      icon: '🔍'
    }
  ];

  const whyLearn = [
    "Project-based learning: Work with real, messy datasets",
    "Mentorship: Learn from data scientists and AI engineers",
    "Diverse industry exposure: Finance, healthcare, retail, and more",
    "Portfolio: Build a verified collection of real AI data projects",
    "Job-ready: Focus on practical skills, not just theory"
  ];

  const BoostYourCareer = [
    "Project-based learning: Work with real, messy datasets",
    "Mentorship: Learn from data scientists and AI engineers",
    "Diverse industry exposure: Finance, healthcare, retail, and more",
    "Portfolio: Build a verified collection of real AI data projects",
    "Job-ready: Focus on practical skills, not just theory"
  ];

  const faqs = [
    {
      q: "1. What is data structuring for AI & ML?",
      a: "It is the process of organizing and cleaning raw data to make it usable for AI and machine learning models."
    },
    {
      q: " 2. Why is data structuring important in AI model development?",
      a: "Structured data ensures efficient model training, higher accuracy, and reduced bias in AI and ML models."
    },
    {
      q: "3. How do you prepare clean datasets for AI-powered products?",
      a: "By removing duplicates, correcting errors, normalizing formats, labeling data, and organizing it into structured tables or files."
    },
    {
      q: "4. Which tools are used in structuring data for AI models?",
      a: "Tools like Pandas, Apache Spark, SQL databases, and annotation software are commonly used for cleaning and organizing datasets."
    },
    {
      q: "5. How does structured data improve AI model training??",
      a: "Properly structured data reduces inconsistencies, ensures alignment of features and labels, and allows AI algorithms to learn patterns effectively."
    },
    // {
    //   q: "How does data manipulation help in AI module building?",
    //   a: "It turns messy, raw data into clean, structured, and usable datasets. This directly improves training speed, accuracy, and makes your AI modules more robust to real-world data challenges."
    // },
    // {
    //   q: "Will I work on real data or only demo projects?",
    //   a: "You'll work on real-world data processing challenges, from unstructured customer feedback to IoT logs, building practical data pipelines internship projects that reflect real industry tasks."
    // }
  ];

  return (
    <>
      <Helmet>
        <title>Efficient Data Structuring for AI & ML Development</title>
        <meta
          name="description"
          content="INAI Worlds uses data manipulation to prepare AI modules and teaches these essential skills in hands-on AI/ML internships for real-world experience."
        />

        <script type="application/ld+json">
          {JSON.stringify({
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
                    "name": "Data Manipulation",
                    "item": {
                      "@type": "WebPage",
                      "@id": "https://inaiworlds.com/services/data-manipulation"
                    }
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Data Manipulation",
                "description": "INAI Worlds uses data manipulation to prepare AI modules and teaches these essential skills in hands-on AI/ML internships for real-world experience.",
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
                "url": "https://inaiworlds.com/services/data-manipulation"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is data manipulation in AI model building?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Data manipulation in AI model building involves cleaning, transforming, and organizing raw data to make it suitable for training. It enhances model accuracy and performance through steps like data cleaning, formatting, and feature engineering."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why is data manipulation important in AI?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Because AI models rely on data quality as much as on algorithms. Without proper data preprocessing in Python or handling missing, inconsistent, and noisy data, even the best models won't perform well in real-world applications. That's why top innovators like INAI Worlds — recognized as the best AI company — prioritize structured data pipelines in every AI system we build."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What do I learn in the Data Manipulation in AI/ML internship?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In our data manipulation in AI/ML internship, you get hands-on data cleaning internship experience. You'll learn Python data manipulation internship techniques, build practical data pipelines internship projects, and practice structured data prep for AI models across real datasets like text, images, and logs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need coding experience to join?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Basic Python knowledge helps, but our program is designed to guide you from fundamentals to real-world data engineering in AI/ML internship skills, including Pandas, NumPy, and other industry-standard tools."
                    }
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="service-detail-page datamanipulation-page">


        {/* Hero Section */}
        <div className="service-hero">

          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            {/* Left: Content */}
            <div className="w-full md:w-1/2 sec_con web_scrap_per">
              <h1 className="hero-title-gradient">
                Efficient Data Structuring for AI & ML Development
              </h1>
              <p className="hero-description-light">
                Organized data is essential for building accurate and reliable AI models. Data
                structuring for AI & ML transforms raw collected information into formats that
                machines can interpret, enabling efficient model training and deployment. Properly
                structured data ensures high performance, reduces errors, and supports robust
                AI-powered solutions.
              </p>
              {/* <div className="impact-grid">
                <div className="impact-card"> Model accuracy and precision</div>
                <div className="impact-card"> Training speed and efficiency</div>
                <div className="impact-card"> Generalization to real-world scenarios</div>
                <div className="impact-card"> Scalability and future updates</div>
              </div> */}
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={serviceImg}
                alt="Web Scraping"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-2xl shadow-md web_img"
              />
            </div>
          </div>

        </div>

        {/* Why Essential Section */}
        <div className="section-container">
          <div className="what-is-container">
            <div className="what-is-title-wrapper">
              <h2 className="what-is-title">What is Data Structuring ?</h2>
            </div>
            <p className="what-is-description">
              Data structuring in AI model development is the process of cleaning, organizing,
              and formatting datasets so that AI algorithms can process them effectively. While raw
              data may be inconsistent, incomplete, or noisy, structured data is reliable, standardized,
              and ready for machine learning pipelines.
            </p>
            <h3 className="key-elements-heading">Key elements include:</h3>
            <div className="essentials-grid-styled">
              {essentials.map((item, index) => (
                <div className="essentials-card-styled" key={index}>
                  <strong>{item.title}</strong>
                  <span className="essentials-separator"> – </span>
                  <span className="essentials-desc-styled">{item.description}</span>
                </div>
              ))}
            </div>
            {/* <p className="what-is-footer">
              Proper machine learning data structuring reduces errors, enhances performance, and
              allows AI models to function reliably in real-world scenarios.
            </p> */}
          </div>
        </div>

        {/* Step-by-Step Process with Sticky Scroll */}
        <div className="sticky-scroll-section">
          <div className="sticky-scroll-header">
            <h2 className="gradient-heading">Our Data Structuring Process</h2>
            <p>At INAI Worlds, we follow a systematic approach to structure data for AI and ML projects.</p>
          </div>
          <div className="sticky-cards-container">
            {stepper.map((step, i) => (
              <div
                className="sticky-card"
                key={i}
                style={{ '--card-index': i }}
              >
                <div className="sticky-card-grid">
                  <div className="sticky-card-content">
                    <div className="sticky-card-number">{i + 1}</div>
                    <h3 className="sticky-card-title">{step}</h3>
                    {i === 0 && (
                      <div className="sticky-card-details">
                        <ul>
                          <li>Handling missing values and duplicates</li>
                          <li>Correcting errors and inconsistencies</li>
                          <li>Normalizing and standardizing data</li>
                        </ul>
                        <p>This step ensures that the data is accurate, consistent, and reliable for downstream AI model training.</p>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="sticky-card-details">
                        <ul>
                          <li>Structuring datasets into tables, files, or databases</li>
                          <li>Categorizing data based on type, domain, and usage</li>
                          <li>Ensuring logical data hierarchy and relationships</li>
                        </ul>
                        <p>Proper organization enables efficient processing, retrieval, and integration in AI & ML workflows.</p>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="sticky-card-details">
                        <ul>
                          <li>Annotating data for supervised learning tasks</li>
                          <li>Creating relevant features and attributes for model inputs</li>
                          <li>Encoding categorical variables and deriving numerical representations</li>
                        </ul>
                        <p>This step ensures data is ready for high-performance AI models, including predictive systems, generative AI, and advanced analytics.</p>
                      </div>
                    )}
                  </div>
                  {i === 0 && (
                    <div className="sticky-card-image">
                      <img
                        src={cleaningPreprocessingImg}
                        alt="Cleaning and Preprocessing Raw Data"
                        className="sticky-img"
                      />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="sticky-card-image">
                      <img
                        src={organizingDatasetsImg}
                        alt="Organizing Datasets"
                        className="sticky-img"
                      />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="sticky-card-image">
                      <img
                        src={annotationFeatureImg}
                        alt="Annotation and Feature Engineering"
                        className="sticky-img"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="after-cards-note">
        <p>Before this step, every project begins with Reliable <a href="/data-collection" className="line-link"> Data Collection for AI & ML </a>, where
        we gather high-quality raw information. Once collected, structuring prepares it for seamless integration into AI models.</p>
      </div>

        {/* Why Data Structuring Matters Section */}
        <div className="scrolling-section">
          <h2 className="gradient-heading">Why Data Structuring Matters</h2>
          <p>Structured data directly impacts the accuracy, efficiency, and scalability of AI models:</p>
        </div>

        <WhyDataStructuringCarousel />

        <BestPracticesStructuring />

        <div className="faq-full-width">
          <FAQ_Ser2 className="container" />
        </div>
      </div>

    </>
  );
};


export default Service2;
