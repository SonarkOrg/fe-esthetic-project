import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderHeaderBookComponent } from './under-header-book.component';

describe('UnderHeaderComponent', () => {
  let component: UnderHeaderBookComponent;
  let fixture: ComponentFixture<UnderHeaderBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderHeaderBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderHeaderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
