import Hero from '@/components/Hero';
import CTA2 from '@/components/aboutpage/CTA2';
import CompanyVMVCarousel from '@/components/aboutpage/CompanyVMVCarousel';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const aboutHeroData = {
    tagline: "Innovative AI Tool to Streamline",
    title: "Welcome to INAI Worlds",
    subtitle:
      "As a Best AI company in India, we are dedicated to revolutionizing industries through innovative AI solutions, focusing on making Generative AI products, predictive analytics, natural language processing and empowering businesses to achieve great goals for the future.",
    buttons: [
      { text: "Get In Touch", link: "/contact", className: "btn-primary-hero" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About INAI Worlds | Leading Product-Based AI Company</title>
        <meta
          name="description"
          content="About INAI Worlds – A leading AI company providing cutting-edge AI solutions and innovations to empower industries and shape the future of AI technology."
        />

        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://inaiworlds.com/about",
      "url": "https://inaiworlds.com/about",
      "name": "About INAI Worlds | Leading Product-Based AI Company",
      "isPartOf": { "@id": "https://inaiworlds.com/#website" },
      "about": { "@id": "https://inaiworlds.com/#organization" },
      "description": "About INAI Worlds – A leading AI company providing cutting-edge AI solutions and innovations to empower industries and shape the future of AI technology.",
      "breadcrumb": { "@id": "https://inaiworlds.com/about#breadcrumb" },
      "inLanguage": "en-US",
      "potentialAction": [
        { "@type": "ReadAction", "target": ["https://inaiworlds.com/about"] }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://inaiworlds.com/about#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "About Us",
          "item": "https://inaiworlds.com/about"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://inaiworlds.com/#website",
      "url": "https://inaiworlds.com/",
      "name": "INAI Worlds",
      "description": "INAI Worlds, leading the best AI company in India, offers innovative AI products and smart solutions to power business growth. Let’s build the next generation.",
      "publisher": { "@id": "https://inaiworlds.com/#organization" },
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
        "@id": "https://inaiworlds.com/#/schema/logo/image/",
        "inLanguage": "en-US",
        "url": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
        "contentUrl": "https://inaiworlds.com/assets/INAI-BywOMVzP.png",
        "width": 1515,
        "height": 698,
        "caption": "INAI Worlds"
      },
      "image": { "@id": "https://inaiworlds.com/#/schema/logo/image/" }
    }
  ]
}

        `}</script>
      </Helmet>
      <div className="w-full overflow-x-hidden bg-[#0A0C18] text-white">
        <Hero
          tagline={aboutHeroData.tagline}
          title={
            <>
              <span className="text-primary font-bold">Welcome to INAI Worlds</span>
            </>
          }
          subtitle={aboutHeroData.subtitle}
          buttons={aboutHeroData.buttons}
        />
      </div>
      <div className="w-full">
        <CompanyVMVCarousel />
      </div>
      <div className="w-full">
        <CTA2 />
      </div>
    </>
  );
};

export default About;
