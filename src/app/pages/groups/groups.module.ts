import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {GroupService} from "../../services/group.service";

@NgModule({
  declarations: [
    GroupsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GroupsComponent,
      },
    ]),
    FormsModule,
  ],
  providers: [
    GroupService
  ]
})
export class GroupsModule { }
