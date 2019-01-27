import {ActionReducerMap} from '@ngrx/store';
import * as fromAuthReducers from './auth/store/auth.reducer';
import * as fromAuthorReducers from './authors/store/author.reducers';
import * as fromProgressReducers from './progress/store/progress.reducers';


export interface AppState {
  auth: fromAuthReducers.State;
  author: fromAuthorReducers.State;
  progress: fromProgressReducers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuthReducers.authReducers,
  author: fromAuthorReducers.authorActionReducer,
  progress: fromProgressReducers.progressReducers
};

