const stats = [
  ['02', 'core trading verticals'],
  ['04', 'wholesale service pillars'],
  ['UAE', 'market-focused supply'],
];

export function StatsStrip() {
  return (
    <section className="statsSection">
      <div className="shell statsGrid">
        <div className="statsIntro">
          <p>A SIMPLE TRADING PROMISE</p>
          <h2>Clear communication. Considered products. Commercial focus.</h2>
        </div>
        {stats.map(([value, label]) => (
          <div className="statItem" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
