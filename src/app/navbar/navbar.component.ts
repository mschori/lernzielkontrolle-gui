import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {MatListItem, MatNavList} from '@angular/material/list';
import {selectUser} from '../state/user/user.selectors';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {routes} from '../app.routes';
import {MatDivider} from '@angular/material/divider';
import {UserService} from '../services/user.service';
import {resetUser} from '../state/user/user.actions';

/**
 * @name NavbarComponent
 * @description This component is responsible for the navigation bar of the application.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    RouterOutlet,
    MatIcon,
    NgClass,
    MatListItem,
    MatNavList,
    RouterLink,
    NgForOf,
    NgIf,
    AsyncPipe,
    MatDivider

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user$: Observable<User> = this.store.select(selectUser);
  _routes = routes;

  constructor(private store: Store, private userService: UserService, private router: Router) {
  }

  /**
   * @name logout
   * @description This function is used to logout the user from the application.
   */
  logout() {
    this.userService.logout()
      .then(() => {
        this.store.dispatch(resetUser());
        return this.router.navigate(['/login']);
      });
  }
}
