import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {isLoggedInGuard} from './guards/is-logged-in.guard';
import {SecretPageComponent} from './secret-page/secret-page.component';
import {HomeComponent} from './home/home.component';

/**
 * @name routes
 * @description Define the routes of the application
 */
export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      show: false
    }
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
    data: {
      show: true,
      loginRequired: false
    }
  },
  {
    path: 'secret-page',
    title: 'Secret Page',
    component: SecretPageComponent,
    canActivate: [isLoggedInGuard],
    data: {
      show: true,
      loginRequired: true
    }
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    data: {
      show: true,
      loginRequired: false
    }
  }
];
