import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSelectionList} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppState} from '../app.state';
import {FetchGenres, RemoveGenresAction} from './store/genres.actions';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.less']
})
export class GenresComponent implements OnInit{

  @ViewChild('genresList')
    private selectedGenres: MatSelectionList;

  genres: Observable<{genre: string}[]> = this.store.select('genres')
    .pipe(map(value => value.genres));

  constructor(private store: Store<AppState>) {}

  removeGenres() {
    this.store.dispatch(new RemoveGenresAction(this.selectedGenres.selectedOptions.selected
      .map(item => item.value)));
  }

  ngOnInit(): void {
    this.store.dispatch(new FetchGenres());
  }

}
