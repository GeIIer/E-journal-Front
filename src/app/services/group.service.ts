import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Student} from "../core/models/student";
import {Group} from "../core/models/group";

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
}
