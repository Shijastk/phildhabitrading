import Image from 'next/image';
import { company } from '@/data/site';

const image =
  'https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&w=2200';

export function CompanyBand() {
  return (
    <section className="companyBand" id="company">
      <div className="siteShell companyBand__grid">
        <div className="companyBand__media">
          <Image
            src={image}
            alt="Warehouse team handling boxed goods for wholesale supply and distribution"
            fill
            sizes="(max-width: 1050px) 100vw, 50vw"
          />
        </div>
        <div className="companyBand__copy">
          <p className="eyebrow">ABOUT PHILDHABI</p>
          <h2>Trading experience built since {company.experienceSince}.</h2>
          <p>
            Phildhabi General Trading focuses on practical B2B sourcing across cosmetics, personal care,
            food and FMCG. We support business buyers with clear communication, category flexibility and a
            supply process designed for repeat requirements across Dubai and Abu Dhabi.
          </p>
          <div className="companyStats">
            <div><strong>{company.experienceSince}</strong><span>serving trade since</span></div>
            <div><strong>2</strong><span>UAE markets: Dubai &amp; Abu Dhabi</span></div>
            <div><strong>B2B</strong><span>wholesale-focused supply</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
