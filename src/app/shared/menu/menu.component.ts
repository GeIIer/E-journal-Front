import { Component } from '@angular/core';
import { navbarDate } from './nav-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  collapsed = false;
  navDate = navbarDate;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav() {
    this.collapsed = false;
  }
}
