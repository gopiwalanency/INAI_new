import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Inai_life.css';

import img1 from "../assets/portfolio/offiket.png";
import img2 from "../assets/portfolio/offiket_2.png";
import img3 from "../assets/portfolio/offiket_3.png";
import img4 from "../assets/portfolio/offiket_4.png";

const Offiket = () => {
  useEffect(() => {
    // Set document title
    document.title = "Offiket | Office Buying & Selling Platform | INAI Worlds";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market.";

    // Set Open Graph tags
    const ogTags = {
      'og:title': "Offiket | Office Buying & Selling Platform | INAI Worlds",
      'og:description': "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market.",
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': "Offiket | Office Buying & Selling Platform | INAI Worlds",
      'twitter:description': "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market."
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
        <title>Offiket | Office Buying & Selling Platform | INAI Worlds</title>
        <meta
          name="description"
          content="Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market."
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
                "name": "Offiket",
                "image": "https://inaiworlds.com/assets/offiket-WrYoZ-Qf.png",
                "description": "Offiket by INAI Worlds is an AI-powered business automation tool designed to streamline operations, enhance productivity, and enable data-driven decision-making.",
                "brand": {
                  "@type": "Brand",
                  "name": "INAI Worlds"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inaiworlds.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.inaiworlds.com/portfolio" },
                  { "@type": "ListItem", "position": 3, "name": "Offiket", "item": "https://inaiworlds.com/portfolio/offiket" }
                ]
              }
            ]
          })}
        </script>
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
                  <span className="info-value">Office solutions</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Model</span>
                  <span className="info-value">Buy and Sell solution with AI skills</span>
                </div>
              </div>
            </div>

            <div className="project-description">
              <h3>What is OFFIKET?</h3>
            </div>
            <span className='project-description_span'>OFFIKET is project for buyer and seller. If anyone want to buy office or sell they can join this. There have also some features for other options. So in this project of INAI WORLDS PVT LTD office market will influence that’s why it’s called - OFFIKET .</span>
          </div>
        </div>
      </section>


    </>
  )
}

export default Offiket