'use client';

import { useState } from 'react';
import { company, navItems } from '@/data/site';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const whatsapp = `https://wa.me/${company.phoneHref.replace('+', '')}?text=${encodeURIComponent(
    'Hello Phildhabi General Trading, I would like to make a trade enquiry.'
  )}`;

  return (
    <header className="siteHeader">
      <div className="shell headerShell">
        <a className="brand" href="#top" aria-label="Phildhabi General Trading home">
          <span className="brand__mark">P</span>
          <span className="brand__copy">
            <strong>Phildhabi</strong>
            <small>GENERAL TRADING</small>
          </span>
        </a>

        <button
          className="menuButton"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`primaryNav ${open ? 'primaryNav--open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="headerSearch" href="#products" aria-label="Explore products">
          <span>⌕</span>
        </a>

        <a className="headerCta" href={whatsapp} target="_blank" rel="noreferrer">
          Get a quote
          <ArrowIcon size={16} />
        </a>
      </div>
    </header>
  );
}
