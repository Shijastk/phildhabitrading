export const company = {
  name: 'Phildhabi General Trading',
  phoneDisplay: '+971 54 744 4094',
  phoneHref: '+971547444094',
  coverage: 'Dubai & Abu Dhabi, UAE',
};

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#company' },
  { label: 'Categories', href: '#categories' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export const products = [
  {
    category: 'beauty',
    eyebrow: 'Cosmetics',
    title: 'Fragrance & perfume',
    copy: 'Premium fragrance and gifting-ready beauty lines.',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=88',
  },
  {
    category: 'beauty',
    eyebrow: 'Skincare',
    title: 'Hydrating face care',
    copy: 'Daily moisturising, cleansing and treatment essentials.',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=88',
  },
  {
    category: 'beauty',
    eyebrow: 'Personal care',
    title: 'Beauty & body care',
    copy: 'Retail-ready personal care for everyday routines.',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=88',
  },
  {
    category: 'food',
    eyebrow: 'Food',
    title: 'Rice & grains',
    copy: 'Pantry staples for groceries, wholesalers and resellers.',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=88',
  },
  {
    category: 'food',
    eyebrow: 'Food',
    title: 'Oils & condiments',
    copy: 'Cooking essentials, condiments and shelf-ready staples.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=88',
  },
  {
    category: 'fmcg',
    eyebrow: 'FMCG',
    title: 'Everyday essentials',
    copy: 'Fast-moving packaged goods for repeat purchase.',
    image:
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=88',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Source',
    copy: 'We identify suitable products and suppliers for your requirement.',
  },
  {
    number: '02',
    title: 'Verify',
    copy: 'Availability, quality and commercial fit are checked before confirmation.',
  },
  {
    number: '03',
    title: 'Coordinate',
    copy: 'Order details and supply planning are aligned clearly with your team.',
  },
  {
    number: '04',
    title: 'Deliver',
    copy: 'We support dependable fulfilment and recurring wholesale demand.',
  },
];


/* Legacy exports kept for type-check compatibility with unused earlier sections. */
export const capabilities = [
  { number: '01', title: 'Curated sourcing', copy: 'Retail-ready products selected around business demand.' },
  { number: '02', title: 'Beauty & personal care', copy: 'Cosmetics, skincare, fragrance and grooming lines.' },
  { number: '03', title: 'Food & FMCG', copy: 'Packaged foods, beverages and daily essentials.' },
  { number: '04', title: 'Wholesale distribution', copy: 'Flexible support for recurring and mixed requirements.' },
];

export const marketSegments = [
  'Supermarkets & grocery stores',
  'Beauty & cosmetics retailers',
  'Convenience stores & mini marts',
  'Wholesalers, resellers & distributors',
  'Hospitality & business buyers',
];
