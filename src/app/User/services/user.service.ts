import { Injectable } from '@angular/core';
import { UserRestService } from './user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userRestService: UserRestService) { }

  executeHelloWorldBeanService() {
    this.userRestService.getHelloWorldBean().subscribe(data => {
      console.log(data);
    });

  }
}
