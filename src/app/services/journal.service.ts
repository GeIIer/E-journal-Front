import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Student} from "../core/models/student";
import {GroupsAndSubjects} from "../core/models/groupsAndSubjects";
import {Record} from "../core/models/record";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class JournalService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private studentUrl = environment.apiUrl + "/api/students";
  private groupUrl = environment.apiUrl + "/api/groups";
  private recordUrl = environment.apiUrl + "/api/records";

  public getStudentsByGroup(groupId: number) {
    return this.http.get<Student[]>(this.studentUrl + "/group/" + groupId);
  }

  public getGroupsAndSubjects() {
    return this.http.get<GroupsAndSubjects>(this.groupUrl + "/subjects");
  }

  public getRecordsInJournal(groupId: number, subjectId: number) {
    let params = new HttpParams()
      .set('groupId', groupId.toString())
      .set('subjectId', subjectId.toString());
    return this.http.get(this.recordUrl, {params: params});
  }

  public saveRecords(records: Record[]) {
    return this.http.post(this.recordUrl, records, httpOptions);
  }
}
