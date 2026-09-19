import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';

const benefits = [
  ['Retail-ready categories', 'Products selected around repeat consumer demand and practical shelf relevance.'],
  ['Multi-category sourcing', 'Beauty, food and everyday FMCG under one trading relationship.'],
  ['Responsive enquiries', 'Clear communication for availability, quantities and quotation requests.'],
  ['Flexible order planning', 'Support for recurring orders, mixed requirements and growing buyers.'],
  ['UAE market focus', 'A supply proposition centered on Dubai, Abu Dhabi and nearby business demand.'],
  ['Business-first service', 'A focused B2B experience without retail checkout clutter or confusing pricing.'],
];

export function Distribution() {
  return (
    <section className="distributionSection section section--dark" id="distribution">
      <div className="distributionSection__glow" aria-hidden="true" />
      <div className="shell distributionGrid">
        <div className="distributionIntro">
          <SectionHeading
            eyebrow="BUILT FOR WHOLESALE"
            title="Supply that fits the way your business actually buys."
            copy="From independent retailers to supermarkets and resellers, we support different order patterns, mixed categories and repeat purchasing."
            inverted
          />
          <ButtonLink href="#contact" variant="light">Talk to our trading team</ButtonLink>
        </div>

        <div className="benefitGrid">
          {benefits.map(([title, copy], index) => (
            <article className="benefitCard" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
