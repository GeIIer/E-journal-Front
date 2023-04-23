import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JournalComponent} from './journal.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CalendarComponent} from './calendar/calendar.component';
import {HttpClientModule} from "@angular/common/http";
import {CalendarCreator} from "./calendar/calendar-creator";
import {JournalService} from "../../services/journal.service";

@NgModule({
  declarations: [
    JournalComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JournalComponent,
      },
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CalendarCreator,
    JournalService
  ],
  exports: [
    JournalComponent,
    CalendarComponent
  ],
})
export class JournalModule {
}
