import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../core/models/teacher";
import {Router} from "@angular/router";
import {SubjectService} from "../../services/subject.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {TeacherService} from "../../services/teacher.service";
import {ModalTeacherComponent} from "./modal-teacher/modal-teacher.component";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  teachers!: Teacher[];
  errors: boolean = false;

  constructor(private router: Router,
              private subjectService: SubjectService,
              private teacherService: TeacherService,
              private modalService: MdbModalService) {
  }

  modalRef: MdbModalRef<ModalTeacherComponent> | null = null;

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe({
      next: data => {
        this.teachers = data;
      }
    });
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe({
      next: data => {
        this.teachers = this.teachers.filter(obj => obj.id !== id);
      },
      error: err => {
        this.errors = true;
      }
    });
  }

  teachersEmpty() {
    return (this.teachers.length === 0);
  }

  openModalAddNew() {
    this.subjectService.getAllSubjects().subscribe({
      next: subjects => {
        this.modalRef = this.modalService.open(ModalTeacherComponent, {
          data: {
            subjects: subjects
          }
        });
        this.modalRef.onClose.subscribe((message: any) => {
          console.log(message);
          this.teacherService.createTeacher(
            message.firstname,
            message.lastname,
            message.email,
            message.subjects,
            message.experience,
            message.salary
          ).subscribe({
            next: teacher => {
              this.teachers.push(teacher);
            },
            error: err => {
              this.errors = true;
            }
          });
        });
      },
      error: err => {
        this.errors = true;
      }
    });
  }
}
