import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  submittedForms: any[] = [];

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    agreement: new FormControl(false, [Validators.requiredTrue]) 
  });

  onSubmit() {
    console.log(this.signupForm.value);
    this.submittedForms.push(this.signupForm.value);
    this.signupForm.reset();
  }
}
