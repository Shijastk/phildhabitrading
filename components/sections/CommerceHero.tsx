import Image from 'next/image';
import heroVisual from '@/public/hero-phildhabi-premium.png';

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
          <h1>Products your customers already want.</h1>
          <p>
            Reliable sourcing for cosmetics, personal care, food and fast-moving essentials —
            built for retailers, resellers and growing business buyers across Dubai and Abu Dhabi.
          </p>

          <div className="heroButtons">
            <a className="primaryButton" href="#products">Explore products <span>→</span></a>
            <a className="textButton" href="#contact">Request a trade quote <span>→</span></a>
          </div>

          <div className="heroMicro">
            <span>Wholesale supply</span>
            <span>Multi-category sourcing</span>
            <span>UAE focused</span>
          </div>
        </div>
      </div>
    </section>
  );
}
