import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {RouterModule} from "@angular/router";
import {JournalComponent} from "../journal/journal.component";
import {StudentService} from "../../services/student.service";
import {GroupService} from "../../services/group.service";



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentsComponent,
      },
    ]),
  ],
  providers: [
    StudentService,
    GroupService
  ]
})
export class StudentsModule { }
