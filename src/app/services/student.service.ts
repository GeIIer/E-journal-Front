import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Student} from "../core/models/student";

@Injectable()
export class StudentService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private studentUrl = 'http://localhost:8080/api/students';

  public getStudentById(id:number) {
    return this.http.get<Student>(this.studentUrl + "/" + id);
  }
}
