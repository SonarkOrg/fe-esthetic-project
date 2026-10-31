import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns 3 courses', (done) => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(3);
      done();
    });
  });

  it('returns 3 services', (done) => {
    service.getServices().subscribe(services => {
      expect(services.length).toBe(3);
      done();
    });
  });

  it('getServicesById(2) returns the Lashes service', (done) => {
    service.getServicesById(2).subscribe(s => {
      expect(s.id).toBe(2);
      expect(JSON.stringify(s)).toMatch(/lash/i);
      done();
    });
  });

  it('getServicesById returns undefined for an unknown id', (done) => {
    service.getServicesById(99).subscribe(s => {
      expect(s).toBeUndefined();
      done();
    });
  });
});
