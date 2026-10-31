import { Component, ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterTeamComponent } from './footer-team/footer-team.component';
import { ModalTeamComponent } from './modal-team/modal-team.component';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ModalService } from '../../Services/ModalService/modal.service';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  constructor(private modalService: ModalService, private titleService: Title) {
    this.titleService.setTitle("ABOUT US");
  }

  openModal(): void {
    this.modalService.openModal('NAME', 'FIRST NAME', 'LOCATION, ', 'POSITION',
       '“Since I was a teenager I have been obsessed with money and prestige”. I feel so blessed to have the opportunity to work today in my field and make my family proud of me and my achievements that I would like to take a moment and say thank you to all my customers”',
       'FUN FACT: I have never been able to handle hairsprays well it makes me look like a zombie !',
       'FUN FACT: I have never been able to handle hairsprays well it makes me look like a zombie !');
  }
}
