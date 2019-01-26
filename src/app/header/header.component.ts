import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LogoutAction} from '../auth/store/auth.actions';
import * as appState from '../app.state';
import * as fromAuthReducers from '../auth/store/auth.reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuthReducers.State>;

  constructor(private store: Store<appState.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
