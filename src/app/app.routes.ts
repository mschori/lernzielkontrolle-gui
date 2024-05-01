import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {isLoggedInGuard} from './guards/is-logged-in.guard';
import {HomeComponent} from './home/home.component';
import {Group} from './enums/group';
import {hasGroupGuard} from './guards/has-group.guard';
import {LearnAimCheckStudentComponent} from './learn-aim-check-student/learn-aim-check-student.component';

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
    component: LearnAimCheckStudentComponent,
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
