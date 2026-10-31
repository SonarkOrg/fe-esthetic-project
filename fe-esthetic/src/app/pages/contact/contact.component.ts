import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { UnderHeaderContactComponent } from '../../common/under-header-contact/under-header-contact.component';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private titleService: Title) {
    this.titleService.setTitle('Contact us');
    this.myForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('User input:', this.myForm.value.userName);
    // Handle the user input as needed
  }

}
