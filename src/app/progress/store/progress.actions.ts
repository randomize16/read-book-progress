import {Action} from '@ngrx/store';
import {ProgressItem} from '../progress.model';

export const FETCH_PROGRESS_DATA = 'FETCH_PROGRESS_DATA';
export const ADD_PROGRESS = 'ADD_PROGRESS';
export const ADD_LIST_PROGRESS = 'ADD_LIST_PROGRESS';
export const REMOVE_PROGRESS = 'REMOVE_PROGRESS';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';




export class FetchProgressListAction implements Action {
  readonly type = FETCH_PROGRESS_DATA;
}

export class AddListProgressAction implements Action{
  readonly type = ADD_LIST_PROGRESS;
  constructor(public payload: ProgressItem[]) {}
}

export class AddProgressAction implements Action{
  readonly type = ADD_PROGRESS;
  constructor(public payload: ProgressItem) {}
}

export class RemoveProgressAction implements Action {
  readonly type = REMOVE_PROGRESS;
  constructor(public payload: number) {}
}

export class UpdateProgressAction implements Action{
  readonly type = UPDATE_PROGRESS;
  constructor(public payload: {index: number, progressItem: ProgressItem }) {}
}

export type ProgressActions = FetchProgressListAction
  | AddListProgressAction | AddProgressAction | RemoveProgressAction | UpdateProgressAction;
