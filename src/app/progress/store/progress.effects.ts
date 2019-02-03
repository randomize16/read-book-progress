import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../app.state';
import * as firebase from 'firebase/app';
import 'firebase/database';
import {AddListProgressAction} from './progress.actions';
import * as fromProgressAction from './progress.actions';

@Injectable()
export class ProgressEffects {

  @Effect({dispatch: false})
  saveProgress = this.actions$.pipe(
    ofType(fromProgressAction.ADD_PROGRESS, fromProgressAction.UPDATE_PROGRESS, fromProgressAction.REMOVE_PROGRESS),
    switchMap(() => this.store.select('auth')),
    withLatestFrom(this.store.select('progress')),
    switchMap(([auth, progress]) => fromPromise(firebase.database().ref('users/' + auth.uid + '/progress').set(progress.progressItemList)))
  );

  @Effect()
  fetchProgress = this.actions$.pipe(
    ofType(fromProgressAction.FETCH_PROGRESS_DATA),
    switchMap(() => this.store.select('auth')),
    switchMap(auth => fromPromise(firebase.database().ref('users/' + auth.uid + '/progress').once('value'))),
    map(items => items.val() ? items.val() : []),
    mergeMap(value => [new AddListProgressAction(value)])
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
