import {Component, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSelectionList} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppState} from '../app.state';
import {RemoveGenresAction} from './store/genres.actions';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.less']
})
export class GenresComponent {

  @ViewChild('genresList')
    private selectedGenres: MatSelectionList;

  genres: Observable<{genre: string}[]> = this.store.select('genres')
    .pipe(map(value => value.genres));

  constructor(private store: Store<AppState>) {}

  removeGenres() {
    this.store.dispatch(new RemoveGenresAction(this.selectedGenres.selectedOptions.selected
      .map(item => item.value)));
  }

}
