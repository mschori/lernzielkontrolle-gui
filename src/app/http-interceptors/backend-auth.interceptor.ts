import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from '../services/user.service';

/**
 * @name BackendAuthInterceptor
 * @description This interceptor is used to add the JWT token to the request headers.
 */
@Injectable()
export class BackendAuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url.includes('localhost:8000')) {
      const jwtToken = this.userService.getUser().tokens.access;
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
      });
    }
    return next.handle(req);
  }
}
