import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-team',
  templateUrl: './modal-team.component.html',
  styleUrl: './modal-team.component.css'
})
export class ModalTeamComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, firstName: string, location: string,
                                           position: string, content: string, funFact1: string,
                                           funFact2: string }
  ) {}

  closeModal(): void {
    this.dialogRef.close('Success!');
  }
}
