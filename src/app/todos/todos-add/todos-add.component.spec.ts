import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoService } from '../../services/todos/todo.service';

import { TodosAddComponent } from './todos-add.component';

describe('TodosAddComponent', () => {
  let component: TodosAddComponent;
  let fixture: ComponentFixture<TodosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosAddComponent ],
      providers: [
        TodoService,
        { provide: TodoService, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
