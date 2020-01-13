import {ActionEx, CourcesActionTypes} from './cources.actions';
//import {CourcesService} from './cource-Service'

// replace with service
//export const initialState = [];

export const initialState = [];


export function CourcesReducer(state = initialState, action: ActionEx) {

  //this.initialState = service.getCources();

  switch (action.type) {
    case CourcesActionTypes.Add:
      return [...state, action.payload];
    case CourcesActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
 