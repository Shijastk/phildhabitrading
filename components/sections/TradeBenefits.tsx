import { LineIcon } from '@/components/ui/LineIcon';

const benefits = [
  ['supply', 'Responsive wholesale support', 'Clear conversations from enquiry through repeat order.'],
  ['global', 'Broader sourcing access', 'A flexible approach across product types and supplier channels.'],
  ['quality', 'Commercially relevant products', 'Categories chosen around useful retail demand, not catalogue volume.'],
  ['range', 'One multi-category relationship', 'Cosmetics, food and FMCG managed through one trading partner.'],
] as const;

export function TradeBenefits() {
  return (
    <section className="tradeBenefits">
      <div className="siteShell tradeBenefits__grid">
        {benefits.map(([icon, title, copy]) => (
          <article key={title}>
            <LineIcon name={icon} size={30} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
