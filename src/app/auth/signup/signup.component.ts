import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromAuthAction from '../store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  private form: FormGroup;

  constructor(private store: Store<{authState}>) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.email),
      'password': new FormControl('')
    });

  }

  private signUp() {
    console.log('form', this.form.value);
    this.store.dispatch(new fromAuthAction.SignupAction(this.form.value));
  }

}
