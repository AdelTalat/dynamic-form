import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-form/models/field-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  config = [];
  formJson: FieldConfig;

  constructor() {
  }

  renderForm(e) {
    console.log(e.target.value);
    const parsedForm = JSON.parse(e.target.value);
    this.config = [...parsedForm];
  }

  submitedFormValue(e) {
    console.log(e);
  }

  ngOnInit() {
  }

}
