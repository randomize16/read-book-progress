import {Action} from '@ngrx/store';

export class State {
  authorize: boolean = false;
  token: string = null;
}

export const SIGNIN  = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const TOKEN = 'TOKEN';

export class SigninAction implements Action {
  readonly type = SIGNIN;
  constructor( public payload: {login: string, password: string}) {}
}
export class SignupAction implements Action {
  readonly type = SIGNUP;
  constructor( public payload: {login: string, password: string}) {}
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;
}
export class TokenAction implements Action {
  readonly type = TOKEN;
}

export type AuthActions = SigninAction | SignupAction | LogoutAction | TokenAction;
