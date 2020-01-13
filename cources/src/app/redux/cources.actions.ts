import {Action} from '@ngrx/store';

export enum CourcesActionTypes {
  Add = '[Cource Component] Add',
  Remove = '[Cource Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class CourceAdd implements ActionEx {
  readonly type = CourcesActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class CourceRemove implements ActionEx {
  readonly type = CourcesActionTypes.Remove;
  constructor(public payload: any) {
  }
}
