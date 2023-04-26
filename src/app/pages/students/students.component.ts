import {Component, OnInit} from '@angular/core';
import {Student} from "../../core/models/student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../services/student.service";
import {GroupService} from "../../services/group.service";
import {Group} from "../../core/models/group";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  student!: Student;
  group!: Group;
  errors: boolean = false;

  constructor(private router: Router,
              private studentService: StudentService,
              private groupService: GroupService,
              private route: ActivatedRoute){

  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"))
    this.studentService.getStudentById(id).subscribe( {
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
      error : err => {
        this.errors = true;
      }
    });
  }

  goBack(): void {
    this.router.navigate(["/groups/"+this.student.groupId]).then()
  }
}
