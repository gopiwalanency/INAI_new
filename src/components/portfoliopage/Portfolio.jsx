import Hero from '../Hero';
import PortfolioIntro from '../PortfolioIntro';
import './Portfolio.css';
import CTA_Portfolio from './CTA_Portfolio';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const portfolioHeroData = {
    tagline: "Our AI Innovation Portfolio",
    title: "Inside INAI Worlds: Real AI Innovations",
    subtitle: "At INAI Worlds, we don’t just talk about innovation, we build it. Every AI module we craft is the result of our hands-on development, real-world testing, and a relentless drive to solve industry-specific challenges. Our portfolio reflects the future of AI, created today by a team of experts and emerging talents.",
    buttons: [
      { text: "Start Your AI Journey", link: "/contact", className: "btn-primary-hero" },
    ]
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Upcoming AI Projects | INAI Worlds</title>
        <meta
          name="description"
          content="Explore our AI portfolio showcasing real-world projects and innovations. Discover how INAI Worlds transforms ideas into AI solutions."
        />
        <script type='application/ld+json'>{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://inaiworlds.com/#organization",
      "name": "INAI Worlds",
      "url": "https://inaiworlds.com",
      "logo": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
      "sameAs": [
        "https://x.com/Inai_Worlds",
        "https://www.instagram.com/inai_worlds/",
        "https://www.youtube.com/@INAIWorldsPVTLTD",
        "https://www.linkedin.com/company/inai-worlds-pvt-ltd",
        "https://in.pinterest.com/Inai_Worlds"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://inaiworlds.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://inaiworlds.com/portfolio"
        }
      ]
    },
    {
      "@type": "ItemList",
      "name": "INAI Worlds Portfolio",
      "url": "https://inaiworlds.com/portfolio",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "INAI Life",
          "url": "https://inaiworlds.com/inai_verse",
          "image": "https://inaiworlds.com/assets/inai_post-BxzS7iP4.jpg",
          "description": "Meet India’s First AI Virtual Model INAI, innovating the future with cutting-edge AI technology, showcased exclusively by INAI Worlds."
        },
        {
          "@type": "Product",
          "name": "Influwket",
          "url": "https://inaiworlds.com/portfolio/influwket",
          "image": "https://inaiworlds.com/assets/influwket-C1AVqIBy.png",
          "description": "Discover Influwket by INAI Worlds an AI-driven influencer marketing platform designed to connect brands and influencers with precision and impactful results."
        },
        {
          "@type": "Product",
          "name": "Veedket",
          "url": "https://inaiworlds.com/portfolio/veedket",
          "image": "https://inaiworlds.com/assets/veedket-DJOSdg-H.png",
          "description": "Explore Veedket by INAI Worlds, a video exhibition platform that empowers creators, educators, and professionals to transform ideas into engaging visual content."
        },
        {
          "@type": "Product",
          "name": "Offiket",
          "url": "https://inaiworlds.com/portfolio/offiket",
          "image": "https://inaiworlds.com/assets/offiket-WrYoZ-Qf.png",
          "description": "Offiket by INAI Worlds is a marketplace for buying and selling office spaces, offering features to connect buyers and sellers in the dynamic office market."
        }
      ]
    }
  ]
}

        `}</script>
      </Helmet>
      <div className="portfolio-page">
        <Hero
          tagline={portfolioHeroData.tagline}
          title={portfolioHeroData.title}
          subtitle={portfolioHeroData.subtitle}
          buttons={portfolioHeroData.buttons}
          isShort={true}
        />
        <PortfolioIntro />
        {/* You can add portfolio items here */}
        {/* <ArchitectsSection/> */}
        {/* <FAQ/> */}
        <CTA_Portfolio />
      </div>
    </>
  );
};

export default Portfolio; 