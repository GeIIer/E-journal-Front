import {Component, OnInit} from '@angular/core';
import {Student} from "../../core/models/student";
import {JournalService} from "./journal.service";
import {Router} from "@angular/router";
import {Record} from "../../core/models/record";
import {RecordsInJournal} from "../../core/models/recordsInJournal";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  columns: any = [
    {columnField: "nameProduct", columnName: "Название"},
    {columnField: "characteristic", columnName: "Описание"},
    {columnField: "price", columnName: "Цена, руб"},
  ];

  students: Student[] = [
    {id: 1, firstname: "Игнат", lastname: "Шивченко", email: "test@test.ru", groupId: 1},
    {id: 2, firstname: "Мария", lastname: "Добронравова", email: "test@test.ru", groupId: 1},
    {id: 3, firstname: "Артём", lastname: "Шустрый", email: "test@test.ru", groupId: 1},
    {id: 4, firstname: "Василий", lastname: "Крапов", email: "test@test.ru", groupId: 1},
    {id: 5, firstname: "Марго", lastname: "Лисичкина", email: "test@test.ru", groupId: 1},
  ];

  records: RecordsInJournal[] = [
    {
      student: {
        id: 1, firstname: "Игнат", lastname: "Шивченко", email: "test@test.ru", groupId: 1
      },
      records: [
        {id: 1, student: 1, date: new Date("2023-03-28"), subject: "Русский Язык", result: "5"},
        {id: 2, student: 1, date: new Date("2023-03-27"), subject: "Русский Язык", result: "4"},
        {id: 3, student: 1, date: new Date("2023-03-26"), subject: "Русский Язык", result: "3"},
        {id: 4, student: 1, date: new Date("2023-03-25"), subject: "Русский Язык", result: "5"},
        {id: 5, student: 1, date: new Date("2023-03-24"), subject: "Русский Язык", result: "4"},
        {id: 6, student: 1, date: new Date("2023-03-23"), subject: "Русский Язык", result: "4"},
        {id: 7, student: 1, date: new Date("2023-03-22"), subject: "Русский Язык", result: "5"},
        {id: 8, student: 1, date: new Date("2023-03-21"), subject: "Русский Язык", result: "Н"},
        {id: 9, student: 1, date: new Date("2023-03-19"), subject: "Русский Язык", result: "5"},
      ]
    },
    {
      student: {
        id: 2, firstname: "Мария", lastname: "Добронравова", email: "test@test.ru", groupId: 1
      },
      records: [
        {id: 10, student: 2, date: new Date("2023-03-28"), subject: "Русский Язык", result: "2"},
        {id: 11, student: 2, date: new Date("2023-03-27"), subject: "Русский Язык", result: "4"},
        {id: 12, student: 2, date: new Date("2023-03-26"), subject: "Русский Язык", result: "3"},
        {id: 13, student: 2, date: new Date("2023-03-25"), subject: "Русский Язык", result: "3"},
        {id: 14, student: 2, date: new Date("2023-03-24"), subject: "Русский Язык", result: "4"},
        {id: 15, student: 2, date: new Date("2023-03-23"), subject: "Русский Язык", result: "4"},
        {id: 16, student: 2, date: new Date("2023-03-22"), subject: "Русский Язык", result: "5"},
        {id: 17, student: 2, date: new Date("2023-03-21"), subject: "Русский Язык", result: "2"},
        {id: 18, student: 2, date: new Date("2023-03-19"), subject: "Русский Язык", result: "5"},
      ]
    },
    {
      student: {
        id: 3, firstname: "Артём", lastname: "Шустрый", email: "test@test.ru", groupId: 1
      },
      records: [
        {id: 19, student: 3, date: new Date("2023-03-27"), subject: "Русский Язык", result: "4"},
        {id: 20, student: 3, date: new Date("2023-03-26"), subject: "Русский Язык", result: "3"},
        {id: 23, student: 3, date: new Date("2023-03-25"), subject: "Русский Язык", result: "5"},
        {id: 24, student: 3, date: new Date("2023-03-24"), subject: "Русский Язык", result: "4"},
        {id: 25, student: 3, date: new Date("2023-03-23"), subject: "Русский Язык", result: "4"},
        {id: 26, student: 3, date: new Date("2023-03-28"), subject: "Русский Язык", result: "5"},
        {id: 27, student: 3, date: new Date("2023-03-22"), subject: "Русский Язык", result: "5"},
        {id: 28, student: 3, date: new Date("2023-03-21"), subject: "Русский Язык", result: "Н"},
        {id: 29, student: 3, date: new Date("2023-03-19"), subject: "Русский Язык", result: "5"},
      ]
    },
    {
      student: {
        id: 4, firstname: "Василий", lastname: "Крапов", email: "test@test.ru", groupId: 1
      },
      records: [
        {id: 1, student: 4, date: new Date("2023-03-28"), subject: "Русский Язык", result: "5"},
        {id: 2, student: 4, date: new Date("2023-03-27"), subject: "Русский Язык", result: "4"},
        {id: 3, student: 4, date: new Date("2023-03-26"), subject: "Русский Язык", result: "3"},
        {id: 4, student: 4, date: new Date("2023-03-25"), subject: "Русский Язык", result: "5"},
        {id: 5, student: 4, date: new Date("2023-03-24"), subject: "Русский Язык", result: "4"},
        {id: 6, student: 4, date: new Date("2023-03-23"), subject: "Русский Язык", result: "4"},
        {id: 7, student: 4, date: new Date("2023-03-22"), subject: "Русский Язык", result: "5"},
        {id: 8, student: 4, date: new Date("2023-03-21"), subject: "Русский Язык", result: "Н"},
        {id: 9, student: 4, date: new Date("2023-03-19"), subject: "Русский Язык", result: "5"},
      ]
    },
  ];

  constructor(private router: Router, private journalService: JournalService) {

  }

  ngOnInit() {
    // this.journalService.getStudentsByGroup(1).subscribe(
    //   data => {
    //     this.students = data;
    //   }
    // )
  }
}
