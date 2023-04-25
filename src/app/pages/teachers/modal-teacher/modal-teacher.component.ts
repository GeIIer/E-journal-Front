import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";
import {Subject} from "../../../core/models/subject";

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher.component.html',
  styleUrls: ['./modal-teacher.component.scss']
})
export class ModalTeacherComponent {
  firstname!: string;
  lastname!: string;
  email!: string;
  subjects!: Subject[];
  selectedSubjects!: Subject[];
  experience!: number;
  salary!: number;

  constructor(public modalRef: MdbModalRef<ModalTeacherComponent>) {
  }

  close() {
    this.modalRef.close();
  }

  checkNull() {
    return this.firstname != null
      && this.lastname != null
      && this.email != null
      && this.salary != null
      && this.experience != null
      && this.selectedSubjects != null;
  }

  save() {
    let newTeacher = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      subjects: this.selectedSubjects,
      experience: this.experience,
      salary: this.salary,
    }
    this.modalRef.close(newTeacher);
  }
}
