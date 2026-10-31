import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UnderHeaderServicesComponent } from './under-header-services.component';

describe('UnderHeaderServicesComponent', () => {
  let component: UnderHeaderServicesComponent;
  let fixture: ComponentFixture<UnderHeaderServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderHeaderServicesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(UnderHeaderServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
