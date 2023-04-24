import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import {RouterModule} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalSubjectComponent } from './modal-subject/modal-subject.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";

@NgModule({
  declarations: [
    SubjectsComponent,
    ModalSubjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubjectsComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    MdbModalModule,
    MdbFormsModule,
    MdbRippleModule
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectsModule { }
