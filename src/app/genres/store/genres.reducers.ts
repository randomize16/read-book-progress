import * as fromGenresAction from './genres.actions';

export class State {
  genres: string[];
}

export function genresReducers(state: State, action: fromGenresAction.GenresActions) {
  // switch (action.type) {
  //   case (fromProgressAction.FETCH_DATA):
  //     console.log('fetchong data');
  //     return {...state};
  //   case (fromProgressAction.SAVE_DATA):
  //     return {...state};
  //   case (fromProgressAction.ADD_PROGRESS):
  //     return {...state, progressItemList: [...state.progressItemList, action.payload]};
  //   case (fromProgressAction.UPDATE_PROGRESS):
  //     const progressList = [...state.progressItemList];
  //     progressList[action.payload.index] = {...action.payload.progressItem};
  //     console.log('update data', progressList);
  //     return {...state, progressItemList: progressList};
  //   case (fromProgressAction.REMOVE_PROGRESS):
  //     const oldProgressList = [...state.progressItemList];
  //     oldProgressList.splice(action.payload)
  //     return {...state, progressItemList: oldProgressList};
  //   default:
  //     return state;
  // }
  return state;
}
