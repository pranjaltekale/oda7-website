'use client';

import { useEffect } from 'react';
import { useLocation } from '../../lib/navigation';

export const ScrollMotion = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let observer;
    const timer = window.setTimeout(() => {
      const targets = document.querySelectorAll(
        '.home-page-container > section:not(.connected-story), .home-page-container > div, .section-wrapper:not(.connected-story), .detail-hero, .page-reveal'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
      );

      targets.forEach((target) => {
        target.classList.add('scroll-reveal');
        // If element is already visible in viewport on initial load, show immediately
        if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
          target.classList.add('is-visible');
        } else {
          observer.observe(target);
        }
      });
    }, 40);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [location?.pathname]);

  return null;
};
