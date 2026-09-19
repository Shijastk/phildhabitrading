'use client';

import type { FormEvent } from 'react';
import { company } from '@/data/site';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'Hello Phildhabi General Trading,',
      '',
      `Name: ${form.get('name')}`,
      `Company: ${form.get('company') || '-'}`,
      `Phone: ${form.get('phone')}`,
      `Category: ${form.get('category')}`,
      `Requirement: ${form.get('message')}`,
    ].join('\n');

    window.open(
      `https://wa.me/${company.phoneHref.replace('+', '')}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="edContact" id="contact">
      <div className="shell">
        <div className="edSectionMeta">
          <span>07 / START A CONVERSATION</span>
          <p>{company.coverage} · {company.phoneDisplay}</p>
        </div>

        <div className="edContact__grid">
          <div className="edContact__copy">
            <h2>Tell us what needs to move.</h2>
            <p>
              Products, categories, quantities or recurring supply — send the requirement and we&apos;ll take
              the conversation from there.
            </p>
            <a href={`https://wa.me/${company.phoneHref.replace('+', '')}`} target="_blank" rel="noreferrer">
              WhatsApp directly ↗
            </a>
          </div>

          <form className="edForm" onSubmit={handleSubmit}>
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
            <label className="edForm__wide">
              <span>Requirement</span>
              <textarea required name="message" rows={4} placeholder="Products, brands, quantity, delivery area..." />
            </label>
            <button type="submit">Send trade enquiry ↗</button>
          </form>
        </div>
      </div>
    </section>
  );
}
