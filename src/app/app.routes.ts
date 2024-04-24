import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

/**
 * @name routes
 * @description Define the routes of the application
 */
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
