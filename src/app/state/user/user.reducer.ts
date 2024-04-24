import {createReducer, on} from '@ngrx/store';
import {resetUser, setUser, setUserAuthState} from './user.actions';
import {User} from '../../interfaces/user';
import {getStateUser} from '../../services/user.service';

export const userReducer = createReducer(
  getStateUser(),
  on(setUser, (_state, {user}): User => user),
  on(setUserAuthState, (state, {isLoggedIn}): User => ({...state, isLoggedIn: isLoggedIn})),
  on(resetUser, (): User => getStateUser())
);
