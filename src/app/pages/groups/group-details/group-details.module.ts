import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupDetailsComponent} from "./group-details.component";
import {RouterModule} from "@angular/router";
import {GroupService} from "../../../services/group.service";



@NgModule({
  declarations: [
    GroupDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GroupDetailsComponent,
      },
    ]),
  ],
  providers: [
    GroupService
  ]
})
export class GroupDetailsModule { }
