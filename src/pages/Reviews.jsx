import React from 'react';
import './review.css';
import r1 from '../assets/r1.webp';
import jay from '../assets/r2.webp';
import drashti from '../assets/r3.webp';

const reviews = [
  {
    stars: 5,
    text: 'INAI Worlds transformed our approach to AI implementation. Their team helped us identify key areas where AI could make the most impact, and the results have been outstanding.',
    name: 'Emily Carter',
    role: 'Founder',
    img: jay,
  },
  {
    stars: 5,
    text: 'As a Co-Founder, I was initially skeptical about AI integration, but INAI Worlds proved me wrong. Their solutions are not just technically sound but also highly practical and user-friendly.',
    name: 'James Bennett',
    role: 'Co-Founder',
    img: r1,
  },
  {
    stars: 5,
    text: 'The HR automation system developed by INAI Worlds has saved us countless hours of manual work. Their attention to detail and understanding of our needs was exceptional.',
    name: 'Fatima Al Suwaidi',
    role: 'HRO',
    img: drashti,
  },
];

const Reviews = () => (
  <div className="homepage-reviews-section">
    <div className="homepage-reviews-header">
      <div className="homepage-reviews-subtitle">INNOVATIVE AI SERVICES</div>
      <h2 className="homepage-reviews-title">Customer Stories About Our <span className="highlight-text">AI Solutions</span></h2>
    </div>
    <div className="homepage-reviews-cards">
      {reviews.map((review, idx) => (
        <div className="homepage-review-card" key={idx}>
          <div className="homepage-review-stars">{'★'.repeat(review.stars)}</div>
          <div className="homepage-review-text">"{review.text}"</div>
          <div className="homepage-review-user">
            <img src={review.img} alt={review.name} className="homepage-review-avatar" />
            <div>
              <div className="homepage-review-name">{review.name}</div>
              <div className="homepage-review-role">{review.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Reviews; 