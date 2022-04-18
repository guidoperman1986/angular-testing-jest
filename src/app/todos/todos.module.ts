import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { MaterialModule } from '../material/material.module';
import { TodosRoutingModule } from './todos-routing.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosAddComponent } from './todos-add/todos-add.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodosAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
