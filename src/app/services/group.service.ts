import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Group} from "../core/models/group";
import {Teacher} from "../core/models/teacher";
import {Student} from "../core/models/student";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GroupService {
  constructor(private http: HttpClient, private router: Router) {
  }
  private groupUrl = 'http://localhost:8080/api/groups';
  public getAllGroups() {
    return this.http.get<Group[]>(this.groupUrl + "/all");
  }

  getGroupsById(id: number) {
    return this.http.get<Group>(this.groupUrl + "/" + id);
  }

  createGroup(classNumber:number, classLetter: string, teacher: Teacher) {
    return this.http.post<Group>(this.groupUrl, {
      classNumber: classNumber,
      classLetter: classLetter,
      teacher: teacher
    },httpOptions);
  }

  putGroup(id: number, classNumber:number, classLetter: string, teacher: Teacher, listStudents: Student[]) {
    return this.http.put<Group>(this.groupUrl, {
      id: id,
      classNumber: classNumber,
      classLetter: classLetter,
      teacher: teacher,
      listStudents: listStudents
    },httpOptions);
  }

  deleteGroup(id: number) {
    return this.http.delete(this.groupUrl+ "/" + id);
  }
}
