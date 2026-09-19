import Image from 'next/image';
import heroVisual from '@/public/hero-phildhabi-premium.webp';
import { company } from '@/data/site';

export function CommerceHero() {
  return (
    <section className="commerceHero commerceHero--full" id="top">
      <div className="commerceHero__backdrop" aria-hidden="true">
        <Image
          src={heroVisual}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </div>

      <div className="siteShell commerceHero__content">
        <div className="commerceHero__copy">
          <p className="eyebrow">WHOLESALE GENERAL TRADING · UAE</p>
          <h1>Wholesale cosmetics, food &amp; FMCG for UAE businesses.</h1>
          <p>
            Phildhabi General Trading supports retailers, resellers and business buyers with dependable
            sourcing across beauty, personal care, food and fast-moving everyday products in Dubai and Abu Dhabi.
          </p>

          <div className="heroButtons">
            <a className="primaryButton" href="#products">Explore products <span>→</span></a>
            <a className="textButton" href="#contact">Request a trade quote <span>→</span></a>
          </div>

          <div className="heroMicro" aria-label="Company highlights">
            <span>Since {company.experienceSince}</span>
            <span>Dubai &amp; Abu Dhabi</span>
            <span>Beauty · Food · FMCG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
