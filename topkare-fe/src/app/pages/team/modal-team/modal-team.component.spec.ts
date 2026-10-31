import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalTeamComponent } from './modal-team.component';

describe('ModalTeamComponent', () => {
  let component: ModalTeamComponent;
  let fixture: ComponentFixture<ModalTeamComponent>;
  const dialogRef = jasmine.createSpyObj<MatDialogRef<ModalTeamComponent>>('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalTeamComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            name: 'Doe', firstName: 'Jane', location: 'Studio', position: 'Lash artist',
            content: 'Bio', funFact1: 'One', funFact2: 'Two',
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('derives initials from the member name', () => {
    expect(component.initials).toBe('JD');
  });

  it('closes the dialog', () => {
    component.closeModal();
    expect(dialogRef.close).toHaveBeenCalled();
  });
});
