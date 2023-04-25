import {Component} from '@angular/core';
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-modal-subject',
  templateUrl: './modal-subject.component.html',
  styleUrls: ['./modal-subject.component.scss']
})
export class ModalSubjectComponent {
  title: string | null = null;
  subjectName: any;
  studyHours: any;
  checkpoints: any;
  constructor(public modalRef: MdbModalRef<ModalSubjectComponent>) {
  }

  save() {
    let newSubject = {
      subjectName: this.subjectName,
      studyHours: this.studyHours,
      checkpoints: this.checkpoints
    }
    this.modalRef.close(newSubject);
  }

  close() {
    this.modalRef.close();
  }

  checkNull(): boolean {
    return this.subjectName != null && this.studyHours != null && this.checkpoints != null;

  }
}
