import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ElectronicJournal';

  isSideNavCollapsed = false;
  screenWidth = 0;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
    console.log(this.isLoggedIn)
    console.log(this.authService.isAuthenticated());

    if (this.isLoggedIn) {
      const user = this.authService.getToken();
      this.roles = ['ROLE_ADMIN'];

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = 'test';
    }
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
