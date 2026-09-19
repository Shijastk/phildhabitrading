const faqs = [
  ['What products does Phildhabi General Trading supply?', 'We focus on cosmetics, skincare, personal care, food, beverages, pantry products and everyday FMCG categories.'],
  ['Do you work with retailers and resellers?', 'Yes. The site is designed for B2B enquiries from retailers, resellers, supermarkets, convenience stores and other business buyers.'],
  ['Which UAE markets do you serve?', 'Our current positioning is focused on Dubai and Abu Dhabi, with enquiries handled according to product and order requirements.'],
  ['How can I request pricing or availability?', 'Send your requirement through the trade enquiry form or WhatsApp with the category, quantity and delivery area.'],
];

export function FAQSection() {
  return (
    <section className="faqSection">
      <div className="siteShell faqSection__grid">
        <div>
          <p className="eyebrow">FREQUENTLY ASKED</p>
          <h2>Before your first enquiry.</h2>
        </div>

        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
