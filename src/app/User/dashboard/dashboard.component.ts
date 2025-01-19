import { Component } from '@angular/core';
import { TodoListComponent } from "../todo-list/todo-list.component";
import { UserService } from '../services/user.service';
import { UserRestService } from '../services/user-rest.service';

@Component({
  selector: 'app-dashboard',
  imports: [TodoListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private userService: UserService,
    private userRestService: UserRestService
  ) { }

  getWelcomeMessage() {
    this.userRestService.executeHelloWorldWithPathVariable('Chandra').subscribe(response => {
      console.log(response);
      
    });
  }

}
