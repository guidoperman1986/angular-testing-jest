import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  hobbiesArray = new FormArray([]);
  hobbyInput = new FormControl('', Validators.required);
  hobbyModif!: string;

  constructor() {}

  ngOnInit(): void {}

  addInputControl() {
    if (this.hobbyInput.value) {
      const newForm = new FormControl(
        this.hobbyInput.value,
        Validators.required
      );

      this.hobbiesArray.push(newForm);
    }
  }

  removeInputControl(idx: number) {
    this.hobbiesArray.removeAt(idx);
  }

  modifyValue(idx: number, value: string) {
    this.hobbiesArray.at(idx).setValue(value);
  }
}
