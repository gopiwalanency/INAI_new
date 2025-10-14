import React from 'react';
import './PortfolioIntro.css';

import authorImage from '../assets/user1.jpg';
import gridImage1 from '../assets/inai post.jpg';
import gridImage2 from '../assets/portfolio/influwket.png';
import gridImage3 from '../assets/portfolio/offiket.png';
import gridImage4 from '../assets/portfolio/veedket.png';
import WhyPortfolio from './WhyPortfolio';

const PortfolioIntro = () => {
  return (
    <section className="portfolio-intro-section">
      <div className="container">
        


        <section className="zigzag-section">
          <div className="zigzag-row">
            <div className="zigzag-image">
              <img src={gridImage1} alt="INAI Worlds" />
            </div>
            <div className="zigzag-content">
              <h3>INAI : India’s First AI Virtual Model</h3>
              <p>INAI stands as India’s first AI-based virtual assistant specially designed to understand human emotions and interact in real-time. From friendly conversations to emotional support, INAI brings intelligent companionship into everyday life.</p>
              <a href="/portfolio/Inai-life" className="read-more-btn">Read More</a>
            </div>
          </div>

          <div className="zigzag-row reverse">
            <div className="zigzag-image">
              <img src={gridImage2} alt="INFLUWKET" />
            </div>
            <div className="zigzag-content">
              <h3>INFLUWKET : Smart Assistant for Digital Creators</h3>
              <p>Elevate your content game with INFLUWKET, an AI-powered tool that analyzes trending topics, suggests high-performing hashtags, and auto-generates engaging posts. Perfect for creators who want to grow faster with less effort.</p>
              <a href="/portfolio/Influwket" className="read-more-btn">Read More</a>
            </div>
          </div>

          
          <div className="zigzag-row ">
            <div className="zigzag-image">
              <img src={gridImage4} alt="VEEDKET" />
            </div>
            <div className="zigzag-content">
              <h3>VEEDKET : Turn Ideas into Videos</h3>
              <p>VEEDKET transforms written scripts into engaging videos using generative AI. Perfect for creators and brands—no video editing experience required. Just input your script and let VEEDKET handle the rest.</p>
              <a href="/portfolio/Veedket" className="read-more-btn">Read More</a>
            </div>
          </div>

          <div className="zigzag-row reverse">
            <div className="zigzag-image">
              <img src={gridImage3} alt="OFFIKET" />
            </div>
            <div className="zigzag-content">
              <h3>OFFIKET : Smart Commercial Office Listings</h3>
              <p>OFFIKET is an AI-powered real estate platform designed to list, showcase, and manage commercial office spaces. It allows users to display office dimensions, location details, pricing, and availability for sale or rent—all in one smart interface.</p>
              <a href="/portfolio/Offiket" className="read-more-btn">Read More</a>
            </div>
          </div>

        </section>


        <WhyPortfolio />


      </div>
    </section>
  );
};

export default PortfolioIntro; 