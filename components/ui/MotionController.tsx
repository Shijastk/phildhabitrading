'use client';

import { useLayoutEffect } from 'react';

type RevealType = 'rise' | 'fade' | 'scale';

type RevealGroup = {
  selector: string;
  type: RevealType;
  stagger?: number;
};

const groups: RevealGroup[] = [
  { selector: '.commerceHero__copy', type: 'rise' },
  { selector: '.commerceHero__media', type: 'scale' },

  { selector: '.categoryStrip .sectionTopline', type: 'rise' },
  { selector: '.categoryItem', type: 'rise', stagger: 55 },

  { selector: '.valuesBand__intro', type: 'rise' },
  { selector: '.valueItem', type: 'rise', stagger: 70 },

  { selector: '.collectionsSection .sectionHeadingRow', type: 'rise' },
  { selector: '.collectionCard', type: 'scale', stagger: 110 },

  { selector: '.featuredSection .sectionTopline', type: 'rise' },
  { selector: '.productTile', type: 'rise', stagger: 65 },

  { selector: '.tradeBenefits article', type: 'fade', stagger: 55 },

  { selector: '.companyBand__media', type: 'scale' },
  { selector: '.companyBand__copy', type: 'rise' },
  { selector: '.companyStats div', type: 'rise', stagger: 70 },

  { selector: '.supplySection .sectionHeadingRow', type: 'rise' },
  { selector: '.supplyGrid article', type: 'rise', stagger: 75 },

  { selector: '.faqSection__grid > div:first-child', type: 'rise' },
  { selector: '.faqList details', type: 'fade', stagger: 55 },

  { selector: '.contactCopy', type: 'rise' },
  { selector: '.contactForm', type: 'scale' },

  { selector: '.footerMain > *', type: 'fade', stagger: 45 },
];

export function MotionController() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      document.documentElement.classList.add('motion-reduced');
      return () => document.documentElement.classList.remove('motion-reduced');
    }

    const targets: HTMLElement[] = [];

    for (const group of groups) {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(group.selector));

      elements.forEach((element, index) => {
        element.classList.add('reveal-target', `reveal-${group.type}`);
        element.style.setProperty('--reveal-delay', `${(group.stagger ?? 0) * index}ms`);
        targets.push(element);
      });
    }

    // Keep above-the-fold content visible on first paint while still animating later content.
    const viewportCutoff = window.innerHeight * 0.94;
    targets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < viewportCutoff && rect.bottom > 0) {
        element.classList.add('is-visible');
      }
    });

    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add('is-visible');
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -7% 0px',
      }
    );

    targets.forEach((element) => {
      if (!element.classList.contains('is-visible')) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
      targets.forEach((element) => {
        element.classList.remove('reveal-target', 'reveal-rise', 'reveal-fade', 'reveal-scale', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return null;
}
