import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {LogoutAction, State} from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private authState: Observable<State>;

  constructor(private store: Store<{authState}>) { }

  ngOnInit() {
    this.authState = this.store.select('authState');
  }

  logout(){
    this.store.dispatch(new LogoutAction());
  }
}
