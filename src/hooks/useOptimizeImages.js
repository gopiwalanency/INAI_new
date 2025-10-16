import { useEffect } from 'react';

// Apply lazy loading and async decoding to all images by default.
// Skip images that opt-out via data-priority="high".
export function useOptimizeImages() {
  useEffect(() => {
    const images = Array.from(document.images || []);
    images.forEach((img) => {
      const isHighPriority = img.getAttribute('data-priority') === 'high';
      if (!isHighPriority) {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
        if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low');
      }
    });

    // Observe future images added dynamically
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node && node.tagName === 'IMG') {
            const isHighPriority = node.getAttribute('data-priority') === 'high';
            if (!isHighPriority) {
              if (!node.hasAttribute('loading')) node.setAttribute('loading', 'lazy');
              if (!node.hasAttribute('decoding')) node.setAttribute('decoding', 'async');
              if (!node.hasAttribute('fetchpriority')) node.setAttribute('fetchpriority', 'low');
            }
          }
        });
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}


