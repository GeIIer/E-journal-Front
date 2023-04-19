import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Student} from "../core/models/student";
import {GroupsAndSubjects} from "../core/models/groupsAndSubjects";
import {RecordsInJournal} from "../core/models/recordsInJournal";
import {Record} from "../core/models/record";

@Injectable()
export class JournalService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private studentUrl = 'http://localhost:8080/api/students';
  private groupUrl = 'http://localhost:8080/api/groups';
  private recordUrl = 'http://localhost:8080/api/records';

  public getStudentsByGroup(groupId: number) {
    return this.http.get<Student[]>(this.studentUrl + "/all/" + groupId);
  }

  public getGroupsAndSubjects() {
    return this.http.get<GroupsAndSubjects>(this.groupUrl + "/all/subjects");
  }

  public getRecordsInJournal(groupId: number, subjectId: number) {
    let params = new HttpParams()
      .set('groupId', groupId.toString())
      .set('subjectId', subjectId.toString());
    return this.http.get<Map<number, Record[]>>(this.recordUrl, {params : params});
  }
}
