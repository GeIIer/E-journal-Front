import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {RouterModule} from "@angular/router";
import {JournalComponent} from "../journal/journal.component";
import {StudentService} from "../../services/student.service";
import {GroupService} from "../../services/group.service";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {FormsModule} from "@angular/forms";



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
    FormsModule,
    MdbModalModule,
    MdbFormsModule,
    MdbRippleModule
  ],
  providers: [
    StudentService,
    GroupService,
  ]
})
export class StudentsModule { }
