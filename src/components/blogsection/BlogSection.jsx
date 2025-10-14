import React from 'react';
import { Link } from 'react-router-dom';
import blogImg1 from '../../assets/blog1.jpg';
import blogImg2 from '../../assets/blog2.jpg';
import blogImg3 from '../../assets/blog3.jpg';
import blogImg4 from '../../assets/blog4.jpg';
import blogImg5 from '../../assets/blog5.jpg';
import blogImg6 from '../../assets/blog6.jpg';
import blogImg7 from '../../assets/blog7.jpg';
import blogImg8 from '../../assets/blog8.jpg';
import blogImg9 from '../../assets/blog9.jpg';
import blogImg10 from '../../assets/blog10.jpg';
import blogImg11 from '../../assets/blog11.jpg';
import blogImg12 from '../../assets/blog12.jpg';

import './BlogSection.css';

const blogs = [
  {
    title: 'What Is Artificial Intelligence? The Essentials Everyone Needs to Know',
    // desc: 'Explore the latest trends in AI adoption and how companies are leveraging machine learning for real-world impact.',
    img: blogImg1,
    link: '/blog/what-is-artificial-intelligence',
  },
  {
    title: 'What is Machine Learning? Complete Guide to Types & More',
    // desc: 'Discover the must-have skills for aspiring AI/ML engineers and how to build a future-ready career.',
    img: blogImg2,
    link: '/blog/what-is-machine-learning',
  },
  {
    title: 'What is Web Scraping: Ultimate Guide for Beginners',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg3,
    link: '/blog/what-is-web-scraping',
  },
  {
    title: 'AI/ML USE IN REAL LIFE : CHANGE THE WORLD',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg4,
    link: '/blog/ai-ml-use-in-real-life-change-the-world',
  },
  {
    title: 'How an AI/ML Internship Can Change Your Career',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg5,
    link: '/blog/how-ai-ml-internship-change-career',
  },
  {
    title: 'What Makes INAI Worlds the Top AI Company?',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg6,
    link: '/blog/inai-worlds-top-ai-company',
  },
  
  {
    title: 'Exploring the Benefits of an AI/ML Internship at a Product-Based AI Company',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg7,
    link: '/blog/ai-ml-internship-benefits-product-based-ai-company',
  },
  
  {
    title: 'Top 7 Industries Being Revolutionized by AI in India',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg8,
    link: '/blog/ai-indian-top-industries',
  },
  
  {
    title: 'How AI Companies Are Transforming Businesses in 2025',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg9,
    link: '/blog/ai-companies-transforming-businesses',
  },
  
  {
    title: 'Top 5 Python Libraries for Web Scraping Every Beginner Should Know',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg10,
    link: '/blog/top-python-libraries-web-scraping',
  },
  
  {
    title: 'How Data Manipulation Powers AI Model Training: A Complete Guide',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg11,
    link: '/blog/data-manipulation-powers-ai-model-training',
  },
  
  {
    title: 'Why Real-World Projects AI/ML Internships Matter More Than Certification',
    // desc: 'A behind-the-scenes look at our AI/ML internship program and how we train the next generation of innovators.',
    img: blogImg12,
    link: '/blog/ai-ml-internship-matter-more-than-certification ',
  },
];

const BlogSection = () => (
  <section className="blog-section">
    <div className="blog-container">
      <div className="blog-header-wrapper">
        <h2 className="blog-heading">Latest from Our <span className="highlight-text">AI Blogs</span></h2>

      </div>
      <div className="blog-grid">
        {blogs.map((blog, i) => (
          <Link to={blog.link} className="blog-card-link" key={i}>
            <div className="blog-card">
              <div className="blog-img-wrap">
                <img src={blog.img} alt={blog.title} className="blog-img" />
              </div>
              <div className="blog-content">
                <div className="blog-title">{blog.title}</div>
                <div className="blog-desc">{blog.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection; 