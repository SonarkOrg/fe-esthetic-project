import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeaderServicesComponent } from './under-header-services.component';

describe('UnderHeaderServicesComponent', () => {
  let component: UnderHeaderServicesComponent;
  let fixture: ComponentFixture<UnderHeaderServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderHeaderServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderHeaderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
