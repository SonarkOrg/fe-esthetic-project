import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselServicesComponent } from './carousel-services.component';

describe('CarouselServicesComponent', () => {
  let component: CarouselServicesComponent;
  let fixture: ComponentFixture<CarouselServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
