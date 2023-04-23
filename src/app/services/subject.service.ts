import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subject} from "../core/models/subject";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient, private router: Router) {
  }

  private subjectUrl = 'http://localhost:8080/api/subjects';

  public getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl + "/all");
  }

  public createSubject(subjectName: string, studyHours: number, checkpoints: number): Observable<any> {
    return this.http.post<Subject>(this.subjectUrl, {
        subjectName: subjectName,
        studyHours: studyHours,
        checkpoints: checkpoints
      },
      httpOptions);
  }
}
