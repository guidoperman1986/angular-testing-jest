import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IBankInfo {
  bankCode: string;
  bankAccountNumber: string;
};

@Component({
  selector: 'app-account-validation',
  templateUrl: './account-validation.component.html',
  styleUrls: ['./account-validation.component.css']
})
export class AccountValidationComponent implements OnInit {
  bankInformationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bankInformationForm = this.formBuilder.group({
      bankCode: ["", Validators.required],
      bankAccountNumber: ["", Validators.required]
  });
  }

}
