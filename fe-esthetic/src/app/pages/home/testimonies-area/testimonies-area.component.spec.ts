import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesAreaComponent } from './testimonies-area.component';

describe('TestimoniesAreaComponent', () => {
  let component: TestimoniesAreaComponent;
  let fixture: ComponentFixture<TestimoniesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniesAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimoniesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
