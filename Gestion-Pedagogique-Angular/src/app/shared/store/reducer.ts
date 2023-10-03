// communication.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CommunicationActions from './action'
import { CommunicationState } from './state';

const initialState: CommunicationState = {
  notification: null,
  //@ts-ignore
  product: null,
  total: 0,
  reduction: 0,
  //@ts-ignore
  userData: null,
};

export const communicationReducer = createReducer(
  initialState,
  on(CommunicationActions.sendNotification, (state, { data }) => ({ ...state, notification: data })),
  on(CommunicationActions.sendProduct, (state, { data }) => ({ ...state, product: data })),
  on(CommunicationActions.sendTotal, (state, { data }) => ({ ...state, total: data })),
  on(CommunicationActions.sendReduction, (state, { data }) => ({ ...state, reduction: data })),
  on(CommunicationActions.sendAllData, (state, { data }) => ({ ...state, userData: data }))
);
