import { processSteps } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SupplyProcess() {
  return (
    <section className="processSection section" id="process">
      <div className="shell">
        <div className="processSection__header">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="From requirement to reliable supply."
            copy="A straightforward B2B process with fewer hand-offs, clearer communication and an easier path from enquiry to repeat order."
          />
        </div>

        <div className="processGrid">
          {processSteps.map((step) => (
            <article className="processCard" key={step.number}>
              <span className="processCard__number">{step.number}</span>
              <div className="processCard__line" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
