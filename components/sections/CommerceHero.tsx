import Image from 'next/image';

const heroImage =
  'https://images.pexels.com/photos/12602354/pexels-photo-12602354.jpeg?auto=compress&cs=tinysrgb&w=2400';

export function CommerceHero() {
  return (
    <section className="commerceHero" id="top">
      <div className="siteShell commerceHero__grid">
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

        <div className="commerceHero__media">
          <Image
            src={heroImage}
            alt="Premium skincare and personal care products photographed in Dubai"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 900px) 100vw, 54vw"
          />
        </div>
      </div>
    </section>
  );
}
