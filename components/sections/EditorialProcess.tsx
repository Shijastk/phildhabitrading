import { processSteps } from '@/data/site';

export function EditorialProcess() {
  return (
    <section className="edProcess" id="process">
      <div className="shell">
        <div className="edSectionMeta edSectionMeta--light">
          <span>05 / HOW WE WORK</span>
          <p>A clear sourcing path from requirement to repeat supply.</p>
        </div>

        <div className="edProcess__heading">
          <h2>Less friction.<br /><em>More flow.</em></h2>
          <p>
            Wholesale relationships work better when communication is simple, expectations are clear and
            each order has a visible next step.
          </p>
        </div>

        <div className="edProcess__grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
