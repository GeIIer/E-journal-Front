import {Component, Input, OnInit} from '@angular/core';
import {Day} from "./calendar-day";
import {CalendarCreator} from "./calendar-creator";
import {Student} from "../../../core/models/student";
import {Record} from "../../../core/models/record";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public monthDays!: Day[];

  public monthNumber!: number;
  public year!: number;

  public weekDaysName: string[] = [];
  @Input() columns!: any;
  @Input() students!: Student[];
  @Input() records!: Map<number, Record[]>;

  constructor(public calendarCreator: CalendarCreator) {

  }

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push("Mo");
    this.weekDaysName.push("Tu");
    this.weekDaysName.push("We");
    this.weekDaysName.push("Th");
    this.weekDaysName.push("Fr");
    this.weekDaysName.push("Sa");
    this.weekDaysName.push("Su");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber == 13) {
      this.monthNumber = 1;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }

  public getListResultsByStudent(id: number): Record[] | null {
    //let records = data.find(elem => elem.studentId === id);
    let records = this.records.get(id);
    if (records != null) {
      console.log(records);
      return records;
    }
    return null;
  }

  public getResult(records: Record[] | null, date: number): string | null {
    if (records == null) {
      return null;
    }
    let result = records.find(elem => elem.date.getDate() === date);
    if (result != null) {
      console.log(result.result);
      return result.result;
    }
    return null;
  }

  public log(val: any) {
    console.log(val);
  }

  public getDays() {
    let result: number[] = [];
    for(let i = 0; i<this.monthDays.length; i++) {
      result.push(this.monthDays[i].number);
    }
    //console.log(result.filter((it): it is number => it !== undefined));
    return result.filter((it): it is number => it !== undefined);
  }
}
