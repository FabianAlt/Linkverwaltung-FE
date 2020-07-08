import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  form = new FormGroup({
  Name: new FormControl(''),
  Password: new FormControl(''),
  })
     onSubmit() {
      // TODO: Use EventEmitter with form value
      
      console.warn(this.form.value);
    }
  }

  
