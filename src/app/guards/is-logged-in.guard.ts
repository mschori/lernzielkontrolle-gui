import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../services/user.service';

/**
 * @name isLoggedInGuard
 * @description This guard is used to check if the user is logged in.
 * @param route
 * @param state
 */
export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userService = inject(UserService);
  if (!userService.isUserLoggedIn()) {
    return router.navigate(['/login']);
  }
  return true;
};
