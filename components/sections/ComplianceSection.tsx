const items = [
  {
    title: 'Product documentation',
    copy: 'Product details and supporting documents can be coordinated according to the item and supplier.',
  },
  {
    title: 'Origin & labeling checks',
    copy: 'Commercial and labeling requirements can be reviewed before order confirmation where applicable.',
  },
  {
    title: 'Supplier certificates',
    copy: 'Manufacturer or supplier certificates can be requested when they are available for the product.',
  },
  {
    title: 'Import / export coordination',
    copy: 'General trading requirements can be coordinated around product, origin and delivery needs.',
  },
];

export function ComplianceSection() {
  return (
    <section className="complianceSection" aria-labelledby="compliance-heading">
      <div className="siteShell complianceGrid">
        <div className="complianceIntro">
          <p className="eyebrow">COMPLIANCE-AWARE SOURCING</p>
          <h2 id="compliance-heading">Documentation before decoration.</h2>
          <p>
            Certification requirements vary by product, manufacturer and origin. We present only documents
            that can be supported for the specific item rather than displaying unverified certification badges.
          </p>
        </div>

        <div className="complianceItems">
          {items.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
