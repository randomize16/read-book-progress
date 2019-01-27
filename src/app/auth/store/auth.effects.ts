import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {fromPromise} from 'rxjs/internal-compatibility';
import { mergeMap, switchMap, tap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthEffects {

  @Effect()
  signinEffect = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    switchMap((action: AuthActions.TrySigninAction) => fromPromise(firebase.auth()
      .signInWithEmailAndPassword(action.payload.email, action.payload.password))),
    switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken())),
    mergeMap( (token: string) => {
      this.router.navigate(['/']);
      return [
        new AuthActions.SetTokenAction(token),
        new AuthActions.SigninAction()
      ];
    })
  );

  @Effect()
  signupEffect = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    switchMap((action: AuthActions.TrySignupAction) => fromPromise(firebase.auth()
      .createUserWithEmailAndPassword(action.payload.email, action.payload.password))),
    switchMap(() => fromPromise(firebase.auth().currentUser.getIdToken())),
    mergeMap( (token: string) => {
      this.router.navigate(['/']);
      return [
        new AuthActions.SetTokenAction(token),
        new AuthActions.SignupAction()
      ];
    })
  );

  @Effect({dispatch: false})
  logoutEffect = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.router.navigate(['/signin']);
    })
  );

  constructor(private actions$: Actions, private router: Router) {}
}
