import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeaderContactComponent } from './under-header-contact.component';

describe('UnderHeaderComponent', () => {
  let component: UnderHeaderContactComponent;
  let fixture: ComponentFixture<UnderHeaderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderHeaderContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderHeaderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
