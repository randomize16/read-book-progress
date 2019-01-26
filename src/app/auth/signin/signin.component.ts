import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as fromAuthAction from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', Validators.email),
      'password': new FormControl('')
    });

  }

  signIn() {
    this.store.dispatch(new fromAuthAction.TrySigninAction(this.form.value));
  }
}
