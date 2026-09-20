import Image from 'next/image';
import brandLogo from '@/public/phildhabi-logo.webp';
import { company } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteShell footerMain">
        <div>
          <a className="siteBrand siteBrand--footer" href="#top" aria-label="Back to top">
            <span className="footerLogoTile">
              <Image src={brandLogo} alt="Phildhabi General Trading logo" width={64} height={47} />
            </span>
            <span>
              <strong>Phildhabi</strong>
              <small>GENERAL TRADING</small>
            </span>
          </a>
          <p className="footerSummary">
            Wholesale sourcing across cosmetics, personal care, food and FMCG for business buyers in Dubai and Abu Dhabi.
          </p>
          <p className="footerSince">Serving UAE trade since {company.experienceSince}</p>
        </div>

        <div className="footerGroup">
          <h2>Explore</h2>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#company">Company</a>
          <a href="#trust">Trust &amp; compliance</a>
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
          <a href={company.emailHref}>{company.email}</a>
        </div>
      </div>

      <div className="siteShell footerBottom">
        <span>© 2018–Present Phildhabi General Trading. All rights reserved.</span>
        <span>Cosmetics · Food · FMCG · UAE</span>
      </div>
    </footer>
  );
}
