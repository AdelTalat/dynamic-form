import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFormBuilderComponent } from './containers/dynamic-form-builder/dynamic-form-builder.component';
import { DynamicFieldBuilderDirective } from './directives/dynamic-field-builder.directive';


@NgModule({
  declarations: [
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormInputComponent,
    FormButtonComponent,
    DynamicFormBuilderComponent,
    DynamicFieldBuilderDirective
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormBuilderComponent],
  entryComponents: [
    FormCheckboxComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormInputComponent,
    FormButtonComponent,
  ],
})
export class DynamicFormModule {}
