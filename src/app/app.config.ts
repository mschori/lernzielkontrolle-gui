import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {userReducer} from './state/user/user.reducer';
import {BackendAuthInterceptor} from './http-interceptors/backend-auth.interceptor';

/**
 * @name appConfig
 * @description The application configuration object. Includes ngrx stores.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    {provide: HTTP_INTERCEPTORS, useClass: BackendAuthInterceptor, multi: true},
    provideStore({'user': userReducer}), provideAnimationsAsync()
  ]
};
