import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../Services/LoaderService/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  private loadingSubscription?: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loadingSubscription = this.loaderService.isLoading.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
