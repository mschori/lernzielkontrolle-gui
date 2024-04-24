import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {userReducer} from './state/user/user.reducer';

/**
 * @name appConfig
 * @description The application configuration object. Includes ngrx stores.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({'user': userReducer})
  ]
};
