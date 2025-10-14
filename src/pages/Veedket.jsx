import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Inai_life.css';

import img1 from "../assets/portfolio/veedket.png";
import img2 from "../assets/portfolio/VEEDKET_2.png";
import img3 from "../assets/portfolio/VEEDKET_3.png";
import img4 from "../assets/portfolio/VEEDKET_4.png";

const Veedket = () => {
  useEffect(() => {
    // Set document title
    document.title = "Veedket | Video Exhibition & Creator Platform | INAI Worlds";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Explore Veedket by INAI Worlds, a video exhibition platform that empowers creators, educators, and professionals to transform ideas into engaging visual content.";

    // Set Open Graph tags
    const ogTags = {
      'og:title': "Veedket | Video Exhibition & Creator Platform | INAI Worlds",
      'og:description': "Explore Veedket by INAI Worlds, a video exhibition platform that empowers creators, educators, and professionals to transform ideas into engaging visual content.",
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': "Veedket | Video Exhibition & Creator Platform | INAI Worlds",
      'twitter:description': "Explore Veedket by INAI Worlds, a video exhibition platform that empowers creators, educators, and professionals to transform ideas into engaging visual content."
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
        <meta charSet="utf-8" />
        <title>Veedket | Video Exhibition & Creator Platform | INAI Worlds</title>
        <meta
          name="description"
          content="Explore Veedket by INAI Worlds, a video exhibition platform that empowers creators, educators, and professionals to transform ideas into engaging visual content."
        />
        <script type="application/ld+json">
          {JSON.stringify({
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
                "name": "Veedket",
                "image": "https://inaiworlds.com/assets/veedket-DJOSdg-H.png",
                "description": "Veedket is an AI-powered video content generation and marketing platform by INAI Worlds, helping businesses create impactful and personalized video campaigns.",
                "brand": {
                  "@type": "Brand",
                  "name": "INAI Worlds"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "https://www.instagram.com/veedketworld/"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inaiworlds.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://inaiworlds.com/portfolio" },
                  { "@type": "ListItem", "position": 3, "name": "Veedket", "item": "https://inaiworlds.com/portfolio/veedket" }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

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
                  <span className="info-value">GEN-AI creation</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value"> Contain creation with AI</span>
                </div>
                <div className="info-item full-width">
                  <span className="info-label">Project URL</span>
                  <a href="https://www.instagram.com/veedketworld/" target="_blank" rel="noopener noreferrer" className="info-link">
                    https://www.instagram.com/veedketworld/
                  </a>
                </div>
              </div>
            </div>

            <div className="project-description">
              <h3>What is VEEDKET ?</h3>
            </div>
            <span className='project-description_span'>VEEDKET means video exhibition with explore and development market. This is project for content creators and also for educators. If you are in technical field than it will also help you. With this you can convert your imagination in graphical foam.</span>
          </div>
        </div>
      </section>

    </>
  )
}

export default Veedket