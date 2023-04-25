import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupDetailsComponent} from "./group-details.component";
import {RouterModule} from "@angular/router";
import {GroupService} from "../../../services/group.service";
import {TeacherService} from "../../../services/teacher.service";
import { ModalStudentComponent } from './modal-student/modal-student.component';
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../../services/student.service";



@NgModule({
  declarations: [
    GroupDetailsComponent,
    ModalStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GroupDetailsComponent,
      },
    ]),
    FormsModule,
    MdbModalModule,
    MdbFormsModule,
    MdbRippleModule
  ],
  providers: [
    GroupService,
    StudentService,
    TeacherService
  ]
})
export class GroupDetailsModule { }
