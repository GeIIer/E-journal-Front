import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    BodyComponent
  ],
  exports: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class BodyModule { }
