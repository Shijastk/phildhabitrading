import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import beautyVisual from '@/public/category-beauty.webp';
import foodVisual from '@/public/category-food.webp';

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
          <p className="heroKicker">BRINGING QUALITY TO A BRIGHTER TOMORROW</p>

          <h1>
            Trusted General Trading for
            <span>Cosmetics &amp; Food Items</span>
          </h1>

          <p className="heroLead">
            Sourcing quality products. Building dependable supply relationships.
            Phildhabi connects beauty, food and FMCG categories with growing businesses across the UAE.
          </p>

          <div className="heroActions">
            <ButtonLink href="#products">Explore our products</ButtonLink>
            <ButtonLink href="#company" variant="secondary">Our company</ButtonLink>
          </div>

          <div className="heroTrustRow" aria-label="Trading strengths">
            <div><b>01</b><span>Quality products</span></div>
            <div><b>02</b><span>Global sourcing</span></div>
            <div><b>03</b><span>Reliable supply</span></div>
          </div>
        </div>

        <div className="heroStage" aria-label="Phildhabi cosmetics and food trading showcase">
          <div className="heroStage__canvas" aria-hidden="true" />
          <div className="heroStage__wordmark" aria-hidden="true">PHILDHABI</div>

          <div className="heroStage__beauty">
            <Image
              src={beautyVisual}
              alt="Premium cosmetics and personal care products"
              fill
              priority
              sizes="(max-width: 1080px) 72vw, 34vw"
            />
            <div className="heroStage__beautyFade" aria-hidden="true" />
          </div>

          <div className="heroStage__beautyLabel">
            <span>01 / BEAUTY</span>
            <strong>Cosmetics &amp; personal care</strong>
          </div>

          <div className="heroStage__food">
            <Image
              src={foodVisual}
              alt="Food and FMCG products"
              fill
              priority
              sizes="(max-width: 1080px) 52vw, 24vw"
            />
            <div className="heroStage__foodFade" aria-hidden="true" />
          </div>

          <div className="heroStage__foodLabel">
            <span>02 / FOOD &amp; FMCG</span>
            <strong>Everyday essentials</strong>
          </div>

          <div className="heroStage__location" aria-label="Primary UAE markets">
            <span>Dubai</span>
            <i aria-hidden="true" />
            <span>Abu Dhabi</span>
          </div>

          <div className="heroStage__tradeLine">
            <span>GENERAL TRADING</span>
            <b>WHOLESALE · B2B · UAE</b>
          </div>
        </div>
      </div>
    </section>
  );
}
