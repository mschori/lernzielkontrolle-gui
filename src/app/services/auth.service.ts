import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';

/**
 * @name AuthService
 * @description This service is used for different authentication tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  /**
   * @name loginToBackend
   * @description This function is used to login to the backend with a Firebase ID token.
   * @param firebaseIdToken {string} The Firebase ID token.
   */
  loginToBackend(firebaseIdToken: string): Observable<User> {
    console.log('Logging in to backend with Firebase ID token: ' + firebaseIdToken);
    return this.http.post<User>('http://localhost:8000/api/v1/auth/login', {'firebaseIdToken': firebaseIdToken});
  }
}
