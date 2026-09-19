import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CommerceHero } from '@/components/sections/CommerceHero';
import { CategoryStrip } from '@/components/sections/CategoryStrip';
import { ValuesBand } from '@/components/sections/ValuesBand';
import { CollectionsGrid } from '@/components/sections/CollectionsGrid';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { TradeBenefits } from '@/components/sections/TradeBenefits';
import { CompanyBand } from '@/components/sections/CompanyBand';
import { SupplySteps } from '@/components/sections/SupplySteps';
import { FAQSection } from '@/components/sections/FAQSection';
import { TradeContact } from '@/components/sections/TradeContact';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CommerceHero />
        <CategoryStrip />
        <ValuesBand />
        <CollectionsGrid />
        <FeaturedProducts />
        <TradeBenefits />
        <CompanyBand />
        <SupplySteps />
        <FAQSection />
        <TradeContact />
      </main>
      <SiteFooter />
    </>
  );
}
