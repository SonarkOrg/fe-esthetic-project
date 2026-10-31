// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingRequests = 0;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public startLoading() {
    this.loadingRequests++;
    this.isLoading.next(true);
  }

  public stopLoading() {
    this.loadingRequests--;
    if (this.loadingRequests <= 0) {
      this.loadingRequests = 0; // Ensure it doesn't go negative.
      this.isLoading.next(false);
    }
  }
}
