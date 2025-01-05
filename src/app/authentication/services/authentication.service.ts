import { Injectable } from '@angular/core';
import { AuthenticationRestService } from './authentication-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private authenticationRestService : AuthenticationRestService) { }

  validateCredentials(loginForm: any) {
    // this.authenticationRestService.validateCredentials(loginForm).subscribe((response: any) => {
    //   console.log(response);
    // });
    if(loginForm.userName === 'chandu'){
      sessionStorage.setItem('credentials', JSON.stringify(loginForm));
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean {
    return (sessionStorage.getItem('credentials') !== null)
  }
}
