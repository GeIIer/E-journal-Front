import {Component, OnInit} from '@angular/core';
import {Student} from "../../core/models/student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {GroupService} from "../../services/group.service";
import {Group} from "../../core/models/group";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalStudentComponent} from "../groups/group-details/modal-student/modal-student.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  student!: Student;
  group!: Group;
  errors: boolean = false;

  constructor(private router: Router,
              private studentService: StudentService,
              private groupService: GroupService,
              private route: ActivatedRoute,
              private modalService: MdbModalService) {

  }

  modalRef: MdbModalRef<ModalStudentComponent> | null = null;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"))
    this.studentService.getStudentById(id).subscribe({
      next: data => {
        this.student = data;
        this.groupService.getAllGroups().subscribe({
          next: groups => {
            this.group = groups.find(obj => obj.id == data.groupId)!;
          },
          error: err => {
            this.errors = true;
          }
        });
      },
      error: err => {
        this.errors = true;
      }
    });
  }

  goBack(): void {
    this.router.navigate(["/groups/" + this.student.groupId]).then()
  }

  openModalChange(student: Student) {
    this.groupService.getAllGroups().subscribe({
      next: groups => {
        this.modalRef = this.modalService.open(ModalStudentComponent, {
          data: {
            title: "Редактирование ученика",
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            groups: groups,
            change: true,
          }
        });
        this.modalRef.onClose.subscribe(data => {
          if (data) {
            this.studentService.putStudent(
              student.id,
              data.firstname,
              data.lastname,
              data.email,
              data.groupId
            ).subscribe({
              next: student => {
                console.log(student);
                this.student = student;
                this.group = groups.find(obj => obj.id == data.groupId)!;
              },
              error: err1 => {
                console.log(this.student);
                this.errors = true;
              }
            });
          }
        });
      },
      error: err => {
        this.errors = true;
      }
    });
  }
}
