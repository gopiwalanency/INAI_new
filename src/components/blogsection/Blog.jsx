import React from 'react';
import BlogSection from './BlogSection.jsx';
import CTA from '../CTA.jsx';
import Footer from '../footer/Footer.jsx';
import './Blog.css';
import { Helmet } from 'react-helmet-async';
import { MetaTags } from '../../utils/metaTags.jsx';

const Blog = () => {
  return (
    <>
      <MetaTags 
        title="INAI Worlds Blog | AI Solutions & Tech Insights | INAI Worlds"
        description="Explore the INAI Worlds Blog for the latest AI solutions, technology insights, and expert articles to keep you informed and ahead in the world of AI innovation."
        keywords="AI Blog, Machine Learning Articles, Tech News, AI Research, Technology Insights"
      />
      <Helmet>
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://inaiworlds.com/blog",
      "url": "https://inaiworlds.com/blog",
      "name": "INAI Worlds Blog | AI Solutions & Tech Insights | INAI Worlds",
      "isPartOf": {
        "@id": "https://inaiworlds.com/#website"
      },
      "description": "Explore the INAI Worlds Blog for the latest AI solutions, technology insights, and expert articles to keep you informed and ahead in the world of AI innovation.",
      "breadcrumb": {
        "@id": "https://inaiworlds.com/blog#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://inaiworlds.com/blog"
          ]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://inaiworlds.com/blog#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://inaiworlds.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://inaiworlds.com/blog"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://inaiworlds.com/#website",
      "url": "https://inaiworlds.com/",
      "name": "INAI Worlds",
      "description": "INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth. Let’s build the next generation.",
      "publisher": {
        "@id": "https://inaiworlds.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://inaiworlds.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://inaiworlds.com/#organization",
      "name": "INAI Worlds",
      "url": "https://inaiworlds.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://inaiworlds.com/#logo",
        "url": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
        "contentUrl": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
        "width": 1515,
        "height": 698,
        "caption": "INAI Worlds"
      },
      "image": {
        "@id": "https://inaiworlds.com/#logo"
      }
    }
  ]
}
`}</script>
      </Helmet>
      <div className="blog-page">
        <BlogSection />
        {/* <CTA /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Blog; 