import { Component, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenderComponent),
      multi: true,
    },
  ],
})
export class GenderComponent implements ControlValueAccessor {
  gender: any;
  // genderControl = new FormControl('', this.genderType);
  onChange: any = (value: any) => {};
  onTouch: any = () => {};

  constructor() {}

  writeValue(gender: any): void {
    // cuando en el padre se asigna un valor, ese valor se escribe aca
    this.gender = gender;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setGender(gender: any) {
    //notificamos al padre que el dato cambio
    this.gender = gender;
    this.onChange(gender);
  }

  /* public genderType: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
        if (!(control.value === 'Masculino' || control.value === 'Femenino')) {
          return { genderNotValid: true };
        }
    }

    return null;
  }; */
}
