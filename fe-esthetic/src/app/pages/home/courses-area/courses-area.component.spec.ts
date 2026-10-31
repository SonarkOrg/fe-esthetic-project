import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAreaComponent } from './courses-area.component';

describe('CoursesAreaComponent', () => {
  let component: CoursesAreaComponent;
  let fixture: ComponentFixture<CoursesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
