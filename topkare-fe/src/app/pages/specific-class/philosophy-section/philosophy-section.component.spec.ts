import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PhilosophySectionComponent } from './philosophy-section.component';

describe('PhilosophySectionComponent', () => {
  let component: PhilosophySectionComponent;
  let fixture: ComponentFixture<PhilosophySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhilosophySectionComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PhilosophySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
