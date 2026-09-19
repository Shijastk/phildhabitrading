const steps = [
  ['01', 'Share the requirement', 'Tell us the product category, quantity and delivery expectation.'],
  ['02', 'We source & confirm', 'We check suitable product and supply options around the requirement.'],
  ['03', 'Quote & finalize', 'Pricing, quantities and order details are confirmed clearly.'],
  ['04', 'Supply & repeat', 'We support the order and recurring requirements as demand grows.'],
];

export function SupplySteps() {
  return (
    <section className="supplySection" id="process">
      <div className="siteShell">
        <div className="sectionHeadingRow">
          <div>
            <p className="eyebrow">HOW SUPPLY WORKS</p>
            <h2>Four clear steps from enquiry to order.</h2>
          </div>
          <p>Simple enough for the first order. Structured enough for repeat business.</p>
        </div>

        <div className="supplyGrid">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
