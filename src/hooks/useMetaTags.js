import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useMetaTags = ({ title, description, keywords = '' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // Update title
    if (title) {
      document.title = title;
    }

    // Cleanup function to reset to default when component unmounts
    return () => {
      document.title = 'INAI Worlds - AI Solutions & Services';
      const defaultMeta = document.querySelector('meta[name="description"]');
      if (defaultMeta) {
        defaultMeta.content = 'INAI Worlds, leading AI company in India, offers innovative AI products and smart solutions to power business growth.';
      }
    };
  }, [pathname, title, description, keywords]);

  return null;
};
