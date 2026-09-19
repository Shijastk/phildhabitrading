'use client';

import { useState } from 'react';
import { company } from '@/data/site';

const links = [
  ['Home', '#top'],
  ['Categories', '#categories'],
  ['Products', '#products'],
  ['Why us', '#why-us'],
  ['Company', '#company'],
  ['Contact', '#contact'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="noticeBar">
        <div className="siteShell noticeBar__inner">
          <span>Wholesale cosmetics, food &amp; FMCG across the UAE</span>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        </div>
      </div>

      <header className="siteHeader">
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
    </>
  );
}
