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
          this.students = data;
          this.students.forEach((elem) => {
            console.log(elem.id, elem.lastname, elem.firstname);
          });
        }
      }
    );
    console.log(this.selectedClass.id);
  }

  onSelectSubject(value: Subject) {
    this.selectedSubject = value;
    this.journalService.getRecordsInJournal(this.selectedSubject.id, this.selectedSubject.id).subscribe({
      next: (data) => {
        this.records = new Map<number, Record[]>(Array.from(data, ([k,v]) => [k, v]));
      }
    });
    console.log(this.selectedSubject);
  }


  checkRecords() {
    return records.length > 0;
  }
}
