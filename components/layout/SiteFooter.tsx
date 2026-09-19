import { company, navItems } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerTop">
        <div className="footerBrand">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand__mark">P</span>
            <span className="brand__copy">
              <strong>Phildhabi</strong>
              <small>GENERAL TRADING</small>
            </span>
          </a>
          <p>Global products. Reliable supply. Built for growing businesses across the UAE.</p>
        </div>

        <nav className="footerNav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footerContact">
          <span>{company.coverage}</span>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© 2026 Phildhabi General Trading. All rights reserved.</span>
        <span>Wholesale cosmetics · food · FMCG</span>
      </div>
    </footer>
  );
}
