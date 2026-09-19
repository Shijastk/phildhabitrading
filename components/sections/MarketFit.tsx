import Image from 'next/image';
import { marketSegments } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function MarketFit() {
  return (
    <section className="marketSection section">
      <div className="shell marketGrid">
        <div className="marketVisual">
          <div className="marketVisual__main">
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1500&q=88"
              alt="Retail business team working with products"
              fill
              sizes="(max-width: 900px) 92vw, 48vw"
            />
          </div>
          <div className="marketVisual__badge">
            <strong>UAE</strong>
            <span>Dubai · Abu Dhabi</span>
          </div>
        </div>

        <div className="marketContent">
          <SectionHeading
            eyebrow="WHERE WE FIT"
            title="Made for businesses that move product every day."
            copy="Our wholesale approach is designed around the needs of active retail, resale and business buyers rather than consumer checkout."
          />

          <div className="marketList">
            {marketSegments.map((segment, index) => (
              <div className="marketList__item" key={segment}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{segment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
