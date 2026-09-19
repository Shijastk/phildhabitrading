import Image from 'next/image';

const image =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=86';

export function EditorialProof() {
  return (
    <section className="edProof">
      <div className="edProof__image">
        <Image src={image} alt="Modern logistics and distribution operation" fill sizes="100vw" />
      </div>

      <div className="edProof__overlay" />

      <div className="shell edProof__content">
        <span>06 / BUILT FOR TRADE</span>
        <h2>Good products matter.<br />So does everything between source and shelf.</h2>

        <div className="edProof__stats">
          <div><strong>02</strong><span>core product worlds</span></div>
          <div><strong>UAE</strong><span>market-focused supply</span></div>
          <div><strong>B2B</strong><span>business-first model</span></div>
        </div>
      </div>
    </section>
  );
}
