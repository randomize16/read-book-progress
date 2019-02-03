import {ProgressItem} from '../progress.model';
import * as fromProgressAction from './progress.actions';


export class State {
  progressItemList: ProgressItem[];
}

export function progressReducers(state: State = {progressItemList: []}, action: fromProgressAction.ProgressActions) {
  switch (action.type) {
    case (fromProgressAction.FETCH_PROGRESS_DATA):
      return {...state};
    case (fromProgressAction.ADD_LIST_PROGRESS):
      return {...state, progressItemList: [...action.payload]};
    case (fromProgressAction.ADD_PROGRESS):
      return {...state, progressItemList: [...state.progressItemList, action.payload]};
    case (fromProgressAction.UPDATE_PROGRESS):
      const progressList = [...state.progressItemList];
      progressList[action.payload.index] = {...action.payload.progressItem};
      console.log('update data', progressList);
      return {...state, progressItemList: progressList};
    case (fromProgressAction.REMOVE_PROGRESS):
      const oldProgressList = [...state.progressItemList];
      oldProgressList.splice(action.payload)
      return {...state, progressItemList: oldProgressList};
    default:
      return state;
  }
}
