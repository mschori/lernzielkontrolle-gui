import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';
import {MatListItem, MatNavList} from '@angular/material/list';

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
    RouterLink

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
