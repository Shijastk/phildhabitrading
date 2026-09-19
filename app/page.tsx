import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { EditorialStatement } from '@/components/sections/EditorialStatement';
import { EditorialCategories } from '@/components/sections/EditorialCategories';
import { EditorialPortfolio } from '@/components/sections/EditorialPortfolio';
import { EditorialProcess } from '@/components/sections/EditorialProcess';
import { EditorialProof } from '@/components/sections/EditorialProof';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EditorialStatement />
        <EditorialCategories />
        <EditorialPortfolio />
        <EditorialProcess />
        <EditorialProof />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
