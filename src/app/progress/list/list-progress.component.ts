import { Component, OnInit } from '@angular/core';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {ProgressItem} from '../progress.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FetchProgressListAction} from '../store/progress.actions';

@Component({
  selector: 'app-progress',
  templateUrl: './list-progress.component.html',
  styleUrls: ['./list-progress.component.less']
})
export class ListProgressComponent implements OnInit {

  dataSource: Observable<ProgressItem[]> = this.store.select('progress')
    .pipe(
      map(state => state.progressItemList)
    );

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'author', 'source', 'year'];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchProgressListAction());
  }

  editRow(row){
    console.log('fff', row);
  }
}
