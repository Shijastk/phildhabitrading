import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';

const beauty =
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1400&q=90';
const fragrance =
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=90';
const food =
  'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=90';
const skyline =
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=86';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="heroSkyline" aria-hidden="true">
        <Image src={skyline} alt="" fill priority sizes="100vw" />
      </div>

      <div className="shell heroGrid">
        <div className="heroCopy">
          <p className="heroKicker">GLOBAL PRODUCTS · STRONGER BUSINESS</p>
          <h1>
            Trusted General Trading for
            <span> Cosmetics &amp; Food Essentials</span>
          </h1>
          <p className="heroLead">
            Phildhabi General Trading connects quality beauty, food and FMCG products with retailers,
            resellers and business buyers across the UAE.
          </p>

          <div className="heroActions">
            <ButtonLink href="#products">Explore our products</ButtonLink>
            <ButtonLink href="#company" variant="secondary">Discover our story</ButtonLink>
          </div>

          <div className="heroTrustRow">
            <div><b>✦</b><span>Quality products</span></div>
            <div><b>◎</b><span>Global sourcing</span></div>
            <div><b>↗</b><span>Reliable supply</span></div>
          </div>
        </div>

        <div className="heroComposition" aria-label="Cosmetics and food product showcase">
          <div className="heroGlass heroGlass--beauty">
            <div className="heroGlass__label">BEAUTY FOR MODERN RETAIL</div>
            <Image src={beauty} alt="Premium beauty and skincare products" fill priority sizes="36vw" />
          </div>

          <div className="heroGlass heroGlass--fragrance">
            <Image src={fragrance} alt="Fragrance and perfume products" fill sizes="18vw" />
          </div>

          <div className="heroGlass heroGlass--food">
            <div className="heroGlass__label">FOOD &amp; FMCG</div>
            <Image src={food} alt="Olive oil and food essentials" fill sizes="22vw" />
          </div>

          <div className="heroFloatingNote">
            <span>Dubai &amp; Abu Dhabi</span>
            <strong>Wholesale supply for growing businesses</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
