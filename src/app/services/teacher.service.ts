import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Teacher} from "../core/models/teacher";
import {Subject} from "../core/models/subject";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TeacherService {
  constructor(private http: HttpClient, private router: Router) {
  }

  private teacherUrl = environment.apiUrl + "/api/teachers";

  public getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherUrl + "/all");
  }

  getTeacherById(teacherId: number) {
    return this.http.get<Teacher>(this.teacherUrl + "/" + teacherId);
  }

  deleteTeacher(teacherId: number) {
    return this.http.delete(this.teacherUrl + "/" + teacherId);
  }

  createTeacher(
    firstname: string,
    lastname: string,
    email: string,
    subjects: Subject[],
    experience: number,
    salary: number,
  ) {
    return this.http.post<Teacher>(this.teacherUrl, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      subjects: subjects,
      experience: experience,
      salary: salary,
    }, httpOptions);
  }
}
