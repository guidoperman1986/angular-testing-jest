import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountValidationComponent } from './account-validation/account-validation.component';
import { ExampleDirectiveComponent } from './example-directive/example-directive.component';
import { AtributeDirective } from './attribute.directive';
import { MyCustomIfDirective } from './my-custom-if.directive';
import { NgLoopDirective } from './ng-loop.directive';
import { AccountLookupDirective } from './account-lookup.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HideAfterDirective } from './hideAfter/hide-after.directive';
import { IfLoadedDirective } from './ifLoaded/if-loaded.directive';



@NgModule({
  declarations: [
    AccountValidationComponent,
    ExampleDirectiveComponent,
    AtributeDirective,
    MyCustomIfDirective,
    NgLoopDirective,
    AccountLookupDirective,
    HideAfterDirective,
    IfLoadedDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AccountValidationComponent,
    ExampleDirectiveComponent,
    AtributeDirective,
    MyCustomIfDirective,
    NgLoopDirective,
    AccountLookupDirective
  ]
})
export class DirectivesModule { }
