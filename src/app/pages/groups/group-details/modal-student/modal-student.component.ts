import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {Group} from "../../../../core/models/group";

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.scss']
})
export class ModalStudentComponent {
  title!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  change: boolean = false;
  selectedGroup!: Group;
  groups!: Group[];
  constructor(public modalRef: MdbModalRef<ModalStudentComponent>) {
  }

  close() {
    this.modalRef.close();
  }

  save() {
    if (this.change) {
      let newStudent = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        groupId: this.selectedGroup.id
      }
      this.modalRef.close(newStudent);
    }
    else {
      let newStudent = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      }
      this.modalRef.close(newStudent);
    }
  }

  checkNull() {
    return this.firstname != null
      && this.lastname != null
      && this.email != null;
  }
}
