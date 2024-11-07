import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subject} from "../core/models/subject";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient, private router: Router) {
  }

  private subjectUrl = environment.apiUrl + "/api/subjects";

  public getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl);
  }

  public createSubject(subjectName: string, studyHours: number, checkpoints: number): Observable<any> {
    return this.http.post<Subject>(this.subjectUrl, {
        subjectName: subjectName,
        studyHours: studyHours,
        checkpoints: checkpoints
      },
      httpOptions);
  }

  public putSubject(id: number, subjectName: string, studyHours: number, checkpoints: number): Observable<any> {
    return this.http.post<Subject>(this.subjectUrl, {
      id: id,
      subjectName: subjectName,
      studyHours: studyHours,
      checkpoints: checkpoints
    }, httpOptions);
  }

  public deleteSubject(id:number) {
    return this.http.delete(this.subjectUrl + "/" + id);
  }
}
