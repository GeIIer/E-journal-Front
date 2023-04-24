import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Subject} from "../../../core/models/subject";

@Component({
  selector: 'app-module-subject',
  templateUrl: './module-subject.component.html',
  styleUrls: ['./module-subject.component.scss']
})
export class ModuleSubjectComponent implements OnInit {
  form = this.fb.group({
    id: [NaN],
    subjectName: ['', [Validators.required]],
    studyHours: [NaN],
    checkpoints: [NaN],
  });
  @Input() title = '';
  @Input() subject?: Subject;
  @Output() event = new EventEmitter<void>();
  @Output() eventConfirm = new EventEmitter<Subject>;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.subject) {
      this.form.setValue({
        id: this.subject.id,
        subjectName: this.subject.subjectName,
        studyHours: this.subject.studyHours,
        checkpoints: this.subject.checkpoints,
      });
    }
  }

  close() {
    this.event.emit()
  }

  confirm() {
    console.log(this.form);
    //кидать на бэк форму
    //выводить ошибку
    //если все ок
    //this.eventConfirm()
  }
}
