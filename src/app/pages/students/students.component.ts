import {Component, OnInit} from '@angular/core';
import {Student} from "../../core/models/student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  student!: Student;
  errors: boolean = false;

  constructor(private router: Router, private studentService: StudentService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"))
    this.studentService.getStudentById(id).subscribe( {
      next: data => {
        this.student = data;
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
