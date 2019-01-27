import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {AppState} from './app.state';
import {LogoutAction} from './auth/store/auth.actions';
import {firebaseConfig} from './firebase.init';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {}


  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
