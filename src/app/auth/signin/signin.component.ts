import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromAuthAction from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  private form: FormGroup;

  constructor(private store: Store<{authState}>) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.email),
      'password': new FormControl('')
    });

  }

  private signUp() {
    this.store.dispatch(new fromAuthAction.SigninAction(this.form.value));
  }
}
