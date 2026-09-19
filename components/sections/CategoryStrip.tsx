import { LineIcon } from '@/components/ui/LineIcon';

const categories = [
  ['beauty', 'Cosmetics'],
  ['skincare', 'Skincare'],
  ['hair', 'Hair Care'],
  ['care', 'Personal Care'],
  ['food', 'Food Items'],
  ['drink', 'Beverages'],
  ['pantry', 'Pantry'],
  ['fmcg', 'FMCG'],
] as const;

export function CategoryStrip() {
  return (
    <section className="categoryStrip" id="categories" aria-labelledby="category-strip-title">
      <div className="siteShell">
        <div className="sectionTopline">
          <h2 id="category-strip-title">Explore by category</h2>
          <a href="#products">View full product range →</a>
        </div>

        <div className="categoryStrip__grid">
          {categories.map(([icon, label]) => (
            <a className="categoryItem" href="#products" key={label}>
              <span className="categoryItem__icon"><LineIcon name={icon} /></span>
              <strong>{label}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
