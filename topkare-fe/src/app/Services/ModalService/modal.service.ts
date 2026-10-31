import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTeamComponent } from '../../pages/team/modal-team/modal-team.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openModal(name: string, firstName: string, location: string, position: string, content: string, funFact1: string, funFact2: string, image?: string): void {
    const dialogRef = this.dialog.open(ModalTeamComponent, {
      width: '960px',
      maxWidth: '94vw',
      maxHeight: '92vh',
      panelClass: 'team-dialog',
      autoFocus: 'dialog',
      data: { name, firstName, location, position, content, funFact1, funFact2, image },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
