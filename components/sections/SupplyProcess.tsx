import Image from 'next/image';
import { processSteps } from '@/data/site';

const logisticsImage =
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1800&q=86';

export function SupplyProcess() {
  return (
    <section className="processSection section" id="process">
      <div className="processBackdrop" aria-hidden="true">
        <Image src={logisticsImage} alt="" fill sizes="100vw" />
      </div>

      <div className="shell processLayout">
        <div className="processIntro">
          <p className="sectionEyebrow">OUR SOURCING PROCESS</p>
          <h2>From requirement to reliable supply.</h2>
          <p>
            A practical process designed to keep wholesale sourcing clear, efficient and easy to repeat.
          </p>
        </div>

        <div className="processSteps">
          {processSteps.map((step, index) => (
            <article className="processStep" key={step.number}>
              <div className="processStep__top">
                <span>{step.number}</span>
                <b>{index === 0 ? '◎' : index === 1 ? '◇' : index === 2 ? '▣' : '↗'}</b>
              </div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              {index < processSteps.length - 1 ? <i aria-hidden="true">→</i> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
