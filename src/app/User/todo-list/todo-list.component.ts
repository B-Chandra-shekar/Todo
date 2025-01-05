import { Component } from '@angular/core';
import { Todo } from '../user-model';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  displayedColumns: string[] = ['title', 'startDate', 'endDate', 'status'];
  dataSource = SAMPLE_TODO_LIST;

  constructor(private router: Router){}

  gotoTodoDetail(todoId: any) {
    this.router.navigate(['todo', todoId]);
  }
}

export const SAMPLE_TODO_LIST : Todo[] = [
  {
    id: 0,
    title: 'Learn css animations',
    description: '',
    startDate: '',
    endDate: '',
    status: 'pending'
  },
  {
    id: 1,
    title: 'Learn spring boot',
    description: '',
    startDate: '',
    endDate: '',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Learn React',
    description: '',
    startDate: '',
    endDate: '',
    status: 'pending'
  },
  {
    id: 3,
    title: 'Learn AI',
    description: '',
    startDate: '',
    endDate: '',
    status: 'pending'
  },
]