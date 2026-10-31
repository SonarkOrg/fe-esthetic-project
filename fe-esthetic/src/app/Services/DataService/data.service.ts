import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private coursesUrl = 'assets/data/courses.json'; // Path to your JSON file
  private itemData: any;

  constructor(private http: HttpClient) { }

  setItemData(data: any): void {
    this.itemData = data;
  }

  getItemData(): any {
    return this.itemData;
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.coursesUrl);
  }

  getCourseById(id: number): Observable<any> {
    return this.getCourses().pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }
}
