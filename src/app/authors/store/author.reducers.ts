import {State} from './author.actions';
import * as fromAuthorsAction from './author.actions';

export function authorActionReducer(state: State, action: fromAuthorsAction.AuthorActions) {
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
      const oldAuthors = [...state.authors];
      oldAuthors.splice(action.payload, 1);
      return {
        ...state, authors: oldAuthors
      };
    case (fromAuthorsAction.ADD_AUTHORS):
      return {
        ...state, authors: [...state.authors, ...action.payload]
      };
    default:
      return state;
  }
}
