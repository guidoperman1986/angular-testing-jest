import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteWithApiComponent } from './autocomplete-with-api.component';

describe('AutocompleteWithApiComponent', () => {
  let component: AutocompleteWithApiComponent;
  let fixture: ComponentFixture<AutocompleteWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteWithApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
