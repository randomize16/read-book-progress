import {ProgressItem, Quarter, Source} from '../progress.model';
import * as fromProgressAction from './progress.actions';


export class State {
  progressItemList: ProgressItem[];
}

const initialState: State = {
  progressItemList: [
    {
      author: 'king go',
      comments: 'need more',
      genres: 'comedy',
      isComics: false,
      isFinish: true,
      isSeries: true,
      month: [10],
      name: 'gogo try',
      quarter: Quarter.First,
      rating: 3,
      source: Source.Reader,
      year: '2019'
    }
  ]
};

export function progressReducers(state: State = initialState, action: fromProgressAction.ProgressActions) {
  switch (action.type) {
    case (fromProgressAction.FETCH_PROGRESS_DATA):
      return {...state};
    case (fromProgressAction.SAVE_PROGRESS_DATA):
      return {...state};
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
