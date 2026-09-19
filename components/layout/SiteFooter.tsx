import { company, navItems } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerBrand">
          <a className="brand brand--inverse" href="#top" aria-label="Back to top">
            <span className="brand__mark">P</span>
            <span className="brand__copy">
              <strong>PHILDHABI</strong>
              <small>GENERAL TRADING</small>
            </span>
          </a>
          <p>Wholesale cosmetics, food and FMCG supply for businesses across the UAE.</p>
        </div>

        <div className="footerColumn">
          <h3>Company</h3>
          {navItems.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="footerColumn">
          <h3>Categories</h3>
          <a href="#catalog">Cosmetics</a>
          <a href="#catalog">Food & beverage</a>
          <a href="#catalog">FMCG</a>
        </div>

        <div className="footerColumn">
          <h3>Contact</h3>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
          <a href={`https://wa.me/${company.phoneHref.replace('+', '')}`}>WhatsApp</a>
          <span>{company.coverage}</span>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© 2026 Phildhabi General Trading. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
