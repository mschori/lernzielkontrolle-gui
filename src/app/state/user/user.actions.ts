import {createAction, props} from '@ngrx/store';
import {User} from '../../interfaces/user';

export const setUser = createAction('[User] Set User', props<{ user: User }>());
export const setUserAuthState = createAction('[User] Set User Auth State', props<{ isLoggedIn: boolean }>());
export const resetUser = createAction('[User] Reset User');
