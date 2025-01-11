import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserRestService {

  constructor(private http : HttpClient) { }

  getHelloWorldBean(){
    return this.http.get('http://localhost:8080/hello-world-bean');
  }
}
