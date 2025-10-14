import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
// import CTA from '../components/CTA';
import './Services.css';
import "../components/header/Header.css"
import EthicalWebScraping from "../assets/services/Ethical_Web_Scraping.png";
import DataStructuring from "../assets/services/Data_Structuring.png";
import ModelTraining from "../assets/services/Model_Training.png";
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseINAISection from '../components/WhyChooseINAISection';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';
import '../components/aboutpage/CompanyVMVCarousel.css';
import { Helmet } from 'react-helmet-async';
const vmvData = [
  {
    label: 'Data Collection',
    icon: <FaEye className="vmv-carousel-icon-img" />,
    content: `From scraping web data to real-time feeds, our data collection solutions feed both model training and internal learning. It's all about data, accuracy data.`,
  },
  {
    label: 'Data Manipulation',
    icon: <FaBullseye className="vmv-carousel-icon-img" />,
    content: `Before training, it is cleaning, shaping and refining. Our dedicated team transforms raw data into meaningful, machine-related datasets with technique, pipelines and good practices.`,
  },
  {
    label: 'Model Training',
    icon: <FaStar className="vmv-carousel-icon-img" />,
    content: `We build models, in-house, for real-world uses. And we open the doors to that to learners. The interns collaborate to create, test and study the workflow of real AI engineering. It is not theory, it’s practical experience.`,
  },
];

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Module Development & AI Solutions | INAI Worlds</title>
        <meta
          name="description"
          content="INAI Worlds builds AI modules using web scraping, data manipulation, and model training, the same proven process teach in hands-on AI/ML internships."
        />
       <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://inaiworlds.com/"},
                  {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://inaiworlds.com/services"}
                ]
              },
              {
                "@type": "Service",
                "name": "AI Module Development & AI Solutions",
                "description": "INAI Worlds builds AI modules using web scraping, data manipulation, and model training, the same proven process teach in hands-on AI/ML internships.",
                "provider": {
                  "@type": "Organization",
                  "name": "INAI Worlds",
                  "url": "https://inaiworlds.com/"
                },
                "serviceType": "AI Development",
                "areaServed": {"@type": "Country", "name": "India"},
                "url": "https://inaiworlds.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="page-container">
        {/* Hero Section */}
        <Hero
          tagline="Welcome to INAI Worlds – Building the Future with Data and AI"
          title="Our Core Services"

          isShort={true}

        />

        <section className="vmv-carousel-section">
          <div className="container mx-auto px-4 py-20 space-y-32">

            <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
              <div className="w-full md:w-1/2">
                <img
                  src={EthicalWebScraping}
                  alt="Vision"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
                />
              </div>

              <div className="w-full md:w-1/2 sec_con">
                <h2 className="vision-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                  🔹 Data Collection
                </h2><br />
                <p className="vision-content text-white leading-relaxed mb-4">
                  From scraping web data to real-time feeds, our data collection solutions feed both model training and internal learning. It's all about data, accuracy data.
                </p><br />
                <a href="/services/data-collection" className="btn-get-in-touch">Read More</a>

              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 sec_com">
              <div className="w-full md:w-1/2 sec_con">
                <h2 className="mission-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                  🔹 Data Manipulation
                </h2><br />
                <p className="mission-content text-white leading-relaxed mb-4 pt-5">
                  Before training, it is cleaning, shaping and refining. Our dedicated team transforms raw data into meaningful, machine-related datasets with technique, pipelines and good practices.
                </p><br />
                <a href="/services/data-structuring" className="btn-get-in-touch">Read More</a>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src={DataStructuring}
                  alt="Mission"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
                />
              </div>

            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
              <div className="w-full md:w-1/2 ">
                <img
                  src={ModelTraining}
                  alt="Core Value"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-md ser_img"
                />
              </div>

              <div className="w-full md:w-1/2 sec_con">
                <h2 className="core-value-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                  🔹 Model Training
                </h2><br />
                <p className="core-value-content text-white leading-relaxed mb-4">
                  We build models, in-house, for real-world uses. And we open the doors to that to learners. The interns collaborate to create, test and study the workflow of real AI engineering. It is not theory, it’s practical experience.
                </p><br />
                <a href="/services/model-training" className="btn-get-in-touch">Read More</a>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection />
        {/* Other Sections */}
        {/* <DataServicesSection /> */}
        {/* <ArchitectsSection /> */}
        {/* <FAQ /> */}
        <WhyChooseINAISection />
        <CTA_service />
      </div>
    </>
  );
};

export default Services;
