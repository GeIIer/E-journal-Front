import {Component, OnInit} from '@angular/core';
import {Group} from "../../../core/models/group";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../../../services/group.service";
import {Student} from "../../../core/models/student";
import {TeacherService} from "../../../services/teacher.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalStudentComponent} from "./modal-student/modal-student.component";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  group!: Group;
  errors = false;

  constructor(private router: Router,
              private groupsService: GroupService,
              private route: ActivatedRoute,
              private studentService: StudentService,
              private teacherService: TeacherService,
              private modalService: MdbModalService) {
  }

  modalRef: MdbModalRef<ModalStudentComponent> | null = null;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.groupsService.getGroupsById(id).subscribe({
      next: (group) => {
        this.group = group;
        console.log(this.group);
      },
      error: (err) => {
        this.errors = true;
      }
    });
  }

  goBack(): void {
    this.router.navigate(["/groups"]).then()
  }

  getStudents(): Student[] {
    return this.group.listStudents.sort((a, b) => this.compareStudent(a, b));
  }

  studentEmpty(): boolean {
    return (this.group.listStudents.length === 0)
  }

  openModalAddNew(groupId: number) {
    this.groupsService.getAllGroups().subscribe({
      next: groups => {
        this.modalRef = this.modalService.open(ModalStudentComponent, {
          data: {
            groups: groups,
          }
        });
        this.modalRef.onClose.subscribe(data => {
          this.studentService.createStudent(data.firstname, data.lastname, data.email, groupId).subscribe({
            next: student => {
              this.group.listStudents.push(student);
              this.group.listStudents = this.group.listStudents.sort((a, b) => this.compareStudent(a, b));
            }
          });
        });
      },
      error: err => {
        this.errors = true;
      }
    })
  }

  private compareStudent(a: Student, b: Student) {
    var textA = a.lastname.toUpperCase();
    var textB = b.lastname.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe({
      next: data => {
        this.group.listStudents = this.group.listStudents.filter(obj => obj.id !== id);
      },
      error: err => {
        this.errors = true;
      }
    });
  }
}
