import Image from 'next/image';

const beautyImage =
  'https://images.pexels.com/photos/3735626/pexels-photo-3735626.jpeg?auto=compress&cs=tinysrgb&w=2000';
const foodImage =
  'https://images.pexels.com/photos/4871156/pexels-photo-4871156.jpeg?auto=compress&cs=tinysrgb&w=2000';

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
              <Image
                src={beautyImage}
                alt="Beauty and personal care products in a modern retail setting"
                fill
                sizes="(max-width: 1050px) 100vw, 50vw"
              />
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
              <Image
                src={foodImage}
                alt="High-quality herbs and spices representing food and FMCG sourcing"
                fill
                sizes="(max-width: 1050px) 100vw, 50vw"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
