import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {StorageService} from "./services/storage.service";


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ElectronicJournal';

  isSideNavCollapsed = false;
  screenWidth = 0;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
