import * as firebase from 'firebase/app';
import * as fromAuthActions from './auth.actions';

const initialState: fromAuthActions.State = {
  token: null,
  authorize: false
};

export function authReducers(state: fromAuthActions.State = initialState, action: fromAuthActions.AuthActions) {
  switch (action.type) {
    case (fromAuthActions.SIGNUP):
      // firebase.auth().createUserWithEmailAndPassword(action.payload.login, action.payload.password)
      //   .then(value => {
      //     console.log('asd' , value);
      //   });
      console.log('state', state, action);
          return {...state, authorize: true};
    case (fromAuthActions.SIGNIN):
      // firebase.auth().signInWithEmailAndPassword(action.payload.login, action.payload.password)
      //   .then(value => {
      //     console.log('signin', value);
      //   });
          return state;
    case (fromAuthActions.LOGOUT):
      return {
        ...state, authorize: false, token: null
      };
    case (fromAuthActions.TOKEN):
      return state;
    default:
      return state;
  }
}
