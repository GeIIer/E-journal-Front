import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import {RouterModule} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {ModuleSubjectComponent} from "./module-subject/module-subject.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SubjectsComponent,
    ModuleSubjectComponent,
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
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectsModule { }
