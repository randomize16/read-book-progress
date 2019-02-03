import {Action} from '@ngrx/store';


export const ADD_GENRES = 'ADD_GENRES';
export const REMOVE_GENRES = 'REMOVE_GENRES';


export class AddGenresAction implements Action {
  readonly type = ADD_GENRES;
  constructor(public payload: {genre: string}) {}
}

export class RemoveGenresAction implements Action {
  readonly type = REMOVE_GENRES;
  constructor(public payload: number[]) {}
}

export type GenresActions = AddGenresAction | RemoveGenresAction;
