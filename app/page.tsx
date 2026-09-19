import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { PromiseStrip } from '@/components/sections/PromiseStrip';
import { CompanyStory } from '@/components/sections/CompanyStory';
import { CategoryShowcase } from '@/components/sections/CategoryShowcase';
import { ProductUniverse } from '@/components/sections/ProductUniverse';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { SupplyProcess } from '@/components/sections/SupplyProcess';
import { TrustedNetwork } from '@/components/sections/TrustedNetwork';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PromiseStrip />
        <CompanyStory />
        <CategoryShowcase />
        <ProductUniverse />
        <WhyChoose />
        <SupplyProcess />
        <TrustedNetwork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
