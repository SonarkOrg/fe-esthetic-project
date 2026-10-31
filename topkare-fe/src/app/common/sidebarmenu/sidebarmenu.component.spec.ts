import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarmenuComponent } from './sidebarmenu.component';

describe('SidebarmenuComponent', () => {
  let component: SidebarmenuComponent;
  let fixture: ComponentFixture<SidebarmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarmenuComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits closed when close() is called', () => {
    let emitted = false;
    component.closed.subscribe(() => (emitted = true));
    component.close();
    expect(emitted).toBeTrue();
  });
});
