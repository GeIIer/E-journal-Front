import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import {RouterModule} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {TeacherService} from "../../services/teacher.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import { ModalTeacherComponent } from './modal-teacher/modal-teacher.component';



@NgModule({
  declarations: [
    TeachersComponent,
    ModalTeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeachersComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    MdbModalModule,
    MdbFormsModule,
    MdbRippleModule
  ],
  providers: [
    SubjectService,
    TeacherService
  ]
})
export class TeachersModule { }
