import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    JournalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JournalComponent,
      },
    ]),
  ],
  exports: [JournalComponent],
})
export class JournalModule { }
