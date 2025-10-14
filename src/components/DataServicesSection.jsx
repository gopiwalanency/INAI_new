import React from 'react';
import { Link } from 'react-router-dom';
import { IoGitNetworkOutline, IoCameraOutline, IoAnalyticsOutline } from 'react-icons/io5';
import './DataServicesSection.css';

const servicesData = [
  {
    icon: <IoGitNetworkOutline />,
    title: 'Web scrapping',
    description: 'For collecting data we have to use data scrapping and with that data we can build our own AI based model',
    link: '/service1',
  },
  {
    icon: <IoCameraOutline />,
    title: 'Data manipulation',
    description: 'After scrapp all the data we have to manupulate data with using some python library.',
    link: '/service2',
  },
  {
    icon: <IoAnalyticsOutline />,
    title: 'Model training',
    description: 'Model is always work on your behaviour of Question. we have to achive 90% accuracy for it.',
    link: '/service3',
  },
];

const DataServicesSection = () => {
  return (
    <section className="data-services-section">
      <div className="data-services-container">
        <div className="data-services-left">
          <span className="data-services-tag">INNOVATIVE AI SERVICES</span>
          <h2 className="data-services-title">
            Crafting Human Level Intelligence Through Purpose Driven AI Innovation
          </h2>
          <p className="data-services-description">
            Powerful AI systems rely on clean, structured, and meaningful data which starts with expert-level data manipulation. At INAI Worlds, you will learn how to develop essential skills in data cleaning and transformation using trusted global data science tools. Our program focuses on data manipulation in AI/ML training to ensure that learners master the professional techniques to clean, filter, and prepare real-world data for machine learning models.
          </p>
          <Link to="#" className="btn btn-primary-data">Learn More</Link>
        </div>
        <div className="data-services-right">
          {servicesData.map((service, index) => (
            <Link to={service.link} key={index} className="service-card-link">
              <div className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataServicesSection; 