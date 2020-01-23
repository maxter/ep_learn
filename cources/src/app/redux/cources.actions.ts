import {Action} from '@ngrx/store';

export enum CourcesActionTypes {
  Add = '[Cource Component] Add',
  Remove = '[Cource Component] Remove',
  LoadCourcesSuccess = '[Cource Component] LoadCourcesSuccess',
  LOAD_COURCES ='[Cource Component] LoadCources',
  Save = '[Cource Component] Save',
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
 
export class LoadCourcesSuccess implements ActionEx {
  readonly type = CourcesActionTypes.LoadCourcesSuccess;
  constructor(public payload: any) {
  }
}

export class LOAD_COURCES implements ActionEx {
  readonly type = CourcesActionTypes.LOAD_COURCES;
  constructor(public payload: any) {
  }
}

export class CourceSave implements ActionEx {
  readonly type = CourcesActionTypes.Save;
  constructor(public payload: any) {
  }
}








// import {Action} from '@ngrx/store';

// export enum CourcesActionTypes {
//   Add = '[Cource Component] Add',
//   Remove = '[Cource Component] Remove',
//   LoadCourcesSuccess = '[Cource Component] LoadCourcesSuccess',
//   LOAD_COURCES ='[Cource Component] LoadCources'
// }
// export class ActionEx implements Action {
//   readonly type;
//   payload: any;
// }
// export class CourceAdd implements ActionEx {
//   readonly type = CourcesActionTypes.Add;
//   constructor(public payload: any) {
//   }
// }
// export class CourceRemove implements ActionEx {
//   readonly type = CourcesActionTypes.Remove;
//   constructor(public payload: any) {
//   }
// }
 
// export class LoadCourcesSuccess implements ActionEx {
//   readonly type = CourcesActionTypes.LoadCourcesSuccess;
//   constructor(public payload: any) {
//   }
// }

// export class LOAD_COURCES implements ActionEx {
//   readonly type = CourcesActionTypes.LOAD_COURCES;
//   constructor(public payload: any) {
//   }
// }