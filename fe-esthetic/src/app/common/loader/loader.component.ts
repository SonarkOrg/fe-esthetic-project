// loader.component.ts
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { LoaderService } from '../../Services/LoaderService/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoaderComponent {
  loading: boolean = false;
  private loadingSubscription: Subscription;

  constructor(private loadingService: LoaderService) {
    this.loadingSubscription = this.loadingService.isLoading.subscribe(
      (isLoading) => {
        this.loading = isLoading;
        console.log(this.loading)
      }
    );
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
