import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {RouterLink, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'auth',
        component: AuthComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [AuthComponent],
})
export class AuthModule { }
