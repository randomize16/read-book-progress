import {Author} from '../author.model';
import * as fromAuthorsAction from './author.actions';

export class State {
  authors: Author[];
}

export function authorActionReducer(state: State = {authors: []}, action: fromAuthorsAction.AuthorActions) {
  switch (action.type) {
    case (fromAuthorsAction.ADD_AUTHOR):
      return {
        ...state, authors: [
          ...state.authors, action.payload
        ]
      };
    case (fromAuthorsAction.EDIT_AUTHOR):
      const authors = [...state.authors];
      authors[action.payload.index] = action.payload.author;
      return {
        ...state, authors: authors
      };
    case (fromAuthorsAction.REMOVE_AUTHOR):
      const oldAuthors = state.authors.filter((value, index) => action.payload.indexOf(index) < 0);
      return {...state, authors: oldAuthors};
    default:
      return state;
  }
}
