import {Action} from '@ngrx/store';
import {Author} from '../author.model';

export const ADD_AUTHORS = 'ADD_AUTHORS';
export const ADD_AUTHOR = 'ADD_AUTHOR';
export const EDIT_AUTHOR = 'EDIT_AUTHOR';
export const REMOVE_AUTHOR = 'REMOVE_AUTHOR';

export class State {
  authors: Author[];
}

export class AddAuthorAction implements Action {
  readonly type = ADD_AUTHOR;
  constructor(public payload: Author) {}
}

export class RemoveAuthorAction implements Action {
  readonly type = REMOVE_AUTHOR;
  constructor(public payload: number) {}
}

export class EditAuthorAction implements Action {
  readonly type = EDIT_AUTHOR;
  constructor(public payload: {index: number, author: Author}) {}
}

export class AddAuthorsAction implements Action {
  readonly type = ADD_AUTHORS;
  constructor(public payload: Author[]) {}
}

export type AuthorActions = AddAuthorAction | RemoveAuthorAction | EditAuthorAction | AddAuthorsAction;
