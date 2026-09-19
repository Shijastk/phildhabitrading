'use client';

import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

const filters = [
  { value: 'all', label: 'All categories' },
  { value: 'beauty', label: 'Beauty' },
  { value: 'food', label: 'Food & beverage' },
  { value: 'fmcg', label: 'FMCG' },
] as const;

type FilterValue = (typeof filters)[number]['value'];

export function ProductUniverse() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const visible = filter === 'all' ? products : products.filter((product) => product.category === filter);

  return (
    <section className="productSection section" id="catalog">
      <div className="shell">
        <div className="productSection__header">
          <SectionHeading
            eyebrow="PRODUCT UNIVERSE"
            title="Built around everyday demand."
            copy="A clear view of the core categories we source and supply. Brand and item availability can vary by order volume."
          />
        </div>

        <div className="filterBar" role="tablist" aria-label="Product category filters">
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

        <div className="productGrid">
          {visible.map((product) => (
            <article className="productCard" key={product.title}>
              <div className="productCard__media">
                <Image src={product.image} alt={product.title} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 31vw" />
              </div>
              <div className="productCard__body">
                <p>{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <span>{product.copy}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
