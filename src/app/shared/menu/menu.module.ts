import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import {RouterLink, RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink
  ],
  exports: [
    MenuComponent,
  ]
})
export class MenuModule { }
