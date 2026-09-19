import Image from 'next/image';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { SectionHeading } from '@/components/ui/SectionHeading';

const categories = [
  {
    index: '01',
    eyebrow: 'BEAUTY & PERSONAL CARE',
    title: 'Products that feel considered on the shelf.',
    copy: 'Skincare, fragrances, body care, hair care and everyday grooming lines for beauty retailers and general trade.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1500&q=88',
    alt: 'Skincare and beauty products arranged on a clean surface',
  },
  {
    index: '02',
    eyebrow: 'FOOD & FMCG',
    title: 'Everyday essentials with repeat demand.',
    copy: 'Packaged food, snacks, beverages, pantry items and practical FMCG lines for supermarkets, mini marts and resellers.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1500&q=88',
    alt: 'Food and FMCG products arranged on store shelves',
  },
];

export function CategoryShowcase() {
  return (
    <section className="categorySection section" id="categories">
      <div className="shell">
        <div className="categorySection__heading">
          <SectionHeading
            eyebrow="OUR CORE CATEGORIES"
            title="A portfolio shaped for modern retail."
            copy="Two focused trading verticals, presented with the same standard of sourcing, service and wholesale support."
          />
        </div>

        <div className="categoryGrid">
          {categories.map((category) => (
            <article className="categoryCard" key={category.index}>
              <div className="categoryCard__media">
                <Image src={category.image} alt={category.alt} fill sizes="(max-width: 800px) 92vw, 47vw" />
              </div>
              <div className="categoryCard__body">
                <div className="categoryCard__meta">
                  <span>{category.index}</span>
                  <p>{category.eyebrow}</p>
                </div>
                <h3>{category.title}</h3>
                <p>{category.copy}</p>
                <a href="#catalog" aria-label={`Explore ${category.eyebrow}`}>
                  Explore category <ArrowIcon size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
