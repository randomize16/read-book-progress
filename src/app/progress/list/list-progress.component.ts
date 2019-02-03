import { Component, OnInit } from '@angular/core';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {ProgressItem} from '../progress.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FetchProgressListAction, RemoveProgressAction} from '../store/progress.actions';
import {SelectionModel} from '@angular/cdk/collections';
import { Router, ActivatedRoute} from '@angular/router';

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

  selection = new SelectionModel<number>(false, []);

  displayedColumns = ['select', 'name', 'author', 'genres', 'source', 'year', 'quarter', 'month', 'isComics', 'isSeries', 'rating'];

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private router: Router,
              ) {}

  ngOnInit() {
    this.store.dispatch(new FetchProgressListAction());
  }

  addNew() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }

  edit(){
    this.router.navigate([this.selection.selected[0]], { relativeTo: this.route});
  }

  remove() {
    this.store.dispatch(new RemoveProgressAction(this.selection.selected[0]));
  }

}
