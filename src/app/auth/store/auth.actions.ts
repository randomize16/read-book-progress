import {Action} from '@ngrx/store';

export class State {
  authorize: boolean = false;
  token: string = null;
}

export const SIGNIN  = 'SIGNIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
export const TOKEN = 'TOKEN';

export class SigninAction extends Action {
  readonly type = SIGNIN;
  constructor( public payload: {login: string, password: string})
}
export class SignupAction extends Action {
  readonly type = SIGNUP;
  constructor( public payload: {login: string, password: string})
}
export class LogoutAction extends Action {
  readonly type = LOGOUT;
}
export class TokenAction extends Action {
  readonly type = TOKEN;
}
