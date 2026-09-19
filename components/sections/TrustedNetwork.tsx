const segments = [
  'Beauty suppliers',
  'Food & grocery',
  'FMCG sourcing',
  'Retail buyers',
  'Reseller network',
  'Hospitality supply',
];

export function TrustedNetwork() {
  return (
    <section className="networkSection">
      <div className="shell networkLayout">
        <div className="networkIntro">
          <p>TRUSTED TRADE NETWORK</p>
          <h2>Built to connect products, buyers and opportunity.</h2>
        </div>

        <div className="networkMarks" aria-label="Trading network categories">
          {segments.map((segment) => (
            <span key={segment}>{segment}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
