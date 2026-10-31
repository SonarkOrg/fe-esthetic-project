// loading.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpContextToken } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../Services/LoaderService/loader.service';

/** Set to true on a request's HttpContext to keep the full-screen loader away (e.g. form posts). */
export const SKIP_LOADER = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context.get(SKIP_LOADER)) {
      return next.handle(req);
    }
    this.loaderService.startLoading();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.stopLoading())
    );
  }
}
