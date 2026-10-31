import { HttpContext, HttpHeaders } from '@angular/common/http';
import { SKIP_LOADER } from './Interceptor/loading.interceptor';

export const FORM_HEADERS = new HttpHeaders({ Accept: 'application/json' });
export function formContext(): HttpContext {
  return new HttpContext().set(SKIP_LOADER, true);
}

/** Build a mailto: URL with properly encoded subject and body. */
export function mailtoUrl(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
