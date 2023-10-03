import { createAction, props } from '@ngrx/store';
import { Produits } from 'src/interfaces/produits';
import { User } from 'src/interfaces/user';

export const sendNotification = createAction('[Communication] Send Notification', props<{ data: any }>());
export const sendProduct = createAction('[Communication] Send Product', props<{ data: Produits }>());
export const sendTotal = createAction('[Communication] Send Total', props<{ data: number }>());
export const sendReduction = createAction('[Communication] Send Reduction', props<{ data: number }>());
export const sendAllData = createAction('[Communication] Send All Data', props<{ data: User }>());
