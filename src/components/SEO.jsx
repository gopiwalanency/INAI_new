import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'INAI Worlds - AI & Machine Learning Solutions';
const DEFAULT_DESCRIPTION = 'INAI Worlds is a leading AI company providing innovative machine learning solutions, AI consulting, and custom AI development services.';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();
  const fullTitle = title || DEFAULT_TITLE;
  const fullDescription = description || DEFAULT_DESCRIPTION;

  // Update meta tags in the document head
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = fullDescription;

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    } else if (metaKeywords) {
      metaKeywords.remove();
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = fullDescription;
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = window.location.href;

    // Update Twitter card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = fullTitle;
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = fullDescription;

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;

    // Cleanup function
    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDescription) {
        metaDescription.content = DEFAULT_DESCRIPTION;
      }
      if (ogTitle) ogTitle.content = DEFAULT_TITLE;
      if (ogDescription) ogDescription.content = DEFAULT_DESCRIPTION;
      if (twitterTitle) twitterTitle.content = DEFAULT_TITLE;
      if (twitterDescription) twitterDescription.content = DEFAULT_DESCRIPTION;
    };
  }, [location.pathname, fullTitle, fullDescription, keywords]);

  // Render meta tags in the document head for server-side rendering
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <>
      <meta name="description" content={fullDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <link rel="canonical" href={currentUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
    </>
  );
};

export default SEO;
