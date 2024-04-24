import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';
import {jwtDecode} from 'jwt-decode';

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
    tokens: {access: '', refresh: ''},
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

  private user: User = getStateUser();

  /**
   * @name loadUser
   * @description This function is used to reload the user to this service.
   * @private
   */
  private loadUser() {
    this.user = getStateUser();
  }

  /**
   * @name deleteUserFromLocalStorage
   * @description This function is used to delete the user from local storage.
   * @private
   */
  private deleteUserFromLocalStorage() {
    localStorage.removeItem('user');
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

  /**
   * @name isAccessTokenValid
   * @description This function is used to check if the access token is valid.
   * @private
   */
  private isAccessTokenValid(): boolean {
    let isValid: boolean = false;
    if (this.user.tokens.access) {
      try {
        const decoded = jwtDecode(this.user.tokens.access);
        if (decoded.exp) {
          isValid = decoded.exp * 1000 > Date.now();
        }
      } catch (Error) {
        isValid = false;
      }
    }
    return isValid;
  }

  /**
   * @name isUserLoggedIn
   * @description This function is used to check if the user is logged in and the jwt token is valid.
   */
  isUserLoggedIn(): boolean {
    this.loadUser();
    return this.user.isLoggedIn && this.isAccessTokenValid();
  }

  /**
   * @name logout
   * @description This function is used to logout the user from the application.
   */
  async logout() {
    this.deleteUserFromLocalStorage();
  }
}
