import { LineIcon } from '@/components/ui/LineIcon';

const values = [
  ['quality', 'Products selected with purpose', 'A focused range built around repeat demand and practical retail relevance.'],
  ['global', 'Sourcing beyond one market', 'Flexible access to suppliers and product categories across different sourcing channels.'],
  ['supply', 'Supply that stays responsive', 'Clear communication around requirements, quotations and recurring orders.'],
  ['range', 'More categories, one relationship', 'Beauty, food and FMCG supply without juggling disconnected conversations.'],
] as const;

export function ValuesBand() {
  return (
    <section className="valuesBand" id="why-us">
      <div className="siteShell">
        <div className="valuesBand__intro">
          <p className="eyebrow eyebrow--light">WHY PHILDHABI</p>
          <h2>Wholesale supply, made simpler.</h2>
          <p>
            The product matters. So does how easily your business can source it, reorder it and keep moving.
          </p>
        </div>

        <div className="valuesBand__grid">
          {values.map(([icon, title, copy]) => (
            <article className="valueItem" key={title}>
              <LineIcon name={icon} size={42} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
