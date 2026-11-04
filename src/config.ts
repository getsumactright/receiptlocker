// Facts the site prints. Keep them true of the shipping app (see PRODUCT.md).

/** The App Store listing. Empty until the app is live; the badge then points at #get. */
export const APP_STORE_URL = '';

export const CONTACT_EMAIL = 'privacy@wecanbuildthat.org';

/** Social profiles. An empty URL shows the icon as "coming soon", unlinked. */
export const SOCIAL: { name: string; href: string }[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/receiptlockerapp/' },
  { name: 'TikTok', href: '' },
];

/** Path to a WebVTT caption file in public/, or '' until the voiceover script is in. */
export const FILM_CAPTIONS = '';

/** Prefix a site path with the configured base. */
export const url = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

/** The app's categories and their Schedule C lines, from FilingRules.swift (Category.seed). */
export const CATEGORIES: [string, string][] = [
  ['Supplies', '22'],
  ['Materials & stock', 'Part III'],
  ['Meals', '24b'],
  ['Parking & tolls', '9'],
  ['Tools & equipment', '13'],
  ['Advertising', '8'],
  ['Software & subscriptions', '27a'],
  ['Phone & utilities', '25'],
  ['Office expense', '18'],
  ['Repairs', '21'],
  ['Contract labor', '11'],
  ['Insurance', '15'],
  ['Rent', '20b'],
  ['Licenses & fees', '23'],
  ['Legal & accounting', '17'],
  ['Travel', '24a'],
  ['Home office', '8829'],
  ['Other', '27a'],
];
