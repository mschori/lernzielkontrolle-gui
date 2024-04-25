import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {isLoggedInGuard} from './guards/is-logged-in.guard';
import {SecretPageComponent} from './secret-page/secret-page.component';
import {HomeComponent} from './home/home.component';
import {Group} from './enums/group';
import {hasGroupGuard} from './guards/has-group.guard';

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
      show: false,
      loginRequired: false,
      groups: []
    }
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
    data: {
      show: true,
      loginRequired: false,
      groups: []
    }
  },
  {
    path: 'secret-page',
    title: 'Secret Page',
    component: SecretPageComponent,
    canActivate: [isLoggedInGuard, hasGroupGuard],
    data: {
      show: true,
      loginRequired: true,
      groups: [{id: 0, name: Group[Group.STUDENT]}]
    }
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    data: {
      show: false,
      loginRequired: false,
      groups: []
    }
  }
];
