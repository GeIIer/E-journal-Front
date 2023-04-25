import { Component } from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {Teacher} from "../../../core/models/teacher";

@Component({
  selector: 'app-modal-groups',
  templateUrl: './modal-groups.component.html',
  styleUrls: ['./modal-groups.component.scss']
})
export class ModalGroupsComponent {
  classNumber!: number;
  classLetter!: string;
  teachers!: Teacher[];
  selectedTeacher!: Teacher;
  constructor(public modalRef: MdbModalRef<ModalGroupsComponent>) {
  }

  close() {
    this.modalRef.close();
  }

  save() {
    let newGroup = {
      classNumber: this.classNumber,
      classLetter: this.classLetter,
      teacherId: this.selectedTeacher.id,
    }
    this.modalRef.close(newGroup);
  }

  checkNull() {
    return this.classLetter != null && this.classNumber != null && this.selectedTeacher != null;
  }
}
