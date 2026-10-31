import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer-team',
  templateUrl: './footer-team.component.html',
  styleUrl: './footer-team.component.css'
})
export class FooterTeamComponent {
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
