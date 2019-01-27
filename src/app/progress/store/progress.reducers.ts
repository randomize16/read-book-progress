import {ProgressItem} from '../progress.model';
import * as fromProgressAction from './progress.actions';


export class State {
  progressItemList: ProgressItem[];
}

const initialState: State = {
  progressItemList: []
};

export function progressReducers(state: State = initialState, action: fromProgressAction.ProgressActions) {
  switch (action.type) {
    case (fromProgressAction.FETCH_DATA):
      console.log('fetchong data');
      return {...state};
    case (fromProgressAction.SAVE_DATA):
      return {...state};
    case (fromProgressAction.ADD_PROGRESS):
      return {...state, progressItemList: [...state.progressItemList, action.payload]};
    case (fromProgressAction.UPDATE_PROGRESS):
      const progressList = [...state.progressItemList];
      progressList[action.payload.index] = {...action.payload.progressItem};
      return {...state, progressItemList: progressList};
    case (fromProgressAction.REMOVE_PROGRESS):
      const oldProgressList = [...state.progressItemList];
      oldProgressList.splice(action.payload)
      return {...state, progressItemList: oldProgressList};
    default:
      return state;
  }
}
