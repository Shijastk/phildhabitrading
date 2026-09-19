'use client';

import type { FormEvent } from 'react';
import { company } from '@/data/site';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

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

    const number = company.phoneHref.replace('+', '');
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contactSection section" id="contact">
      <div className="shell contactGrid">
        <div className="contactIntro">
          <p className="sectionEyebrow">START A TRADE ENQUIRY</p>
          <h2>Looking for a dependable supplier?</h2>
          <p className="contactIntro__lead">
            Tell us what you are looking for. We will respond with the next practical step for sourcing, availability or quotation.
          </p>

          <div className="contactDetails">
            <a href={`tel:${company.phoneHref}`}>
              <span>Call</span>
              <strong>{company.phoneDisplay}</strong>
            </a>
            <a href={`https://wa.me/${company.phoneHref.replace('+', '')}`} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>Start a conversation ↗</strong>
            </a>
            <div>
              <span>Coverage</span>
              <strong>{company.coverage}</strong>
            </div>
          </div>
        </div>

        <form className="enquiryForm" onSubmit={handleSubmit}>
          <div className="enquiryForm__heading">
            <div>
              <p>Business enquiry</p>
              <h3>Request a quote</h3>
            </div>
            <span>We will prepare a WhatsApp enquiry from your details.</span>
          </div>

          <div className="formGrid">
            <label>
              <span>Full name</span>
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
              <select name="category" defaultValue="Cosmetics & Personal Care">
                <option>Cosmetics & Personal Care</option>
                <option>Food & Beverage</option>
                <option>FMCG / Daily Essentials</option>
                <option>Mixed Requirement</option>
              </select>
            </label>
            <label className="formGrid__full">
              <span>What do you need?</span>
              <textarea required name="message" rows={5} placeholder="Products, brands, quantity, delivery area..." />
            </label>
          </div>

          <button className="formSubmit" type="submit">
            <span>Send enquiry on WhatsApp</span>
            <ArrowIcon />
          </button>
          <p className="enquiryForm__note">Business enquiries only · No retail checkout</p>
        </form>
      </div>
    </section>
  );
}
