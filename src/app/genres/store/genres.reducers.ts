import * as fromGenresAction from './genres.actions';

export class State {
  genres: {genre: string}[];
}


export function genresReducers(state: State = {genres: []}, action: fromGenresAction.GenresActions) {
  switch (action.type) {
    case (fromGenresAction.ADD_GENRES):
      return {...state, genres: [...state.genres, action.payload]};
    case (fromGenresAction.ADD_LIST_GENRES):
      return {
        ...state, genres: [...action.payload]
      };
    case (fromGenresAction.REMOVE_GENRES):
      const oldGenres = state.genres.filter((value, index) => action.payload.indexOf(index) < 0);
      return {...state, genres: oldGenres};
    default:
      return state;
  }
}
