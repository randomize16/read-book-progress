import 'firebase/auth';
import * as fromAuthActions from './auth.actions';

export class State {
  authenticated: boolean = false;
  token: string = null;
  uid: string;
}

const initialState: State = {
  token: null,
  authenticated: false,
  uid:  null
};

export function authReducers(state: State = initialState, action: fromAuthActions.AuthActions) {
  switch (action.type) {
    case (fromAuthActions.TRY_SIGNIN):
    case (fromAuthActions.TRY_SIGNUP):
      return state;
    case (fromAuthActions.SIGNUP):
    case (fromAuthActions.SIGNIN):
      return {
        ...state, authenticated: true
      };
    case (fromAuthActions.LOGOUT):
      return {
        ...state, authenticated: false, token: null, uid: null
      };
    case (fromAuthActions.SET_TOKEN):
      return {...state, token: action.payload.token, uid: action.payload.uid};
    default:
      return state;
  }
}
