import { Component } from '@angular/core';
import { login } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:login = {
    username: '',
    password: ''
  }
}
