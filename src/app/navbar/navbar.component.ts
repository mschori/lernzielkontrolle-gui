import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {MatListItem, MatNavList} from '@angular/material/list';
import {selectUser} from '../state/user/user.selectors';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {routes} from '../app.routes';

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
    AsyncPipe

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user$: Observable<User> = this.store.select(selectUser);
  _routes = routes;

  constructor(private store: Store) {
  }
}
