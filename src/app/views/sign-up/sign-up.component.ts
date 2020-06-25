import { Component } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
		private _formBuilder: FormBuilder
  ){ }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
			nameCtrl: ['', Validators.required],
			emailCtrl: ['', Validators.required],
			passwordCtrl: ['', Validators.required],
			passwordRepeatCtrl: ['', Validators.required]
		});
  }

  onSubmit = (data) => {
    console.log(data);


  }
}
