import { Component } from '@angular/core';
import { Todo } from '../user-model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { TodoRestService } from '../services/todo-rest.service';

@Component({
  selector: 'app-todo-list',
  imports: [MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  displayedColumns: string[] = ['title', 'targetDate', 'status'];
  dataSource: Todo[] = [];

  constructor(
    private router: Router,
    private todoRestService: TodoRestService
  ){
    this.getAllTodos()
  }

  getAllTodos() {
    this.todoRestService.getAllTodos('chandra').subscribe(data => {
      console.log(data);
      
      this.dataSource = data;
    });
  }

  gotoTodoDetail(todoId: any) {
    this.router.navigate(['todo', todoId]);
  }
}

export const SAMPLE_TODO_LIST : Todo[] = [
  {
    id: 0,
    title: 'Learn css animations',
    description: '',
    targetDate: '',
    isDone: 'pending'
  },
  {
    id: 1,
    title: 'Learn spring boot',
    description: '',
    targetDate: '',
    isDone: 'pending'
  },
  {
    id: 2,
    title: 'Learn React',
    description: '',
    targetDate: '',
    isDone: 'pending'
  },
  {
    id: 3,
    title: 'Learn AI',
    description: '',
    targetDate: '',
    isDone: 'pending'
  },
]