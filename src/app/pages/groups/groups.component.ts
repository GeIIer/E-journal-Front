import {Component, OnInit} from '@angular/core';
import {Group} from "../../core/models/group";
import {Router} from "@angular/router";
import {GroupService} from "../../services/group.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups!: Group[];
  selectedGroup!: Group;
  err: boolean = false;

  constructor(private router: Router, private groupService: GroupService) {
  }

  onSelect(group: Group) {

  }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe({
        next: (data) => {
          this.groups = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }
}
