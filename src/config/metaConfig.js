const BASE_URL = 'https://inaiworlds.com';

export const metaConfig = {
    home: {
        title: 'Best AI  Company in India | INAI Worlds - Let\\\'s Build Next Gen',
        description: 'INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth. Let\'s build the next generation.',
        // keywords: 'AI Company India, Machine Learning Services, AI Solutions, Data Science Company, Artificial Intelligence Services'
    },
    about: {
        title: 'About INAI Worlds | Leading Product-Based AI Company',
        description: 'About INAI Worlds – A leading AI company providing cutting-edge AI solutions and innovations to empower industries and shape the future of AI technology.'
    },
    services: {
        title: 'AI Module Development & AI Solutions | INAI Worlds',
        description: 'INAI Worlds builds AI modules using web scraping, data manipulation, and model training, the same proven process teach in hands-on AI/ML internships.',
        // keywords: 'AI Services, Machine Learning Solutions, Data Analytics, AI Consulting, Custom AI Development'
    },
    portfolio: {
        title: 'Portfolio | Upcoming AI Projects | INAI Worlds',
        description: 'Explore INAI Worlds’ portfolio showcasing innovative AI projects and real-world solutions developed using advanced AI technologies and expert model training.',
        // keywords: 'AI Portfolio, Case Studies, Project Showcase, AI Solutions, Our Work'
    },
    blog: {
        title: 'INAI Worlds Blog | AI Solutions & Tech Insights | INAI Worlds',
        description: 'Explore the INAI Worlds Blog for the latest AI solutions, technology insights, and expert articles to keep you informed and ahead in the world of AI innovation.',
        // keywords: 'AI Blog, Machine Learning Articles, Tech News, AI Research, Technology Insights'
    },
    contact: {
        title: 'Contact INAI Worlds | Leading AI Company in India',
        description: 'Get in touch with INAI Worlds for AI solutions, AI/ML internships, and expert AI services. Reach us via phone, email, or visit our office.',
        // keywords: 'Contact INAI, Get in Touch, AI Consultation, Support, Business Inquiry'
    },
    webScraping: {
        title: 'Web Scraping in Python for AI Model Building | INAI Worlds',
        description: 'INAI Worlds uses web scraping in python to build AI modules and offers hands-on AI/ML internship for real-world learning and development.',
        // keywords: 'Web Scraping, Data Extraction, Web Crawling, Data Collection, Automated Data'
    },
    dataManipulation: {
        title: 'Data Manipulation in AI model building | INAI Worlds',
        description: 'INAI Worlds uses data manipulation to prepare AI modules and teaches these essential skills in hands-on AI/ML internships for real-world experience.',
        // keywords: 'Data Manipulation, Data Cleaning, Data Processing, Data Transformation, Data Analysis'
    },
    modelTraining: {
        title: 'AI Model Training for Generative AI and ML | INAI Worlds',
        description: 'AI model training at INAI Worlds focuses on generative AI and ML, building smarter, more powerful models to fuel real-world applications and innovations.',
        // keywords: 'Model Training, Machine Learning, AI Models, Deep Learning, Predictive Modeling'
    },
    internship: {
        title: 'AI/ML Internship in Surat | INAI Worlds',
        description: 'Join our AI/ML internship program in Surat. Gain hands-on experience with cutting-edge AI technologies and real-world projects.',
        // keywords: 'AI Internship, Machine Learning Internship, Surat, AI Training, Tech Internship'
    },
    company: {
        title: 'INAI Worlds - Leading AI Company in India',
        description: 'INAI Worlds is a premier AI company in India, delivering innovative AI solutions and services to businesses worldwide.',
        // keywords: 'AI Company, Artificial Intelligence Company, Machine Learning Services, AI Solutions, Tech Company'
    },
    team: {
        title: 'Our Team | INAI Worlds',
        description: 'Meet the talented team behind INAI Worlds. Our experts in AI, machine learning, and data science are driving innovation.',
        // keywords: 'Our Team, AI Experts, Machine Learning Team, Data Scientists, Tech Team'
    }, whatIsAI: {
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
};

export const getMetaForPath = (path) => {
    const pathKey = path
        .replace(/^\/+|\/+$/g, '') // Remove leading/trailing slashes
        .split('/')
        .filter(Boolean)[0] || 'home';

    return metaConfig[pathKey] || metaConfig.home;
};

export const getCanonicalUrl = (path = '') => {
    return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
