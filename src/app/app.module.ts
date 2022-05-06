import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { SearchComponent } from './intermediate/search/search.component';
import { MaterialModule } from './material/material.module';
import { TodosModule } from './todos/todos.module';
import { ControlValueAccessorComponent } from './form/control-value-accessor/control-value-accessor.component';
import { GenderComponent } from './form/gender/gender.component';
import { ExampleDirectiveComponent } from './directives/example-directive/example-directive.component';
import { NgLoopDirective } from './directives/ng-loop.directive';
import { AtributeDirective } from './directives/attribute.directive';
import { MyCustomIfDirective } from './directives/my-custom-if.directive';
import { AccountValidationComponent } from './directives/account-validation/account-validation.component';
import { DirectivesModule } from './directives/directives.module';
import { AutocompleteWithApiComponent } from './intermediate/autocomplete-with-api/autocomplete-with-api.component';
import { StarWarsComponent } from './intermediate/star-wars/star-wars.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ControlValueAccessorComponent,
    GenderComponent,
    AutocompleteWithApiComponent,
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BasicModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TodosModule,
    MaterialModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
