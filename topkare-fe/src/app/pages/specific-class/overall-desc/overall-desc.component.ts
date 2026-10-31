import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-desc',
  templateUrl: './overall-desc.component.html',
  styleUrl: './overall-desc.component.css'
})
export class OverallDescComponent implements OnInit{

  @Input() item: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
