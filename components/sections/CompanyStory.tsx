import Image from 'next/image';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

const office =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88';

const points = [
  ['✦', 'Trusted partnerships'],
  ['◎', 'Wide product range'],
  ['⌖', 'UAE market focus'],
  ['◈', 'Reliable supply chain'],
];

export function CompanyStory() {
  return (
    <section className="companySection section" id="company">
      <div className="shell companyGrid">
        <div className="companyVisual">
          <Image src={office} alt="Modern trading company office" fill sizes="(max-width: 900px) 92vw, 48vw" />
          <div className="companyBadge">
            <span>Based in the UAE</span>
            <strong>Connecting products to opportunity</strong>
          </div>
          <div className="companyLogoCard">
            <b>P</b>
            <div><strong>Phildhabi</strong><span>GENERAL TRADING</span></div>
          </div>
        </div>

        <div className="companyContent">
          <p className="sectionEyebrow">ABOUT PHILDHABI</p>
          <h2>A reliable partner in modern trade.</h2>
          <p className="companyLead">
            Phildhabi General Trading is focused on dependable B2B supply across cosmetics, personal care,
            food and FMCG. We help businesses source practical products with clearer communication and a
            simpler wholesale relationship.
          </p>
          <a className="inlineLink" href="#contact">
            Learn more about working with us <ArrowIcon size={17} />
          </a>

          <div className="companyPoints">
            {points.map(([icon, label]) => (
              <div className="companyPoint" key={label}>
                <span>{icon}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
