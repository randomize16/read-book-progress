import { Component, OnInit, ViewChild } from '@angular/core';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {ProgressItem} from './progress.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FetchProgressListAction, RemoveProgressAction} from './store/progress.actions';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {

  dataSource: Observable<ProgressItem[]> = this.store.select('progress')
    .pipe(
      map(state => state.progressItemList)
    );

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'author', 'source', 'year'];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchProgressListAction());
  }
}
