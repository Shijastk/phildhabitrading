import Image from 'next/image';
import { products } from '@/data/site';

export function EditorialPortfolio() {
  return (
    <section className="edPortfolio" id="products">
      <div className="shell">
        <div className="edSectionMeta">
          <span>04 / PRODUCT UNIVERSE</span>
          <p>Selected categories across beauty, food and fast-moving essentials.</p>
        </div>

        <div className="edPortfolio__heading">
          <h2>A portfolio designed to move.</h2>
          <a href="#contact">Request full catalogue ↗</a>
        </div>

        <div className="edPortfolio__grid">
          {products.slice(0, 6).map((product, index) => (
            <article className={`edProduct edProduct--${index + 1}`} key={product.title}>
              <div className="edProduct__media">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 34vw"
                />
              </div>
              <div className="edProduct__caption">
                <span>{String(index + 1).padStart(2, '0')} / {product.eyebrow}</span>
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
