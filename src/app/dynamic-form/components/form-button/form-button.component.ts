import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;

  @Output() btnName = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  changeSrc(value) {
    this.dataService.getBtnSrc(value);
  }

}
