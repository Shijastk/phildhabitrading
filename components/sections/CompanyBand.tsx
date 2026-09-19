import Image from 'next/image';

const image =
  'https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&w=2200';

export function CompanyBand() {
  return (
    <section className="companyBand" id="company">
      <div className="siteShell companyBand__grid">
        <div className="companyBand__media">
          <Image
            src={image}
            alt="Warehouse team handling boxed goods in a logistics facility"
            fill
            sizes="(max-width: 1050px) 100vw, 50vw"
          />
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
