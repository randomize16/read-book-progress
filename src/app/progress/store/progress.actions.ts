import {Action} from '@ngrx/store';
import {ProgressItem} from '../progress.model';

export const FETCH_DATA = 'FETCH_DATA';
export const SAVE_DATA = 'SAVE_DATA';
export const ADD_PROGRESS = 'ADD_ITEM';
export const REMOVE_PROGRESS = 'REMOVE_PROGRESS';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';




export class FetchProgressListAction implements Action {
  readonly type = FETCH_DATA;
}

export class SaveProgressListAction implements Action{
  readonly type = SAVE_DATA;
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
  | SaveProgressListAction | AddProgressAction | RemoveProgressAction | UpdateProgressAction;
