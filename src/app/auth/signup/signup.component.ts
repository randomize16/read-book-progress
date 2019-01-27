import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

import * as fromAuthAction from '../store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {

  signUpForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(6)
    ])]
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  signUp() {
    this.store.dispatch(new fromAuthAction.TrySignupAction(this.signUpForm.value));
  }

}
