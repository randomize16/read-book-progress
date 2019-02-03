import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../app.state';
import * as firebase from 'firebase/app';
import 'firebase/database';
import {AddListGenres} from './genres.actions';
import * as fromGenresAction from './genres.actions';

@Injectable()
export class GenresEffects {

  @Effect({dispatch: false})
  saveGenres = this.actions$.pipe(
    ofType(fromGenresAction.ADD_GENRES, fromGenresAction.REMOVE_GENRES),
    switchMap(() => this.store.select('auth')),
    withLatestFrom(this.store.select('genres')),
    switchMap(([auth, genres]) => fromPromise(firebase.database().ref('users/' + auth.uid + '/genres').set(genres.genres)))
  );

  @Effect()
  fetchGenres = this.actions$.pipe(
    ofType(fromGenresAction.FETCH_GENRES),
    switchMap(() => this.store.select('auth')),
    switchMap(auth => fromPromise(firebase.database().ref('users/' + auth.uid + '/genres').once('value'))),
    map(items => items.val() ? items.val() : []),
    mergeMap(value => [new AddListGenres(value)])
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
