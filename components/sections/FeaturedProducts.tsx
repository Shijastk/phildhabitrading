import Image from 'next/image';
import { products } from '@/data/site';

export function FeaturedProducts() {
  return (
    <section className="featuredSection" id="products">
      <div className="siteShell">
        <div className="sectionTopline sectionTopline--products">
          <div>
            <p className="eyebrow">FEATURED CATEGORIES</p>
            <h2>Wholesale products built around repeat demand.</h2>
          </div>
          <a href="#contact">Request current catalogue →</a>
        </div>

        <div className="featuredGrid">
          {products.slice(0, 6).map((product) => (
            <article className="productTile" key={product.title}>
              <div className="productTile__media">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="productTile__body">
                <span>{product.eyebrow}</span>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
                <a href="#contact" aria-label={`Enquire about wholesale ${product.title}`}>Enquire →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
