'use client';

import { useLayoutEffect } from 'react';

type RevealType =
  | 'rise'
  | 'fade'
  | 'scale'
  | 'slide-left'
  | 'slide-right'
  | 'blur-up'
  | 'blur-left'
  | 'blur-right'
  | 'zoom'
  | 'tilt-left'
  | 'tilt-right';

type RevealGroup = {
  selector: string;
  type?: RevealType;
  sequence?: RevealType[];
  stagger?: number;
  delay?: number;
};

const groups: RevealGroup[] = [
  // Hero: text sharpens into focus while imagery enters laterally.
  { selector: '.commerceHero .eyebrow', type: 'fade', delay: 30 },
  { selector: '.commerceHero h1', type: 'blur-up', delay: 70 },
  { selector: '.commerceHero__copy > p:not(.eyebrow)', type: 'blur-up', delay: 125 },
  { selector: '.heroButtons', type: 'rise', delay: 180 },
  { selector: '.heroMicro span', sequence: ['blur-left', 'blur-right', 'blur-left'], stagger: 70, delay: 210 },
  { selector: '.commerceHero__media', type: 'slide-right', delay: 80 },

  // Category navigation.
  { selector: '.categoryStrip .sectionTopline h2', type: 'blur-up' },
  { selector: '.categoryStrip .sectionTopline > a', type: 'fade', delay: 90 },
  {
    selector: '.categoryItem',
    sequence: ['slide-left', 'rise', 'rise', 'slide-right', 'slide-left', 'rise', 'rise', 'slide-right'],
    stagger: 42,
  },

  // Blue value band.
  { selector: '.valuesBand__intro .eyebrow', type: 'fade' },
  { selector: '.valuesBand__intro h2', type: 'blur-up', delay: 50 },
  { selector: '.valuesBand__intro > p:not(.eyebrow)', type: 'blur-up', delay: 110 },
  { selector: '.valueItem', sequence: ['tilt-left', 'zoom', 'zoom', 'tilt-right'], stagger: 75 },

  // Paired collection cards: deliberately enter from opposite sides.
  { selector: '.collectionsSection .sectionHeadingRow h2', type: 'blur-up' },
  { selector: '.collectionsSection .sectionHeadingRow > p', type: 'blur-right', delay: 75 },
  { selector: '.collectionCard--beauty', type: 'slide-left' },
  { selector: '.collectionCard--food', type: 'slide-right', delay: 70 },
  { selector: '.collectionCard h3', type: 'blur-up', delay: 110 },

  // Products: mixed directions instead of one repeated motion.
  { selector: '.featuredSection .sectionTopline h2', type: 'blur-up' },
  { selector: '.featuredSection .sectionTopline > a', type: 'fade', delay: 80 },
  {
    selector: '.productTile',
    sequence: ['slide-left', 'rise', 'slide-right', 'slide-left', 'zoom', 'slide-right'],
    stagger: 65,
  },

  // Utility benefits.
  {
    selector: '.tradeBenefits article',
    sequence: ['blur-left', 'zoom', 'zoom', 'blur-right'],
    stagger: 60,
  },

  // About/company split section.
  { selector: '.companyBand__media', type: 'slide-left' },
  { selector: '.companyBand__copy .eyebrow', type: 'fade', delay: 40 },
  { selector: '.companyBand__copy h2', type: 'blur-right', delay: 70 },
  { selector: '.companyBand__copy > p:not(.eyebrow)', type: 'blur-right', delay: 125 },
  { selector: '.companyStats div', sequence: ['slide-left', 'rise', 'slide-right'], stagger: 80, delay: 160 },

  // Process steps get a directional rhythm.
  { selector: '.supplySection .sectionHeadingRow h2', type: 'blur-up' },
  { selector: '.supplySection .sectionHeadingRow > p', type: 'blur-right', delay: 75 },
  {
    selector: '.supplyGrid article',
    sequence: ['slide-left', 'rise', 'zoom', 'slide-right'],
    stagger: 85,
  },

  // FAQ.
  { selector: '.faqSection__grid > div:first-child .eyebrow', type: 'fade' },
  { selector: '.faqSection__grid > div:first-child h2', type: 'blur-left', delay: 55 },
  {
    selector: '.faqList details',
    sequence: ['slide-right', 'blur-right', 'slide-right', 'blur-right'],
    stagger: 70,
  },

  // Contact split.
  { selector: '.contactCopy .eyebrow', type: 'fade' },
  { selector: '.contactCopy h2', type: 'blur-left', delay: 50 },
  { selector: '.contactCopy > p:not(.eyebrow)', type: 'blur-left', delay: 110 },
  { selector: '.contactMeta', type: 'rise', delay: 160 },
  { selector: '.contactForm', type: 'slide-right', delay: 80 },

  // Footer is intentionally calm.
  { selector: '.footerMain > *', sequence: ['fade', 'blur-up', 'blur-up', 'fade'], stagger: 55 },
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
        const type = group.sequence?.[index % group.sequence.length] ?? group.type ?? 'rise';
        element.classList.add('reveal-target', `reveal-${type}`);
        element.style.setProperty(
          '--reveal-delay',
          `${(group.delay ?? 0) + (group.stagger ?? 0) * index}ms`
        );
        targets.push(element);
      });
    }

    const viewportCutoff = window.innerHeight * 0.92;
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
        threshold: 0.11,
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
        element.className = element.className
          .split(' ')
          .filter((name) => !name.startsWith('reveal-') && name !== 'is-visible')
          .join(' ');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return null;
}
