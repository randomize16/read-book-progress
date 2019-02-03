import {Action} from '@ngrx/store';
import {Author} from '../author.model';

export const ADD_AUTHOR = 'ADD_AUTHOR';
export const EDIT_AUTHOR = 'EDIT_AUTHOR';
export const REMOVE_AUTHOR = 'REMOVE_AUTHOR';
export const FETCH_AUTHORS = 'FETCH_AUTHORS';
export const ADD_LIST_AUTHOR = 'ADD_LIST_AUTHOR';

export class AddAuthorAction implements Action {
  readonly type = ADD_AUTHOR;
  constructor(public payload: Author) {}
}

export class RemoveAuthorAction implements Action {
  readonly type = REMOVE_AUTHOR;
  constructor(public payload: number[]) {}
}

export class EditAuthorAction implements Action {
  readonly type = EDIT_AUTHOR;
  constructor(public payload: {index: number, author: Author}) {}
}

export class FetchAuthors implements Action {
  readonly type = FETCH_AUTHORS;
}

export class AddListAuthor implements Action {
  readonly type = ADD_LIST_AUTHOR;
  constructor(public payload: Author[]) {}
}

export type AuthorActions = AddAuthorAction | RemoveAuthorAction | EditAuthorAction | FetchAuthors | AddListAuthor;
