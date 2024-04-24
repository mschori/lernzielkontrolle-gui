import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../../interfaces/user';

/**
 * @name selectUser
 * @description This selector is used to select the user state from the ngrx store.
 */
export const selectUser = createFeatureSelector<User>('user');

/**
 * @name selectUserIsLoggedIn
 * @description This selector is used to select the user authentication state from the ngrx store.
 */
export const selectUserIsLoggedIn = createSelector(
  selectUser,
  (user: User) => user.isLoggedIn
);
