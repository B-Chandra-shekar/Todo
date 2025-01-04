import { Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('Chandu'),
    password: new FormControl('')
  });
  
  hide = signal(true);

  constructor(
    private authenticationService: AuthenticationService,
    private router : Router
  ) { }
  
  handleLogin() {
    console.log(this.loginForm.value);
    this.authenticationService.validateCredentials(this.loginForm.value);
    this.router.navigate(['dashboard']);
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
