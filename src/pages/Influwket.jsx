import React, { useEffect } from 'react'
import './Inai_life.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../assets/portfolio/influwket.png";
import img2 from "../assets/portfolio/influwket_1.png";
import img3 from "../assets/portfolio/influwket_2.png";
import img4 from "../assets/portfolio/influwket_4.png";
import { Helmet } from 'react-helmet-async';

const Influwket = () => {
  useEffect(() => {
    // Set document title
    document.title = "Influwket | India's AI-Powered Social Media | INAI Worlds";
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Discover Influwket by INAI Worlds an AI-driven influencer marketing platform designed to connect brands and influencers with precision and impactful results.";
    
    // Set Open Graph tags
    const ogTags = {
      'og:title': "Influwket | India's AI-Powered Social Media | INAI Worlds",
      'og:description': "Discover Influwket by INAI Worlds an AI-driven influencer marketing platform designed to connect brands and influencers with precision and impactful results.",
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': "Influwket | India's AI-Powered Social Media | INAI Worlds",
      'twitter:description': "Discover Influwket by INAI Worlds an AI-driven influencer marketing platform designed to connect brands and influencers with precision and impactful results."
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, []);
  
  return (
    <>
    <Helmet>
      <title>Influwket | India's AI-Powered Social Media | INAI Worlds</title>
      <meta
        name="description"
        content="Discover Influwket by INAI Worlds an AI-driven influencer marketing platform designed to connect brands and influencers with precision and impactful results."
      />

      <script>{`
      {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "INAI Worlds",
      "url": "https://inaiworlds.com/",
      "logo": "https://inaiworlds.com/assets/INAI-BywOMVzP.png"
    },
    {
      "@type": "Product",
      "name": "Influwket",
      "image": "https://inaiworlds.com/assets/influwket-C1AVqIBy.png",
      "description": "Influwket by INAI Worlds is an AI-driven influencer and marketing intelligence platform, enabling brands to discover, analyze, and collaborate efficiently.",
      "brand": {
        "@type": "Brand",
        "name": "INAI Worlds"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inaiworlds.com/" },
        { "@type": "ListItem", "position": 2, "name": "portfolio", "item": "https://inaiworlds.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "Influwket", "item": "https://inaiworlds.com/portfolio/influwket" }
      ]
    }
  ]
}

      `}</script>
    </Helmet>
      {/* Meta tags are now set via JavaScript */}
      
      {/* Upcoming Project Banner */}
      <h1 className="upcoming-banner" style={{
        backgroundColor: '#0A0C18',
        color: '#fff',
        textAlign: 'center',
        padding: '12px 0',
        fontWeight: 'bold',
        // fontSize: '18px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
         Upcoming Project - Stay Tuned for the Launch! 
      </h1>

      <section className="project-detail-section">
        {/* <h1 className="page-title">INAI LIFE</h1> */}
        <div className="project-grid">
          {/* Left Side - Image Slider */}
          <div className="image-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={img3} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={img4} alt="Slide 2" /></SwiperSlide>
              {/* Add more images if needed */}
            </Swiper>
          </div>

          {/* Right Side - Info */}
          <div className="project-info-box">
            <div className="project-info">
              <div className="info-header">
                <h2>Project Information</h2>
                <div className="header-line"></div>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Category</span>
                  <span className="info-value">Social media model</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value">Gen AI tech with social media featured-services</span>
                </div>
                <div className="info-item full-width">
                  <span className="info-label">Project URL</span>
                  <a href="https://www.instagram.com/influketworld/" target="_blank" rel="noopener noreferrer" className="info-link">
                    https://www.instagram.com/influketworld/
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <h3>What is INFLUWKET?</h3>
            </div>
            <span className='project-description_span'>INFLUWKET is one of the projects of INAI WORLDS PVT LTD. In this project we want to build India’s own social media app with using some AI elements. We ensure that after it social media market will influence high so that’s why we say it influence world of social market and it’s called - influwket.</span>
          </div>
        </div>
      </section>

    </>
  )
}

export default Influwket