import { HttpHeaders } from '@angular/common/http';

export const FORM_HEADERS = new HttpHeaders({ Accept: 'application/json' });

/** Build a mailto: URL with properly encoded subject and body. */
export function mailtoUrl(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
