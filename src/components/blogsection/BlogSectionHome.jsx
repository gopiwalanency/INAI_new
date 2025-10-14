import React from 'react';
import { Link } from 'react-router-dom';
import blogImg1 from '../../assets/blog1.jpg';
import blogImg2 from '../../assets/blog2.jpg';
import blogImg3 from '../../assets/blog3.jpg';

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
];

const BlogSectionHome = () => (
    <section className="blog-section" style={{ marginTop: '50px' }}>
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
                <Link to="/blog" className="view-all-btn">View All Blogs</Link>
            </div>
        </div>
    </section>
);

export default BlogSectionHome; 