import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as fromAuthAction from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent {

  signInForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(6)
    ])]
  });

  authError = this.store.select('auth');

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  signIn() {
    this.store.dispatch(new fromAuthAction.TrySigninAction(this.signInForm.value));
  }
}
