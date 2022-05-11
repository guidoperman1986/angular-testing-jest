import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { ClarityComponent } from './clarity/clarity.component';
import { DirectivesModule } from './directives/directives.module';
import { ControlValueAccessorComponent } from './form/control-value-accessor/control-value-accessor.component';
import { GenderComponent } from './form/gender/gender.component';
import { AutocompleteWithApiComponent } from './intermediate/autocomplete-with-api/autocomplete-with-api.component';
import { SearchComponent } from './intermediate/search/search.component';
import { StarWarsComponent } from './intermediate/star-wars/star-wars.component';
import { MaterialModule } from './material/material.module';
import { TodosModule } from './todos/todos.module';
import { ClarityModule } from '@clr/angular';
import { NgContentComponent } from './advanced/ng-content/ng-content.component';
import { ImageComponent } from './advanced/image/image.component';
import { CardComponent } from './advanced/card/card.component';
import { CardListComponent } from './advanced/card-list/card-list.component';
import { CardWrapperComponent } from './advanced/card-wrapper/card-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ControlValueAccessorComponent,
    GenderComponent,
    AutocompleteWithApiComponent,
    StarWarsComponent,
    NgContentComponent,
    ImageComponent,
    CardComponent,
    CardListComponent,
    CardWrapperComponent,
    /* ClarityComponent */
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
    DirectivesModule,
    /* ClarityModule */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
