'use client';

import { useEffect, useRef, useState } from 'react';
import { company } from '@/data/site';

const links = [
  ['Home', '#top'],
  ['Categories', '#categories'],
  ['Products', '#products'],
  ['Why us', '#why-us'],
  ['Company', '#company'],
  ['Contact', '#contact'],
];

type HeaderMode = 'normal' | 'leaving' | 'floating';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<HeaderMode>('normal');
  const timerRef = useRef<number | null>(null);
  const modeRef = useRef<HeaderMode>('normal');

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const threshold = 118;

    const clearTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const onScroll = () => {
      const y = window.scrollY;

      if (y <= threshold) {
        clearTimer();
        if (modeRef.current !== 'normal') {
          modeRef.current = 'normal';
          setMode('normal');
        }
        return;
      }

      if (modeRef.current === 'normal') {
        if (reducedMotion) {
          modeRef.current = 'floating';
          setMode('floating');
          return;
        }

        modeRef.current = 'leaving';
        setMode('leaving');
        clearTimer();

        timerRef.current = window.setTimeout(() => {
          if (window.scrollY > threshold) {
            modeRef.current = 'floating';
            setMode('floating');
          }
          timerRef.current = null;
        }, 210);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      clearTimer();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="noticeBar">
        <div className="siteShell noticeBar__inner">
          <span>Wholesale cosmetics, food &amp; FMCG across the UAE</span>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        </div>
      </div>

      <div className="siteHeaderSlot">
        <header className={`siteHeader siteHeader--${mode}`}>
          <div className="siteShell siteHeader__inner">
            <a className="siteBrand" href="#top" aria-label="Phildhabi General Trading home">
              <span className="siteBrand__mark">P</span>
              <span>
                <strong>Phildhabi</strong>
                <small>GENERAL TRADING</small>
              </span>
            </a>

            <button
              className="menuToggle"
              type="button"
              aria-expanded={open}
              aria-controls="site-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>

            <nav id="site-navigation" className={`siteNav ${open ? 'siteNav--open' : ''}`}>
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              className="headerButton"
              href={`https://wa.me/${company.phoneHref.replace('+', '')}?text=${encodeURIComponent(
                'Hello Phildhabi General Trading, I would like to request a wholesale quote.'
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Get a quote <span>→</span>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
