import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophySectionComponent } from './philosophy-section.component';

describe('PhilosophySectionComponent', () => {
  let component: PhilosophySectionComponent;
  let fixture: ComponentFixture<PhilosophySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilosophySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhilosophySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
