import {Component, OnInit} from '@angular/core';
import {Student} from "../../core/models/student";
import {JournalService} from "../../services/journal.service";
import {Router} from "@angular/router";
import {Record} from "../../core/models/record";
import {Group} from "../../core/models/group";
import {Subject} from "../../core/models/subject";
import {records} from "../../core/data/records.in.journal";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  groups!: Group[]
  subjects!: Subject[]
  selectedClass!: Group;
  selectedSubject!: Subject;
  students!: Student[];
  records!: Map<number, Record[]>;

  constructor(private router: Router, private journalService: JournalService) {

  }

  ngOnInit() {
    this.journalService.getGroupsAndSubjects().subscribe({
      next: (data) => {
        this.groups = data.groups;
        this.subjects = data.subjects;
      }
    });
  }

  onSelectClass(value: Group) {
    this.selectedClass = value;
    this.journalService.getStudentsByGroup(this.selectedClass.id).subscribe({
        next: (data:Student[]) => {
          this.students = data.sort(function(a, b) {
            var textA = a.lastname.toUpperCase();
            var textB = b.lastname.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
        }
      }
    );
    console.log(this.selectedClass.id);
  }

  onSelectSubject(value: Subject) {
    this.selectedSubject = value;
    this.journalService.getRecordsInJournal(this.selectedClass.id, this.selectedSubject.id).subscribe({
      next: (data) => {
        //this.records = new Map<number, Record[]>(Array.from(data, ([k,v]) => [k, v]));
        //this.records = data;
        let dataMap = new Map(Object.entries(data));
        console.log(dataMap);
        let record = new Map<number, Record[]>();
        dataMap.forEach(function (value, key, map) {
          let num = parseInt(key);
          let recordsArray: Record[] = map.get(key);
          record.set(num, recordsArray);
        })
        this.records = record;
        console.log("Список оценок с БД:");
        console.log(this.records);
      }
    });
    console.log(this.selectedSubject);
  }

  checkRecords() {
    return records.length > 0;
  }
}
