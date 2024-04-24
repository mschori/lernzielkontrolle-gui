import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../../interfaces/user';

export const selectUser = createFeatureSelector<User>('user');
export const selectUserIsLoggedIn = createSelector(
  selectUser,
  (user: User) => user.isLoggedIn
);
