import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
