import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';

const cosmeticsImage = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1400&q=88';
const foodImage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=88';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />

      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow">COSMETICS · FOOD · FMCG · WHOLESALE</p>
          <h1>
            <span>Beauty, food &amp;</span>
            <span>everyday essentials.</span>
          </h1>
          <p className="hero__lead">
            A dependable general trading partner connecting retail-ready cosmetics, personal care, food and FMCG products with businesses across the UAE.
          </p>

          <div className="hero__actions">
            <ButtonLink href="#categories">Explore categories</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">Request a quote</ButtonLink>
          </div>

          <div className="hero__proof" aria-label="Trading strengths">
            <div><strong>UAE</strong><span>market focused</span></div>
            <div><strong>B2B</strong><span>wholesale supply</span></div>
            <div><strong>2</strong><span>core product worlds</span></div>
          </div>
        </div>

        <div className="heroVisual" aria-label="Cosmetics and food product imagery">
          <div className="heroVisual__main">
            <Image
              src={cosmeticsImage}
              alt="Premium skincare and cosmetic products"
              fill
              priority
              sizes="(max-width: 900px) 88vw, 44vw"
            />
            <div className="heroVisual__label">
              <span>01</span>
              <div><strong>Beauty &amp; care</strong><small>Skincare · fragrance · personal care</small></div>
            </div>
          </div>

          <div className="heroVisual__secondary">
            <Image
              src={foodImage}
              alt="Fresh food and grocery products"
              fill
              sizes="(max-width: 900px) 55vw, 24vw"
            />
            <div className="heroVisual__chip">Food &amp; FMCG</div>
          </div>

          <div className="heroVisual__note">
            <span>Dubai</span>
            <span>Abu Dhabi</span>
            <strong>Wholesale supply</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
