import {createReducer, on} from '@ngrx/store';
import {resetUser, setUser, setUserAuthState} from './user.actions';
import {User} from '../../interfaces/user';
import {getStateUser} from '../../services/user.service';

/**
 * @name userReducer
 * @description This reducer is used to manage the user state in the ngrx store.
 */
export const userReducer = createReducer(
  getStateUser(),
  on(setUser, (_state, {user}): User => user),
  on(setUserAuthState, (state, {isLoggedIn}): User => ({...state, isLoggedIn: isLoggedIn})),
  on(resetUser, (): User => getStateUser())
);
