const reasons = [
  ['◇', 'Premium product focus', 'A cleaner portfolio centered on useful, retail-ready product categories.'],
  ['◎', 'Global sourcing mindset', 'Flexible sourcing support shaped around buyer requirements and market demand.'],
  ['▣', 'Fast, clear communication', 'Simple enquiry, quotation and repeat-order conversations for business buyers.'],
  ['↗', 'Growing with your business', 'Support that works for retailers, resellers, supermarkets and other B2B buyers.'],
];

export function WhyChoose() {
  return (
    <section className="whySection section">
      <div className="shell whyGrid">
        <div className="whyIntro">
          <p className="sectionEyebrow">WHY CHOOSE PHILDHABI</p>
          <h2>More than products. A partnership you can trust.</h2>
          <p>
            We go beyond simply listing items. The goal is to make sourcing easier, communication clearer
            and repeat supply more dependable for growing businesses.
          </p>
          <a href="#contact">Start a trade enquiry ↗</a>
        </div>

        <div className="whyCards">
          {reasons.map(([icon, title, copy]) => (
            <article className="whyCard" key={title}>
              <span>{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
