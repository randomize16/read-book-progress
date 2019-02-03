import {Action} from '@ngrx/store';


export const ADD_GENRES = 'ADD_GENRES';
export const ADD_LIST_GENRES = 'ADD_LIST_GENRES';
export const REMOVE_GENRES = 'REMOVE_GENRES';
export const FETCH_GENRES = 'FETCH_GENRES';


export class AddGenresAction implements Action {
  readonly type = ADD_GENRES;
  constructor(public payload: {genre: string}) {}
}

export class AddListGenres implements Action{
  readonly type = ADD_LIST_GENRES;
  constructor(public payload: {genre: string}[]) {}
}

export class RemoveGenresAction implements Action {
  readonly type = REMOVE_GENRES;
  constructor(public payload: number[]) {}
}


export class FetchGenres implements Action{
  readonly type = FETCH_GENRES;
}

export type GenresActions = AddGenresAction | RemoveGenresAction | FetchGenres | AddListGenres;
