import {Component, OnInit} from '@angular/core';
import {Subject} from "../../core/models/subject";
import {Router} from "@angular/router";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit{
  subjects!: Subject[];
  selectedSubject!: Subject;
  err: boolean = false;

  constructor(private router: Router, private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe({
      next: data => {
        this.subjects = data;
      },
      error: err => {
        this.err = true;
      }
    });
  }

  createSubject(subjectName:string, studyHours: number, checkpoints: number): void {
    this.subjectService.createSubject(subjectName, studyHours, checkpoints).subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

}
