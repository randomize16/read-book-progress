import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {firebaseConfig} from './firebase.init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Books reading progress';

  ngOnInit(): void {
    firebase.initializeApp(firebaseConfig);
  }
}
