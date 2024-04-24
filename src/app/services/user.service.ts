import {Injectable} from '@angular/core';
import {User} from '../interfaces/user';

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


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user!: User;

  constructor() {
    getStateUser();
  }

  setUser(user: User) {
    this.user = user;
    this.saveUserToLocalStorage();
  }

  getUser(): User {
    return this.user;
  }

  private saveUserToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
