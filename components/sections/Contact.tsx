'use client';

import type { FormEvent } from 'react';
import Image from 'next/image';
import { company } from '@/data/site';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

const skyline =
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=86';

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
    <section className="contactSection" id="contact">
      <div className="contactSkyline" aria-hidden="true">
        <Image src={skyline} alt="" fill sizes="100vw" />
      </div>

      <div className="shell contactLayout">
        <div className="contactIntro">
          <p className="sectionEyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>Let&apos;s grow together.</h2>
          <p>
            Partner with Phildhabi for wholesale sourcing, product enquiries and long-term supply conversations.
          </p>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        </div>

        <form className="enquiryForm" onSubmit={handleSubmit}>
          <div className="enquiryForm__heading">
            <div>
              <p>Send us an enquiry</p>
              <h3>Tell us what you need</h3>
            </div>
            <span>We will prepare a WhatsApp enquiry from your details.</span>
          </div>

          <div className="formGrid">
            <label>
              <span>Your name</span>
              <input required name="name" placeholder="Full name" />
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
              <span>Product interest</span>
              <select name="category" defaultValue="Cosmetics & Personal Care">
                <option>Cosmetics & Personal Care</option>
                <option>Food & Beverage</option>
                <option>FMCG / Daily Essentials</option>
                <option>Mixed Requirement</option>
              </select>
            </label>
            <label className="formGrid__full">
              <span>Your message</span>
              <textarea required name="message" rows={4} placeholder="Products, brands, quantity, delivery area..." />
            </label>
          </div>

          <button className="formSubmit" type="submit">
            <span>Send enquiry on WhatsApp</span>
            <ArrowIcon />
          </button>
        </form>

        <aside className="contactCard">
          <span>OUR LOCATION</span>
          <strong>{company.coverage}</strong>
          <span>CALL US</span>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
          <span>TRADE ENQUIRIES</span>
          <b>WhatsApp available</b>
        </aside>
      </div>
    </section>
  );
}
