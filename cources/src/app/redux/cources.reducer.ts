import {ActionEx, CourcesActionTypes} from './cources.actions';

export const initialState = [];


export function CourcesReducer(state = initialState, action: ActionEx) {

  switch (action.type) {
    case CourcesActionTypes.Add:
      return [...state, action.payload];
    case CourcesActionTypes.LoadCourcesSuccess:
      return action.payload;
    case CourcesActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
  