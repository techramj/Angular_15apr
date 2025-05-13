import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.css'
})
export class Demo5Component {

  formGroup1 = new FormGroup({
    username : new FormControl('',{
      validators :[Validators.required]
    }),
    email : new FormControl('',{
      validators :[Validators.required, Validators.email]
    }),
  });

  get isEmailInvalid(){
    return this.formGroup1.controls.email.touched
    && this.formGroup1.controls.email.invalid;
  }

  get isUsernameInvalid(){
    return this.formGroup1.controls.username.touched
    && this.formGroup1.controls.username.invalid;
  }

  onSubmit(){
    if(this.formGroup1.invalid){
      console.log('invalid forms');
      return;
    }
    let enteredName = this.formGroup1.value.username;
    let email = this.formGroup1.value.email;
    console.log(enteredName, email);
  }



}
