import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import {RouterModule} from "@angular/router";
import {SubjectService} from "../../services/subject.service";



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubjectsComponent,
      },
    ]),
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectsModule { }
