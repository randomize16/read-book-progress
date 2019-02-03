import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthEffects {

  @Effect()
  signinEffect = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    switchMap((action: AuthActions.TrySigninAction) => fromPromise(firebase.auth()
      .signInWithEmailAndPassword(action.payload.email, action.payload.password))
      .pipe(
        map(value => {
          this.router.navigate(['/']);
          return new AuthActions.SetTokenAction(
          {token: '', uid: value.user.uid});
        }),
        catchError(err => {
          return of(new AuthActions.AuthError(err.message));
        })
      )
    )
  );

  @Effect()
  signupEffect = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    switchMap((action: AuthActions.TrySignupAction) => fromPromise(firebase.auth()
      .createUserWithEmailAndPassword(action.payload.email, action.payload.password))
      .pipe(
        map(value => {
          this.router.navigate(['/']);
          return new AuthActions.SetTokenAction(
            {token: '', uid: value.user.uid});
        }),
        catchError(err => {
          return of(new AuthActions.AuthError(err.message));
        })
      )
    )
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
