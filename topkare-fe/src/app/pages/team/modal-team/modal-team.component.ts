import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { SITE } from '../../../site.config';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-team',
  templateUrl: './modal-team.component.html',
  styleUrl: './modal-team.component.css'
})
export class ModalTeamComponent {
  readonly site = SITE;
  readonly initials: string;
  constructor(
    public dialogRef: MatDialogRef<ModalTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, firstName: string, location: string,
                                           position: string, content: string, funFact1: string,
                                           funFact2: string, image?: string }
  ) {
    this.initials = ((data.firstName?.[0] ?? '') + (data.name?.[0] ?? '')).toUpperCase();
  }

  closeModal(): void {
    this.dialogRef.close('Success!');
  }
}
