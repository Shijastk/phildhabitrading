'use client';

import type { FormEvent } from 'react';
import { company } from '@/data/site';

export function TradeContact() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Phildhabi General Trading,',
      '',
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company') || '-'}`,
      `Phone: ${data.get('phone')}`,
      `Category: ${data.get('category')}`,
      `Requirement: ${data.get('message')}`,
    ].join('\n');

    window.open(
      `https://wa.me/${company.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="contactSection" id="contact">
      <div className="siteShell contactSection__grid">
        <div className="contactCopy">
          <p className="eyebrow eyebrow--light">TRADE ENQUIRIES</p>
          <h2>Tell us what your business needs.</h2>
          <p>Share the category, quantity and delivery requirement. We&apos;ll take the conversation from there.</p>
          <div className="contactMeta">
            <span>{company.coverage}</span>
            <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
            <a href={company.emailHref}>{company.email}</a>
          </div>
        </div>

        <form className="contactForm" onSubmit={submit}>
          <label>
            <span>Name</span>
            <input required name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Company</span>
            <input name="company" placeholder="Company name" />
          </label>
          <label>
            <span>Phone / WhatsApp</span>
            <input required name="phone" placeholder="+971 ..." />
          </label>
          <label>
            <span>Category</span>
            <select name="category" defaultValue="Mixed Requirement">
              <option>Cosmetics & Personal Care</option>
              <option>Food & Beverage</option>
              <option>FMCG / Daily Essentials</option>
              <option>Mixed Requirement</option>
            </select>
          </label>
          <label className="contactForm__wide">
            <span>Requirement</span>
            <textarea required name="message" rows={4} placeholder="Products, brands, quantity, delivery area..." />
          </label>
          <button type="submit">Send enquiry on WhatsApp <span>→</span></button>
        </form>
      </div>
    </section>
  );
}
