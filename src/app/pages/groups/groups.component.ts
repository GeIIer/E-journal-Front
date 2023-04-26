import {Component, OnInit} from '@angular/core';
import {Group} from "../../core/models/group";
import {Router} from "@angular/router";
import {GroupService} from "../../services/group.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {ModalGroupsComponent} from "./modal-groups/modal-groups.component";
import {TeacherService} from "../../services/teacher.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups!: Group[];
  selectedGroup!: Group;
  err: boolean = false;

  constructor(private router: Router,
              private groupService: GroupService,
              private teacherService: TeacherService,
              private modalService: MdbModalService) {
  }

  modalRef: MdbModalRef<ModalGroupsComponent> | null = null;

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe({
        next: (data) => {
          this.groups = data;
          console.log(data);
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }

  openModalAddNew() {
    this.teacherService.getAllTeachers().subscribe({
      next: teachers => {
        this.modalRef = this.modalService.open(ModalGroupsComponent, {
          data: {
            teachers: teachers,
          }
        });
        this.modalRef.onClose.subscribe(data => {
          this.groupService.createGroup(data.classNumber, data.classLetter, data.teacher).subscribe({
            next: group => {
              console.log(group);
              this.groups.push(group);
            },
            error: err1 => {
              console.log(this.groups);
              this.err = true;
            }
          });
        });
      },
      error: err1 => {
        this.err = true;
      }
    });
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id).subscribe({
      next: data => {
        this.groups = this.groups.filter(obj => obj.id !== id);
      },
      error: err1 => {
        this.err = true;
      }
    });
  }

  groupsEmpty() {
    return (this.groups.length === 0);
  }
}
