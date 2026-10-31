import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UnderHeaderBookComponent } from './under-header-book.component';

describe('UnderHeaderBookComponent', () => {
  let component: UnderHeaderBookComponent;
  let fixture: ComponentFixture<UnderHeaderBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderHeaderBookComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderHeaderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
