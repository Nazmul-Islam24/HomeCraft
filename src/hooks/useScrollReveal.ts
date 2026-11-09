import { useEffect } from 'react';

/**
 * Custom hook to observe elements with `.reveal`, `.reveal-up`, `.reveal-left`,
 * `.reveal-right`, `.reveal-scale`, or `[data-reveal]` and reveal them smoothly
 * as they enter the viewport.
 */
export function useScrollReveal(dependency?: unknown) {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: reveal all immediately
      document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]')
        .forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    // Give react brief moment to finish DOM commit
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]'
      );
      elements.forEach((el) => {
        // If element is already above or in top viewport on initial load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });
    }, 40);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependency]);
}
