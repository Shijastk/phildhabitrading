import Image from 'next/image';
import beautyVisual from '@/public/category-beauty.webp';
import foodVisual from '@/public/category-food.webp';

export function CollectionsGrid() {
  return (
    <section className="collectionsSection">
      <div className="siteShell">
        <div className="sectionHeadingRow">
          <div>
            <p className="eyebrow">CORE COLLECTIONS</p>
            <h2>Two everyday product worlds.</h2>
          </div>
          <p>Different categories, one dependable B2B supply relationship.</p>
        </div>

        <div className="collectionsGrid">
          <article className="collectionCard collectionCard--beauty">
            <div className="collectionCard__copy">
              <span>BEAUTY &amp; PERSONAL CARE</span>
              <h3>Products made for modern routines.</h3>
              <p>Cosmetics, skincare, fragrance, hair care and personal-care essentials.</p>
              <a href="#products">Explore beauty <b>→</b></a>
            </div>
            <div className="collectionCard__media">
              <Image src={beautyVisual} alt="Cosmetics and personal care category" fill sizes="50vw" />
            </div>
          </article>

          <article className="collectionCard collectionCard--food">
            <div className="collectionCard__copy">
              <span>FOOD &amp; FMCG</span>
              <h3>Fast-moving products for everyday demand.</h3>
              <p>Food, beverages, pantry essentials and packaged FMCG products.</p>
              <a href="#products">Explore food &amp; FMCG <b>→</b></a>
            </div>
            <div className="collectionCard__media">
              <Image src={foodVisual} alt="Food and FMCG category" fill sizes="50vw" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
