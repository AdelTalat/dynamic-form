import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  name: string;
  type: string;
  disabled?: boolean;
  label?: string;
  options?: Options[];
  placeholder?: string;
  validation?: ValidatorFn[];
  value?: any;
  containerClass?: string;
}

interface Options {
  key?: string;
  value?: string;
  label?: string;
  selected?: boolean;
}
