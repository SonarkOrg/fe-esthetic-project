import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDescComponent } from './overall-desc.component';

describe('OverallDescComponent', () => {
  let component: OverallDescComponent;
  let fixture: ComponentFixture<OverallDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverallDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
