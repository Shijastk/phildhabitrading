import { SectionHeading } from '@/components/ui/SectionHeading';

export function Intro() {
  return (
    <section className="introSection section" id="company">
      <div className="shell introGrid">
        <SectionHeading
          eyebrow="GENERAL TRADING, BUILT AROUND DEMAND"
          title="One supply relationship. Two high-demand product worlds."
        />
        <div className="introCopy">
          <p>
            Phildhabi General Trading supports businesses that need practical access to cosmetics, personal care, food and everyday FMCG without dealing with fragmented suppliers.
          </p>
          <p>
            The focus is straightforward: commercially relevant products, responsive communication, flexible wholesale supply and a service model designed around business buyers in the UAE.
          </p>
          <a className="textLink" href="#distribution">See how we supply <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
