import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './InfoSection.css';
import section1 from '../assets/section1.jpg';
import section2 from '../assets/section2.jpg';
import sectionBg from '../assets/section-bg.png';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';

const testimonials = [
  {
    stars: 5,
    quote: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    name: "Krushnarajsinh Parmar",
    title: "CEO & Founder",
    image: user1
  },
  {
    stars: 5,
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    name: "Jay Gelani",
    title: "Co-Founder",
    image: user2
  },
  {
    stars: 5,
    quote: "Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back and see you do it again, and they will want to bring others and show them how well you do what you do.",
    name: "Drashti Vaghani",
    title: "HRO",
    image: user3
  },
];

const InfoSection = () => {
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

  const parallaxStyle = {
    transform: `translate(${mousePosition.x / -50}px, ${mousePosition.y / -50}px)`,
  };

  return (
    <section className="info-section">
      <img src={sectionBg} alt="Decorative background shape" className="info-bg-shape" style={parallaxStyle} />
      <div className="">
        <div className="info-section-container">
          <div className="info-grid">
            <div className="info-images">
              <img src={section1} alt="AI generated horse" className="info-image-1" />
              {/* <img src={section2} alt="AI generated portal" className="info-image-2" /> */}
            </div>
            <div className="info-content">
              <h2 className="info-title">
                Welcome to INAI — The Smarter Side of Artificial Intelligence
              </h2>
              <p className="info-description">
                At INAI Worlds, we're building something more advanced than today's typical AI models. While most of the world is focused on Generative AI (Gen-AI)—which creates content like text, images, or code. INAI is built on the idea of Generative Intelligence (GI), where AI can think, learn, and grow just like a human mind.
              </p>
            </div>
          </div>

          <div className="testimonials-content">
            <div className="testimonials-header">
              <span className="testimonials-tag">INNOVATIVE AI SERVICES</span>
              <h2 className="testimonials-title">
                Customer Stories About Our AI Solutions
              </h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.stars)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-title">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection; 