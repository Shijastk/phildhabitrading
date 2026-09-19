import { seoFaqs } from '@/data/site';

export function FAQSection() {
  return (
    <section className="faqSection" aria-labelledby="faq-heading">
      <div className="siteShell faqSection__grid">
        <div>
          <p className="eyebrow">FREQUENTLY ASKED</p>
          <h2 id="faq-heading">Wholesale enquiries, answered.</h2>
        </div>

        <div className="faqList">
          {seoFaqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
