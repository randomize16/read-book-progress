import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../app.state';
import {AddListAuthor} from './author.actions';
import * as AuthorsActions from './author.actions';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Injectable()
export class AuthorsEffects {

  @Effect({dispatch: false})
  saveAuthors = this.actions$.pipe(
    ofType(AuthorsActions.REMOVE_AUTHOR, AuthorsActions.ADD_AUTHOR),
    switchMap(() => this.store.select('auth')),
    withLatestFrom(this.store.select('author')),
    switchMap(([auth, authors]) => fromPromise(firebase.database().ref('users/' + auth.uid + '/authors').set(authors.authors)))
  );

  @Effect()
  fetchAuthors = this.actions$.pipe(
    ofType(AuthorsActions.FETCH_AUTHORS),
    switchMap(() => this.store.select('auth')),
    switchMap(auth => fromPromise(firebase.database().ref('users/' + auth.uid + '/authors').once('value'))),
    map(items => items.val() ? items.val() : []),
    mergeMap(value => [new AddListAuthor(value)])
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}


}
