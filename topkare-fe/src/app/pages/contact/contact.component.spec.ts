import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SITE } from '../../site.config';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form is invalid when empty', () => {
    expect(component.myForm.valid).toBeFalse();
  });

  it('form is valid with name, a valid email and a message', () => {
    component.myForm.setValue({ name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    expect(component.myForm.valid).toBeTrue();
  });

  it('rejects an invalid email', () => {
    component.myForm.setValue({ name: 'Ada', email: 'nope', message: 'Hello' });
    expect(component.f['email'].invalid).toBeTrue();
  });

  it('reports unavailable when there is neither an endpoint nor an email', () => {
    const e = SITE.forms.contactEndpoint, m = SITE.email;
    SITE.forms.contactEndpoint = '';
    SITE.email = '';
    component.myForm.setValue({ name: 'Ada', email: 'ada@example.com', message: 'Hello' });
    component.onSubmit();
    expect(component.state).toBe('unavailable');
    SITE.forms.contactEndpoint = e;
    SITE.email = m;
  });
});
