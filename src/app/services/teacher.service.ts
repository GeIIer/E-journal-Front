import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Teacher} from "../core/models/teacher";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TeacherService {
  constructor(private http: HttpClient, private router: Router) {
  }

  private teacherUrl = 'http://localhost:8080/api/teachers';

  public getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherUrl + "/all");
  }

  getTeacherById(teacherId: number) {
    return this.http.get<Teacher>(this.teacherUrl + "/" + teacherId);
  }
}
