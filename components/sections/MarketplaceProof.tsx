export function MarketplaceProof() {
  return (
    <section className="marketplaceProofSection" id="trust" aria-labelledby="marketplace-proof-heading">
      <div className="siteShell">
        <div className="sectionHeadingRow marketplaceProofHeading">
          <div>
            <p className="eyebrow">PUBLIC MARKETPLACE PRESENCE</p>
            <h2 id="marketplace-proof-heading">Visible where UAE customers already shop.</h2>
          </div>
          <p>
            Public noon UAE beauty listings identify Phildhabi General Trading as a seller,
            providing an independently visible signal of active retail-market participation.
          </p>
        </div>

        <div className="marketplaceProofGrid">
          <a
            className="marketplaceLogoCard"
            href="https://www.noon.com/uae-en/beauty/lareen/"
            target="_blank"
            rel="noreferrer"
            aria-label="View public Noon UAE beauty listings"
          >
            <div className="marketplaceLogoWrap">
              <img
                src="https://f.nooncdn.com/s/app/com/noon/images/opengraph/common.png"
                alt="noon UAE marketplace logo"
                loading="lazy"
              />
            </div>
            <div>
              <span>VERIFIED MARKETPLACE PRESENCE</span>
              <h3>noon UAE</h3>
              <p>Public beauty listings show Phildhabi General Trading among the available sellers.</p>
            </div>
          </a>

          <article className="trustFactCard">
            <strong>2018</strong>
            <h3>Experience since 2018</h3>
            <p>Company-provided operating history used across the site to communicate trading experience.</p>
          </article>

          <article className="trustFactCard">
            <strong>UAE</strong>
            <h3>Dubai &amp; Abu Dhabi focus</h3>
            <p>Wholesale enquiries across cosmetics, food and FMCG for business buyers in both markets.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
