import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Day} from "./calendar-day";
import {CalendarCreator} from "./calendar-creator";
import {Student} from "../../../core/models/student";
import {Record} from "../../../core/models/record";
import {Subject} from "../../../core/models/subject";
import {JournalService} from "../../../services/journal.service";
import {Group} from "../../../core/models/group";

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
  @Input() subject!: Subject;
  @Input() group!: Group;
  @Input() students!: Student[];
  @Input() records!: Map<number, Record[]>;

  @ViewChild('inputElement') inputElement: any;

  changeRecords: Record[] = [];
  change: boolean = false;
  private error: boolean = false;

  constructor(public calendarCreator: CalendarCreator,
              private journalService: JournalService ) {
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

    if (this.monthNumber >= 12) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 0) {
      this.monthNumber = 11;
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
    let results = this.records?.get(id);
     if (results != null) {
       return results;
     }
    return [];
  }

  public getResult(records: Record[] | null, date: number, mouth:number): string | null {
    if (records === null) {
      return null;
    }
    let result = records.find(elem => new Date(elem.date).getMonth() === mouth && new Date(elem.date).getDate() === date);
    if (result != null) {
      return result.result;
    }
    return null;
  }

  public log(val: any, val1: any, val2: any) {
    console.log("Студент:", val, val1, val2);
  }

  public getDays() {
    let result: number[] = [];
    for(let i = 0; i<this.monthDays.length; i++) {
      result.push(this.monthDays[i].number);
    }
    return result.filter((it): it is number => it !== undefined);
  }

  changeResult(student: Student, day: number, monthIndex: number, year:number, result:any) {
    console.log("Log редактирования:");
    let date = new Date(year, monthIndex, day);
    console.log(date);
    console.log(student.id, date, this.subject, result);
    if (result === "") {

    } else {
      let record: Record = {
        id: null,
        student: student.id,
        date: date,
        subject: this.subject.id.toString(),
        result: result!.toString()
      }
      this.changeRecords.push(record);
      this.change = true;
    }
  }

  reset() {
    this.inputElement.nativeElement.value = "";
    this.change = false;
    this.changeRecords = [];
    this.updateRecords();
  }

  save() {
    console.log("Сохранение изменений");
    console.log(this.changeRecords);
    this.journalService.saveRecords(this.changeRecords).subscribe({
      next: data => {
        console.log(data);
        this.change = false;
        this.changeRecords = [];
        this.updateRecords();
      },
      error: err => {
        this.error = true;
      }
    })
  }

  private updateRecords() {
    this.journalService.getRecordsInJournal(this.group.id, this.subject.id).subscribe({
      next: (data) => {
        let dataMap = new Map(Object.entries(data));
        let record = new Map<number, Record[]>();
        dataMap.forEach(function (value, key, map) {
          let num = parseInt(key);
          let recordsArray: Record[] = map.get(key);
          record.set(num, recordsArray);
        });
        this.records = record;
        console.log("Список оценок с БД:");
        console.log(this.records);
      },
      error: err => {
        this.error = true;
      }
    });
  }
}
