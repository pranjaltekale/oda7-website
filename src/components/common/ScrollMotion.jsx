'use client';

import { useEffect } from 'react';
import { useLocation } from '../../lib/navigation';

export const ScrollMotion = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let observer;
    const timer = window.setTimeout(() => {
      const targets = document.querySelectorAll(
        '.section-wrapper > .container, .section-wrapper > .container-wide, .section-wrapper > .container-narrow, .page-reveal'
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
        { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
      );

      targets.forEach((target) => {
        target.classList.add('scroll-reveal');
        observer.observe(target);
      });
    }, 40);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
};
