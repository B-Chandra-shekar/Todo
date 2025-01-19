import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class TodoRestService {

  constructor(private http: HttpClient) { }


  getAllTodos(name: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
  }
}
