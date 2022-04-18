import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todos/todo.service';

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  task = new FormControl('', [Validators.required, Validators.minLength(6)]);
  todoForEditing!: Todo | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.editTodo.subscribe(todo=>{
      this.todoForEditing = todo;
      this.task.setValue(todo.todo)
    });

  }

  addTodo(): void{
    if (!this.task.value || this.task.errors) return;

    if (this.todoForEditing) {
      this.todoService.updateTodo({id: this.todoForEditing.id, todo: this.task.value})

      this.todoForEditing = undefined;
    } else {
      this.todoService.addTodo(this.task.value);
    }


    this.clearInput();
  }

  clearInput(): void {
    this.task.reset();
  }

}
