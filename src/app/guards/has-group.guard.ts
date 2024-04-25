import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../services/user.service';

/**
 * @name hasGroupGuard
 * @description This guard is used to check if the user has the required group.
 * @param route
 * @param state
 */
export const hasGroupGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userService = inject(UserService);
  if (!userService.hasAnyGroup(route.data['groups'])) {
    return router.navigate(['/login']);
  }
  return true;
};
