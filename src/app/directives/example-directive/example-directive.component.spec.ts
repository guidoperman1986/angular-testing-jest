import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCustomIfDirective } from '../my-custom-if.directive';
import { NgLoopDirective } from '../ng-loop.directive';

import { ExampleDirectiveComponent } from './example-directive.component';

describe('ExampleDirectiveComponent', () => {
  let component: ExampleDirectiveComponent;
  let fixture: ComponentFixture<ExampleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDirectiveComponent, NgLoopDirective, MyCustomIfDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
