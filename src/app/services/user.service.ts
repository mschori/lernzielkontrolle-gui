import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

/**
 * @name getStateUser
 * @description This function is used to get the user state from local storage or return a default user object.
 * @return {User} The user object.
 */
export const getStateUser = (): User => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return {
    id: 0,
    email: '',
    firstname: '',
    lastname: '',
    groups: [],
    tokens: {accessToken: '', refreshToken: ''},
    isLoggedIn: false
  };
};

/**
 * @name UserService
 * @description This service is used to manage the user state in the application.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user!: User;

  constructor() {
    getStateUser();
  }

  /**
   * @name setUser
   * @description This function is used to set the user in the service and save it to local storage.
   * @param user {User} The user object.
   */
  setUser(user: User) {
    this.user = user;
    this.saveUserToLocalStorage();
  }

  /**
   * @name getUser
   * @description This function is used to get the user from the service.
   * @return {User} The user object.
   */
  getUser(): User {
    return this.user;
  }

  /**
   * @name saveUserToLocalStorage
   * @description This function is used to save the user to local storage.
   * @private
   */
  private saveUserToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
