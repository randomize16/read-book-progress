import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';

import * as fromAuthAction from '../store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.email),
      'password': new FormControl('')
    });

  }

  signUp() {
    console.log('form', this.form.value);
    this.store.dispatch(new fromAuthAction.TrySignupAction(this.form.value));
  }

}
