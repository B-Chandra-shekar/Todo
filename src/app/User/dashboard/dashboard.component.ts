import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private userService: UserService) { }

  getWelcomeMessage() {
    this.userService.executeHelloWorldBeanService();
  }

}
