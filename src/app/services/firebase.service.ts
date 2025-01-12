import {Injectable} from '@angular/core';
import {FirebaseApp, initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {environment} from '../../environments/environment';

/**
 * @name FirebaseService
 * @description This service is used for different Firebase tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: environment.firebase.apiKey,
    authDomain: environment.firebase.authDomain,
    projectId: environment.firebase.projectId,
    storageBucket: environment.firebase.storageBucket,
    messagingSenderId: environment.firebase.messagingSenderId,
    appId: environment.firebase.appId,
    measurementId: environment.firebase.measurementId
  };

  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
  }

  /**
   * @name getAuth
   * @description This function is used to get the Firebase Auth instance.
   */
  getAuth() {
    const auth = getAuth(this.app);
    auth.useDeviceLanguage();
    return auth;
  }

  /**
   * @name getGoogleProvider
   * @description This function is used to get the Google Auth provider for firebase-authentification.
   */
  getGoogleProvider() {
    return new GoogleAuthProvider();
  }
}
