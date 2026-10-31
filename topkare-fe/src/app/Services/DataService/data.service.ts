import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import coursesData from '../../../assets/data/courses.json';
import testimonyData from '../../../assets/data/testimony.json';
import servicesData from '../../../assets/data/services.json';

// The JSON files are bundled at build time instead of fetched over HTTP.
// Relative HTTP URLs cannot be resolved during SSR / prerender, so the
// server-rendered HTML used to have no courses, services or testimonies.
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private itemData: any;

  setItemData(data: any): void {
    this.itemData = data;
  }

  getItemData(): any {
    return this.itemData;
  }

  getCourses(): Observable<any[]> {
    return of(coursesData as any[]);
  }

  getServices(): Observable<any[]> {
    return of(servicesData as any[]);
  }

  getTestimony(): Observable<any[]> {
    return of(testimonyData as any[]);
  }

  getCourseById(id: number): Observable<any> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }

  getTestimonyById(id: number): Observable<any> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }

  getServicesById(id: number): Observable<any> {
    return this.getServices().pipe(
      map(services => services.find(service => service.id === id))
    );
  }
}
