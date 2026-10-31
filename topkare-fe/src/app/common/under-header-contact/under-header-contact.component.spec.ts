import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UnderHeaderContactComponent } from './under-header-contact.component';

describe('UnderHeaderContactComponent', () => {
  let component: UnderHeaderContactComponent;
  let fixture: ComponentFixture<UnderHeaderContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderHeaderContactComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderHeaderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
