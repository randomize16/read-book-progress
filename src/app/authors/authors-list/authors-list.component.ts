import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppState} from '../../app.state';
import {RemoveGenresAction} from '../../genres/store/genres.actions';
import {Author} from '../author.model';
import {RemoveAuthorAction} from '../store/author.actions';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.less']
})
export class AuthorsListComponent implements OnInit {

  @ViewChild('authorsList')
  private authorsList: MatSelectionList;

  authors: Observable<Author[]> = this.store.select('author')
    .pipe(map(value => value.authors));

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) {}

  ngOnInit() {
  }

  removeAuthors() {
    this.store.dispatch(new RemoveAuthorAction(this.authorsList.selectedOptions.selected
      .map(item => item.value)));
  }

  edit() {
    this.router.navigate([this.authorsList.selectedOptions.selected[0].value], {relativeTo: this.route});
  }
}
