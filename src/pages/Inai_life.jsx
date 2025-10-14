import React from 'react';
import './Inai_life.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from "../assets/portfolio/inai_post.jpg";
// import img2 from "../../assets/portfolio/INAI_WORLD.jpg";
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

function Inai_life() {
  useEffect(() => {
    // Set document title
    document.title = "INAI | India's First AI Virtual Model | INAI Worlds";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Meet India's First AI Virtual Model INAI, innovating the future with cutting-edge AI technology, showcased exclusively by INAI Worlds. Experience innovation today!";

    // Set Open Graph tags
    const ogTags = {
      'og:title': "INAI | India's First AI Virtual Model | INAI Worlds",
      'og:description': "Meet India's First AI Virtual Model INAI, innovating the future with cutting-edge AI technology, showcased exclusively by INAI Worlds. Experience innovation today!",
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': "INAI | India's First AI Virtual Model | INAI Worlds",
      'twitter:description': "Meet India's First AI Virtual Model INAI, innovating the future with cutting-edge AI technology, showcased exclusively by INAI Worlds. Experience innovation today!"
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
        <title>INAI | India's First AI Virtual Model | INAI Worlds</title>
        <meta
          name="description"
          content="Meet India's First AI Virtual Model INAI, innovating the future with cutting-edge AI technology, showcased exclusively by INAI Worlds. Experience innovation today!"
        />

        <script type='application/ld+json'>{`
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
      "name": "INAI Life",
      "image": "https://inaiworlds.com/assets/inai_post-BxzS7iP4.jpg",
      "description": "INAI Life is an advanced AI-powered experience designed by INAI Worlds, delivering innovative interaction and intelligent automation for modern users.",
      "brand": {
        "@type": "Brand",
        "name": "INAI Worlds"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inaiworlds.com/" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://inaiworlds.com/portfolio" },
        { "@type": "ListItem", "position": 3, "name": "INAI Life", "item": "https://inaiworlds.com/portfolio/inai-life" }
      ]
    }
  ]
}

      `}</script>
      </Helmet>
      {/* Meta tags are now set via JavaScript */}
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
              {/* <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide> */}
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
                  <span className="info-value">AI Virtual Model</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value">CGI with Intelligence Skills</span>
                </div>
                <div className="info-item full-width">
                  <span className="info-label">Project URL</span>
                  <a href="https://www.instagram.com/inai_life/" target="_blank" rel="noopener noreferrer" className="info-link">
                    instagram.com/inai_life
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <h3>What is INAI?</h3>
            </div>
            <span className='project-description_span'>INAI is India's own AI system where everyone can find their solutions. We are work on future tech like MLP and Gen-AI. We build developers and work with them. we just want to develop India's first AI company like Open AI and Deep Seek. so join with us and take part of this journey.</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inai_life;
