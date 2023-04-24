import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import {RouterModule} from "@angular/router";
import {SubjectsComponent} from "../subjects/subjects.component";



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeachersComponent,
      },
    ]),
  ],
})
export class TeachersModule { }
