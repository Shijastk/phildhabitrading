const items = [
  ['✦', 'Quality you can trust', 'Carefully selected products'],
  ['◎', 'Sourcing without borders', 'Access to global supply'],
  ['▣', 'Reliable & responsive', 'Clear B2B communication'],
  ['↗', 'Built for growth', 'Flexible wholesale support'],
];

export function PromiseStrip() {
  return (
    <section className="promiseStrip" aria-label="Trading strengths">
      <div className="shell promiseGrid">
        <div className="promiseIntro">
          <span>A MORE BEAUTIFUL</span>
          <strong>AND NOURISHED TOMORROW</strong>
        </div>

        {items.map(([icon, title, copy]) => (
          <article className="promiseItem" key={title}>
            <span className="promiseIcon">{icon}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
