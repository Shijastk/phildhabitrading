import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { Capabilities } from '@/components/sections/Capabilities';
import { Intro } from '@/components/sections/Intro';
import { CategoryShowcase } from '@/components/sections/CategoryShowcase';
import { Distribution } from '@/components/sections/Distribution';
import { ProductUniverse } from '@/components/sections/ProductUniverse';
import { SupplyProcess } from '@/components/sections/SupplyProcess';
import { MarketFit } from '@/components/sections/MarketFit';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Capabilities />
        <Intro />
        <CategoryShowcase />
        <Distribution />
        <ProductUniverse />
        <SupplyProcess />
        <MarketFit />
        <StatsStrip />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
