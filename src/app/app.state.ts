import {authReducers} from './auth/store/auth.reducer';
import {authorActionReducer} from './authors/store/author.reducers';

export const AppState = {
  authorsState: authorActionReducer,
  authState: authReducers
};
