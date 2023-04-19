import {Component, OnInit} from '@angular/core';
import {Group} from "../../../core/models/group";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../../../services/group.service";

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})
export class GroupDetailsComponent implements OnInit {
  group!: Group;
  errors = false;
  constructor(private router: Router, private groupsService: GroupService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.groupsService.getGroupsById(id).subscribe({
      next: (data) => {
        this.group = data;
      },
      error: (err) => {
        this.errors = true;
      }
    });
  }

  goBack(): void {
    this.router.navigate(["/groups"]).then()
  }

  studentEmpty(): boolean {
    return (this.group.listStudents.length === 0)
  }
}
