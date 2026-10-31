/**
 * Single place to edit the business details used across the site.
 * Any empty string value is hidden from the UI automatically.
 */
export interface SiteConfig {
  name: string;
  email: string;
  phone: string;
  address: string;
  hours: string;
  socials: { instagram: string; x: string; facebook: string };
  forms: { contactEndpoint: string; newsletterEndpoint: string };
  policyLastUpdated: string;
}

// TODO(owner): replace with real details (email, phone, address, opening hours, social profile URLs)
export const SITE: SiteConfig = {
  name: 'Topkare',
  // TODO(owner): replace with real details (the old template placeholders were removed so no message goes to an unrelated address)
  email: '', // hidden while empty; forms are unavailable without an endpoint or an email
  phone: '', // hidden while empty
  address: '', // TODO(owner): street address (hidden while empty)
  hours: '', // TODO(owner): opening hours (hidden while empty)
  // TODO(owner): replace with real profile URLs
  socials: {
    instagram: 'https://www.instagram.com',
    x: 'https://x.com',
    facebook: 'https://www.facebook.com',
  },
  /**
   * Form endpoints. Each accepts a Formspree-style URL (e.g. https://formspree.io/f/xxxx):
   * the form is POSTed as JSON with `Accept: application/json`.
   * While empty, the forms fall back to opening the visitor's email app (mailto:).
   */
  forms: {
    contactEndpoint: '',
    newsletterEndpoint: '',
  },
  policyLastUpdated: '2026-10-31',
};

/** `tel:` link value derived from the display phone number. */
export function phoneHref(phone: string): string {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}
