import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import beautyVisual from '@/public/category-beauty.webp';
import foodVisual from '@/public/category-food.webp';

export function Hero() {
  return (
    <section className="edHero" id="top">
      <div className="edHero__word" aria-hidden="true">PHILDHABI</div>

      <div className="shell edHero__shell">
        <div className="edHero__meta">
          <span>UAE / GENERAL TRADING</span>
          <span>BEAUTY · FOOD · FMCG</span>
        </div>

        <div className="edHero__grid">
          <div className="edHero__copy">
            <p className="edKicker">BUILT AROUND EVERYDAY DEMAND</p>
            <h1>
              Products for the shelves
              <em>people return to.</em>
            </h1>
            <p className="edHero__lead">
              Phildhabi connects retailers and resellers with considered cosmetics, personal care,
              food and FMCG supply across the UAE.
            </p>

            <div className="edHero__actions">
              <ButtonLink href="#categories">Explore categories</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">Start an enquiry</ButtonLink>
            </div>
          </div>

          <div className="edHero__visual" aria-label="Beauty and food product showcase">
            <figure className="edHero__beauty">
              <Image
                src={beautyVisual}
                alt="Cosmetics and personal care products"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <figcaption>
                <span>01</span>
                <strong>Beauty &amp; personal care</strong>
              </figcaption>
            </figure>

            <figure className="edHero__food">
              <Image
                src={foodVisual}
                alt="Food and FMCG products"
                fill
                priority
                sizes="(max-width: 900px) 72vw, 24vw"
              />
              <figcaption>
                <span>02</span>
                <strong>Food &amp; FMCG</strong>
              </figcaption>
            </figure>

            <div className="edHero__edgeCopy" aria-hidden="true">
              DUBAI · ABU DHABI · WHOLESALE
            </div>
          </div>
        </div>

        <div className="edHero__footer">
          <div><span>01</span><strong>Quality products</strong></div>
          <div><span>02</span><strong>Clear sourcing</strong></div>
          <div><span>03</span><strong>Reliable supply</strong></div>
        </div>
      </div>
    </section>
  );
}
