import { capabilities } from '@/data/site';

export function Capabilities() {
  return (
    <section className="capabilitySection" aria-label="Trading capabilities">
      <div className="shell capabilityGrid">
        {capabilities.map((item) => (
          <article className="capabilityCard" key={item.number}>
            <span className="capabilityCard__number">{item.number}</span>
            <div className="capabilityCard__rule" aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
