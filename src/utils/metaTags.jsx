import { Helmet } from 'react-helmet-async';

export const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

// Common meta tags configuration
export const metaConfig = {
  home: {
    title: 'Best AI Company in India | INAI Worlds - Let\'s Build Next Gen',
    description: 'INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth.',
    keywords: 'AI Company India, Machine Learning Services, AI Solutions, Data Science Company, Artificial Intelligence Services'
  },
  about: {
    title: 'About Us - INAI Worlds | Leading AI Company in India',
    description: 'Learn about INAI Worlds, a leading AI company in India. Discover our mission, vision, and the team behind our innovative AI solutions.',
    keywords: 'About INAI, AI Company About, Our Team, Company History, AI Experts'
  },
  services: {
    title: 'AI Services & Solutions - INAI Worlds',
    description: 'Explore our comprehensive AI services including web scraping, data manipulation, and model training. Custom AI solutions for your business needs.',
    keywords: 'AI Services, Machine Learning Solutions, Data Analytics, AI Consulting, Custom AI Development'
  },
  portfolio: {
    title: 'Our Portfolio - INAI Worlds AI Projects',
    description: 'Discover our portfolio of successful AI projects and solutions. See how we help businesses transform with artificial intelligence.',
    keywords: 'AI Portfolio, Case Studies, Project Showcase, AI Solutions, Our Work'
  },
  blog: {
    title: 'AI & Tech Blog - Latest Insights by INAI Worlds',
    description: 'Stay updated with the latest trends and insights in AI, machine learning, and technology from INAI Worlds experts.',
    keywords: 'AI Blog, Machine Learning Articles, Tech News, AI Research, Technology Insights'
  },
  whatIsAI: {
    title: 'What Is Artificial Intelligence? Essential Guide | INAI Worlds',
    description: 'Learn what artificial intelligence is, how it works, and its impact on industries. Discover AI basics and trends in this detailed blog by INAI Worlds.',
    keywords: 'What is AI, Artificial Intelligence Guide, AI Basics, AI Technology, AI Explained'
  },
  whatIsML: {
    title: 'What Is Machine Learning? A Complete Guide | INAI Worlds',
    description: 'Understand machine learning, its types, and applications. Learn how ML powers AI solutions and transforms businesses across industries.',
    keywords: 'Machine Learning, ML Guide, AI ML Basics, ML Applications, Machine Learning Types'
  },
  webScraping: {
    title: 'What is Web Scraping? Ultimate Guide | INAI Worlds',
    description: 'Learn about web scraping, its uses, and how it powers data collection for AI and machine learning projects. Expert insights from INAI Worlds.',
    keywords: 'Web Scraping, Data Extraction, Web Crawling, Data Collection, Web Scraping Tools'
  },
  aiInternship: {
    title: 'AI/ML Internship in Surat | Hands-on Training | INAI Worlds',
    description: 'Join our AI/ML internship program in Surat. Gain practical experience in artificial intelligence and machine learning with industry experts.',
    keywords: 'AI Internship, ML Training, AI Course Surat, Machine Learning Internship, AI Certification'
  },
  realWorldAI: {
    title: 'Real-World AI/ML Applications | Industry Use Cases | INAI Worlds',
    description: 'Explore real-world applications of AI and machine learning across various industries. See how businesses leverage AI for innovation and growth.',
    keywords: 'AI Applications, ML Use Cases, AI in Business, Real World AI, Industry Applications'
  },
  contact: {
    title: 'Contact Us - INAI Worlds AI Solutions',
    description: 'Get in touch with INAI Worlds for AI consulting, services, and solutions. We\'d love to hear about your project.',
    keywords: 'Contact INAI, Get in Touch, AI Consultation, Support, Business Inquiry'
  }
};

export const withMetaTags = (Component, metaKey) => {
  return (props) => {
    const meta = metaConfig[metaKey] || metaConfig.home;
    return (
      <>
        <MetaTags {...meta} />
        <Component {...props} />
      </>
    );
  };
};
