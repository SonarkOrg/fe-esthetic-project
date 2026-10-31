import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDescComponent } from './cards-desc.component';

describe('CardsDescComponent', () => {
  let component: CardsDescComponent;
  let fixture: ComponentFixture<CardsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
