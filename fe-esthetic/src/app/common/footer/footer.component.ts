import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Change styleUrl to styleUrls
})
export class FooterComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('User input:', this.myForm.value.userName);
    // Handle the user input as needed
  }
}
