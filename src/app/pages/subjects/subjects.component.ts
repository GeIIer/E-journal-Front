import {Component, OnInit} from '@angular/core';
import {Subject} from "../../core/models/subject";
import {Router} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalSubjectComponent} from "./modal-subject/modal-subject.component";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects!: Subject[];
  selectedSubject!: Subject;
  err: boolean = false;
  edit: boolean = false;
  addNew: boolean = false;

  constructor(private router: Router, private subjectService: SubjectService, private modalService: MdbModalService) {
  }

  modalRef: MdbModalRef<ModalSubjectComponent> | null = null;

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

  createSubject(subjectName: string, studyHours: number, checkpoints: number): void {
    this.subjectService.createSubject(subjectName, studyHours, checkpoints).subscribe({
      next: value => {
        console.log(value);
      }
    })
  }

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id).subscribe({
      next: data => {
        this.subjects = this.subjects.filter(obj => obj.id !== id);
      },
      error: err1 => {
        this.err = true;
      }
    });
  }

  openModalChange(subject: Subject) {
    this.modalRef = this.modalService.open(ModalSubjectComponent, {
      data: {
        title: "Редактировать предмет",
        subjectName: subject.subjectName,
        studyHours: subject.studyHours,
        checkpoints: subject.checkpoints
      }
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      this.subjectService.putSubject(subject.id, message.subjectName, message.studyHours, message.checkpoints).subscribe({
          next: (data) => {
            let index = this.subjects.findIndex(obj => obj.id === subject.id);
            this.subjects[index] = data;
          },
          error: err1 => {
            this.err = true;
          }
        }
      );
    });
  }

  openModalAddNew() {
    this.modalRef = this.modalService.open(ModalSubjectComponent, {
      data: {
        title: "Добавить предмет",
      }
    });
    this.modalRef.onClose.subscribe((message: Subject) => {
      console.log(message);
      this.subjectService.createSubject(message.subjectName, message.studyHours, message.checkpoints).subscribe({
          next: (data) => {
            this.subjects.push(data);
          },
          error: err1 => {
            this.err = true;
          }
        }
      );
    });
  }
}
