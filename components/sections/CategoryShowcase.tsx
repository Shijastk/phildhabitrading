import Image from 'next/image';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import beautyVisual from '@/public/category-beauty.webp';
import foodVisual from '@/public/category-food.webp';

const beautyTags = [
  ['◇', 'Skincare'],
  ['⌇', 'Hair Care'],
  ['◌', 'Personal Care'],
  ['◇', 'Beauty Essentials'],
];

const foodTags = [
  ['▢', 'Pantry Staples'],
  ['▣', 'Beverages'],
  ['◇', 'Spices & Herbs'],
  ['▤', 'Packaged Foods'],
];

export function CategoryShowcase() {
  return (
    <section className="categorySection categoryReferenceSection section" id="categories">
      <div className="shell">
        <div className="categoryHeading categoryReferenceHeading">
          <p className="sectionEyebrow">OUR CATEGORIES</p>
          <h2>Two Essential Worlds. One Trusted Partner.</h2>
          <p>Quality products for a more beautiful and nourished tomorrow.</p>
        </div>

        <div className="categoryGrid categoryReferenceGrid">
          <article className="categoryPanel categoryReferenceCard categoryReferenceCard--beauty">
            <div className="categoryReferenceMain">
              <div className="categoryPanel__copy categoryReferenceCopy">
                <span>PREMIUM QUALITY</span>
                <h3>Cosmetics</h3>
                <p>Skincare, beauty and personal care products from trusted global brands.</p>

                <a href="#products">
                  Explore Cosmetics
                  <ArrowIcon size={16} />
                </a>
              </div>

              <div className="categoryPanel__image categoryReferenceImage">
                <Image
                  src={beautyVisual}
                  alt="Premium cosmetics and personal care products"
                  fill
                  priority={false}
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="categoryTags categoryReferenceFooter">
              {beautyTags.map(([icon, label]) => (
                <span className="categoryReferenceTag" key={label}>
                  <i aria-hidden="true">{icon}</i>
                  {label}
                </span>
              ))}
            </div>
          </article>

          <article className="categoryPanel categoryReferenceCard categoryReferenceCard--food">
            <div className="categoryReferenceMain">
              <div className="categoryPanel__copy categoryReferenceCopy">
                <span>NATURAL GOODNESS</span>
                <h3>Food Items</h3>
                <p>Quality groceries, packaged foods, spices and more for a healthier living.</p>

                <a href="#products">
                  Explore Food Items
                  <ArrowIcon size={16} />
                </a>
              </div>

              <div className="categoryPanel__image categoryReferenceImage">
                <Image
                  src={foodVisual}
                  alt="Food items and FMCG essentials"
                  fill
                  priority={false}
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="categoryTags categoryReferenceFooter">
              {foodTags.map(([icon, label]) => (
                <span className="categoryReferenceTag" key={label}>
                  <i aria-hidden="true">{icon}</i>
                  {label}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
