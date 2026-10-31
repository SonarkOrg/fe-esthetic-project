import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { PhilosophySectionComponent } from './philosophy-section/philosophy-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { OverallDescComponent } from './overall-desc/overall-desc.component';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../Services/DataService/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-specific-class',
  templateUrl: './specific-class.component.html',
  styleUrl: './specific-class.component.css'
})
export class SpecificClassComponent {
  itemData: any;

  constructor(private titleService: Title, private dataService: DataService) {}

  ngOnInit(): void {
    this.itemData = this.dataService.getItemData();
    console.log()
    // Check if itemData exists and has a title property
    if (this.itemData && this.itemData.title) {
      this.titleService.setTitle(this.itemData.title);
    } else {
      // Default title if itemData or title property is missing
      this.titleService.setTitle('Specifics');
    }
  }
}
