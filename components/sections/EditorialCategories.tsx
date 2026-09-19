import Image from 'next/image';
import beautyVisual from '@/public/category-beauty.webp';
import foodVisual from '@/public/category-food.webp';

const beautyItems = ['Skincare', 'Fragrance', 'Hair care', 'Personal care'];
const foodItems = ['Pantry staples', 'Beverages', 'Condiments', 'Packaged foods'];

export function EditorialCategories() {
  return (
    <section className="edCategories" id="categories">
      <article className="edChapter edChapter--beauty">
        <div className="shell edChapter__grid">
          <div className="edChapter__copy">
            <span className="edChapter__index">02 / BEAUTY</span>
            <h2>Products that belong on the counter, not in a catalogue template.</h2>
            <p>
              Skincare, fragrance and personal-care lines presented with the same attention to shelf appeal
              as sourcing reliability.
            </p>
            <ul>
              {beautyItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#products">Explore beauty range ↗</a>
          </div>

          <div className="edChapter__media">
            <Image src={beautyVisual} alt="Premium beauty and personal care products" fill sizes="55vw" />
          </div>
        </div>
      </article>

      <article className="edChapter edChapter--food">
        <div className="shell edChapter__grid edChapter__grid--reverse">
          <div className="edChapter__media">
            <Image src={foodVisual} alt="Food and FMCG essentials" fill sizes="55vw" />
          </div>

          <div className="edChapter__copy">
            <span className="edChapter__index">03 / FOOD &amp; FMCG</span>
            <h2>Everyday essentials with commercial staying power.</h2>
            <p>
              Food, beverage and FMCG categories selected around repeat purchase, practical supply and
              dependable retail demand.
            </p>
            <ul>
              {foodItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#products">Explore food range ↗</a>
          </div>
        </div>
      </article>
    </section>
  );
}
