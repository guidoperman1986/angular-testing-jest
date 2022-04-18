import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todos/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  displayedColumns = ['todo', 'edit', 'delete']
  todos: Todo[] = [];


  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  get todosMethod(): Todo[]{
    const todos = [...this.todoService.getTodos()];
    return todos;
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id)
  }

  editTodo(id: string) {
    const todo = this.todoService.todos.find(todo=>todo.id === id);
    if (todo) this.todoService.editTodo.next(todo);
  }

}
