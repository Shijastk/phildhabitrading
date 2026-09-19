'use client';

import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/site';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

const filters = [
  { value: 'all', label: 'All products' },
  { value: 'beauty', label: 'Cosmetics' },
  { value: 'food', label: 'Food' },
  { value: 'fmcg', label: 'FMCG' },
] as const;

type FilterValue = (typeof filters)[number]['value'];

export function ProductUniverse() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const visible = filter === 'all' ? products : products.filter((product) => product.category === filter);

  return (
    <section className="productSection section" id="products">
      <div className="shell">
        <div className="productHeader">
          <div>
            <p className="sectionEyebrow">FEATURED PRODUCTS</p>
            <h2>Curated categories for everyday demand.</h2>
          </div>

          <div className="productHeader__actions">
            <div className="filterBar" role="tablist" aria-label="Product filters">
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.value}
                  className={filter === item.value ? 'filterButton filterButton--active' : 'filterButton'}
                  onClick={() => setFilter(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a className="viewAllLink" href="#contact">Request full catalogue <ArrowIcon size={16} /></a>
          </div>
        </div>

        <div className="productGrid">
          {visible.map((product) => (
            <article className="productCard" key={product.title}>
              <div className="productCard__media">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 31vw"
                />
              </div>
              <div className="productCard__body">
                <p>{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <span>{product.copy}</span>
                <a href="#contact" aria-label={`Enquire about ${product.title}`}>↗</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
