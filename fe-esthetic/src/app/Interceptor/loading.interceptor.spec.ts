import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../Services/LoaderService/loader.service';
import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoaderService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true
        }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add loader when making HTTP request', () => {
    // Set isLoading to true before making the request
    loaderService.isLoading.next(true);

    httpClient.get('/data').subscribe();
    const req = httpMock.expectOne('/data');
    expect(loaderService.isLoading.value).toBe(true);
    req.flush({});
  });

  it('should remove loader when HTTP request completes', () => {
    // Set isLoading to true before making the request
    loaderService.isLoading.next(true);

    httpClient.get('/data').subscribe();
    const req = httpMock.expectOne('/data');
    req.flush({});
    expect(loaderService.isLoading.value).toBe(false);
  });
});
