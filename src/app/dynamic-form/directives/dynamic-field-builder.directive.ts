import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormCheckboxComponent } from '../components/form-checkbox/form-checkbox.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormRadioComponent } from '../components/form-radio/form-radio.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';
import { Field } from '../models/field';

const components = {
  checkbox: FormCheckboxComponent,
  input: FormInputComponent,
  radio: FormRadioComponent,
  select: FormSelectComponent,
  button: FormButtonComponent,
};

@Directive({
  selector: '[appDynamicFieldBuilder]'
})
export class DynamicFieldBuilderDirective implements Field, OnChanges, OnInit {

  @Input()config;
  @Input() group: FormGroup;
  @Input() class: string;

  component: ComponentRef<Field>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
        this.component.instance.class = this.class;
    }
 }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<Field>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.class = this.class;
  }

}
