import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpContext } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoaderService } from '../Services/LoaderService/loader.service';
import { LoadingInterceptor, SKIP_LOADER } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loader: jasmine.SpyObj<LoaderService>;

  beforeEach(() => {
    loader = jasmine.createSpyObj<LoaderService>('LoaderService', ['startLoading', 'stopLoading']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: LoaderService, useValue: loader },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => httpMock.verify());

  it('starts the loader on request and stops it when the request completes', () => {
    httpClient.get('/data').subscribe();
    expect(loader.startLoading).toHaveBeenCalledTimes(1);
    expect(loader.stopLoading).not.toHaveBeenCalled();
    httpMock.expectOne('/data').flush({});
    expect(loader.stopLoading).toHaveBeenCalledTimes(1);
  });

  it('does not touch the loader when SKIP_LOADER is set', () => {
    httpClient.get('/data', { context: new HttpContext().set(SKIP_LOADER, true) }).subscribe();
    httpMock.expectOne('/data').flush({});
    expect(loader.startLoading).not.toHaveBeenCalled();
    expect(loader.stopLoading).not.toHaveBeenCalled();
  });
});
