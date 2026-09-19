import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MotionController } from '@/components/ui/MotionController';
import { CommerceHero } from '@/components/sections/CommerceHero';
import { CategoryStrip } from '@/components/sections/CategoryStrip';
import { ValuesBand } from '@/components/sections/ValuesBand';
import { CollectionsGrid } from '@/components/sections/CollectionsGrid';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { MarketplaceProof } from '@/components/sections/MarketplaceProof';
import { TradeBenefits } from '@/components/sections/TradeBenefits';
import { CompanyBand } from '@/components/sections/CompanyBand';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { SupplySteps } from '@/components/sections/SupplySteps';
import { FAQSection } from '@/components/sections/FAQSection';
import { TradeContact } from '@/components/sections/TradeContact';

export default function HomePage() {
  return (
    <>
      <MotionController />
      <SiteHeader />
      <main>
        <CommerceHero />
        <CategoryStrip />
        <ValuesBand />
        <CollectionsGrid />
        <FeaturedProducts />
        <MarketplaceProof />
        <TradeBenefits />
        <CompanyBand />
        <ComplianceSection />
        <SupplySteps />
        <FAQSection />
        <TradeContact />
      </main>
      <SiteFooter />
    </>
  );
}
