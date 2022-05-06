import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material/material.module';

import { AutocompleteWithApiComponent } from './autocomplete-with-api.component';

describe('AutocompleteWithApiComponent', () => {
  let component: AutocompleteWithApiComponent;
  let fixture: ComponentFixture<AutocompleteWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteWithApiComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should show loading message', fakeAsync(() => { 
    const matInput = document.querySelector('input') as HTMLInputElement
    matInput.dispatchEvent(new Event('focusin'));
    matInput.value = 'batm';
    matInput.dispatchEvent(new Event('input'));

    tick();
    fixture.detectChanges();
    tick();

    const matOptions = document.querySelectorAll('mat-option')
    console.log(matOptions.length)
  }))
});
