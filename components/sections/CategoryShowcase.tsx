import Image from 'next/image';
import { ArrowIcon } from '@/components/ui/ArrowIcon';

const beautyImage =
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1400&q=90';
const foodImage =
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=90';

export function CategoryShowcase() {
  return (
    <section className="categorySection section" id="categories">
      <div className="shell">
        <div className="categoryHeading">
          <p className="sectionEyebrow">OUR CATEGORIES</p>
          <h2>Two essential worlds. One trusted partner.</h2>
          <p>Beauty and everyday nourishment, brought together through one B2B trading relationship.</p>
        </div>

        <div className="categoryGrid">
          <article className="categoryPanel categoryPanel--beauty">
            <div className="categoryPanel__copy">
              <span>PREMIUM BEAUTY</span>
              <h3>Cosmetics &amp; personal care</h3>
              <p>Skincare, beauty, fragrance and personal care products for modern retail environments.</p>
              <a href="#products">Explore cosmetics <ArrowIcon size={17} /></a>
              <div className="categoryTags">
                <span>Skincare</span><span>Hair care</span><span>Fragrance</span><span>Personal care</span>
              </div>
            </div>
            <div className="categoryPanel__image">
              <Image src={beautyImage} alt="Cosmetics and skincare products" fill sizes="(max-width: 800px) 90vw, 42vw" />
            </div>
          </article>

          <article className="categoryPanel categoryPanel--food">
            <div className="categoryPanel__copy">
              <span>NATURAL GOODNESS</span>
              <h3>Food items &amp; FMCG</h3>
              <p>Packaged foods, beverages, pantry staples and repeat-purchase FMCG essentials.</p>
              <a href="#products">Explore food items <ArrowIcon size={17} /></a>
              <div className="categoryTags">
                <span>Rice &amp; grains</span><span>Beverages</span><span>Condiments</span><span>Daily essentials</span>
              </div>
            </div>
            <div className="categoryPanel__image">
              <Image src={foodImage} alt="Food and grocery products" fill sizes="(max-width: 800px) 90vw, 42vw" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
