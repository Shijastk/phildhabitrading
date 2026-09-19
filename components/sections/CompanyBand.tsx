import Image from 'next/image';

const image =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=86';

export function CompanyBand() {
  return (
    <section className="companyBand" id="company">
      <div className="siteShell companyBand__grid">
        <div className="companyBand__media">
          <Image src={image} alt="Modern business building representing Phildhabi General Trading" fill sizes="50vw" />
        </div>
        <div className="companyBand__copy">
          <p className="eyebrow">ABOUT PHILDHABI</p>
          <h2>A practical partner for modern trade.</h2>
          <p>
            Phildhabi General Trading supports business buyers across cosmetics, personal care, food and FMCG.
            Our focus is straightforward: useful products, dependable communication and a sourcing process
            that makes repeat business easier.
          </p>
          <div className="companyStats">
            <div><strong>2</strong><span>core product divisions</span></div>
            <div><strong>UAE</strong><span>market-focused supply</span></div>
            <div><strong>B2B</strong><span>wholesale first</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
