import {ActionReducerMap} from '@ngrx/store';
import * as fromAuthReducers from './auth/store/auth.reducer';
import * as fromAuthorReducers from './authors/store/author.reducers';


export interface AppState {
  auth: fromAuthReducers.State;
  author: fromAuthorReducers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuthReducers.authReducers,
  author: fromAuthorReducers.authorActionReducer
};
