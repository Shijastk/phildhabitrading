import { company } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteShell footerMain">
        <div>
          <a className="siteBrand siteBrand--footer" href="#top">
            <span className="siteBrand__mark">P</span>
            <span>
              <strong>Phildhabi</strong>
              <small>GENERAL TRADING</small>
            </span>
          </a>
          <p className="footerSummary">
            B2B sourcing and wholesale supply across cosmetics, personal care, food and FMCG categories.
          </p>
        </div>

        <div className="footerGroup">
          <h2>Explore</h2>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#company">Company</a>
        </div>

        <div className="footerGroup">
          <h2>Business</h2>
          <a href="#why-us">Why Phildhabi</a>
          <a href="#process">How supply works</a>
          <a href="#contact">Trade enquiry</a>
        </div>

        <div className="footerGroup">
          <h2>Contact</h2>
          <span>{company.coverage}</span>
          <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
        </div>
      </div>

      <div className="siteShell footerBottom">
        <span>© 2026 Phildhabi General Trading. All rights reserved.</span>
        <span>Cosmetics · Food · FMCG · UAE</span>
      </div>
    </footer>
  );
}
