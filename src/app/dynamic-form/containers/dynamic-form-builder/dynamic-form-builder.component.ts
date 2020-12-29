import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';
import { DataService } from '../../services/data.service';

@Component({
  exportAs: 'dynamicForm',
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss'],
})
export class DynamicFormBuilderComponent implements OnInit, OnChanges {
  formJson = '';
  @Input() title: string;

  @Input() config: FieldConfig[] = [];

  @Output() submitted = new EventEmitter();

  form: FormGroup;

  get changes() {
    return this.form.valueChanges;
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach((control) =>
        group.addControl(control.name, this.createControl(control))
    );
    return group;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }

  submitForm(form) {
    if (this.dataService.btnSrc === 'submit') {
      delete form.value.submit;
      delete form.value.cancel;
      this.submitted.emit(form.value);
    } else {
      this.form.reset();
    }
  }
}
