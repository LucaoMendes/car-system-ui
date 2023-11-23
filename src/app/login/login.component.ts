import { Component } from '@angular/core';
import { iLogin } from './model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:iLogin = {
    username: '',
    password: ''
  }
}
