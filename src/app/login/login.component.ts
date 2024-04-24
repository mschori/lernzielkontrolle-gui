import {Component} from '@angular/core';
import {signInWithPopup} from 'firebase/auth';
import {FirebaseService} from '../services/firebase.service';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {Store} from '@ngrx/store';
import {selectUser, selectUserIsLoggedIn} from '../state/user/user.selectors';
import {AsyncPipe, NgIf} from '@angular/common';
import {setUser} from '../state/user/user.actions';

/**
 * @name LoginComponent
 * @description This component is used to manage the login process of the application.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user$: Observable<User>;
  userIsLoggedIn$: Observable<boolean>;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private userService: UserService,
    private store: Store
  ) {
    this.user$ = this.store.select(selectUser);
    this.userIsLoggedIn$ = this.store.select(selectUserIsLoggedIn);
  }

  /**
   * @name loginWithGoogle
   * @description This function is used to login with a Google account.
   */
  loginWithGoogle() {
    signInWithPopup(this.firebaseService.getAuth(), this.firebaseService.getGoogleProvider())
      .then(async (result) => {
        const token = await result.user.getIdToken(false);
        this.authService.loginToBackend(token ?? '').subscribe({
          next: (user) => {
            user.isLoggedIn = true;
            this.userService.setUser(user);
            this.store.dispatch(setUser({user}));
          },
          error: (error) => {
            console.log('Error from backend', error);
            // TODO - Login failed
          }
        });
        // TODO - Login failed
      }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // TODO - Login failed
    });
  }

  /**
   * @name setUserToStore
   * @description This function is used to set a user to the ngrx store -- for testing purposes.
   */
  setUserToStore() {
    this.store.dispatch(setUser({
      user: {
        id: 42,
        email: 'blubber@mail.com',
        firstname: 'bli',
        lastname: 'bla blub',
        groups: [],
        tokens: {access: '', refresh: ''},
        isLoggedIn: true
      }
    }));
  }

}
