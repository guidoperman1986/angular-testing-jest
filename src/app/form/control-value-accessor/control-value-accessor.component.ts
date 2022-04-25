import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css'],
})
export class ControlValueAccessorComponent implements OnInit {
  miForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required, this.genderType]),
    });
  }

  public genderType: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (control.value) {
      if (control.value) {
        if (!(control.value === 'Masculino' || control.value === 'Femenino')) {
          return { genderNotValid: true };
        }
      }
    }

    return null;
  };

  getFormErrors(field:string): ValidationErrors | null | undefined{
    return this.miForm.get(field)?.errors;
  }
}
