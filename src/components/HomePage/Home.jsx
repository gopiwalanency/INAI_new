import Hero from '../Hero.jsx';
// import Marquee from '../components/HomePage/Marquee.jsx';
import CoreFeatures from '../corefeaturespage/CoreFeatures.jsx';
// import Partners from '../components/Partners';
import InfoSection from '../InfoSection.jsx';
import './Home.css';
import FAQ from '../faqpage/FAQ.jsx';
import CTA from '../CTA.jsx';
import UpcomingProjectsSection from '../projects/UpcomingProjectsSection.jsx';
import RealWorldTraining from '../../pages/RealWorldTraining.jsx';
import CoreElements from '../../pages/CoreElements.jsx';
import ResultsStatsSection from '../ResultsStatsSection.jsx';
import BlogSection from '../blogsection/BlogSection.jsx';
import Reviews from '../../pages/Reviews.jsx';
import WhatIsInaiSection from '../../pages/WhatIsInaiSection.jsx';
import Marquee from './Marquee.jsx';
import OurSeamless from './OurSeamless.jsx';
import WhyChoose from './WhyChoose.jsx';
import BlogSectionHome from '../blogsection/BlogSectionHome.jsx';
import { Helmet } from 'react-helmet-async';
import Inai from '../Inai.jsx';
import WhoWeAre from './WhoWeAre.jsx';
import ArchitectsSection from '../ArchitectsSection.jsx';

const Home = () => {
  const homeHeroData = {
    title: "Best AI Company Delivering Future-Ready Solutions & Career-Defining AI/ML Internship",
    subtitle: "INAI Worlds is proudly recognized among the best AI companies building India's next generation of AI tech.We build innovative AI solutions powered by machine learning, deep learning, generative AI and NLP creating AI products that deliver real-world impact.",
    tagline: "Innovative AI Tool to Streamline",
    buttons: [
      {
        text: "Contact Us",
        link: "/contact",
        className: "btn-primary-hero"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Best AI  Company in India | INAI Worlds - Let’s Build Next Gen</title>
        <meta
          name="description"
          content="INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth. Let’s build the next generation."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://inaiworlds.com/#organization",
                "name": "INAI Worlds",
                "url": "https://inaiworlds.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
                  "width": "500",
                  "height": "500"
                },
                "description": "INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth. Let's build the next generation.",
                "foundingDate": "2023",
                "foundingLocation": "Surat, India",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "value": "11-50"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "706, 7th Floor, Shivalik Shilp, Near Iscon Circle, SG Highway",
                  "addressLocality": "Ahmedabad",
                  "addressRegion": "Gujarat",
                  "postalCode": "380015",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 70164 88265",
                  "contactType": "customer service",
                  "email": "contact@inaiworlds.com",
                  "availableLanguage": ["English", "Hindi", "Gujarati"],
                  "contactOption": "TollFree",
                  "areaServed": "Worldwide"
                },
                "sameAs": [
                  "https://x.com/Inai_Worlds",
                  "https://www.instagram.com/inai_worlds/",
                  "https://www.youtube.com/@INAIWorldsPVTLTD",
                  "https://www.linkedin.com/company/inai-worlds-pvt-ltd",
                  "https://in.pinterest.com/Inai_Worlds"
                ],
                "keywords": [
                  "AI Company India",
                  "Machine Learning Services",
                  "AI Solutions",
                  "Data Science Company",
                  "Artificial Intelligence Services"
                ]
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is INAI Worlds, and what do you specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "INAI Worlds is a leading Best AI company, specializing in real-world AI development, generative AI solutions, and machine learning hands-on training that equip students and businesses with industry-ready skills and intelligent technologies."
                }
              },
              {
                "@type": "Question",
                "name": "Where is INAI World Pvt. Ltd. located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "INAI World Pvt. Ltd is located in Surat, Gujarat. We offer our offline AI/ML internship with live projects at our Surat campus, providing hands-on training, real datasets, and industry-standard tools in a tech-driven environment."
                }
              },
              {
                "@type": "Question",
                "name": "Why is INAI Worlds considered one of the Best AI Company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "INAI Worlds is recognized as one of the best AI company for its innovative AI solutions, real-world product development, and industry-focused internship programs that prepare learners for successful careers in artificial intelligence."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="home">
        <Hero
          tagline={homeHeroData.tagline}
          title={<>Best AI Company <br /> <span className="highlight-text1"> Next-Gen AI Development</span></>}
          subtitle={homeHeroData.subtitle}
          buttons={homeHeroData.buttons}
        />
        <UpcomingProjectsSection />
        <WhoWeAre />
        <CoreFeatures />
        {/* <Inai /> */}
        {/* <RealWorldTraining /> */}
        {/* <CoreElements /> */}
        <Marquee />
        <ResultsStatsSection />
        <OurSeamless />
        <WhyChoose />
        {/* <Reviews /> */}
        {/* <ArchitectsSection /> */}
        <FAQ />
        {/* <BlogSectionHome /> */}
      </div>
    </>
  );
};

export default Home; 