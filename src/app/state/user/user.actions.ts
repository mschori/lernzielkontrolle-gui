import {createAction, props} from '@ngrx/store';
import {User} from '../../interfaces/user';

/**
 * @name setUser
 * @description This action is used to set the user in the ngrx store.
 */
export const setUser = createAction('[User] Set User', props<{ user: User }>());

/**
 * @name setUserAuthState
 * @description This action is used to set the user authentication state in the ngrx store.
 */
export const setUserAuthState = createAction('[User] Set User Auth State', props<{ isLoggedIn: boolean }>());

/**
 * @name resetUser
 * @description This action is used to reset the user in the ngrx store.
 */
export const resetUser = createAction('[User] Reset User');
