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
    eyebrow: 'Skincare',
    title: 'Skincare & face care',
    copy: 'Clean, retail-ready skincare and daily face-care essentials.',
    image:
      'https://images.pexels.com/photos/34939748/pexels-photo-34939748.jpeg?auto=compress&cs=tinysrgb&w=1800',
  },
  {
    category: 'beauty',
    eyebrow: 'Beauty',
    title: 'Beauty retail assortment',
    copy: 'A broad cosmetics and personal-care selection for modern shelves.',
    image:
      'https://images.pexels.com/photos/3735625/pexels-photo-3735625.jpeg?auto=compress&cs=tinysrgb&w=1800',
  },
  {
    category: 'beauty',
    eyebrow: 'Personal care',
    title: 'Beauty & wellness essentials',
    copy: 'Personal-care and beauty products presented for everyday retail demand.',
    image:
      'https://images.pexels.com/photos/3735626/pexels-photo-3735626.jpeg?auto=compress&cs=tinysrgb&w=1800',
  },
  {
    category: 'food',
    eyebrow: 'Food',
    title: 'Rice, grains & pulses',
    copy: 'Staple grains and pantry ingredients for grocery and wholesale buyers.',
    image:
      'https://images.pexels.com/photos/8108057/pexels-photo-8108057.jpeg?auto=compress&cs=tinysrgb&w=1800',
  },
  {
    category: 'food',
    eyebrow: 'Food',
    title: 'Oils & condiments',
    copy: 'Cooking oils, condiments and practical kitchen essentials.',
    image:
      'https://images.pexels.com/photos/10048335/pexels-photo-10048335.jpeg?auto=compress&cs=tinysrgb&w=1800',
  },
  {
    category: 'fmcg',
    eyebrow: 'FMCG',
    title: 'Packaged everyday goods',
    copy: 'Fast-moving shelf products suited to recurring retail demand.',
    image:
      'https://images.pexels.com/photos/10907746/pexels-photo-10907746.jpeg?auto=compress&cs=tinysrgb&w=1800',
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
