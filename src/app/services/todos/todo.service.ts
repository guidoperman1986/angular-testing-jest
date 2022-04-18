import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: Todo[] = [
    {id: '1', todo: 'un todo'},
    {id: '2', todo: 'un todo 2'},
  ];
  editTodo = new Subject<Todo>();

  constructor() { }

  addTodo(todo: string): void{
    this.todos.push({id: Math.random().toString(), todo});
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(id: string): void{
    this.todos = this.todos.filter(todo=>todo.id !== id);
  }

  updateTodo(todoUpdate: Todo): void{
    const index = this.todos.findIndex(todo => todo.id === todoUpdate.id)
    this.todos[index].todo = todoUpdate.todo;
  }
}
