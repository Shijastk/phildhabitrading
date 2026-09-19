'use client';

import { useLayoutEffect } from 'react';

type RevealType = 'rise' | 'fade' | 'slide-left' | 'slide-right' | 'heading';

type RevealGroup = {
  selector: string;
  type?: RevealType;
  sequence?: RevealType[];
  stagger?: number;
  delay?: number;
};

const groups: RevealGroup[] = [
  { selector: '.commerceHero .eyebrow', type: 'fade' },
  { selector: '.commerceHero h1', type: 'heading', delay: 35 },
  { selector: '.commerceHero__copy > p:not(.eyebrow)', type: 'rise', delay: 85 },
  { selector: '.heroButtons', type: 'rise', delay: 125 },
  { selector: '.commerceHero__media', type: 'slide-right', delay: 55 },

  { selector: '.categoryStrip .sectionTopline', type: 'rise' },
  { selector: '.categoryItem', sequence: ['slide-left', 'rise', 'rise', 'slide-right'], stagger: 34 },

  { selector: '.valuesBand__intro', type: 'rise' },
  { selector: '.valueItem', sequence: ['slide-left', 'rise', 'rise', 'slide-right'], stagger: 48 },

  { selector: '.collectionsSection .sectionHeadingRow', type: 'rise' },
  { selector: '.collectionCard--beauty', type: 'slide-left' },
  { selector: '.collectionCard--food', type: 'slide-right', delay: 45 },

  { selector: '.featuredSection .sectionTopline', type: 'rise' },
  { selector: '.productTile', sequence: ['slide-left', 'rise', 'slide-right'], stagger: 42 },

  { selector: '.tradeBenefits article', type: 'fade', stagger: 35 },

  { selector: '.companyBand__media', type: 'slide-left' },
  { selector: '.companyBand__copy', type: 'slide-right', delay: 55 },

  { selector: '.supplySection .sectionHeadingRow', type: 'rise' },
  { selector: '.supplyGrid article', sequence: ['slide-left', 'rise', 'rise', 'slide-right'], stagger: 48 },

  { selector: '.faqSection__grid > div:first-child', type: 'slide-left' },
  { selector: '.faqList details', type: 'slide-right', stagger: 38 },

  { selector: '.contactCopy', type: 'slide-left' },
  { selector: '.contactForm', type: 'slide-right', delay: 45 },

  { selector: '.footerMain > *', type: 'fade', stagger: 30 },
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

    const viewportCutoff = window.innerHeight * 0.94;
    targets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < viewportCutoff && rect.bottom > 0) element.classList.add('is-visible');
    });

    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    targets.forEach((element) => {
      if (!element.classList.contains('is-visible')) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
