import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import { RESPONSE } from '../../response.token';
import { BookNowComponent } from './book-now.component';

describe('BookNowComponent', () => {
  let component: BookNowComponent;
  let fixture: ComponentFixture<BookNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookNowComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BookNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with an unknown id', () => {
    function create(platform: 'server' | 'browser', id: string, res: { status: jasmine.Spy }) {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [BookNowComponent],
        imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id })) } },
          { provide: PLATFORM_ID, useValue: platform },
          { provide: RESPONSE, useValue: res },
        ],
      });
      const f = TestBed.createComponent(BookNowComponent);
      f.detectChanges();
      return f;
    }

    it('shows the not-found state and sets status 404 on the server', () => {
      const res = { status: jasmine.createSpy('status') };
      const f = create('server', '99', res);
      expect(f.componentInstance.notFound).toBeTrue();
      expect(res.status).toHaveBeenCalledWith(404);
      expect((f.nativeElement as HTMLElement).textContent).toContain("couldn't find");
    });

    it('does not touch the response in the browser', () => {
      const res = { status: jasmine.createSpy('status') };
      const f = create('browser', '99', res);
      expect(f.componentInstance.notFound).toBeTrue();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('is not "not found" for a real id', () => {
      const res = { status: jasmine.createSpy('status') };
      const f = create('server', '1', res);
      expect(f.componentInstance.notFound).toBeFalse();
      expect(res.status).not.toHaveBeenCalled();
    });
  });
});
